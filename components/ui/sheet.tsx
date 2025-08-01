import * as React from "react";
import * as SheetPrimitive from "@radix-ui/react-dialog";
import { cn } from "@/lib/utils";

const Sheet = SheetPrimitive.Root;
const SheetTrigger = SheetPrimitive.Trigger;
const SheetClose = SheetPrimitive.Close;

const SheetContent = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Content> & {
    side?: "top" | "bottom" | "left" | "right";
  }
>(({ side = "right", className, children, ...props }, ref) => (
  <SheetPrimitive.Portal>
    <SheetPrimitive.Overlay className="fixed inset-0 bg-black/40 z-50 backdrop-blur-sm transition-opacity" />
    <SheetPrimitive.Content
      ref={ref}
      className={cn(
        "fixed z-50 bg-white dark:bg-[#1a112b] text-white",
        "transition-transform duration-300 ease-out",
        side === "right" && "top-0 right-0 h-full w-72 translate-x-full data-[state=open]:translate-x-0",
        side === "left" && "top-0 left-0 h-full w-72 -translate-x-full data-[state=open]:translate-x-0",
        side === "top" && "left-0 top-0 w-full h-1/3 -translate-y-full data-[state=open]:translate-y-0",
        side === "bottom" && "left-0 bottom-0 w-full h-1/3 translate-y-full data-[state=open]:translate-y-0",
        className
      )}
      {...props}
    >
      {children}
    </SheetPrimitive.Content>
  </SheetPrimitive.Portal>
));
SheetContent.displayName = SheetPrimitive.Content.displayName;

const SheetHeader = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("px-4 py-2 border-b border-white/10", className)} {...props} />
);

const SheetTitle = ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
  <h2 className={cn("text-lg font-semibold", className)} {...props} />
);

export { Sheet, SheetTrigger, SheetContent, SheetHeader, SheetTitle, SheetClose };