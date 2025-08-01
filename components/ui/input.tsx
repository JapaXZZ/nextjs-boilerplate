import React, { InputHTMLAttributes, forwardRef } from 'react';

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  className?: string;
};

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={`
          block
          w-full
          rounded-md
          border
          border-gray-300
          bg-white
          py-2
          px-3
          text-sm
          placeholder-gray-400
          focus:border-blue-500
          focus:outline-none
          focus:ring-1
          focus:ring-blue-500
          disabled:cursor-not-allowed
          disabled:opacity-50
          ${className ?? ''}
        `}
        {...props}
      />
    );
  }
);

Input.displayName = 'Input';