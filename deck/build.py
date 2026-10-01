# Собирает deck.html (16:9, 1920×1080) из реальных скриншотов в shots/. PDF: node pdf.mjs
import os

HERE = os.path.dirname(os.path.abspath(__file__))
MOSAIC = sorted(os.listdir(os.path.join(HERE, "shots/m")))
TOTAL = 19

LOGO = """<svg class="mark" viewBox="0 0 114 120" aria-hidden="true"><defs><linearGradient id="g" x1="0" y1="0" x2="0.7" y2="1"><stop offset="0" stop-color="#b38a26"/><stop offset="1" stop-color="#ecd58a"/></linearGradient></defs><g fill="url(#g)" stroke="url(#g)" stroke-width="3" stroke-linejoin="round"><polygon points="25,2 82,2 77,54 13,54"/><polygon points="84,26 112,26 106,54 77,54"/><polygon points="8,65 38,65 32,95 2,95"/><polygon points="48,65 101,65 90,118 34,118"/></g></svg>"""


def browser(src, url, cls="", pos="top"):
    return f"""<figure class="br {cls}"><div class="br-bar"><i></i><i></i><i></i><span>{url}</span></div><div class="br-img" style="background-image:url('{src}');background-position:center {pos}"></div></figure>"""


def phone(src, cls="", pos="top"):
    return f"""<figure class="ph {cls}"><div class="ph-img" style="background-image:url('{src}');background-position:center {pos}"></div></figure>"""


def slide(n, kicker, body, cls="", dark=False):
    return f"""<section class="slide {'dark' if dark else ''} {cls}">
<header class="top"><span class="brand">{LOGO}Sifat Buxgalter</span><span class="kick">{kicker}</span><span class="num">{n:02d} / {TOTAL}</span></header>
{body}
</section>"""


S = []

# 01 обложка
S.append(f"""<section class="slide dark cover">
<div class="kv" style="background-image:url('shots/kv.webp')"></div>
<div class="lines"><i></i><i></i><i></i></div>
<header class="top"><span class="brand">{LOGO}Sifat Buxgalter</span><span class="kick">Отчёт о проделанной работе</span><span class="num">Prototype · 01.10.2026</span></header>
<div class="cover-t">
  <p class="eyebrow">Сайт бухгалтерского аутсорсинга · Ташкент</p>
  <h1>Сайт, который продаёт <em>спокойствие</em> собственнику</h1>
  <p class="lead">Исследование рынка, три версии дизайна, 28 страниц на двух языках, заявки в Telegram и Google-таблицу, онлайн-чат с менеджером.</p>
</div>
{phone('shots/m-v2.jpg', 'cover-ph')}
</section>""")

# 02 путь
steps = [
    ("23.09", "Встреча и интервью", "Разговор с Иброхимом и Бекзодом: кто клиент, за что платит, чего боится."),
    ("25.09", "Версия 1 на сайте", "Первая рабочая версия «документ»: бумага, чернила, печать."),
    ("27.09", "Анализ рынка", "47 сайтов конкурентов, выдача Google, спрос по ключевым запросам, план продвижения."),
    ("27.09", "24 SEO-страницы", "Отдельная страница на каждую услугу и пять статей, на узбекском и русском."),
    ("30.09", "Версия 2 «стекло и беж»", "Новый дизайн и правки по итогам встречи с вами."),
    ("01.10", "Заявки, чат, калькулятор", "Telegram-бот, Google-таблица, онлайн-чат, калькулятор налогового риска."),
]
st = "".join(f'<li><b>{d}</b><h3>{t}</h3><p>{x}</p></li>' for d, t, x in steps)
S.append(slide(2, "Путь проекта", f"""<div class="pad"><h2 class="h">Восемь дней от разговора<br>до готового продукта</h2>
<ol class="timeline">{st}</ol></div>"""))

# 03 с чего начали
S.append(slide(3, "01 · С чего начали", f"""<div class="pad split">
<div><h2 class="h">Сначала слушали,<br>потом рисовали</h2>
<p class="body">Прежде чем делать дизайн, мы разобрали, как вы работаете и почему клиенты к вам приходят. Источники: интервью с главным бухгалтером, встреча в Zoom, PDF с услугами, прототип сайта.</p></div>
<div class="quotes">
<blockquote><span>Главный вопрос клиента</span>«Почему у вас дороже?»</blockquote>
<blockquote><span>Что клиент ждёт</span>Ответ на вопрос за 5–10 минут, а не через полдня</blockquote>
<blockquote><span>Чего клиент боится</span>Отдать документы чужим людям и получить штраф за чужую ошибку</blockquote>
<blockquote><span>Чем вы сильнее рынка</span>Оптимизация налогов в цене, без процента от экономии</blockquote>
</div></div>"""))

# 04 кому продаём
S.append(slide(4, "02 · Кому продаём", """<div class="pad">
<h2 class="h">Собственник ООО, который хочет, чтобы учёт<br>и налоги велись <em>без штрафов и без его участия</em></h2>
<div class="cols3">
<div class="col"><p class="label">Кто он</p><ul><li>ООО с оборотом от 5 млрд сум в год</li><li>5+ сотрудников</li><li>Ташкент и область</li><li>Импорт и экспорт, опт, туризм, учебные центры</li></ul></div>
<div class="col"><p class="label">Когда ищет бухгалтера</p><ul><li>Бухгалтер уходит: декрет, пенсия, увольнение</li><li>Пришло требование или акт налоговой</li><li>Заблокировали счёт</li><li>Подозрение, что бухгалтер ошибается</li><li>Вырос оборот</li></ul></div>
<div class="col"><p class="label">Как поймёт, что выбрал правильно</p><ul><li>Ответ за 10 минут</li><li>Отчёты сданы вовремя</li><li>Налоги законно меньше</li><li>Видно, что сделано за месяц</li><li>Штраф по вине бухгалтера платит бухгалтер</li></ul></div>
</div>
<p class="foot-note">Весь текст сайта отвечает этим людям: их триггерам, их критериям и их страхам.</p>
</div>"""))

# 05 рынок мозаика
tiles = "".join(f'<img src="shots/m/{f}" alt="">' for f in MOSAIC[:40])
S.append(slide(5, "03 · Рынок", f"""<div class="mosaic">{tiles}</div>
<div class="mosaic-fade"></div>
<div class="mosaic-t"><p class="big-num">47</p><h2 class="h">сайтов конкурентов<br>изучили до дизайна</h2>
<p class="body">Бухгалтерские фирмы Ташкента, аудиторы, большая четвёрка и международные сервисы. Смотрели первые экраны, обещания, цены, гарантии и как они просят оставить заявку.</p></div>""", dark=True))

# 06 что увидели
S.append(slide(6, "03 · Рынок · выводы", """<div class="pad">
<h2 class="h">Что увидели в выдаче Google</h2>
<div class="facts4">
<div><b>7 780</b><span>коммерческих запросов в месяц по бухгалтерским услугам</span></div>
<div><b>70%</b><span>ключевых запросов с низкой конкуренцией</span></div>
<div><b>0</b><span>рекламодателей в узбекской выдаче: первое место там никто не покупает</span></div>
<div><b>67</b><span>отзывов у лидера в Google Картах. Это немного, догнать реально</span></div>
</div>
<div class="split2">
<div class="card-l"><p class="label">Как берут клиентов конкуренты</p><ul><li>Одно обещание в заголовке: цена, скидка за просрочку, «5 специалистов»</li><li>Профиль в Картах с отзывами</li><li>Вход через мелкую услугу, потом абонемент</li></ul></div>
<div class="card-l accent"><p class="label">Свободное место, которое заняли мы</p><ul><li>Никто не обещает «штраф по нашей ошибке платим мы»</li><li>Никто не включает оптимизацию налогов в цену без процента</li><li>Никто не показывает собственнику его налоговый риск в цифрах</li></ul></div>
</div></div>"""))

# 07 v0
S.append(slide(7, "04 · Версии · прототип", f"""<div class="ver">
<div class="ver-t"><p class="tag">Прототип</p><h2 class="h">Структура страницы</h2>
<p class="body">С прототипа начали: проверили порядок блоков и тексты на смысл. Дизайн оставался черновым: чёрный с золотом, как у половины рынка, и много пустых мест под тексты.</p>
<p class="label">Что взяли дальше</p><p class="body small">Порядок блоков: триггеры → риск → обязательства → услуги → цена → вопросы.</p></div>
{browser('shots/v0-hero.jpg', 'sifat-buxgalter.vercel.app', 'ver-br')}
{phone('shots/m-v0.jpg', 'ver-ph')}
</div>"""))

# 08 v1
S.append(slide(8, "04 · Версии · версия 1", f"""<div class="ver">
<div class="ver-t"><p class="tag">Версия 1 · 25.09</p><h2 class="h">«Документ»</h2>
<p class="body">Бумага, чернила и печать: сайт как аккуратно оформленный отчёт. Отсюда пришли «Отчёт директору за месяц», карточка Telegram с ответом за 10 минут и расчёт налогового риска.</p>
<p class="label">Почему пошли дальше</p><p class="body small">Сериф и бумага читались как юрфирма. Хотелось спокойного премиума, который выделяется среди 47 сайтов.</p></div>
{browser('shots/v1-hero.jpg', 'sifat-buxgalter-site.vercel.app', 'ver-br')}
{phone('shots/m-v1.jpg', 'ver-ph')}
</div>"""))

# 09 v2
S.append(slide(9, "04 · Версии · версия 2", f"""<div class="v2">
{browser('shots/v2-hero.jpg', 'sifat-glass.vercel.app', 'v2-br')}
<div class="v2-t"><p class="tag light">Версия 2 · 30.09 · текущая</p><h2 class="h">«Стекло и беж»</h2>
<p class="body">Глубокий тёмно-синий, тёплый беж и матовое стекло. Знак Sifat стал объёмным героем первого экрана. Тон спокойный и дорогой: так выглядит фирма, которой доверяют учёт.</p></div>
</div>""", dark=True))

# 10 эволюция
S.append(slide(10, "04 · Версии · рядом", f"""<div class="pad"><h2 class="h">Как менялся первый экран</h2>
<div class="evo">
<div>{browser('shots/v0-hero.jpg', 'прототип')}<p>Прототип: структура и смыслы</p></div>
<div>{browser('shots/v1-hero.jpg', 'версия 1')}<p>Версия 1: «документ»</p></div>
<div>{browser('shots/v2-hero.jpg', 'версия 2')}<p><b>Версия 2: «стекло и беж»</b></p></div>
</div></div>"""))

# 11 структура
blocks = ["Первый экран: обещание и звонок на 10 минут", "Ситуации, с которыми приходят", "Налоговый риск в цифрах", "Обязательства по договору", "Услуги", "Как считаем цену", "Сравнение с штатным бухгалтером", "Пять законных льгот", "Кого берём и кого нет", "Главный бухгалтер и цифры", "Клиенты", "Видео-отзывы", "Пять шагов к старту", "Отчёт директору", "Вопросы", "Заявка"]
bl = "".join(f"<li><span>{i+1:02d}</span>{b}</li>" for i, b in enumerate(blocks))
S.append(slide(11, "05 · Главная страница", f"""<div class="struct">
<div class="strip"><img src="shots/v2-full-s.jpg" alt=""></div>
<div><h2 class="h">16 блоков, каждый<br>снимает одно сомнение</h2>
<p class="body">Порядок повторяет разговор с собственником: сначала узнаёт свою ситуацию, потом видит риск, потом получает обязательства и только потом цену.</p>
<ol class="blocks">{bl}</ol></div></div>"""))

# 12 калькулятор
S.append(slide(12, "05 · Калькулятор риска", f"""<div class="feat">
<div class="feat-t"><h2 class="h">Собственник сам считает<br>свой налоговый риск</h2>
<p class="body">Вместо абстрактного «штраф 2 млрд» три ползунка: оборот, доля продаж без чеков, сколько лет. Сайт раскладывает сумму по статьям Налогового кодекса.</p>
<div class="law"><span>ст. 223</span>штраф за сокрытие выручки<span>ст. 258</span>НДС<span>ст. 337</span>налог на прибыль<span>ст. 110</span>пеня</div>
<p class="example"><b>10 млрд</b> скрытой выручки → <b>3,76 млрд</b> сум к доплате</p>
<p class="body small">Нормы сверены с текущей редакцией НК на lex.uz.</p></div>
{browser('shots/sec-risk-h.jpg', 'sifat-glass.vercel.app/ru#risk', 'feat-br', 'center')}
</div>""", dark=True))

# 13 доверие
S.append(slide(13, "05 · Доверие", f"""<div class="pad"><h2 class="h">Почему поверят: сравнение, льготы, гарантия</h2>
<div class="trust">
<div>{browser('shots/sec-cmp-h.jpg', 'Сравнение', '', 'center')}<p><b>Сравнение со штатным бухгалтером</b> по деньгам, ответственности и скорости ответа</p></div>
<div>{browser('shots/sec-bn-h.jpg', 'Льготы', '', 'center')}<p><b>Пять законных льгот</b> со статьями НК. Остальные разбираем лично в Telegram</p></div>
</div></div>"""))

# 14 языки
S.append(slide(14, "06 · Два языка", f"""<div class="langs">
<div class="langs-t"><h2 class="h">Узбекский: основной,<br>русский: второй</h2>
<p class="body">Узбекскую версию не переводили дословно с русского, а написали заново тем языком, которым говорит владелец бизнеса в Ташкенте. Налоговые термины взяты из узбекского текста Налогового кодекса.</p>
<div class="pairs"><p><s>Bank hisob raqamingizni blokladi</s><b>Bank hisob raqamingizni toʻxtatib qoʻydi</b></p><p><s>Soliq optimizatsiyasi narx ichida</s><b>Soliqni kamaytirish narxga kiradi</b></p></div>
<p class="body small">Переключатель UZ | RU в шапке и в меню, на каждой странице ведёт на ту же страницу на другом языке.</p></div>
{phone('shots/m-v2uz.jpg', 'lph1')}{phone('shots/m-v2.jpg', 'lph2')}
</div>""", dark=True))

# 15 SEO
S.append(slide(15, "07 · SEO-страницы", f"""<div class="seo">
<div class="seo-t"><p class="big-num dark-num">28</p><h2 class="h">страниц, которые<br>находит Google</h2>
<ul class="seo-l"><li><b>7</b> услуг: аутсорсинг, консультации, восстановление учёта, налоговые проверки, разблокировка счёта, кадры, ВЭД</li><li><b>5</b> статей с ответами на вопросы собственников</li><li><b>× 2</b> языка, плюс 4 страницы-каталога</li></ul>
<p class="body small">У каждой страницы свой заголовок, описание и разметка для поиска. Под каждый запрос клиента своя страница, а не одна главная на всё.</p></div>
<div class="seo-shots">{browser('shots/service-page.jpg', 'sifat-glass.vercel.app/ru/uslugi/autsorsing-buhgalterii', 's1')}{browser('shots/articles-page.jpg', 'sifat-glass.vercel.app/ru/stati', 's2')}</div>
</div>"""))

# 16 мобилка
S.append(slide(16, "08 · Телефон", f"""<div class="pad"><h2 class="h">Большинство клиентов придут с телефона</h2>
<div class="phones">
<div>{phone('shots/m-v2.jpg')}<p>Первый экран</p></div>
<div>{phone('shots/m-v2-menu.jpg')}<p>Меню с выбором языка</p></div>
<div>{phone('shots/m-v2-risk.jpg')}<p>Калькулятор риска</p></div>
<div>{phone('shots/m-v2-form.jpg')}<p>Заявка</p></div>
<div>{phone('shots/m-v2-chat.jpg')}<p>Чат с менеджером</p></div>
</div></div>"""))

# 17 заявки и чат
S.append(slide(17, "09 · Заявки и чат", f"""<div class="leads">
<div class="leads-t"><h2 class="h">Ни одна заявка<br>не потеряется</h2>
<div class="flow">
<div class="node">Форма на сайте</div><div class="arr">→</div>
<div class="node two"><span>Telegram-группа «Заявки»</span><span>Google-таблица</span></div>
</div>
<p class="body">Заявка уходит сразу в оба места. Если одно недоступно, она сохранится в другом. В таблице дата, имя, телефон, компания, оборот, язык и страница, с которой пришёл клиент.</p>
<p class="label">Онлайн-чат с Бекзодом</p>
<p class="body">Клиент пишет на сайте, сообщение приходит в ту же группу. Менеджер отвечает в Telegram, ответ появляется у клиента на сайте. Готовые вопросы в один тап и просьба оставить телефон.</p></div>
{browser('shots/v2-chat-desk.jpg', 'sifat-glass.vercel.app', 'leads-br', 'center')}
{phone('shots/m-v2-chat.jpg', 'leads-ph')}
</div>""", dark=True))

# 18 качество
S.append(slide(18, "10 · Качество", """<div class="pad"><h2 class="h">Что проверено перед показом</h2>
<div class="qa">
<div><b>320 · 768 · 1440</b><span>Телефон, планшет и компьютер: ничего не уезжает за край экрана</span></div>
<div><b>0</b><span>ошибок в консоли и битых картинок на всех страницах</span></div>
<div><b>UZ ↔ RU</b><span>Разметка языков для Google: поиск показывает нужную версию</span></div>
<div><b>Schema.org</b><span>Карточка бухгалтерской фирмы: адрес, телефоны, город, соцсети</span></div>
<div><b>Защита формы</b><span>Ловушка для ботов и лимит заявок с одного адреса</span></div>
<div><b>Карта сайта</b><span>Все 28 страниц открыты для индексации, когда сайт выйдет на домен</span></div>
</div></div>"""))

# 19 дальше
S.append(slide(19, "Дальше", """<div class="pad next">
<div><h2 class="h">Три шага до первых клиентов с сайта</h2>
<ol class="nx"><li><b>Запуск на домене.</b> Переносим версию 2 на ваш адрес, подключаем Google Search Console.</li><li><b>Google Карты и отзывы.</b> Профиль компании и 20–30 отзывов от нынешних клиентов: это бесплатно и даёт место в картах.</li><li><b>Реклама в поиске Google.</b> По запросам на узбекском и русском, когда сайт и карты готовы.</li></ol></div>
<div class="need"><p class="label">Что нужно от вас</p><ul><li>Цены тарифов Gold и VIP</li><li>Фото Иброхима и офиса</li><li>Видео-отзывы клиентов: на сайте уже три места под них</li><li>Вычитка узбекского текста Бекзодом</li><li>Подтвердить пять льгот на сайте</li><li>Домен</li></ul></div>
</div>"""))

CSS = open(os.path.join(HERE, "deck.css")).read()
html = f"""<!doctype html><html lang="ru"><head><meta charset="utf-8"><title>Sifat Buxgalter · отчёт о работе</title>
<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Geologica:wght@300;400;500;600&display=swap">
<style>{CSS}</style></head><body>{''.join(S)}</body></html>"""
open(os.path.join(HERE, "deck.html"), "w").write(html)
print("slides:", len(S))
