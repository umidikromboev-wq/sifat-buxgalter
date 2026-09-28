"use client";

import { useId, useRef, useState, type FormEvent } from "react";
import { useLocale, useTranslations } from "next-intl";
import { Button, HelperText, Label, Radio, Spinner, TextInput } from "flowbite-react";
import { ArrowSwap } from "@/components/icons";
import { useRouter } from "@/i18n/navigation";
import { cn } from "@/lib/cn";
import { raw } from "@/lib/i18n";
import { formatPhone, isValidPhone, normalizePhone, submitLead, type Lead } from "@/lib/lead";

type Errors = { name?: string; phone?: string; general?: string };

/**
 * The lead form. `compact` is the dialog version — name and phone only,
 * because a visitor who pressed "call me" has already decided; the full
 * version on the page also asks for the company and turnover.
 */
export function LeadForm({
  source,
  compact = false,
  onSuccess,
}: {
  source: Lead["source"];
  compact?: boolean;
  /** Called once the lead is accepted, before moving to the thank-you page. */
  onSuccess?: () => void;
}) {
  const t = useTranslations("lead");
  const locale = useLocale();
  const router = useRouter();
  const id = useId();

  const [name, setName] = useState("");
  const [phone, setPhone] = useState(""); // nine digits, no prefix
  const [company, setCompany] = useState("");
  const [turnover, setTurnover] = useState("");
  const [errors, setErrors] = useState<Errors>({});
  const [sending, setSending] = useState(false);

  const nameRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);
  const turnoverOptions = raw<string[]>(t, "turnoverOptions");

  function onPhoneChange(raw: string) {
    let digits = normalizePhone(raw);
    // Backspace over a bracket or dash removes no digit; take the digit
    // before it, or the field could never be emptied.
    if (raw.length < formatPhone(phone).length && digits === phone) digits = digits.slice(0, -1);
    setPhone(digits);
    if (errors.phone && isValidPhone(digits)) setErrors((e) => ({ ...e, phone: undefined }));
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const next: Errors = {};
    if (!name.trim()) next.name = t("errors.name");
    if (!isValidPhone(phone)) next.phone = t("errors.phone");
    setErrors(next);
    if (next.name) return nameRef.current?.focus();
    if (next.phone) return phoneRef.current?.focus();

    setSending(true);
    try {
      await submitLead({
        name: name.trim(),
        phone: `+998${phone}`,
        company: company.trim() || undefined,
        turnover: turnover || undefined,
        source,
        locale,
      });
      onSuccess?.();
      setSending(false);
      router.push("/thank-you");
    } catch {
      setErrors({ general: t("errors.general") });
      setSending(false);
    }
  }

  return (
    <form noValidate onSubmit={onSubmit} className="space-y-5">
      <div className={cn("grid gap-5", !compact && "sm:grid-cols-2")}>
        <div>
          <Label htmlFor={`${id}-name`} className="mb-2 block">
            {t("name")}
          </Label>
          <TextInput
            ref={nameRef}
            id={`${id}-name`}
            name="name"
            sizing="lg"
            autoComplete="name"
            placeholder={t("namePlaceholder")}
            value={name}
            onChange={(e) => {
              setName(e.target.value);
              if (errors.name && e.target.value.trim()) setErrors((x) => ({ ...x, name: undefined }));
            }}
            color={errors.name ? "failure" : "gray"}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? `${id}-name-error` : undefined}
          />
          {errors.name ? (
            <HelperText id={`${id}-name-error`} color="failure">
              {errors.name}
            </HelperText>
          ) : null}
        </div>

        <div>
          <Label htmlFor={`${id}-phone`} className="mb-2 block">
            {t("phone")}
          </Label>
          <TextInput
            ref={phoneRef}
            id={`${id}-phone`}
            name="phone"
            type="tel"
            inputMode="tel"
            sizing="lg"
            autoComplete="tel"
            placeholder={t("phonePlaceholder")}
            value={formatPhone(phone)}
            onChange={(e) => onPhoneChange(e.target.value)}
            color={errors.phone ? "failure" : "gray"}
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={errors.phone ? `${id}-phone-error` : undefined}
          />
          {errors.phone ? (
            <HelperText id={`${id}-phone-error`} color="failure">
              {errors.phone}
            </HelperText>
          ) : null}
        </div>
      </div>

      {compact ? null : (
        <>
          <div>
            <Label htmlFor={`${id}-company`} className="mb-2 flex items-baseline justify-between gap-3">
              <span>{t("company")}</span>
              <span className="text-xs font-normal text-ink-3">{t("optional")}</span>
            </Label>
            <TextInput
              id={`${id}-company`}
              name="company"
              sizing="lg"
              autoComplete="organization"
              placeholder={t("companyPlaceholder")}
              value={company}
              onChange={(e) => setCompany(e.target.value)}
            />
          </div>

          <fieldset>
            <legend className="mb-3 flex w-full items-baseline justify-between gap-3 text-sm font-medium text-ink-2">
              <span>{t("turnover")}</span>
              <span className="text-xs font-normal text-ink-3">{t("optional")}</span>
            </legend>
            <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
              {turnoverOptions.map((option, i) => {
                const checked = turnover === option;
                return (
                  <label
                    key={option}
                    htmlFor={`${id}-turnover-${i}`}
                    className={cn(
                      "flex min-h-13 items-center gap-3 rounded-control border px-4 py-3 text-[15px] transition-[border-color,background-color,box-shadow] duration-300",
                      checked
                        ? "border-ink bg-ink/3 shadow-[inset_0_0_0_1px_var(--ink)]"
                        : "border-line-strong hover:border-ink/40",
                    )}
                  >
                    <Radio
                      id={`${id}-turnover-${i}`}
                      name="turnover"
                      value={option}
                      checked={checked}
                      onChange={() => setTurnover(option)}
                    />
                    <span className="text-ink">{option}</span>
                  </label>
                );
              })}
            </div>
          </fieldset>
        </>
      )}

      {errors.general ? (
        <p role="alert" className="rounded-control border border-danger/30 bg-danger/5 px-4 py-3 text-sm text-danger">
          {errors.general}
        </p>
      ) : null}

      <Button type="submit" color="ink" size="xl" fullSized disabled={sending} className="mt-2">
        {sending ? (
          <>
            <Spinner size="sm" aria-hidden="true" />
            {t("sending")}
          </>
        ) : (
          <>
            {t("submit")}
            <ArrowSwap />
          </>
        )}
      </Button>

      <p className="text-xs leading-relaxed text-ink-3">{t("consent")}</p>
    </form>
  );
}
