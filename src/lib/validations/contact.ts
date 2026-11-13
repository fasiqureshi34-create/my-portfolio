import { z } from "zod";

export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Name must be at least 2 characters." })
    .max(80, { message: "Name must be under 80 characters." }),
  email: z
    .string()
    .email({ message: "Please provide a valid email address." }),
  subject: z
    .string()
    .max(150, { message: "Subject must be under 150 characters." })
    .optional()
    .or(z.literal("")),
  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters long." })
    .max(2500, { message: "Message cannot exceed 2500 characters." }),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
