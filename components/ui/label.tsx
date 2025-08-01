import React, { LabelHTMLAttributes, forwardRef } from 'react';

type LabelProps = LabelHTMLAttributes<HTMLLabelElement> & {
  className?: string;
};

export const Label = forwardRef<HTMLLabelElement, LabelProps>(
  ({ className, ...props }, ref) => {
    return (
      <label
        ref={ref}
        className={`block text-sm font-medium text-gray-700 ${className ?? ''}`}
        {...props}
      />
    );
  }
);

Label.displayName = 'Label';