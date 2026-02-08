'use client';

import Link, { LinkProps } from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';

import { metadata } from '../constants/metadata';
import { cn } from '../utils/micelane';

import { Icons } from './icons';

function MobileNav() {
  const [open, setOpen] = React.useState(false);

  return (
    <MobileLink
      href="/"
      className="flex items-center lg:hidden sm:block md:hidden"
      onOpenChange={setOpen}
    >
      <Icons.logo className="mr-2 h-[3rem] w-[3rem]" />
      <span className="font-bold">{metadata.abreviation}</span>
    </MobileLink>
  );
}

interface MobileLinkProps extends LinkProps {
  onOpenChange?: (open: boolean) => void;
  children: React.ReactNode;
  className?: string;
}

function MobileLink({
  href,
  onOpenChange,
  className,
  children,
  ...props
}: MobileLinkProps) {
  const router = useRouter();
  return (
    <Link
      href={href}
      onClick={() => {
        router.push(href.toString());
        onOpenChange?.(false);
      }}
      className={cn(className)}
      {...props}
    >
      {children}
    </Link>
  );
}
export default MobileNav;
