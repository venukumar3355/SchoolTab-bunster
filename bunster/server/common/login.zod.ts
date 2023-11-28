import { string, z } from "zod";

export const UserLogInInputSchema = z.object({
  email: z.string(),
  password: z.string(),
});
export type UserLoginInput = z.infer<typeof UserLogInInputSchema>;
