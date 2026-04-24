'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
} from 'firebase/auth';
import type { AuthMode } from '@/entities/user';
import { auth, googleProvider } from '@/shared/lib/firebase/client';
import { Button } from '@/shared/ui/Button';
import { Description } from '@/shared/ui/Description';
import { Title } from '@/shared/ui/Title';
import styles from './AuthForm.module.css';

export function AuthForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [mode, setMode] = useState<AuthMode>('login');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleEmailAuth() {
    setErrorMessage('');
    setSuccessMessage('');
    setLoading(true);

    try {
      if (mode === 'signup') {
        await createUserWithEmailAndPassword(auth, email, password);
      } else {
        await signInWithEmailAndPassword(auth, email, password);
      }

      setSuccessMessage('Success! You are logged in.');
    } catch (error) {
      const message =
        error instanceof Error ? error.message : 'Authentication failed';
      setErrorMessage(message);
    } finally {
      setLoading(false);
    }
  }

  async function handleGoogleLogin() {
    setErrorMessage('');
    setSuccessMessage('');
    setLoading(true);

    try {
      await signInWithPopup(auth, googleProvider);
      setSuccessMessage('Success! Google login completed.');
    } catch (error) {
      const message =
        error instanceof Error ? error.message : 'Google login failed';
      setErrorMessage(message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className={styles.page}>
      <section className={styles.card}>
        <Title order="h1" className={styles.authTitle}>
          Authorization
        </Title>
        <Description className={styles.authLead}>
          Login to continue to the application.
        </Description>

        <div className={styles.modeRow}>
          <Button
            type="button"
            variant="outline"
            size="middle"
            className={[
              styles.modeTab,
              mode === 'login' ? styles.modeTabActive : '',
            ]
              .filter(Boolean)
              .join(' ')}
            onClick={() => setMode('login')}
          >
            Login
          </Button>
          <Button
            type="button"
            variant="outline"
            size="middle"
            className={[
              styles.modeTab,
              mode === 'signup' ? styles.modeTabActive : '',
            ]
              .filter(Boolean)
              .join(' ')}
            onClick={() => setMode('signup')}
          >
            Sign up
          </Button>
        </div>

        <form
          className={styles.form}
          onSubmit={(event) => {
            event.preventDefault();
            void handleEmailAuth();
          }}
        >
          <label className={styles.label}>
            Email
            <input
              className={styles.input}
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
            />
          </label>

          <label className={styles.label}>
            Password
            <input
              className={styles.input}
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              minLength={6}
              required
            />
          </label>

          <Button
            type="submit"
            variant="filled"
            size="middle"
            className={styles.stretch}
            disabled={loading}
          >
            {loading
              ? 'Please wait...'
              : mode === 'signup'
                ? 'Create account'
                : 'Login'}
          </Button>
        </form>

        <Button
          type="button"
          variant="outline"
          size="middle"
          className={styles.stretch}
          onClick={handleGoogleLogin}
          disabled={loading}
        >
          Continue with Google
        </Button>

        {errorMessage ? <p className={styles.error}>{errorMessage}</p> : null}
        {successMessage ? (
          <p className={styles.success}>{successMessage}</p>
        ) : null}

        <Link href="/" className={styles.backLink}>
          Back to landing
        </Link>
      </section>
    </main>
  );
}
