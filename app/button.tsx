"use client";

import React, { ButtonHTMLAttributes } from "react";
import clsx from "clsx";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "secondary";
  className?: string;
}

export default function Button({
  variant = "default",
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      className={clsx(
        "px-4 py-2 rounded-xl font-medium transition focus:outline-none focus:ring-2 focus:ring-offset-1",
        variant === "secondary"
          ? "bg-neutral-800 hover:bg-neutral-700 text-white focus:ring-white"
          : "bg-blue-600 hover:bg-blue-700 text-white focus:ring-blue-400",
        className
      )}
    />
  );
}