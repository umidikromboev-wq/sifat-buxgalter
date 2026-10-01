/**
 * Приём заявок с сайта Sifat Buxgalter в таблицу «Sifat Buxgalter: заявки с сайта».
 * Сайт (/api/lead) шлёт POST с JSON и общим секретом, скрипт дописывает строку.
 * Развёртывание: веб-приложение, запуск от имени владельца, доступ «Все».
 * После правки кода: Управление развертываниями → Новая версия (адрес /exec не меняется).
 */
const SHEET_ID = '1q9YV18m29-JVlJvMRnOjyae-PilVgT7mFz7CIZLtDGQ';
const HEADERS = ['Дата', 'Имя', 'Телефон', 'Компания', 'Оборот', 'Язык', 'Страница', 'IP'];
const PHONE_COL = 3;

function doPost(e) {
  try {
    const d = JSON.parse(e.postData.contents);
    const secret = PropertiesService.getScriptProperties().getProperty('SECRET');
    if (secret && d.secret !== secret) return json_({ ok: false, error: 'forbidden' });
    const sh = getSheet_();
    sh.appendRow([new Date(), d.name || '', '', d.company || '', d.turnover || '', d.lang || '', d.page || '', d.ip || '']);
    // appendRow съедает «+» у «+998…» (Таблицы видят начало формулы): телефон пишем отдельно, как текст.
    sh.getRange(sh.getLastRow(), PHONE_COL).setNumberFormat('@').setValue(d.phone || '');
    return json_({ ok: true });
  } catch (err) {
    return json_({ ok: false, error: String(err) });
  }
}

function getSheet_() {
  const sh = SpreadsheetApp.openById(SHEET_ID).getSheets()[0];
  if (sh.getRange(1, 1).getValue() !== HEADERS[0]) sh.getRange(1, 1, 1, HEADERS.length).setValues([HEADERS]);
  sh.getRange(1, 1, 1, HEADERS.length).setFontWeight('bold');
  sh.setFrozenRows(1);
  return sh;
}

function json_(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);
}
