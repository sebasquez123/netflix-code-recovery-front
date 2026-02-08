'use client';

import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react';

import { ScreenLoader } from './components/loader/index';
import { RouteNames } from './constants/routes';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.push(RouteNames.netflix);
  }, [router]);

  return (
    <main className="flex h-screen flex-col items-center justify-center bg-white">
      <ScreenLoader />
    </main>
  );
}
