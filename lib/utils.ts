import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPhoneNumber(phone: string): string {
  return phone.replace(/(\+\d{3})(\d{3})(\d{3})(\d{3})/, "$1 $2 $3 $4");
}

export const whatsappUrl = "https://wa.me/+351938004032";
export const phoneNumber = "+351938004032";
export const phoneDisplay = "+351 938 004 032";
