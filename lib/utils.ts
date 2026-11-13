import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatWhatsAppMessage(details: {
  name: string;
  phone: string;
  eventType: string;
  eventDate?: string;
  city?: string;
  message?: string;
}): string {
  const lines = [
    `*Namaste Bhaskendra Photography / Prasad Photo & Video Studio,*`,
    `I would like to inquire about booking/services.`,
    ``,
    `*Name:* ${details.name || "Guest"}`,
    `*Phone:* ${details.phone || "Not provided"}`,
    `*Event / Service:* ${details.eventType || "Wedding"}`,
    details.eventDate ? `*Event Date:* ${details.eventDate}` : null,
    details.city ? `*Location / City:* ${details.city}` : null,
    details.message ? `*Notes:* ${details.message}` : null,
    ``,
    `Looking forward to hearing from you!`,
  ].filter(Boolean);

  return encodeURIComponent(lines.join("\n"));
}

