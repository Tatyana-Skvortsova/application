'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '@/shared/lib/firebase/client';

type Gate = 'checking' | 'ok' | 'no';

export default function AppLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [gate, setGate] = useState<Gate>('checking');

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      if (!user) {
        setGate('no');
        router.replace('/auth/login');
        return;
      }
      setGate('ok');
    });
    return () => unsub();
  }, [router]);

  if (gate === 'checking') {
    return <div>Checking</div>;
  }

  if (gate === 'no') {
    return null;
  }

  return <>{children}</>;
}