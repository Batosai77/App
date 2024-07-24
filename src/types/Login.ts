import { z } from "zod"

export const LoginSchema = z.object({
  email: z.string().email("Email not valid!"),
  password: z.string().min(8, "Minimum 8 character!"),
});

export type LoginRequest = z.infer<typeof LoginSchema>