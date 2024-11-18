import { FirestoreDoc } from "@/firebase/types";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function serializeDocument<T extends FirestoreDoc>(doc: T): T {
  return {
    ...doc,
    createdAt: doc.createdAt?.toISOString(),
    updatedAt: doc.updatedAt?.toISOString(),
  } as T;
}

export function camelCaseToTitleCase(value: string) {
  const result = value.replace(/([A-Z])/g, " $1");
  const finalResult = result.charAt(0).toUpperCase() + result.slice(1);
  return finalResult;
}
