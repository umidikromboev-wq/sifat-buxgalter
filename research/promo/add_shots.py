import re
P='sifat-promo.html'
s=open(P,encoding='utf-8').read()

A=[ # прямые: аутсорс бухгалтерии для МСБ
('yaran.uz','Yaran','«Бухгалтерские услуги в Ташкенте», 15 лет и 1000+ компаний в подзаголовке. Лидер по отзывам в картах'),
('pacholi.uz','Pacholi Aka','Стоковая ручка и общее «Бухгалтерские услуги в Ташкенте» — продаёт перечень услуг'),
('contab.uz','Contab','«Свобода от бухгалтерии» — единственный с эмоцией вместо услуги. Главный рекламодатель в Google'),
('felixaccountant.uz','Felix Accountant','«Первая компания, внедрившая аутсорс», с 2005 года, 57+ сотрудников, 1032+ клиента — цифры стажа'),
('fintax.uz','FinTax','Цена в заголовке: «от 1 500 000 сум», материальная ответственность за ошибки'),
('atb-accounting.uz','ATB Accounting Consult','«Бухгалтерию берём на себя», страхование ответственности на 1 млрд сум. Ближе всех к защите собственника'),
('tavat.uz','TA-VAT','Личный бренд: «Бухгалтерская компания Александры Толмачевой», 2+ млрд экономии, бесплатный экспресс-анализ'),
('buxplus.uz','BuxPlus','«Ведёт главный бухгалтер с опытом 10+ лет», первый месяц за 0 сум — вход через бесплатный месяц'),
('turanbuh.uz','TuranOS','Общее «Бухгалтерские услуги в Ташкенте» и сток-фото офиса. Ничем не отличается'),
('aaafin.uz','AAA Financier','Тёмный слайдер «Полное бухгалтерское обслуживание» без цифр и обещаний'),
('legalact.uz','LegalAct','Живые лица основателей, «организация бизнеса с нуля», бесплатная консультация'),
('azma.uz','Azma','По-узбекски: «онлайн-бухгалтерия для предпринимателей» — продаёт сервис, а не человека'),
('my-buh.uz','Моя Бухгалтерия','«Бухгалтерия для вашего бизнеса» и видео-офис. Экосистема, а не результат'),
('buxgalteria.uz','Бухгалтер (buxgalteria.uz)','Четыре тарифа прямо на первом экране: Старт, Эконом, Оптима, Про'),
('consultingpartners.uz','Consulting Partners','По-узбекски: «бухгалтерия, налоги и право в одних руках» + рейтинг Google на первом экране'),
('bestaudit.uz','Best Audit','«Ответьте на 3 вопроса — получите консультацию»: квиз вместо формы'),
('buhgalter.com.uz','Бухгалтер (Фергана)','Сток-пара и общие преимущества; работает на регион, но пишет «по всему Узбекистану»'),
]
B=[ # местные аудит и консалтинг
('batautsors.uz','Business Audit Today','«Аудит в Ташкенте», 3D-логотип; внизу — «первая аудиторская компания», гарантия и страхование на 5 млрд сум'),
('ibac.uz','IBAC','«Наша цель — ваш успех» и шахматная доска: образ без обещания'),
('auditor.uz','Auditor.uz','На первом экране остался шаблонный текст lorem ipsum'),
('femidafinance.uz','Femida Finance','«Надёжный партнёр» — право и бухгалтерия вместе, кнопка «Бесплатная консультация»'),
('almuda.uz','AlMuda','Для иностранцев: «Ваш путь к бизнесу в Узбекистане», 500+ компаний, 10+ стран'),
('ledgers.uz','Ledgers','По-английски, market entry и 1С для международных компаний'),
('abraucapital.com','Abrau Capital','«Стратегии роста и устойчивости» — инвестиционный консалтинг, бухгалтерия внутри'),
]
C=[ # международные сети
('kreston.uz','Kreston Tashkent','По-английски: абзац о входе в ТОП-10 рейтинга аудиторов поверх орнамента'),
('grantthornton.uz','Grant Thornton','«Going beyond business as usual» — глобальный шаблон на английском'),
('pkf.uz','PKF','«Welcome to our world» — глобальный шаблон сети'),
('mazars.uz','Forvis Mazars','«Forvis Mazars в Узбекистане» на фоне арки — без предложения'),
('rsm.uz','RSM','Глобальный баннер «Empowering you…»'),
('kpmg.uz','KPMG','«KPMG Tech Report 2026» — отчёт вместо услуги'),
]
assert len(A)+len(B)+len(C)==30

CSS='''
/* ---------- shots gallery ---------- */
.shots{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:4mm 3.5mm}
.shot{display:flex;flex-direction:column}
.shot .img{border:1px solid var(--line-2);aspect-ratio:16/10;overflow:hidden;background:var(--panel)}
.shot img{width:100%;height:100%;object-fit:cover;object-position:top;display:block}
.shot .cap{padding-top:1.6mm}
.shot .dom{font-family:'JetBrains Mono',monospace;font-size:6.4pt;font-weight:700;letter-spacing:.04em;color:var(--fg)}
.shot .dom i{font-style:normal;color:var(--fg-3);font-weight:500}
.shot .why{font-size:6.9pt;line-height:1.35;color:var(--fg-2);margin-top:.6mm}
.grp-h{display:flex;align-items:baseline;gap:3mm;margin:0 0 2.6mm}
'''
s=s.replace('</style>',CSS+'</style>',1)

def tile(d,n,w):
    return f'''      <div class="shot"><div class="img"><img src="../shots30/sm/{d}.jpg" alt="{n}"></div>
        <div class="cap"><div class="dom">{n} <i>· {d}</i></div><div class="why">{w}</div></div></div>'''

def grp(title,count):
    return f'<div class="grp-h"><span class="chip chip-acc">{title}</span><span class="xs faint">{count}</span></div>'

def page(sub,inner):
    return f'''
<!-- ============ 03 · ПЕРВЫЕ ЭКРАНЫ ({sub}) ============ -->
<section class="page">
  <div class="pad">
    <div class="kicker"><span><b>03</b> · Конкуренты · первые экраны</span><span>1440×900 · снято 27.09.2026 · {sub}</span></div>
{inner}
  </div>
  <div class="foot"><span>Prototype Agency · Sifat Buxgalter</span><span class="n">00</span></div>
</section>
'''
p1=('''    <h2>30 сайтов, которые видит собственник до нас</h2>
    <p class="sm muted" style="max-width:165mm;margin-bottom:4mm">Первый экран каждого сайта, как его видит клиент на ноутбуке. Под каждым — чем компания пытается продать с первого взгляда.</p>
'''+grp('Прямые конкуренты · аутсорс бухгалтерии для МСБ','1—12 из 17')+'\n    <div class="shots">\n'+'\n'.join(tile(*x) for x in A[:12])+'\n    </div>')
p2=(grp('Прямые конкуренты · продолжение','13—17')+'\n    <div class="shots" style="margin-bottom:5mm">\n'+'\n'.join(tile(*x) for x in A[12:])+'\n    </div>\n'
    +grp('Местный аудит и консалтинг','1—6 из 7')+'\n    <div class="shots">\n'+'\n'.join(tile(*x) for x in B[:6])+'\n    </div>')
p3=(grp('Местный аудит и консалтинг · продолжение','7')+'\n    <div class="shots" style="margin-bottom:5mm">\n'+tile(*B[6])+'\n    </div>\n'+grp('Международные сети · верх рынка','6 компаний')+'\n    <div class="shots" style="margin-bottom:6mm">\n'+'\n'.join(tile(*x) for x in C)+'\n    </div>\n'+'''
    <div class="grid g2" style="gap:4mm;margin-top:auto">
      <div class="box pad3">
        <div class="label" style="margin-bottom:2mm">Что видно на 30 экранах</div>
        <ul class="ticks">
          <li><strong>Почти все</strong> продают услугу, а не результат: «бухгалтерские услуги», «полное обслуживание», «надёжный партнёр»</li>
          <li><strong>Цену</strong> на первом экране показывают двое (FinTax, buxgalteria.uz); бесплатный первый шаг — частый ход: консультация, экспресс-анализ, месяц за 0 сум</li>
          <li><strong>По-узбекски</strong> первый экран — только у троих: Azma, Consulting Partners, Best Audit</li>
          <li><strong>Живое лицо владельца</strong> — у TA-VAT и LegalAct, остальные на стоке</li>
        </ul>
      </div>
      <div class="box pad3" style="border-top:2px solid var(--acc)">
        <div class="label" style="margin-bottom:2mm">Кто ближе всех к Sifat и чем отличаемся</div>
        <p class="sm" style="margin-bottom:2mm"><strong>ATB</strong> (страхование на 1 млрд), <strong>BAT</strong> (5 млрд) и <strong>FinTax</strong> (материальная ответственность) уже говорят об ответственности — но в подзаголовке, мелко. <strong>TA-VAT</strong> продаёт через личность основателя.</p>
        <p class="sm">Sifat соединяет оба хода и выносит их в заголовок: <strong>Иброхим лично + штраф по нашей вине платим мы</strong> — и говорит это по-узбекски, где конкуренции почти нет.</p>
      </div>
    </div>''')
new=page('1/3',p1)+page('2/3',p2)+page('3/3',p3)
mark='<!-- ============ 04 · ЭКОНОМИКА ============ -->'
assert mark in s
s=s.replace(mark,new+'\n'+mark,1)
# лид на полосе 03 — отсылка к галерее
s=s.replace('по-узбекски рекламы нет вообще — первым стоит OLX.','по-узбекски рекламы нет вообще — первым стоит OLX. Первые экраны 30 сайтов — на следующих трёх полосах.',1)
# сквозная нумерация полос
i=[0]
def rn(m):
    i[0]+=1; return f'<span class="n">{i[0]+1:02d}</span>'
s=re.sub(r'<span class="n">\d\d</span>',rn,s)
open(P,'w',encoding='utf-8').write(s)
print('pages numbered', i[0])
