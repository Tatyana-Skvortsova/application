import { initializeApp, getApps, getApp } from 'firebase/app';
import {
  getAuth,
  GoogleAuthProvider,
  setPersistence,
  browserLocalPersistence,
} from 'firebase/auth';

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY?.trim(),
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN?.trim(),
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID?.trim(),
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID?.trim(),
};

function getFirebaseApp() {
  if (getApps().length > 0) {
    return getApp();
  }

  return initializeApp(firebaseConfig);
}

const app = getFirebaseApp();

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

setPersistence(auth, browserLocalPersistence).catch(() => {
  // for unsupported browsers.
});
