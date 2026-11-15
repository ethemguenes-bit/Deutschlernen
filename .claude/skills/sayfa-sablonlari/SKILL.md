---
name: sayfa-sablonlari
description: Satzheft dışındaki web sayfalarını türüne göre tasarlarken kullan. Şu an iki tür var: mağduriyet / tanıklık paylaşım sayfaları (şikâyet, hak ihlali, yaşanan haksızlık, mağdur hikâyesi, kampanya, dayanışma) ve haber paylaşım sayfaları (haber sitesi, manşet, haber detayı, son dakika, köşe yazısı, bülten). Her tür için tasarım dili, renk/yazı tokenları, zorunlu bölümler, etik ve hukuki kurallar ve çalışan bir örnek HTML içerir.
---

# Sayfa şablonları

Kullanıcı bir sayfa türü istediğinde:

1. Aşağıdaki tablodan türü bul. `turler/<tür>.md` dosyasını oku: tasarım dili, zorunlu bölümler ve yasaklar oradadır.
2. `ornekler/<tür>.html` dosyasını başlangıç noktası olarak kullan. Token adlarını ve yapıyı koru, içeriği kullanıcınınkiyle değiştir.
3. Aşağıdaki **ortak kurallara** uy ve **doğrula**.

| Tür | Kurallar | Örnek | Ne zaman |
|---|---|---|---|
| Mağduriyet / tanıklık paylaşımı | `turler/magduriyet.md` | `ornekler/magduriyet.html` | şikâyet, mağduriyet, hak ihlali, tanıklık, kampanya, dayanışma, "başıma gelenler" |
| Haber paylaşımı | `turler/haber.md` | `ornekler/haber.html` | haber sitesi, manşet, haber detayı, son dakika, köşe yazısı, bülten |

Tür belirsizse (ör. "bir sayfa yap") kullanıcıya hangi tür olduğunu sor. Listede olmayan bir tür istenirse en yakın türü temel al ve sonunda bu skill'e yeni bir tür eklemeyi öner.

## Ortak kurallar

- **Tek dosya HTML.** CSS `<style>` içinde, harici kaynak sadece Google Fonts. JS sadece gerektiğinde ve küçük.
- **Tokenlar:** Renkler `:root` üzerinde CSS değişkeni olarak tanımlanır. Sabit renk yazılmaz. Karanlık mod üç yerde tanımlanır: `:root`, `@media (prefers-color-scheme: dark){:root:not([data-theme="light"])}` ve `:root[data-theme="dark"]`.
- **Kontrast:** Bütün metin ve zemin çiftleri en az 4.5:1 olmalı, açık ve karanlık modda ölçülür.
- **Mobil öncelikli:** 375px genişlikte yana taşma olmaz. Kenar boşluğu en az 16px (safe-area dahil). Dokunma alanları en az 44px. Uzun metinler için `text-wrap: balance` ve `overflow-wrap` kullanılır.
- **Okunabilirlik:** Uzun metin sütunu en fazla yaklaşık 65 karakter genişliğinde olur (`max-width: 680px` civarı). Gövde metni en az 16px, uzun okumada 18–19px.
- **Erişilebilirlik:** Anlamlı HTML (`header`, `nav`, `main`, `article`, `aside`, `time datetime`). Görsellere `alt` / `aria-label` verilir. `:focus-visible` görünür olur. `prefers-reduced-motion` desteklenir.
- **Dil:** Arayüz metni Türkçe (`<html lang="tr">`). Tarih biçimi "15 Kasım 2026", saat biçimi "09.40".
- **Örnek içerik:** Gerçek kişi, kurum ya da olay uydurup gerçekmiş gibi sunma. Örnek veriler kurgusal olur ve sayfada "örnek şablon" notu bulunur. Gerçek bir kurumun adı, logosu veya görünümü taklit edilmez.
- **Özgünlük:** Var olan bir sitenin (gazete, kampanya platformu) tasarımını birebir kopyalama. Türün genel kurallarını kullan, kimliği özgün tut.

## Doğrulama

Playwright önceden kurulu. Her sayfayı 375px ve 1200px genişlikte, açık ve karanlık modda aç, ekran görüntüsüne bak, yana taşmayı kontrol et:

```bash
node -e '
const { chromium } = require("playwright");
const file = process.argv[1];
(async () => {
  const b = await chromium.launch();
  for (const s of ["light", "dark"]) for (const w of [375, 1200]) {
    const p = await b.newPage({ viewport: { width: w, height: 900 }, colorScheme: s });
    await p.goto("file://" + require("path").resolve(file));
    await p.waitForTimeout(800);
    await p.screenshot({ path: `/tmp/onizleme-${s}-${w}.png`, fullPage: true });
    console.log(s, w, "yatay taşma:", await p.evaluate(() => document.documentElement.scrollWidth > innerWidth));
  }
  await b.close();
})();' SAYFA.html
```

Dikkat: Aynı sınıf adı iki farklı bileşende kullanılmamalı. Örneğin `.badge.doc` ile belge kutusu `.doc` çakışırsa etiket dev bir kutuya dönüşür. Bileşen sınıflarına ayırt edici adlar ver.
