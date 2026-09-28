import { getTranslations } from "next-intl/server";
import { Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from "flowbite-react";
import { Cross } from "@/components/icons";
import { Reveal } from "@/components/motion/Reveal";
import { CallButton } from "@/components/ui/Buttons";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Tick } from "@/components/ui/Tick";
import { raw } from "@/lib/i18n";

type Row = { label: string; now: string; us: string };

export async function Compare() {
  const t = await getTranslations("compare");
  const c = await getTranslations("cta");
  const rows = raw<Row[]>(t, "rows");

  return (
    <section id="compare" aria-label={t("eyebrow")} className="section-y relative bg-sand/70">
      <div className="shell">
        <SectionHeader eyebrow={t("eyebrow")} title={t.raw("title")} subtitle={t("subtitle")} />

        <Reveal variant="scale" className="mt-14">
          <div className="relative overflow-hidden rounded-hero border border-line bg-card shadow-lift">
            {/* From 1024px: the Flowbite table, with the "with us" column lit in
                gold. Narrower, three columns get too tight to read. */}
            <Table className="hidden lg:table">
              <TableHead>
                <TableRow className="border-t-0">
                  <TableHeadCell className="w-[24%] ps-8">{t("colCriterion")}</TableHeadCell>
                  <TableHeadCell className="w-[33%]">{t("colNow")}</TableHeadCell>
                  <TableHeadCell className="w-[43%] bg-gold-pale/50 pe-8 text-gold-deep">
                    <span className="inline-flex items-center gap-2">
                      <span aria-hidden="true" className="size-1.5 rotate-45 bg-gold" />
                      {t("colUs")}
                    </span>
                  </TableHeadCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row, i) => (
                  <TableRow key={row.label} className="group transition-colors duration-300 hover:bg-paper/60">
                    <TableCell className="ps-8 text-[15px] font-medium text-ink">{row.label}</TableCell>
                    <TableCell className="text-[15px] text-ink-3">
                      <span className="flex gap-3">
                        <Cross className="mt-1 size-4 shrink-0 text-danger/60" />
                        {row.now}
                      </span>
                    </TableCell>
                    <TableCell className="bg-gold-pale/50 pe-8 text-[15px] text-ink transition-colors duration-300 group-hover:bg-gold-pale/80">
                      <span className="flex gap-3">
                        <Tick index={i} className="mt-0.5 size-5 shrink-0 text-gold-deep" />
                        {row.us}
                      </span>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>

            {/* Below 1024px: the same ten rows as cards, two to a row on tablets,
                separated by hairlines (the 1px gaps over a line-coloured ground). */}
            <ul className="grid gap-px bg-line sm:grid-cols-2 lg:hidden">
              {rows.map((row, i) => (
                <li key={row.label} className="bg-card p-5 sm:p-6">
                  <p className="font-medium text-ink">{row.label}</p>
                  <p className="mt-3 flex gap-2.5 text-sm text-ink-3">
                    <span className="sr-only">{t("colNow")}: </span>
                    <Cross className="mt-0.5 size-4 shrink-0 text-danger/60" />
                    {row.now}
                  </p>
                  <p className="mt-2.5 flex gap-2.5 rounded-xl bg-gold-pale/60 p-3 text-sm text-ink">
                    <span className="sr-only">{t("colUs")}: </span>
                    <Tick index={i} className="size-4.5 shrink-0 text-gold-deep" />
                    {row.us}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal className="mt-10 flex flex-col gap-5 sm:flex-row sm:items-center">
          <CallButton size="lg" source="modal">
            {c("audit")}
          </CallButton>
          <p className="text-sm text-ink-3">{t("footnote")}</p>
        </Reveal>
      </div>
    </section>
  );
}
