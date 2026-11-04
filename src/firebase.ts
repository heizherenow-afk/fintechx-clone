import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup, onAuthStateChanged, User } from 'firebase/auth';
import {
  getFirestore,
  doc,
  setDoc,
  getDocFromServer,
  serverTimestamp,
} from 'firebase/firestore';
import firebaseConfig from '../firebase-applet-config.json';

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app, firebaseConfig.firestoreDatabaseId);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

// Validation constants synced verbatim with firebase-blueprint.json
export const WEBSITE_URL_MIN_LENGTH = 3;
export const WEBSITE_URL_MAX_LENGTH = 256;
export const WEBSITE_URL_PATTERN = /^(https?:\/\/)?([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}(\/.*)?$/;
export const SUBMISSION_ID_MAX_LENGTH = 128;
export const SUBMISSION_ID_PATTERN = /^[a-zA-Z0-9_-]+$/;

export enum OperationType {
  CREATE = 'create',
  UPDATE = 'update',
  DELETE = 'delete',
  LIST = 'list',
  GET = 'get',
  WRITE = 'write',
}

export interface FirestoreErrorInfo {
  error: string;
  operationType: OperationType;
  path: string | null;
  authInfo: {
    userId?: string | null;
    email?: string | null;
    emailVerified?: boolean | null;
    isAnonymous?: boolean | null;
    tenantId?: string | null;
    providerInfo?: {
      providerId?: string | null;
      email?: string | null;
    }[];
  };
}

export function handleFirestoreError(
  error: unknown,
  operationType: OperationType,
  path: string | null
): never {
  const errInfo: FirestoreErrorInfo = {
    error: error instanceof Error ? error.message : String(error),
    authInfo: {
      userId: auth.currentUser?.uid,
      email: auth.currentUser?.email,
      emailVerified: auth.currentUser?.emailVerified,
      isAnonymous: auth.currentUser?.isAnonymous,
      tenantId: auth.currentUser?.tenantId,
      providerInfo:
        auth.currentUser?.providerData?.map((provider) => ({
          providerId: provider.providerId,
          email: provider.email,
        })) || [],
    },
    operationType,
    path,
  };
  console.error('Firestore Error: ', JSON.stringify(errInfo));
  throw new Error(JSON.stringify(errInfo));
}

async function testConnection() {
  try {
    await getDocFromServer(doc(db, 'test', 'connection'));
  } catch (error) {
    if (error instanceof Error && error.message.includes('the client is offline')) {
      console.error('Please check your Firebase configuration.');
    }
  }
}

testConnection();

export function validateWebsiteUrl(rawUrl: string): { valid: boolean; normalized: string; error?: string } {
  const trimmed = rawUrl.trim().slice(0, WEBSITE_URL_MAX_LENGTH);
  if (trimmed.length < WEBSITE_URL_MIN_LENGTH) {
    return {
      valid: false,
      normalized: trimmed,
      error: 'Please enter a website URL (e.g., Example.com)',
    };
  }
  if (!WEBSITE_URL_PATTERN.test(trimmed)) {
    return {
      valid: false,
      normalized: trimmed,
      error: 'Please enter a valid domain or URL (e.g., Example.com)',
    };
  }
  return { valid: true, normalized: trimmed };
}

export async function authenticateAndSubmitWebsite(rawUrl: string): Promise<{
  user: User;
  websiteUrl: string;
}> {
  const check = validateWebsiteUrl(rawUrl);
  if (!check.valid) {
    throw new Error(check.error || 'Invalid website URL');
  }

  // Always trigger Firebase Google Auth popup when user submits website URL
  const credential = await signInWithPopup(auth, googleProvider);
  const user = credential.user;

  const submissionId = `sub_${user.uid.replace(/[^a-zA-Z0-9_-]/g, '').slice(0, 40)}_${Date.now()}`.slice(
    0,
    SUBMISSION_ID_MAX_LENGTH
  );

  if (!SUBMISSION_ID_PATTERN.test(submissionId)) {
    throw new Error('Invalid submission ID generated');
  }

  const path = `submissions/${submissionId}`;
  try {
    await setDoc(doc(db, 'submissions', submissionId), {
      uid: user.uid,
      websiteUrl: check.normalized,
      status: 'pending',
      createdAt: serverTimestamp(),
    });
  } catch (error) {
    handleFirestoreError(error, OperationType.WRITE, path);
  }

  return { user, websiteUrl: check.normalized };
}

export { onAuthStateChanged };
export type { User };
