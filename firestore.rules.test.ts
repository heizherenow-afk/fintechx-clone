/**
 * Firestore Security Rules Test Suite (Dirty Dozen Verification)
 */
export interface TestPayload {
  name: string;
  docId: string;
  auth: { uid: string; email_verified: boolean } | null;
  operation: 'create' | 'update' | 'get' | 'list';
  data?: Record<string, unknown>;
  existingData?: Record<string, unknown>;
  expectedAllow: boolean;
}

export const DIRTY_DOZEN_TESTS: TestPayload[] = [
  {
    name: '1. Unauthenticated Write',
    docId: 'sub_1',
    auth: null,
    operation: 'create',
    data: { uid: 'user_123', websiteUrl: 'example.com', status: 'pending', createdAt: 'REQUEST_TIME' },
    expectedAllow: false,
  },
  {
    name: '2. Unverified Email Write',
    docId: 'sub_2',
    auth: { uid: 'user_123', email_verified: false },
    operation: 'create',
    data: { uid: 'user_123', websiteUrl: 'example.com', status: 'pending', createdAt: 'REQUEST_TIME' },
    expectedAllow: false,
  },
  {
    name: '3. Identity Spoofing (Mismatched uid)',
    docId: 'sub_3',
    auth: { uid: 'attacker_uid', email_verified: true },
    operation: 'create',
    data: { uid: 'victim_uid', websiteUrl: 'example.com', status: 'pending', createdAt: 'REQUEST_TIME' },
    expectedAllow: false,
  },
  {
    name: '4. Shadow Field Injection',
    docId: 'sub_4',
    auth: { uid: 'user_123', email_verified: true },
    operation: 'create',
    data: { uid: 'user_123', websiteUrl: 'example.com', status: 'pending', createdAt: 'REQUEST_TIME', isAdmin: true },
    expectedAllow: false,
  },
  {
    name: '5. Invalid URL Format',
    docId: 'sub_5',
    auth: { uid: 'user_123', email_verified: true },
    operation: 'create',
    data: { uid: 'user_123', websiteUrl: 'javascript:alert(1)', status: 'pending', createdAt: 'REQUEST_TIME' },
    expectedAllow: false,
  },
  {
    name: '6. Oversized URL Resource Exhaustion',
    docId: 'sub_6',
    auth: { uid: 'user_123', email_verified: true },
    operation: 'create',
    data: { uid: 'user_123', websiteUrl: 'https://' + 'a'.repeat(300) + '.com', status: 'pending', createdAt: 'REQUEST_TIME' },
    expectedAllow: false,
  },
  {
    name: '7. State Shortcutting on Create',
    docId: 'sub_7',
    auth: { uid: 'user_123', email_verified: true },
    operation: 'create',
    data: { uid: 'user_123', websiteUrl: 'example.com', status: 'completed', createdAt: 'REQUEST_TIME' },
    expectedAllow: false,
  },
  {
    name: '8. Invalid Enum Value for status',
    docId: 'sub_8',
    auth: { uid: 'user_123', email_verified: true },
    operation: 'create',
    data: { uid: 'user_123', websiteUrl: 'example.com', status: 'hacked', createdAt: 'REQUEST_TIME' },
    expectedAllow: false,
  },
  {
    name: '9. Forged Client Timestamp',
    docId: 'sub_9',
    auth: { uid: 'user_123', email_verified: true },
    operation: 'create',
    data: { uid: 'user_123', websiteUrl: 'example.com', status: 'pending', createdAt: 'FORGED_TIME' },
    expectedAllow: false,
  },
  {
    name: '10. Immutable Field Mutation on Update',
    docId: 'sub_10',
    auth: { uid: 'user_123', email_verified: true },
    operation: 'update',
    existingData: { uid: 'user_123', websiteUrl: 'example.com', status: 'pending', createdAt: 'REQUEST_TIME' },
    data: { uid: 'other_user', websiteUrl: 'example.com', status: 'completed', createdAt: 'REQUEST_TIME' },
    expectedAllow: false,
  },
  {
    name: '11. Terminal State Mutation (Updating after completed)',
    docId: 'sub_11',
    auth: { uid: 'user_123', email_verified: true },
    operation: 'update',
    existingData: { uid: 'user_123', websiteUrl: 'example.com', status: 'completed', createdAt: 'REQUEST_TIME' },
    data: { uid: 'user_123', websiteUrl: 'example.com', status: 'pending', createdAt: 'REQUEST_TIME' },
    expectedAllow: false,
  },
  {
    name: '12. ID Poisoning (Malformed Document ID)',
    docId: 'bad id $!',
    auth: { uid: 'user_123', email_verified: true },
    operation: 'create',
    data: { uid: 'user_123', websiteUrl: 'example.com', status: 'pending', createdAt: 'REQUEST_TIME' },
    expectedAllow: false,
  },
];
