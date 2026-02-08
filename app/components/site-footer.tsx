import * as React from 'react';

import { Icons } from '../components/icons';
import { cn } from '../utils/micelane';

export function SiteFooter({ className }: React.HTMLAttributes<HTMLElement>) {
  return (
    <footer className={cn(className)}>
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0 px-5 border-t border-border/40">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <Icons.logo className="h-6 w-6" />
          <p className="text-center text-sm leading-loose md:text-left">
            Built by{' '}
            <a
              href="https://www.linkedin.com/in/sebasquez"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium underline underline-offset-4 hover:text-primary"
            >
              Sebasquez
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
