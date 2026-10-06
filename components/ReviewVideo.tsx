"use client";

import { useEffect, useRef, useState } from "react";
import type { Review } from "@/lib/site";
import { Glyph } from "./ui/Glyph";
import s from "./People.module.css";

const PLAY_EVENT = "review:play";

type Person = { name: string; role: string; quote: string };
type Props = { review: Review; person: Person; title: string; playLabel: string };

// До клика только постер (видео не грузится), по клику ролик со звуком и штатными кнопками.
export function ReviewVideo({ review, person, title, playLabel }: Props) {
  const [isPlaying, setIsPlaying] = useState(false);
  const video = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const onOther = (e: Event) => {
      if ((e as CustomEvent<string>).detail !== review.video) video.current?.pause();
    };
    window.addEventListener(PLAY_EVENT, onOther);
    return () => window.removeEventListener(PLAY_EVENT, onOther);
  }, [review.video]);

  const announce = () => window.dispatchEvent(new CustomEvent(PLAY_EVENT, { detail: review.video }));
  const cls = `${s.reviewLink} ${review.isRound ? s.round : ""}`;

  // Кружок играет без штатных кнопок, иначе видны белые углы: клик ставит на паузу и снимает с неё.
  if (isPlaying && review.isRound) {
    const toggle = () => {
      const v = video.current;
      if (!v) return;
      if (v.paused) void v.play();
      else v.pause();
    };
    return (
      <button type="button" className={`${cls} ${s.isPlaying}`} onClick={toggle} aria-label={title}>
        <video ref={video} className={s.media} src={review.video} poster={review.poster} width={review.w} height={review.h} autoPlay playsInline onPlay={announce} />
        <span className={s.caption}>
          <span className={s.capName}>{person.name}</span>
          <span className={s.capRole}>{person.role}</span>
        </span>
      </button>
    );
  }

  if (isPlaying) {
    return (
      <div className={`${cls} ${s.isPlaying}`}>
        <video
          ref={video}
          className={s.media}
          src={review.video}
          poster={review.poster}
          width={review.w}
          height={review.h}
          controls
          autoPlay
          playsInline
          onPlay={announce}
          aria-label={title}
        />
      </div>
    );
  }

  return (
    <button type="button" className={cls} onClick={() => setIsPlaying(true)} aria-label={`${playLabel}: ${person.name}`}>
      <img className={s.media} src={review.poster} alt={title} width={review.w} height={review.h} loading="lazy" decoding="async" />
      <span className={s.play} aria-hidden="true">
        <Glyph name="play" />
      </span>
      <span className={s.caption}>
        <span className={s.capQuote}>«{person.quote}»</span>
        <span className={s.capName}>{person.name}</span>
        <span className={s.capRole}>{person.role}</span>
      </span>
    </button>
  );
}
