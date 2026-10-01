import { z } from "zod";

const PHONE_DIGITS_MIN = 9;
const PHONE_DIGITS_MAX = 15;
export const MSG_MAX = 1000;

export const sidSchema = z.string().regex(/^[a-zA-Z0-9-]{16,40}$/);

const base = {
  sid: sidSchema,
  lang: z.enum(["uz", "ru"]),
  page: z.string().trim().max(200).optional().default(""),
  // honeypot: живой человек поле не видит
  website: z.string().max(0).optional().default(""),
};

export const chatPostSchema = z.discriminatedUnion("kind", [
  z.object({ kind: z.literal("msg"), text: z.string().trim().min(1).max(MSG_MAX), ...base }),
  z.object({
    kind: z.literal("phone"),
    phone: z
      .string()
      .trim()
      .max(32)
      .refine((v) => {
        const n = v.replace(/\D/g, "").length;
        return n >= PHONE_DIGITS_MIN && n <= PHONE_DIGITS_MAX;
      }),
    ...base,
  }),
]);

export type ChatPost = z.infer<typeof chatPostSchema>;
