import React from "react";

interface BadgeProps {
  variant?: "default" | "primary" | "secondary" | "destructive";
  children: React.ReactNode;
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  variant = "default",
  children,
  className = "",
}) => {
  const baseClasses =
    "inline-flex items-center rounded-full px-2 py-1 text-xs font-semibold";

  const variants = {
    default: "bg-gray-200 text-gray-900",
    primary: "bg-blue-600 text-white",
    secondary: "bg-purple-600 text-white",
    destructive: "bg-red-600 text-white",
  };

  return (
    <span className={`${baseClasses} ${variants[variant]} ${className}`}>
      {children}
    </span>
  );
};