// Ориентир доначислений при сокрытой выручке. Источник ставок: Налоговый кодекс РУз (lex.uz/docs/4674893),
// сверено 01.10.2026. Это прикидка для сайта, не налоговое заключение: точную сумму даёт экспресс-аудит.

export const FINE_RATE = 0.2; // ст. 223: штраф 20% от суммы сокрытой налоговой базы
export const VAT_RATE = 0.12; // ст. 258: НДС 12%
export const PROFIT_TAX_RATE = 0.15; // ст. 337, п. 12: налог на прибыль 15%
export const ASSUMED_MARGIN = 0.2; // допущение: прибыль = 20% скрытой выручки
export const CBU_RATE = 0.14; // основная ставка ЦБ РУз, держится на 14% весь 2026 год
export const PENI_DAILY = CBU_RATE / 300; // ст. 110: пеня в день = 1/300 ставки ЦБ
export const MAX_YEARS = 3; // ст. 88: срок исковой давности три года после окончания периода
const DAYS_IN_YEAR = 365;

export type RiskInput = { turnoverBln: number; sharePct: number; years: number };
export type RiskResult = { hidden: number; fine: number; vat: number; profit: number; peni: number; total: number };

// Скрытая выручка копится равномерно, поэтому средняя просрочка налога — половина проверяемого срока.
export function calcRisk({ turnoverBln, sharePct, years }: RiskInput): RiskResult {
  const hidden = turnoverBln * 1e9 * (sharePct / 100) * years;
  const fine = hidden * FINE_RATE;
  const vat = hidden * VAT_RATE;
  const profit = hidden * ASSUMED_MARGIN * PROFIT_TAX_RATE;
  const peni = (vat + profit) * PENI_DAILY * (years / 2) * DAYS_IN_YEAR;
  return { hidden, fine, vat, profit, peni, total: fine + vat + profit + peni };
}

// 1 234 567 890 → «1,23 млрд» / «1,23 mlrd»; меньше миллиарда — в миллионах.
export function short(n: number, bln: string, mln: string, comma: string): string {
  const [v, unit] = n >= 1e9 ? [n / 1e9, bln] : [n / 1e6, mln];
  const digits = v >= 100 ? 0 : v >= 10 ? 1 : 2;
  return `${v.toFixed(digits).replace(".", comma)} ${unit}`;
}
