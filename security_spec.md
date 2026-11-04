# Security Specification (`security_spec.md`)

## 1. Data Invariants
1. **Authentication & Verification**: Only authenticated users with a verified email (`request.auth != null && request.auth.token.email_verified == true`) can create, read, or update their own `/submissions/{submissionId}` documents.
2. **Ownership Integrity**: A `WebsiteSubmission` document's `uid` must strictly equal `request.auth.uid` upon creation and remain immutable on any subsequent update.
3. **Strict Key & Schema Enforcement**: `WebsiteSubmission` documents may only contain the exact required keys `['uid', 'websiteUrl', 'status', 'createdAt']`. No shadow or extra fields are permitted.
4. **URL & ID Bounds**:
   - `submissionId` must match `^[a-zA-Z0-9_\-]+$` and be at most 128 characters.
   - `websiteUrl` must be a string between 3 and 256 characters matching `^(https?://)?([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}(/.*)?$`.
   - `status` must be `'pending'` on creation and can only transition to `'completed'`. Once `'completed'`, no further updates are allowed (Terminal State Locking).
5. **Temporal Integrity**: `createdAt` must strictly equal `request.time` on creation and remain immutable during updates.
6. **Query Isolation**: `list` and `get` operations on `/submissions/{submissionId}` are restricted strictly to documents where `resource.data.uid == request.auth.uid`.

## 2. The "Dirty Dozen" Payloads

1. **Unauthenticated Write**:
   `{ "uid": "user_123", "websiteUrl": "example.com", "status": "pending", "createdAt": "SERVER_TIMESTAMP" }` (with `auth = null`)
2. **Unverified Email Write**:
   `{ "uid": "user_123", "websiteUrl": "example.com", "status": "pending", "createdAt": "SERVER_TIMESTAMP" }` (with `auth.token.email_verified = false`)
3. **Identity Spoofing (Mismatched `uid`)**:
   `{ "uid": "victim_uid", "websiteUrl": "example.com", "status": "pending", "createdAt": "SERVER_TIMESTAMP" }` (authenticated as `attacker_uid`)
4. **Shadow Field Injection**:
   `{ "uid": "user_123", "websiteUrl": "example.com", "status": "pending", "createdAt": "SERVER_TIMESTAMP", "isAdmin": true }`
5. **Invalid URL Format**:
   `{ "uid": "user_123", "websiteUrl": "javascript:alert(1)", "status": "pending", "createdAt": "SERVER_TIMESTAMP" }`
6. **Oversized URL Resource Exhaustion**:
   `{ "uid": "user_123", "websiteUrl": "https://" + "a".repeat(500) + ".com", "status": "pending", "createdAt": "SERVER_TIMESTAMP" }`
7. **State Shortcutting on Create (`status: "completed"` initially)**:
   `{ "uid": "user_123", "websiteUrl": "example.com", "status": "completed", "createdAt": "SERVER_TIMESTAMP" }`
8. **Invalid Enum Value for `status`**:
   `{ "uid": "user_123", "websiteUrl": "example.com", "status": "hacked", "createdAt": "SERVER_TIMESTAMP" }`
9. **Forged Client Timestamp (`createdAt` != `request.time`)**:
   `{ "uid": "user_123", "websiteUrl": "example.com", "status": "pending", "createdAt": "2020-01-01T00:00:00Z" }`
10. **Immutable Field Mutation (`uid` or `createdAt` changed on update)**:
    `{ "uid": "other_user", "websiteUrl": "example.com", "status": "completed", "createdAt": "SERVER_TIMESTAMP" }`
11. **Terminal State Mutation (Updating after `status == "completed"`)**:
    `{ "uid": "user_123", "websiteUrl": "example.com", "status": "pending", "createdAt": "ORIGINAL_TIMESTAMP" }`
12. **ID Poisoning (Malformed Document ID)**:
    Creating `/submissions/invalid id with spaces and $pecial!` with valid body.
