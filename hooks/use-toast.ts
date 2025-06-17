"use client"

import { toast as sonnerToast } from "sonner"

// Sonner toast wrapper to match shadcn/ui toast API
export function toast({
  title,
  description,
  variant = "default",
  ...props
}: {
  title?: string
  description?: string
  variant?: "default" | "destructive" | "success"
  [key: string]: any
}) {
  const message = title || description || ""

  switch (variant) {
    case "destructive":
      return sonnerToast.error(title, {
        description,
        ...props,
      })
    case "success":
      return sonnerToast.success(title, {
        description,
        ...props,
      })
    default:
      return sonnerToast(title, {
        description,
        ...props,
      })
  }
}

export function useToast() {
  return {
    toast,
    dismiss: sonnerToast.dismiss,
  }
}
