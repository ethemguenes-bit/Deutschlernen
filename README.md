# Deutschlernen · Satzheft

Almanca cümle ezber programı (Anki tarzı aralıklı tekrar). Tek dosya: `index.html` — tarayıcıda açmanız yeterli.

- **Ana ekran:** üstte arama ("Ne çalışmak istersin?"), bugünkü kartlar halkası ve tek "Çalışmaya başla" düğmesi; seviye, konu ve yön seçim kutularıyla seçilir. Altında **Kaldığın yerden devam et** (Rehber'de son açılan sayfa), seviye ilerlemesi ve 6 kutuluk **Hızlı erişim**. Alt menü: Ana sayfa · Cümleler · Rehber · Oyun · İlerleme. Rehber sekmesi A1–B1 / B2 / C1 bölümlerini ve dersleri tek ekranda listeler; seviye yolu İlerleme sekmesindedir.
- 800 hazır cümle (A1, A2 ve B1 için her biri 200, ayrıca B1 · Almanca İfadeler: günlük konuşmada sık kullanılan 200 kalıp ifade), konulara göre destelere ayrılmış
- Aralıklı tekrar: Tekrar / Zor / İyi / Kolay puanlaması; yanlış cümleler dakikalar içinde yeniden gelir, aralıkları kısalır
- Üç yön: Türkçe → Almanca, Almanca → Türkçe, Dinle → Yaz
- Yazılan cevabı kelime kelime karşılaştırma, Almanca seslendirme (normal ve yavaş)
- "Zayıf cümleler" alıştırması: en çok yanlış yapılanlar
- Öğren > Gramer: 24 kısa ders (A1, A2, B1 için 8'er): kural, renkli görsel özet, örnekler, Türkçe konuşanlar için ipuçları, mini test ve konuyla ilgili cümlelerle alıştırma
- Öğren > Hikayeler: 15 kısa hikaye (A1, A2, B1 için 5'er); kelimeye dokununca anlamı, cümle çevirisi, sesli dinleme, anlama soruları, cümleyi kartlara ekleme
- Kelime eşleştirme oyunu: 2400 kelime (A1: 650, A2: 650, B1: 1100), renkli artikeller (der/die/das), karıştırılan kelimeler daha sık gelir
- Seviye seçimi: Tümü / A1 / A2 / B1 / Benim
- Tek tek veya toplu (`Türkçe;Almanca`) cümle ekleme, düzenleme, silme
- İstatistik: seri, doğruluk, 30 günlük grafik, 7 günlük tekrar tahmini, en çok yanlış yapılanlar
- İlerleme tarayıcıda saklanır; yedeği dışa/içe aktarma

## Wegweiser · Almanca rehber (`rehber.html`)

Satzheft'in üst kısmındaki **Rehber** düğmesiyle açılır. A1–B1, B2, C1 ve Kartlar olmak üzere dört sekmesi var:

- **A1–B1:** Alltagsdeutsch (20 konu, 219 cümle), Bildbeschreibungen (kalıplar + 15 gerçek fotoğraf — Wikimedia Commons, özgür lisanslı; metinler fotoğrafa göre, resimli/resimsiz), Gemeinsam etwas planen (kalıplar + 14 diyalog), B1 wichtige Verben (302 fiil, edat/hâl bilgisi ve örnek, alfabetik), B1 starke Verben (+ test), B1 Wortschatz (A1/A2/B1 kelimeleri), B1 Briefe (kalıplar + 91 örnek mektup, 7 türe göre gruplu, aramalı), Unregelmäßige Verben (124 fiil), Zeitformen (+ her fiil için çekim aracı), Relativsätze, Konjunktionen (+ alıştırma)
- **B2:** Verben mit Präpositionen (113 fiil, arama + alıştırma), B2 Briefe (11 mektup), B2+ Beruf Briefmuster (10 iş yazışması), B2 Wortschatz (158 kelime), Präsentationen (8), Problemlösungen (10 diyalog), Diskussionen (10 konu), Konjunktiv I, Konjunktiv II, Als / Als ob / Als wenn, Präpositionen mit Genitiv (+ alıştırma), Relativpronomen im Genitiv, Zweiteilige Konnektoren, Nomen-Verb-Verbindungen, Konnektoren, Redemittel, Passiv, sıfat çekimi
- **C1:** Zitate (10 tartışma konusu), Präsentationen (10), wichtige Themen (12 konu), Wortschatz (400 kelime, 8 kategori, örnekli), Briefe (şikâyet, okur mektubu, resmî), Idiomatische Verben, Modalpartikeln, Konnektoren (+ alıştırma), Passiv-Ersatzformen, Grafikbeschreibung, Nomen-Verb-Verbindungen, Sprichwörter (40), Redewendungen, Nominalisierung (100 madde), Redemittel, Partizipialkonstruktionen, subjektif modal fiiller
- **Kartlar:** yıldızlanan her cümle/kelime/fiil bir kart olur; aralıklı tekrarla ve hazır destelerle çalışılır
- Her fiil sayfasında Präsens, Präteritum, Perfekt, Plusquamperfekt, Futur I, Konjunktiv II ve Imperativ çekimleri (`rehber/engine.js` üretir)
- Almanca seslendirme, Türkçeyi gizleyip kendini sınama, tüm bölümlerde arama

İçerik `rehber/` klasöründeki veri dosyalarındadır (düz metin satırları; yeni cümle eklemek için ilgili dosyaya satır eklemek yeterli).

`linguaflash-eski.html` önceki sürümdür (ilerleme kaydetmiyordu).

## Telefona uygulama olarak kurma

Program GitHub Pages ile yayınlanır: https://ethemguenes-bit.github.io/Deutschlernen/

Android'de Chrome ile açıp menüden **Uygulamayı yükle** (veya **Ana ekrana ekle**) seçin. İlk açılıştan sonra internetsiz de çalışır.
İlerleme o telefonun tarayıcısında saklanır; başka cihaza geçerken **Ayarlar → Yedeği dışa aktar** kullanın.

Uygulama dosyaları değişince `sw.js` içindeki `VERSION` değerini artırın; telefonlar yeni sürümü bir sonraki açılışta alır.
