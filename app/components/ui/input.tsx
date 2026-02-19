import * as React from 'react';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}
import { cn } from '../../utils/micelane';
import { BorderBeam } from '../magicui/border-beam';

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <div className="relative w-full">
        <input
          type={type}
          className={cn(
            'flex h-10 w-full rounded-md border-[3px] border-black bg-gray-100 px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 focus-visible:ring-offset-4 disabled:cursor-not-allowed disabled:opacity-50',
            'focus:bg-blue-50 focus:border-blue-500',
            'dark:border-white dark:bg-blue-950/80 focus:dark:border-pink-600 focus:dark:bg-blue-950/80',
            className
          )}
          ref={ref}
          {...props}
        />
        <BorderBeam
          size={250}
          duration={12}
          delay={5}
          className="pointer-events-none rounded-[10px]"
          borderWidth={3}
        />
      </div>
    );
  }
);
Input.displayName = 'Input';

export { Input };
