'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { authSchema, type AuthFormValues } from '../model/schema';
import { useRouter } from 'next/navigation';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  onAuthStateChanged,
} from 'firebase/auth';
import type { AuthMode } from '@/entities/user';
import { auth, googleProvider } from '@/shared/lib/firebase/client';
import { Button } from '@/shared/ui/Button';
import { Description } from '@/shared/ui/Description';
import { Title } from '@/shared/ui/Title';
import styles from './AuthForm.module.css';

export function AuthForm() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
    setError,
    clearErrors,
  } = useForm<AuthFormValues>({
    resolver: zodResolver(authSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });
  const [mode, setMode] = useState<AuthMode>('login');
  const [isGoogleLoading, setIsGoogleLoading] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        router.replace('/app');
      }
    });
    return () => unsubscribe();
  }, [router]);

  async function handleEmailAuth(values: AuthFormValues) {
    clearErrors('root');

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

      reset();
      router.replace('/app');
    } catch (error) {
      const message =
        error instanceof Error ? error.message : 'Authentication failed';
      setError('root', { type: 'server', message });
    }
  }

  async function handleGoogleLogin() {
    clearErrors();
    setIsGoogleLoading(true);

    try {
      await signInWithPopup(auth, googleProvider);
      reset();
      router.replace('/app');
    } catch (error) {
      const message =
        error instanceof Error ? error.message : 'Google login failed';
      setError('root', { type: 'server', message });
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
              clearErrors('root');
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

        {errors.root ? (
          <p className={styles.error}>{errors.root.message}</p>
        ) : null}

        <Link href="/" className={styles.backLink}>
          Back to landing
        </Link>
      </section>
    </main>
  );
}
