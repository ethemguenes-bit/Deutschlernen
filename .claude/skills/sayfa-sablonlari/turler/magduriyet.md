# Tür: Mağduriyet / tanıklık paylaşımı

Bir kişinin yaşadığı haksızlığı (işyeri, kira, tüketici, ayrımcılık, kamu hizmeti, sağlık vb.) anlattığı ve destek topladığı sayfa.
Amaç acıyı sergilemek değil, kişiye **onur, güvenlik ve görünürlük** sağlamak.

## Tasarım dili

- His: sakin, sıcak, ciddi, güven veren. Sansasyon yok, şok edici görsel yok, alarm kırmızısı yok.
- Zemin sıcak kâğıt tonudur (`--bg:#faf7f2`). Vurgu rengi koyu petroldür (`--accent:#1d6a64`). Kırmızı (`--alert`) yalnızca gerçek tehlike uyarısında kullanılır.
- Yazı tipleri: anlatı serif ile (`Source Serif 4`, 19px, satır aralığı 1.7), arayüz sans ile (`Public Sans`).
- Tek sütun, en fazla 680px. Anlatı kartsız ve doğrudan okunur, yan bilgiler kart içinde durur.
- Tam token seti (açık ve karanlık mod) `ornekler/magduriyet.html` içindedir.

## Hikâye sayfası: bölüm sırası

1. **İçerik notu** (`.cw`): Konuyu tek satırda söyler ve okuyucuya çıkış yolu bırakır. Ağır içerikte (şiddet, istismar, intihar) metin varsayılan olarak kapalı gelir ve "Okumak istiyorum" butonuyla açılır.
2. **Etiketler:** Kategori, "Anonim paylaşım" ve doğrulama durumu.
3. **Başlık:** Kişinin kendi sözüyle, tırnak içinde.
4. **Künye:** Ad yerine rol ve yaş ("Depo çalışanı, 34"), il, tarih (`<time>`), okuma süresi.
5. **Anlatı:** Bir çekilmiş alıntı (`blockquote`). Gizlenen bilgiler `.redact` kutusuyla gösterilir.
6. **Neler oldu:** Zaman çizelgesi (`.timeline`).
7. **Sunulan belgeler:** Bulanık ya da kapalı küçük resimler ve "kişisel bilgiler gizlendi" notu.
8. **Ne istiyor?:** Somut ve ölçülü talepler.
9. **Dayanışma:** "Yanındayım" sayacı ve paylaş butonu. Beğeni, emoji tepkisi veya öfke butonu kullanılmaz.
10. **Destek kutusu** (`.help`): "Benzer bir durum mu yaşıyorsun?" sorusu, destek yolları ve acil durumda 112.
11. **Yanıt hakkı ve sorumluluk notu:** "Anlatım paylaşan kişiye aittir. Adı geçen kurumların yanıt hakkı vardır."

Doğrulama durumu etiketleri her zaman açıkça gösterilir:
- "Doğrulanmadı": nötr gri
- "Belge sunuldu · editör inceledi": yeşil
- "Kurum yanıt verdi": mor, yanıt sayfanın sonunda gösterilir

## Paylaşım formu (hikâyeni anlat)

- **Anonimlik varsayılan olarak açık.** Ad ve iletişim bilgisi isteğe bağlıdır ve yayımlanmayacağı yazılır.
- Adımlar ilerleme göstergesiyle verilir: Ne oldu → Ne zaman / nerede → Belgeler → Ne istiyorsun → Önizleme ve onay.
- Metin alanının üstünde uyarı bulunur: "Başka kişilerin adını, TC kimlik, telefon, adres ve plaka bilgisini yazma. Bu bilgileri biz gizleriz ama sen de dikkat et."
- Yüklenen görsellerde yüz ve belge bulanıklaştırma ön izlemesi gösterilir.
- Gönderilmeden önce açık onay kutuları bulunur: anlatının kendi deneyimi olduğu, yayımlanma koşulları, istenince geri çekilebileceği.
- Taslak otomatik kaydedilir ve bu kullanıcıya söylenir ("Taslağın bu cihazda saklanıyor").

## Liste sayfası

- Kartlarda kategori, il, tarih, doğrulama etiketi, 2 satırlık alıntı ve "Yanındayım" sayısı bulunur. Görsel yok ya da sadece kategori ikonu kullanılır.
- Filtreler: kategori, il, doğrulama durumu. Sıralama varsayılan olarak "en yeni" olur; "en çok destek alan" sıralaması isteğe bağlıdır.

## Yasaklar ve hukuki dikkat

- Doğrulanmamış iddialarda gerçek kişi veya şirket adı açık yazılmaz, `.redact` ile gizlenir. Hakaret ve ithamı büyüten başlık önerilmez.
- Mağdurun yüzü, adresi, işyeri ve çocuklarının bilgisi gösterilmez.
- Kanlı, yaralı veya travmatik görsel kullanılmaz. Gerekirse illüstrasyon ya da düz renk kullanılır.
- Bağış veya ödeme bölümü eklenecekse doğrulanmış bir alıcı ve şeffaflık notu olmadan tasarlanmaz.
- Destek hatları için gerçek numara uydurulmaz. Sadece 112 (acil) yazılır, diğerleri kullanıcıdan alınır veya yer tutucu bırakılır.
