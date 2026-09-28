"use client";

import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import { useTranslations } from "next-intl";
import { Button, Modal, ModalBody, useModalContext } from "flowbite-react";
import { Cross, Telegram } from "@/components/icons";
import type { Lead } from "@/lib/lead";
import { site } from "@/lib/site";
import { LeadForm } from "./LeadForm";

type CallbackContextValue = { open: (source?: Lead["source"]) => void };

const CallbackContext = createContext<CallbackContextValue>({ open: () => {} });

/** Every "Free 10-minute call" button on the site opens this one dialog. */
export function useCallbackModal(): CallbackContextValue {
  return useContext(CallbackContext);
}

/**
 * Flowbite's ModalHeader labels its close button "Close" in English whatever
 * the page language. This header says it in the page's language and, like
 * ModalHeader, registers its id so the dialog is named by the title.
 */
function DialogTitle({
  id,
  closeLabel,
  onClose,
  children,
}: {
  id: string;
  closeLabel: string;
  onClose: () => void;
  children: ReactNode;
}) {
  const { setHeaderId } = useModalContext();
  useEffect(() => {
    setHeaderId(id);
    return () => setHeaderId(undefined);
  }, [id, setHeaderId]);

  return (
    <div className="flex items-start justify-between gap-6 px-6 pt-7 md:px-8">
      <h3 id={id} className="display-3 text-ink">
        {children}
      </h3>
      <button
        type="button"
        onClick={onClose}
        aria-label={closeLabel}
        className="-me-2 -mt-1 grid size-10 shrink-0 place-items-center rounded-full text-ink-3 transition-colors hover:bg-sand hover:text-ink"
      >
        <Cross className="size-5" />
      </button>
    </div>
  );
}

export function CallbackProvider({ children }: { children: ReactNode }) {
  const t = useTranslations("callback");
  const a11y = useTranslations("a11y");
  const [show, setShow] = useState(false);
  const [source, setSource] = useState<Lead["source"]>("modal");

  const value = useMemo<CallbackContextValue>(
    () => ({
      open: (from = "modal") => {
        setSource(from);
        setShow(true);
      },
    }),
    [],
  );

  return (
    <CallbackContext.Provider value={value}>
      {children}
      <Modal show={show} onClose={() => setShow(false)} size="lg" dismissible>
        <DialogTitle id="callback-title" closeLabel={a11y("close")} onClose={() => setShow(false)}>
          {t("title")}
        </DialogTitle>
        <ModalBody>
          <p className="max-w-sm text-[15px] leading-relaxed text-ink-2">{t("text")}</p>
          <div className="mt-6">
            {/* The dialog lives in the layout and would outlive the navigation. */}
            <LeadForm source={source} compact onSuccess={() => setShow(false)} />
          </div>
          <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-line pt-5">
            <span className="text-sm text-ink-3">{t("orTelegram")}</span>
            <Button
              as="a"
              color="ghost"
              size="sm"
              href={site.telegram.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Telegram className="size-4" />
              {site.telegram.handle}
            </Button>
          </div>
        </ModalBody>
      </Modal>
    </CallbackContext.Provider>
  );
}
