---
name: hat-sanati-etsy-reklam
description: İslami hat sanatı / Arapça kaligrafi duvar tabloları (Ayetel Kürsi, Felak, Nas, Bismillah, Esmaül Hüsna, metal veya cam tablolar, setler) için Etsy ürün videosu, reklam videosu, Reels/TikTok içeriği, listeleme başlığı, etiket ve reklam metni hazırlama. Kullanıcı bir tablo fotoğrafı verip "video yap", "reklam hazırla", "Etsy'de satacağım", "duvarda göster", "yakın çekim yap" dediğinde, ya da hat sanatı ürünü pazarlama/satış fikri istediğinde mutlaka kullan — "beceri" kelimesi geçmese bile. Arapça harfleri bozmadan, ürünün kendi fotoğrafından video üretme yöntemini içerir.
---

# Hat Sanatı Tablosu – Etsy Reklam ve Video

Kullanıcı Türkçe konuşan, teknik olmayan bir Etsy satıcısı. Yanıtları Türkçe, sade ve kısa ver; teknik terimleri (ffmpeg, piksel, kırpma) açıklamadan kullanma.

## En önemli kural: Arapça harfler asla bozulmamalı
Ayet ve hat yazıları kutsal metin; tek bir harfin bozulması ürünü satılamaz yapar ve alıcıyı rahatsız eder. Yapay zekâ ile görsel/video üretmek (tabloyu yeniden çizdirmek, "AI upscale", yüz/nesne üretimi) harfleri değiştirir. Bu yüzden:
- Videoyu **her zaman ürünün kendi fotoğrafından** üret: yalnızca kırp, eşit oranda ölçekle, kaydır. Bükme, perspektif çevirme, yeniden çizme yok.
- Tablonun önüne hiçbir dekor nesnesi bindirme.
- Bitirince birkaç kare çıkarıp (ffmpeg `-ss`) kendin bak; yazıların net olduğunu doğrula ve kullanıcıya söyle.
- Yakın çekimde fotoğraf kendi boyutunun ~2 katından fazla büyütülürse yumuşar; kullanıcıya daha yüksek çözünürlüklü fotoğraf iste.

## Hazır betikler (scripts/)
Gerekenler: Python 3 + Pillow + numpy, ffmpeg.

1. **Ürün odaklı yakın çekim** (kullanıcı "sadece tablo", "daha yakın", "ürün odaklı" derse — varsayılan tercih):
   `python3 scripts/closeup_video.py foto.jpg cikti.mp4 --size 1080x1080 --dur 15`
   Varsayılan: tam görünüm → sol/orta/sağ tabloya yakın çekim → tam görünüm. Tek tablo veya farklı yerleşim için odakları ver: `--focus "x,y,boyut" ...` (orijinal fotoğraf pikselleri; boyut = kırpma genişliği). Odakları seçmeden önce fotoğrafa bakıp her tablonun hat merkezini tahmin et.
2. **Sade oda içinde, uzaktan yakına** (kullanıcı "evin duvarında göster" derse):
   `pos=$(python3 scripts/room_scene.py foto.jpg sahne.png)` sonra `python3 scripts/room_video.py sahne.png cikti.mp4 $pos`
   Gri duvar, ahşap zemin, ceviz konsol, yer vazosu, bitki çizer; fotoğrafın kenarını duvara yumuşakça kaynaştırır. 12 sn, 1920×1080. Duvar rengi `base=np.array([...])` satırından değiştirilebilir. Fotoğrafta kendi duvar arka planı varsa en iyi sonuç verir.

Videoyu kullanıcıya gönder, kapak için sahne/çerçeve görselini de ekle.

## Etsy video şartları (Etsy sesi kaldırır)
- 5–15 sn (ideal 8–12), MP4, H.264, 1080p, ≤100 MB.
- Kare (1:1) veya 4:5 tercih et; 16:9 Etsy galerisinde küçük görünür. Reels/TikTok için 1080×1920.
- Ses olmadığı için mesaj görüntü ve kısa yazıyla verilmeli.

## Reklam teknikleri (araştırma özeti; ayrıntı ve kaynaklar: references/arastirma.md)
- **Boş duvar → tablolu duvar** geçişi: ilk 1–2 saniyede dikkat çeker.
- **Yakın çekim**: yaldız, parlaklık, harf detayı satar.
- **Ölçek kareleri**: koltuk/konsol üstünde, alıcı boyutu görsün.
- **Ramazan & Bayram**: iftar sofrası, fener, hilal ile; kampanyalara 1–2 ay önce başla.
- **Kişisel hikâye / samimi (UGC) tarz**: TikTok/Reels'te cilalı stüdyo videosundan iyi tutar.
- **Set satışı**: 2–3'lü setler (ör. Ayetel Kürsi + Felak + Nas) çok yaygın.

## Listeleme metni
- Başlık: ana kelime ilk 40 karakterde, sonra özellik ve özel gün. Örnek: "Islamic Wall Art Set of 3, Ayatul Kursi Surah Falaq An-Nas, Gold Metal Arabic Calligraphy, Ramadan Eid Gift, Muslim Home Decor".
- 13 etiketin hepsini doldur (islamic wall art, arabic calligraphy, ayatul kursi, quran wall art, muslim gift, ramadan decor, eid gift ...).
- Fotoğraf sırası: 1) sade arka planda ürün, 2) oda içinde ölçek, 3) harf yakın çekimi, 4) ölçü/malzeme bilgisi.
- Tablodaki ayet/sure adlarını fotoğraftaki etiketlerden doğru oku; emin değilsen kullanıcıya sor, uydurma.

Bu tavsiyelerin çoğu üçüncü taraf satıcı rehberlerinden geliyor; kullanıcıya kesin kural değil denenecek fikir olarak sun.
