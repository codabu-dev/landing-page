import * as React from 'react';
import { cn } from '@/lib/cn';

interface InputProps extends React.ComponentProps<'input'> {
  error?: boolean;
}

function Input({ className, type, error, ...props }: InputProps) {
  return (
    <input
      type={type}
      data-slot='input'
      className={cn(
        'file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-neutral-400 flex h-9 w-full min-w-0 rounded-sm border bg-transparent px-4 py-6 text-md transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50',
        'focus-visible:ring-green-600 focus-visible:border-green-600 focus-visible:ring-[1px]',
        'aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive',
        error &&
          'border-destructive ring-destructive/20 dark:ring-destructive/40',
        className
      )}
      aria-invalid={error}
      {...props}
    />
  );
}

export { Input };
