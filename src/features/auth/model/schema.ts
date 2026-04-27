import { z } from 'zod';

export const authSchema = z.object({
  email: z.email('Please enter a valid email'),
  password: z.string().trim().min(6, 'Password must be at least 6 characters'),
});
export type AuthFormValues = z.infer<typeof authSchema>;
