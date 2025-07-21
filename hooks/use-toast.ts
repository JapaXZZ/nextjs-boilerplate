import { toast as sonner } from "sonner";

type ToastOptions = {
  title?: string;
  description?: string;
  type?: "success" | "error" | "info";
};

export function useToast() {
  function toast(message: string, options?: ToastOptions) {
    const { title, description, type = "info" } = options || {};

    return sonner(message, {
      description: description || "",
      ...(title && { title }),
      ...(type && { className: `toast-${type}` }),
    });
  }

  return { toast };
}