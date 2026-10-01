import type { Locale } from "@/lib/content/types";

// Фото менеджера (public/team). Пустая строка = монограмма вместо фото.
export const MANAGER = { photo: "/team/bekzod.webp", w: 192, h: 192 };

export const CHAT_COPY = {
  uz: {
    launcher: "Savol bering",
    quick: ["Xizmatlaringiz narxi qancha?", "Hisob raqamimni toʻxtatib qoʻyishdi", "Soliqdan talabnoma keldi"],
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
    quick: ["Сколько стоят ваши услуги?", "Заблокировали счёт", "Пришло требование из налоговой"],
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
} satisfies Record<Locale, Record<string, string | string[]>>;

export type ChatCopy = (typeof CHAT_COPY)[Locale];
