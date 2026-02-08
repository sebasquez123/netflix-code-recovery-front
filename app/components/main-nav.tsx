'use client';

import Link from 'next/link';
import * as React from 'react';

import { metadata } from '../constants/metadata';
import { cn } from '../utils/micelane';

import { Icons } from './icons';
import { NavigationMenuLink } from './ui/navigation-menu';

export function MainNav() {
  return (
    <div className="mr-4 md:flex">
      <Link href="/" className="lg:mr-6 sm:mr-0 flex items-center gap-2">
        <Icons.logo className="h-[3rem] w-[3rem] hidden lg:block md:block" />
        <span className="font-bold hidden lg:block md:block">
          {metadata.abreviation}
        </span>
      </Link>
    </div>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<'a'>,
  React.ComponentPropsWithoutRef<'a'>
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = 'ListItem';
