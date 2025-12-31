import { Resend } from 'resend';

if (!process.env.RESEND_API_KEY) {
  console.warn('⚠️ RESEND_API_KEY is not set in environment variables');
}

export const resend = new Resend(process.env.RESEND_API_KEY || '');

// Default sender email - change to your verified domain
export const DEFAULT_FROM_EMAIL = process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev';

// Your admin email to receive notifications
export const ADMIN_EMAIL = 'zennithdevelopments@gmail.com';
