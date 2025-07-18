import React from "react";
import clsx from "clsx";

export function Card({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={clsx(
        "rounded-2xl border border-neutral-800 bg-neutral-900 p-4 shadow-md transition hover:shadow-lg",
        className
      )}
    >
      {children}
    </div>
  );
}

export function CardHeader({ children }: { children: React.ReactNode }) {
  return <div className="mb-2">{children}</div>;
}

export function CardTitle({ children }: { children: React.ReactNode }) {
  return <h3 className="text-xl font-bold text-white">{children}</h3>;
}

export function CardContent({ children }: { children: React.ReactNode }) {
  return <div className="mt-2 text-sm text-neutral-300">{children}</div>;
}