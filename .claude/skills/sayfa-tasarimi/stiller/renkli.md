# Stil: Renkli / oyunsu

Canlı, eğlenceli, ödüllendiren bir öğrenme oyunu hissi. Kalın yuvarlak yazılar, büyük "basılabilir" butonlar, her doğru cevapta küçük bir kutlama.
Özgün bir stildir: başka bir uygulamanın maskotunu, logosunu, ikonlarını veya renk düzenini birebir kopyalama.

## Nasıl uygulanır

Token **adları Defter ile aynıdır**, yani mevcut sınıflar (`.sheet`, `.btn`, `.chip`, `.rate`...) bu stilde de çalışır.
- Bütün uygulamayı bu stile geçirmek: aşağıdaki token bloklarını `:root` bloklarının yerine koy, sonra "Bileşen farkları" CSS'ini ekle.
- Defter'in yanında seçilebilir tema olarak sunmak: blokları `:root[data-style="renkli"]` altına yaz (karanlık mod: `:root[data-style="renkli"]:not([data-theme="light"])` medya sorgusu içinde ve `:root[data-style="renkli"][data-theme="dark"]`), seçimi `S.settings` içinde sakla ve `<html>`'e `data-style` olarak uygula.

## Yazı tipleri

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Fredoka:wght@500;600;700&family=Nunito:wght@400;600;700;800&display=swap">
```
- `--f-ui: 'Nunito', system-ui, sans-serif` → bütün arayüz metni
- `--f-sent: 'Nunito', system-ui, sans-serif` → cümleler (serif yok; boyut ve 700 kalınlıkla ayrışır)
- `--f-display: 'Fredoka', 'Nunito', sans-serif` → marka, büyük sayılar, kart başlıkları, buton yazıları

## Tokenlar

Kontrast ölçüldü: bütün metin/zemin çiftleri ≥ 4.5:1.

```css
:root{
  --paper:#fff7ea; --sheet:#ffffff; --grid:transparent; --ink:#2a1e5c; --ink-soft:#655c8a; --line:#efe4d2;
  --accent:#6a45f0; --accent-ink:#ffffff; --accent-bg:#efeaff; --accent-edge:#4b2bc4;
  --red:#bf3025; --red-bg:#ffe7e3; --red-edge:#8f1f17;
  --green:#0f7646; --green-bg:#dcf5e7; --green-edge:#0a5232;
  --amber:#965500; --amber-bg:#fff0cc; --amber-edge:#6b3d00;
  --sun:#ffc23d; --sky:#2bb8d1; --pink:#ff7cb6;   /* sadece süs: rozet, konfeti, ilerleme */
  --shadow:0 2px 0 var(--line);
  --r:20px;
}
/* karanlık */
{
  --paper:#16122a; --sheet:#211b3b; --grid:transparent; --ink:#f4f0ff; --ink-soft:#b3aad8; --line:#352d5c;
  --accent:#a68cff; --accent-ink:#160f33; --accent-bg:#2f2660; --accent-edge:#6f55d6;
  --red:#ff8a7e; --red-bg:#3d1d24; --red-edge:#b8564c;
  --green:#5fdba0; --green-bg:#163427; --green-edge:#2f9a68;
  --amber:#ffc35c; --amber-bg:#3a2c12; --amber-edge:#b3852f;
  --sun:#ffc23d; --sky:#4fd0e6; --pink:#ff94c4;
  --shadow:0 2px 0 rgba(0,0,0,.35); color-scheme:dark;
}
```
Süs renkleri (`--sun`, `--sky`, `--pink`) üzerine metin yazılacaksa metin rengi `--ink` (açık modda `#2a1e5c`) olmalı, beyaz değil.

## Bileşen farkları

Bu CSS, `index.html`'deki ana `<style>` bloğunun **sonuna** (veya ondan sonra gelen bir bloğa) eklenmeli; özgüllükler eşit olduğu için sıra önemlidir.

```css
body{background-image:none;font-weight:600}
.brand,.today strong,.tile strong,h3,.btn{font-family:var(--f-display)}
.brand b{color:var(--accent)}
h2{letter-spacing:.04em;font-weight:800}
.sheet{border-width:2px;box-shadow:0 4px 0 var(--line)}
.prompt,.answer .de{font-weight:700}

/* "basılabilir" butonlar: alt kenar = koyu ton, basınca çöker */
.btn{border-width:2px;border-radius:16px;min-height:50px;box-shadow:0 4px 0 var(--line);transition:transform .08s,box-shadow .08s}
.btn:active{transform:translateY(3px);box-shadow:0 1px 0 var(--line)}
.btn.primary{box-shadow:0 4px 0 var(--accent-edge);text-transform:uppercase;letter-spacing:.04em}
.btn.primary:active{box-shadow:0 1px 0 var(--accent-edge)}

/* puan butonları dolu renkli */
.rate button{border:0;color:#fff;min-height:64px;border-radius:16px;transition:transform .08s}
.rate button:active{transform:translateY(3px)}
.rate .g1{background:var(--red);box-shadow:0 4px 0 var(--red-edge)}
.rate .g2{background:var(--amber);box-shadow:0 4px 0 var(--amber-edge)}
.rate .g3{background:var(--green);box-shadow:0 4px 0 var(--green-edge)}
.rate .g4{background:var(--accent);box-shadow:0 4px 0 var(--accent-edge)}
.rate .g1 b,.rate .g2 b,.rate .g3 b,.rate .g4 b,.rate button span{color:inherit}  /* .rate .gN b kuralını ezmek için aynı özgüllük */
.rate button span{opacity:.85}

.chip{font-weight:800;border-radius:8px}
.sbar .meter{height:14px;background:var(--line)}
.sbar .meter i{background:linear-gradient(90deg,var(--green),var(--sky))}
.seg,.filters button,.tabsmini button{border-width:2px}
nav.tabs button[aria-current="page"] svg{background:var(--accent-bg);border-radius:12px;padding:3px;width:30px;height:30px}
textarea.ans{border:2px solid var(--line);border-radius:16px}
.modal{border-radius:24px 24px 0 0}
```
Karanlık modda `.rate button` metin rengi `#fff` yerine `var(--accent-ink)` olmalı (dolgu renkleri açık olduğu için).

## Kutlama ve geri bildirim

- Doğru cevap (İyi/Kolay): kart 0.25s hafifçe büyüyüp küçülür (`scale(1.03)`), cevap alanının üstünde yeşil şerit "Harika!" / "Süper!" çıkar.
- Seans sonu: büyük Fredoka başlık ("Bugünlük tamam!"), seri sayısı `--sun` zeminli rozet içinde, 20–30 parçalık CSS konfeti (`--sun`, `--sky`, `--pink`, `--accent`), 1.5 saniye sonra kaybolur.
- Yanlış (Tekrar): kart 0.3s yatay sallanır (`translateX` ±6px); kırmızı yazı kalır, ceza hissi verilmez.
- Bütün animasyonlar `@media (prefers-reduced-motion:reduce)` altında kapatılır, konfeti hiç gösterilmez.

## Dil ve ton

Kısa, enerjik, cesaretlendirici: "Hadi başlayalım!", "3 günlük seri, devam!", "Bunu birazdan tekrar soracağım." Ünlem en fazla bir tane. Emoji yerine `ICON` stili SVG kullan.

## Kontrol listesi (genel listeye ek)

Butonlar basınca çöküyor · puan butonları dolu renkli ve yazıları okunuyor (açık + karanlık) · animasyonlar reduced-motion'da kapalı · süs renkleri üzerinde beyaz metin yok.
