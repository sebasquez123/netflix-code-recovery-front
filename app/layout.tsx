'use client';
import React from 'react';

import { ThemeProvider } from '~/app/components/theme-provider';
import ToastGlobal from '~/app/components/toast-global/toast-goal';
import { cn } from '~/app/utils/micelane';
import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          'relative flex min-h-screen w-full flex-col justify-center scroll-smooth bg-background font-sans antialiased'
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <ToastGlobal />
          <main className="flex-1">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
