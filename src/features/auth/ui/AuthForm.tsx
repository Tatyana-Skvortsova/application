'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { authSchema, type AuthFormValues } from '../model/schema';

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
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    clearErrors,
  } = useForm<AuthFormValues>({
    resolver: zodResolver(authSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });
  const [mode, setMode] = useState<AuthMode>('login');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [isGoogleLoading, setIsGoogleLoading] = useState(false);

  async function handleEmailAuth(values: AuthFormValues) {
    setErrorMessage('');
    setSuccessMessage('');

    try {
      if (mode === 'signup') {
        await createUserWithEmailAndPassword(
          auth,
          values.email,
          values.password
        );
      } else {
        await signInWithEmailAndPassword(auth, values.email, values.password);
      }

      setSuccessMessage('Success! You are logged in.');
    } catch (error) {
      const message =
        error instanceof Error ? error.message : 'Authentication failed';
      setErrorMessage(message);
    }
  }

  async function handleGoogleLogin() {
    setErrorMessage('');
    setSuccessMessage('');
    setIsGoogleLoading(true);

    try {
      await signInWithPopup(auth, googleProvider);
      setSuccessMessage('Success! Google login completed.');
    } catch (error) {
      const message =
        error instanceof Error ? error.message : 'Google login failed';
      setErrorMessage(message);
    } finally {
      setIsGoogleLoading(false);
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
            onClick={() => {
              setMode('login');
              setErrorMessage('');
              setSuccessMessage('');
              clearErrors();
            }}
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
            onClick={() => {
              setMode('signup');
              setErrorMessage('');
              setSuccessMessage('');
              clearErrors();
            }}
          >
            Sign up
          </Button>
        </div>

        <form className={styles.form} onSubmit={handleSubmit(handleEmailAuth)}>
          <label className={styles.label}>
            Email
            <input className={styles.input} {...register('email')} />
            {errors.email ? (
              <p className={styles.error}>{errors.email.message}</p>
            ) : null}
          </label>

          <label className={styles.label}>
            Password
            <input
              className={styles.input}
              type="password"
              {...register('password')}
            />
            {errors.password ? (
              <p className={styles.error}>{errors.password.message}</p>
            ) : null}
          </label>

          <Button
            type="submit"
            variant="filled"
            size="middle"
            className={styles.stretch}
            disabled={isSubmitting}
          >
            {isSubmitting
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
          disabled={isGoogleLoading || isSubmitting}
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
