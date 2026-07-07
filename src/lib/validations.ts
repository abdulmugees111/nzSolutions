import {z} from 'zod';

export const contactFormSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Enter a valid email'),
  service: z.string().min(2, 'Please select a service'),
  message: z.string().min(10, 'Message should be at least 10 characters')
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;
