import * as z from 'zod';

export const contactFormSchema = z.object({
  name: z.string()
    .min(2, { message: 'Name must be at least 2 characters long' })
    .max(50, { message: 'Name must be at most 50 characters long' }),
  email: z.string()
    .email({ message: 'Invalid email address' }),
  message: z.string()
    .min(10, { message: 'Message must be at least 10 characters long' })
    .max(500, { message: 'Message must be at most 500 characters long' }),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;