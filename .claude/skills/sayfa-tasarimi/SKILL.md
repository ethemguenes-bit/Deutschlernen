---
name: sayfa-tasarimi
description: Satzheft (index.html) için yeni ekran, sekme, kart, modal, form veya bileşen tasarlarken ya da mevcut sayfaların görünümünü değiştirirken kullan. "Kareli defter" tasarım dilini, renk/yazı tokenlarını, hazır CSS sınıflarını, mobil/karanlık mod kurallarını ve ekran görüntüsüyle doğrulama adımını içerir. Tetikleyiciler: sayfa tasarımı, yeni ekran, arayüz, UI, görünüm, renk, buton, kart, modal, tema, karanlık mod, mobil düzen.
---

# Satzheft sayfa tasarımı

Uygulama tek dosyadır: `index.html` (CSS `<style>` içinde, ekranlar JS şablon fonksiyonlarıyla üretilir).
Yeni bir şey tasarlamadan önce `index.html` içindeki `<style>` bloğunu oku ve **önce mevcut sınıfları kullan**. Yeni CSS sadece gerçekten gerekiyorsa, ilgili `/* bölüm */` yorumunun altına eklenir.

## Tasarım dili

**Kareli alıştırma defteri.** Açık mavi kareli kağıt zemin (`body` arka planı, 22px ızgara), üstünde beyaz "yaprak"lar (`.sheet`), mavi mürekkep ve öğretmenin **kırmızı kalemi** (hatalar, zayıf cümleler).
- Almanca/Türkçe **cümleler** her zaman serif: `var(--f-sent)` (Literata).
- **Arayüz** metni (buton, etiket, sayı) sans: `var(--f-ui)` (Schibsted Grotesk).
- Sakin, sade, tek sütun; süs yok. Vurgu rengi az kullanılır: birincil eylem başına bir `.btn.primary`.

## Tokenlar (asla sabit renk yazma)

| Token | Anlam |
|---|---|
| `--paper` / `--sheet` | zemin / kart yüzeyi |
| `--ink` / `--ink-soft` | ana metin / ikincil metin |
| `--line` | kenarlık ve ayırıcılar |
| `--accent`, `--accent-bg`, `--accent-ink` | birincil eylem, seçili durum, "yeni" |
| `--red`, `--red-bg` | hata, "Tekrar", öğreniliyor, zayıf |
| `--amber`, `--amber-bg` | "Zor", genç kart |
| `--green`, `--green-bg` | doğru, "İyi", olgun kart, ilerleme |
| `--r` (12px), `--shadow` | köşe yarıçapı, gölge |

Yeni bir token eklenirse **üç yerde** tanımlanmalı: `:root`, `@media (prefers-color-scheme: dark){:root:not([data-theme="light"])}` ve `:root[data-theme="dark"]`.
Durum renk eşlemesi tüm uygulamada aynıdır: kırmızı=Tekrar/öğreniliyor, amber=Zor/genç, yeşil=İyi/olgun, mavi=Kolay/yeni.

## Yerleşim

- İskelet: `header.top` → `main` (kayan) → `nav.tabs` (alt sekmeler, şu an 4 sütun). Yeni sekme eklenirse `grid-template-columns` güncellenir ve 5'i geçmez.
- Her yatay blok `.gut` (16px + safe-area) ve `.inner` (max 640px, ortalı) kullanır.
- Ekran içeriği `main .inner` içinde 16px aralıklı `<section>`'lardır:
  - `section.sheet` → beyaz kart; `section.sheet.stack` → dikey 12px aralık
  - `section.stack.plain` → kartsız grup (ör. segment seçici)
- Bölüm başlığı `<h2>` (küçük, büyük harf, `--ink-soft`); kart içi başlık `<h3>`.

## Hazır bileşenler

- Butonlar: `.btn`, `.btn.primary`, `.btn.danger`, `.btn.wide`, `.iconbtn` (min. 44px dokunma alanı korunmalı)
- Seçiciler: `.seg` (segment, `aria-pressed`), `.filters` / `.tabsmini` (hap butonlar), `.switch` (checkbox anahtar)
- Etiketler: `.chip` + `.new/.learn/.young/.mature/.weak`, `.score.good/.mid/.bad`, `.errn`
- Listeler: `.slist` (cümle listesi, `.de` + `.tr` + `.meta`), `.weaklist`, `.decklist`, `.setrow` (ayar satırı)
- Formlar: `.field` (label + input/textarea), cümle girişi için `input.sent` / `textarea.ans`
- İstatistik: `.tiles` / `.tile`, `.distbar`, `.legend`, `.chart svg`
- Geri bildirim: `.note`, `.empty`, `toast(msg)`, modal için `openModal(html)` / `closeModal()` / `confirmBox(...)` (mobilde alttan açılan sayfa, 600px+ ortada)
- İkonlar: `ICON` nesnesindeki satır içi SVG'ler (24×24 viewBox, `stroke="currentColor"`, stroke-width 1.8–2). Yeni ikon da bu stilde eklenir; ikon kütüphanesi veya emoji kullanılmaz.

## Yeni ekran eklemek

1. `viewXxx()` adında, HTML string döndüren bir fonksiyon yaz (`viewHome`, `viewStats` örnek alınır).
2. `render()` içinde sekmeye bağla; gerekirse `nav.tabs`'a `data-tab` butonu ekle.
3. Etkileşimleri `data-act="..."` öznitelikleriyle ver, mevcut olay yönlendirmesine ekle.
4. Kullanıcı verisini HTML'e basarken mevcut kaçış (escape) yardımcısını kullan.

## Kurallar

- Tüm arayüz metni **Türkçe**, Almanca cümleler olduğu gibi. Kısa, samimi "sen" dili.
- Mobil öncelikli: 360px genişlikte yatay kaydırma olmamalı; uzun cümlelere `overflow-wrap:anywhere`, flex/grid çocuklarına `min-width:0`.
- Sayılar `font-variant-numeric: tabular-nums`.
- Erişilebilirlik: gerçek `<button>`, `aria-pressed` / `aria-current`, `:focus-visible` görünür kalır, ikon-tek butonlara `aria-label`.
- `prefers-reduced-motion` korunur; animasyon kısa (≤0.3s) ve sadece geçiş amaçlı.
- Harici kaynak sadece Google Fonts; yeni kütüphane ekleme (uygulama çevrimdışı çalışmalı).
- `index.html` değiştiyse `sw.js` içindeki `VERSION` değerini artır (ör. `satzheft-v2` → `satzheft-v3`).

## Doğrulama (her tasarım değişikliğinden sonra)

Playwright önceden kurulu. Açık ve karanlık modda telefon genişliğinde ekran görüntüsü al ve bak:

```bash
node -e '
const { chromium } = require("playwright");
(async () => {
  const b = await chromium.launch();
  for (const scheme of ["light", "dark"]) {
    const p = await b.newPage({ viewport: { width: 375, height: 812 }, colorScheme: scheme });
    await p.goto("file://" + process.cwd() + "/index.html");
    // gerekirse: await p.click("[data-tab=stats]");
    await p.screenshot({ path: `/tmp/satzheft-${scheme}.png`, fullPage: true });
    const overflow = await p.evaluate(() => document.documentElement.scrollWidth > innerWidth);
    console.log(scheme, "yatay taşma:", overflow);
  }
  await b.close();
})();'
```

Kontrol listesi: yatay taşma yok · karanlık modda okunabilir · renkler token'dan · cümleler serif · dokunma alanları ≥44px · metinler Türkçe.
