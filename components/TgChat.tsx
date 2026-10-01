import type { CSSProperties } from "react";
import type { Chat } from "@/lib/content/types";
import s from "./TgChat.module.css";

// Нарисованная группа Telegram: вопрос директора, «печатает…», ответ через пять минут.
// Сообщения проступают по очереди, когда карточка входит в экран (.in от Reveal); анимируется только opacity и transform.
export function TgChat({ t }: { t: Chat }) {
  return (
    <figure className={`${s.chat} reveal`}>
      <div className={s.top}>
        <span className={s.ava} aria-hidden="true">
          S
        </span>
        <span>
          <b>{t.title}</b>
          <small>{t.members}</small>
        </span>
      </div>
      <div className={s.feed}>
        {t.messages.map((m, i) => (
          <div key={m.time + i} className={s.line} style={{ "--k": i } as CSSProperties}>
            {i === 1 && (
              <>
                <span className={s.typing} aria-hidden="true">
                  {t.us} {t.typing}
                </span>
                <span className={s.gap}>{t.gap}</span>
              </>
            )}
            <p className={`${s.msg} ${m.from === "us" ? s.us : s.client}`}>
              <b className={m.from === "client" ? s.blur : undefined}>{m.from === "us" ? t.us : t.client}</b>
              {m.text}
              <time className="num">{m.time}</time>
            </p>
          </div>
        ))}
      </div>
      <figcaption className={s.cap}>{t.caption}</figcaption>
    </figure>
  );
}
