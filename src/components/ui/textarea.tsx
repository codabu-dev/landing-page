import { cn } from '@/lib/cn';
import * as React from 'react';

function Textarea({ className, ...props }: React.ComponentProps<'textarea'>) {
  return (
    <textarea
      data-slot='textarea'
      className={cn(
        'placeholder:text-muted-foreground focus-visible:ring-green-600 focus-visible:border-green-600 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 flex field-sizing-content min-h-16 w-full !rounded-sm border !border-neutral-400 bg-transparent px-4 py-3 transition-[color,box-shadow] outline-none focus-visible:ring-[1px] disabled:cursor-not-allowed disabled:opacity-50 text-md',
        className
      )}
      {...props}
    />
  );
}

export { Textarea };
