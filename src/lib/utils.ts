import { FirestoreDoc } from "@/firebase/types";
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function serializeDocument<T extends FirestoreDoc>(doc: T): T {
    return {
      ...doc,
      createdAt: doc.createdAt?.toISOString(),
      updatedAt: doc.updatedAt?.toISOString()
    } as T;
  }
