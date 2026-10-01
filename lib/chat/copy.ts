import type { Locale } from "@/lib/content/types";

// Фото менеджера: положить в public/team/ и вписать путь. Пока пусто, в кружке монограмма.
export const MANAGER = { photo: "", w: 160, h: 160 };

export const CHAT_COPY = {
  uz: {
    launcher: "Savol bering",
    name: "Bekzod",
    role: "Sifat Buxgalter menejeri",
    status: "10 daqiqa ichida javob beramiz",
    greeting: "Assalomu alaykum! Men Bekzodman. Buxgalteriya yoki soliq boʻyicha savolingizni yozing, shu yerning oʻzida javob beraman.",
    placeholder: "Savolingiz…",
    send: "Yuborish",
    phoneAsk: "Saytni yopsangiz ham javob yoʻqolmasligi uchun telefon raqamingizni qoldiring",
    phonePlaceholder: "+998 __ ___ __ __",
    phoneSave: "Saqlash",
    phoneDone: "Rahmat, raqamingiz bizda.",
    error: "Xabar ketmadi. Qoʻngʻiroq qiling: +998 97 732 18 48",
    open: "Chatni ochish",
    close: "Chatni yopish",
  },
  ru: {
    launcher: "Задать вопрос",
    name: "Бекзод",
    role: "менеджер Sifat Buxgalter",
    status: "Отвечаем в течение 10 минут",
    greeting: "Здравствуйте! Я Бекзод. Напишите вопрос по учёту или налогам, отвечу здесь же.",
    placeholder: "Ваш вопрос…",
    send: "Отправить",
    phoneAsk: "Оставьте телефон, чтобы ответ не потерялся, если закроете сайт",
    phonePlaceholder: "+998 __ ___ __ __",
    phoneSave: "Сохранить",
    phoneDone: "Спасибо, номер у нас.",
    error: "Не отправилось. Позвоните: +998 97 732 18 48",
    open: "Открыть чат",
    close: "Закрыть чат",
  },
} satisfies Record<Locale, Record<string, string>>;

export type ChatCopy = (typeof CHAT_COPY)[Locale];
