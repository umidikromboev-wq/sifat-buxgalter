import { z } from "zod";

const PHONE_DIGITS_MIN = 9;
const PHONE_DIGITS_MAX = 15;

export const leadSchema = z.object({
  name: z.string().trim().min(2).max(80),
  phone: z
    .string()
    .trim()
    .max(32)
    .refine((v) => {
      const digits = v.replace(/\D/g, "").length;
      return digits >= PHONE_DIGITS_MIN && digits <= PHONE_DIGITS_MAX;
    }),
  company: z.string().trim().max(120).optional().default(""),
  turnover: z.string().trim().max(60).optional().default(""),
  lang: z.enum(["uz", "ru"]),
  page: z.string().trim().max(200).optional().default(""),
  // honeypot: живой человек поле не видит и не заполняет
  website: z.string().max(0).optional().default(""),
});

export type Lead = z.infer<typeof leadSchema>;

const esc = (s: string) => s.replace(/[&<>]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;" })[c] ?? c);

export function formatLead(l: Lead): string {
  return [
    "<b>Новая заявка — Sifat Buxgalter</b>",
    `Имя: ${esc(l.name)}`,
    `Телефон: ${esc(l.phone)}`,
    l.company && `Компания: ${esc(l.company)}`,
    l.turnover && `Оборот: ${esc(l.turnover)}`,
    `Язык сайта: ${l.lang.toUpperCase()}`,
    l.page && `Страница: ${esc(l.page)}`,
  ]
    .filter(Boolean)
    .join("\n");
}
