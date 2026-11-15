# Tür: Haber paylaşımı

Haber sitesi ana sayfası, haber detayı, kategori sayfası, son dakika ve köşe yazısı sayfaları.
Amaç **güvenilirlik ve taranabilirlik**: okur 5 saniyede neyin önemli olduğunu görmeli, kaynağı ve tarihi hemen bulabilmeli.

## Tasarım dili

- His: gazete sayfası. Siyah mürekkep, kırık beyaz kâğıt (`--bg:#fbfaf7`), ince çizgiler ve kalın bölüm çizgileri (`border-top:3px solid var(--rule)`).
- Tek vurgu rengi kırmızıdır (`--accent:#b3261e`). Sadece kategori etiketi (kicker), seçili kategori ve "Son dakika" için kullanılır.
- Yazı tipleri: başlıklar ve spot serif ile (`Newsreader`, 700), arayüz, künye ve gövde sans ile (`Inter`). Haber detayında gövde metni serif ve 19px olabilir.
- Hiyerarşi boyutla ve kalınlıkla kurulur, renkle kurulmaz. Manşet 44px, ikincil 20px, liste 17px.
- Tam token seti `ornekler/haber.html` içindedir.

## Ana sayfa: yapı

1. **Künye başlığı** (`.mast`): logo, tarih. Altında çift çizgi.
2. **Kategori çubuğu** (`nav.cats`): mobilde yatay kayar. Seçili kategori kırmızı alt çizgiyle gösterilir.
3. **Son dakika şeridi** (`.live`): tek satır, kırmızı etiket, sadece gerçekten son dakika olduğunda gösterilir. Yanıp sönme veya kayan yazı kullanılmaz.
4. **Manşet bloğu** (`.front`): masaüstünde 2/3 manşet ve 1/3 yan liste, mobilde tek sütun. Manşet sırası: görsel, altyazı ve kredi, kategori, başlık, spot, künye.
5. **Bölümler** (`.sec`): kalın çizgi ve büyük harfli bölüm adı. Izgara mobilde 1, tablette 2, masaüstünde 4 sütun.
6. **Altbilgi:** yayın ilkeleri, düzeltme talebi, iletişim.

## Haber detay sayfası: zorunlu öğeler

- Kategori etiketi, başlık, spot.
- **Künye:** muhabir, yayın saati (`<time datetime>`), varsa "Güncellendi 11.05", okuma süresi.
- Ana görsel, altyazı ve **fotoğraf kredisi** ("Fotoğraf: ...").
- Gövde en fazla 680px genişlikte. Ara başlık, alıntı ve bilgi kutusu kullanılabilir.
- **Kaynaklar:** metin içinde bağlantı verilir ve sonda "Kaynaklar" listesi bulunur.
- **Düzeltme notu:** Haber değiştiyse en üstte veya en altta tarihli bir kutu gösterilir ("15 Kasım 11.05: Proje uzunluğu 16 km olarak düzeltildi").
- İlgili haberler (3–4 adet) ve paylaş butonları (bağlantıyı kopyala, sistem paylaşımı).

## İçerik türü etiketleri (zorunlu ve görünür)

| Tür | Görünüm |
|---|---|
| Haber | kırmızı kategori etiketi |
| Görüş / köşe yazısı | mor `--opinion` etiket, açık mor kart zemini, "… yazdı" |
| Sponsorlu içerik | sarı `.tag.sp` rozet ve "… işbirliğiyle" |
| Analiz, Açıklayıcı, Doğrulama | ayrı etiket, haber ile karıştırılmaz |

## Yasaklar

- Tık tuzağı başlık yazılmaz ("Görenler şok oldu", "Bakın ne oldu"). Başlık haberi kendisi söyler.
- Kaynaksız iddia ve tarihsiz haber yayımlanmaz.
- Görüş ve sponsorlu içerik haber gibi gösterilmez.
- Otomatik oynayan video, tam ekran açılır pencere ve içeriği iten reklam alanı tasarlanmaz. Reklam alanı varsa "Reklam" etiketiyle ve sabit boyutta olur.
- Örnek haberlerde gerçek kişilere söz veya olay uydurulmaz. Kurgusal içerik "örnek" olarak işaretlenir.
