// A1–B1 gramer: Zeitformen, Relativsätze, Konjunktionen.
// Ders blokları: {h} başlık, {p} paragraf (**kalın**), {table:{head,rows}}, {ex:[[de,tr]]}, {tip}, {quiz:[{q,opts,ok}]}
window.LESSONS = {};

LESSONS.zeitformen = [
  { p: 'Almancada altı zaman vardır. Günlük konuşmada en çok **Präsens**, **Perfekt** ve **Futur I** kullanılır. **Präteritum** yazılı dilde (hikâye, haber) ve *sein, haben* ile modal fiillerde konuşmada da yaygındır.' },
  { h: 'Genel bakış' },
  { table: { head: ['Zaman', 'Yapı', 'Örnek', 'Türkçe'], rows: [
    ['Präsens', 'fiil çekimli', 'Ich arbeite.', 'Çalışıyorum / Çalışırım.'],
    ['Präteritum', 'fiilin 2. hâli', 'Ich arbeitete.', 'Çalıştım / Çalışıyordum.'],
    ['Perfekt', 'haben/sein + Partizip II', 'Ich habe gearbeitet.', 'Çalıştım.'],
    ['Plusquamperfekt', 'hatte/war + Partizip II', 'Ich hatte gearbeitet.', 'Çalışmıştım.'],
    ['Futur I', 'werden + mastar', 'Ich werde arbeiten.', 'Çalışacağım.'],
    ['Futur II', 'werden + Partizip II + haben/sein', 'Ich werde gearbeitet haben.', 'Çalışmış olacağım.'],
  ] } },
  { h: '1. Präsens (şimdiki / geniş zaman)' },
  { p: 'Şimdiki zaman, alışkanlıklar ve **yakın gelecek** için kullanılır. Gelecek için çoğu zaman bir zaman zarfı yeter: *Morgen fahre ich nach Berlin.*' },
  { table: { head: ['', 'machen', 'arbeiten', 'fahren', 'sein'], rows: [
    ['ich', 'mache', 'arbeite', 'fahre', 'bin'], ['du', 'machst', 'arbeitest', 'fährst', 'bist'], ['er/sie/es', 'macht', 'arbeitet', 'fährt', 'ist'],
    ['wir', 'machen', 'arbeiten', 'fahren', 'sind'], ['ihr', 'macht', 'arbeitet', 'fahrt', 'seid'], ['sie/Sie', 'machen', 'arbeiten', 'fahren', 'sind'],
  ] } },
  { tip: 'Güçlü fiillerde ünlü değişimi (a → ä, e → i/ie) sadece **du** ve **er/sie/es** ile olur: ich fahre – du fährst – er fährt – wir fahren.' },
  { h: '2. Perfekt (konuşma dilinde geçmiş)' },
  { p: 'Yapı: **haben / sein** (çekimli, 2. sırada) + **Partizip II** (cümlenin sonunda).' },
  { p: '**sein** ile kullanılanlar: yer değiştirme (gehen, fahren, fliegen, kommen), durum değişimi (aufwachen, einschlafen, sterben, werden) ve *sein, bleiben, passieren*. Geri kalan fiillerin çoğu **haben** alır.' },
  { table: { head: ['Fiil türü', 'Kural', 'Örnek'], rows: [
    ['Zayıf (düzenli)', 'ge- + kök + -t', 'machen → gemacht, arbeiten → gearbeitet'],
    ['Güçlü (düzensiz)', 'ge- + (değişen) kök + -en', 'schreiben → geschrieben, finden → gefunden'],
    ['Karma', 'ge- + değişen kök + -t', 'bringen → gebracht, denken → gedacht'],
    ['Ayrılabilen', 'ön ek + ge + kök', 'einkaufen → eingekauft, anrufen → angerufen'],
    ['Ayrılamayan (be-, ver-, er-, ent-, ge-, zer-, emp-, miss-)', 'ge- yok', 'bezahlen → bezahlt, verstehen → verstanden'],
    ['-ieren ile bitenler', 'ge- yok', 'studieren → studiert, telefonieren → telefoniert'],
  ] } },
  { ex: [['Gestern habe ich lange gearbeitet.', 'Dün uzun süre çalıştım.'], ['Wir sind am Wochenende nach Hamburg gefahren.', 'Hafta sonu Hamburg\'a gittik.'], ['Hast du schon eingekauft?', 'Alışverişi yaptın mı?'], ['Der Zug ist pünktlich angekommen.', 'Tren zamanında vardı.']] },
  { h: '3. Präteritum (yazı dilinde geçmiş)' },
  { p: 'Zayıf fiiller: kök + **-te** (machte, arbeitete). Güçlü fiiller kendi biçimini alır (ging, kam, sah) ve **ich / er** biçiminde ek almaz.' },
  { table: { head: ['', 'machen', 'gehen', 'sein', 'haben', 'können'], rows: [
    ['ich', 'machte', 'ging', 'war', 'hatte', 'konnte'], ['du', 'machtest', 'gingst', 'warst', 'hattest', 'konntest'], ['er/sie/es', 'machte', 'ging', 'war', 'hatte', 'konnte'],
    ['wir', 'machten', 'gingen', 'waren', 'hatten', 'konnten'], ['ihr', 'machtet', 'gingt', 'wart', 'hattet', 'konntet'], ['sie/Sie', 'machten', 'gingen', 'waren', 'hatten', 'konnten'],
  ] } },
  { tip: 'Konuşurken "Ich habe gehabt", "Ich bin gewesen" yerine çoğunlukla **ich hatte**, **ich war**, **ich konnte**, **ich musste** denir.' },
  { h: '4. Plusquamperfekt (geçmişten önceki geçmiş)' },
  { p: 'Geçmişte bir olaydan **daha önce** olanı anlatır. Yapı: **hatte / war** + Partizip II. Çoğu zaman *nachdem* ile kullanılır.' },
  { ex: [['Nachdem ich gegessen hatte, bin ich spazieren gegangen.', 'Yemek yedikten sonra yürüyüşe çıktım.'], ['Als wir ankamen, war der Zug schon abgefahren.', 'Vardığımızda tren çoktan kalkmıştı.']] },
  { h: '5. Futur I (gelecek zaman)' },
  { p: 'Yapı: **werden** (çekimli) + **mastar** (sonda). Plan, tahmin, söz ve niyet bildirir. *Ich werde dich anrufen.* Tahmin: *Er wird wohl krank sein.* (Herhalde hastadır.)' },
  { table: { head: ['', 'werden', 'örnek'], rows: [
    ['ich', 'werde', 'Ich werde morgen kommen.'], ['du', 'wirst', 'Du wirst das schaffen!'], ['er/sie/es', 'wird', 'Es wird regnen.'],
    ['wir', 'werden', 'Wir werden umziehen.'], ['ihr', 'werdet', 'Ihr werdet sehen.'], ['sie/Sie', 'werden', 'Sie werden anrufen.'],
  ] } },
  { h: '6. Futur II' },
  { p: 'Gelecekte bir anda **tamamlanmış** olacak eylem ya da geçmişe dair tahmin: *Bis Freitag werde ich den Bericht geschrieben haben.* (Cumaya kadar raporu yazmış olacağım.) B1 seviyesinde tanımak yeterlidir.' },
  { tip: 'Fiil sayfalarında her fiilin bu zamanlardaki tam çekimini görebilirsin: B1 wichtige Verben veya Unregelmäßige Verben listesinden bir fiile dokun.' },
  { h: 'Mini test' },
  { quiz: [
    { q: 'Gestern ___ ich ins Kino gegangen.', opts: ['habe', 'bin', 'war', 'werde'], ok: 1 },
    { q: 'Wir ___ gestern lange gearbeitet.', opts: ['sind', 'haben', 'hatten', 'werden'], ok: 1 },
    { q: 'Partizip II von "verstehen":', opts: ['geversteht', 'verstanden', 'gestanden', 'verstehte'], ok: 1 },
    { q: 'Morgen ___ es regnen.', opts: ['wird', 'ist', 'hat', 'wurde'], ok: 0 },
    { q: 'Nachdem er gegessen ___, ging er schlafen.', opts: ['hat', 'hatte', 'war', 'ist'], ok: 1 },
    { q: 'Präteritum von "gehen" (ich):', opts: ['gehte', 'ging', 'gang', 'gegangen'], ok: 1 },
    { q: 'Partizip II von "einkaufen":', opts: ['geeinkauft', 'eingekauft', 'einkaufte', 'eingekaufen'], ok: 1 },
    { q: 'Was ___ passiert?', opts: ['hat', 'ist', 'wird', 'habe'], ok: 1 },
  ] },
];

LESSONS.relativ = [
  { p: 'Relativsatz (ilgi cümlesi) bir ismi daha ayrıntılı tanımlar. Türkçede **-an, -en, -dığı** ekleriyle kurulan yapıya karşılık gelir: *der Mann, **der** dort steht* = orada **duran** adam.' },
  { h: 'Kural' },
  { p: '1) İlgi zamirinin **cinsi ve sayısı** tarif edilen isimden gelir. 2) **Hâli** (Nominativ, Akkusativ, Dativ, Genitiv) ilgi cümlesinin içindeki görevinden gelir. 3) Çekimli fiil ilgi cümlesinin **sonuna** gider. 4) İlgi cümlesi virgülle ayrılır.' },
  { table: { head: ['', 'maskulin', 'feminin', 'neutral', 'Plural'], rows: [
    ['Nominativ', 'der', 'die', 'das', 'die'], ['Akkusativ', 'den', 'die', 'das', 'die'], ['Dativ', 'dem', 'der', 'dem', '**denen**'], ['Genitiv', '**dessen**', '**deren**', '**dessen**', '**deren**'],
  ] } },
  { tip: 'Tablo neredeyse belirli artikel tablosuyla aynı. Farklı olanlar sadece kalın yazılanlar: Dativ çoğul **denen** ve tüm Genitiv biçimleri.' },
  { h: 'Nominativ: ilgi zamiri özne' },
  { ex: [['Das ist der Mann, der neben uns wohnt.', 'Bu, yanımızda oturan adam.'], ['Ich habe eine Kollegin, die sehr gut kocht.', 'Çok iyi yemek yapan bir iş arkadaşım var.'], ['Das Kind, das dort spielt, ist mein Sohn.', 'Orada oynayan çocuk benim oğlum.']] },
  { h: 'Akkusativ: ilgi zamiri nesne' },
  { ex: [['Der Film, den wir gestern gesehen haben, war super.', 'Dün izlediğimiz film süperdi.'], ['Die Wohnung, die wir gemietet haben, ist sehr hell.', 'Kiraladığımız daire çok aydınlık.']] },
  { h: 'Dativ' },
  { ex: [['Das ist die Frau, der ich das Buch gegeben habe.', 'Bu, kitabı verdiğim kadın.'], ['Die Kollegen, denen ich geholfen habe, haben sich bedankt.', 'Yardım ettiğim iş arkadaşları teşekkür etti.']] },
  { h: 'Genitiv (sahiplik)' },
  { ex: [['Das ist der Nachbar, dessen Auto immer vor meiner Garage steht.', 'Bu, arabası hep garajımın önünde duran komşu.'], ['Die Frau, deren Tochter in meiner Klasse ist, ist Ärztin.', 'Kızı benim sınıfımda olan kadın doktor.']] },
  { h: 'Edatlı ilgi cümlesi' },
  { p: 'Fiil bir edat istiyorsa, edat ilgi zamirinin **önüne** gelir ve hâli belirler: *warten auf + A → der Bus, **auf den** ich warte*.' },
  { ex: [['Das ist der Bus, auf den ich jeden Morgen warte.', 'Bu, her sabah beklediğim otobüs.'], ['Die Stadt, in der ich geboren bin, liegt am Meer.', 'Doğduğum şehir deniz kenarında.'], ['Der Freund, mit dem ich Fußball spiele, heißt Ali.', 'Birlikte futbol oynadığım arkadaşın adı Ali.']] },
  { h: 'wo, was, wer' },
  { p: 'Yer bildiren isimlerden sonra **wo** kullanılabilir: *die Stadt, **wo** ich wohne*. **alles, etwas, nichts, das** ve en üstünlük sıfatlarından sonra **was** gelir: *Das ist alles, **was** ich weiß.* Genel kişiler için **wer**: *Wer zu spät kommt, muss warten.*' },
  { ex: [['Das ist das Beste, was mir passiert ist.', 'Başıma gelen en güzel şey bu.'], ['Es gibt nichts, was er nicht isst.', 'Yemediği hiçbir şey yok.']] },
  { h: 'Mini test' },
  { quiz: [
    { q: 'Der Mann, ___ dort steht, ist mein Lehrer.', opts: ['den', 'der', 'dem', 'dessen'], ok: 1 },
    { q: 'Die Frau, ___ ich gestern getroffen habe, ist nett.', opts: ['der', 'die', 'deren', 'den'], ok: 1 },
    { q: 'Das Buch, ___ du mir geschenkt hast, ist spannend.', opts: ['der', 'den', 'das', 'dem'], ok: 2 },
    { q: 'Die Kinder, mit ___ er spielt, sind laut.', opts: ['die', 'denen', 'deren', 'den'], ok: 1 },
    { q: 'Der Kollege, ___ Frau Ärztin ist, kommt aus Ankara.', opts: ['der', 'dessen', 'deren', 'dem'], ok: 1 },
    { q: 'Das ist alles, ___ ich habe.', opts: ['das', 'was', 'wo', 'der'], ok: 1 },
    { q: 'Die Stadt, in ___ ich wohne, ist klein.', opts: ['die', 'der', 'den', 'dem'], ok: 1 },
    { q: 'Der Bus, auf ___ ich warte, kommt nicht.', opts: ['dem', 'den', 'der', 'dessen'], ok: 1 },
  ] },
];

LESSONS.konjunktionen = [
  { p: 'Bağlaçlar cümledeki **fiilin yerini** belirler. Üç grup vardır: fiil yerinde kalanlar (Position 0), fiili hemen arkasına alanlar (Position 1, bağlaç zarfları) ve fiili **sona** gönderenler (yan cümle bağlaçları).' },
  { table: { head: ['Grup', 'Fiil nerede?', 'Örnek'], rows: [
    ['Position 0: und, aber, oder, denn, sondern', 'normal (2. sırada)', 'Ich bleibe zu Hause, **denn** ich **bin** krank.'],
    ['Position 1: deshalb, trotzdem, dann, sonst …', 'bağlaçtan hemen sonra', 'Ich bin krank, **deshalb bleibe** ich zu Hause.'],
    ['Nebensatz: weil, dass, wenn, obwohl …', 'cümlenin sonunda', 'Ich bleibe zu Hause, **weil** ich krank **bin**.'],
  ] } },
  { tip: 'Yan cümle başa gelirse ana cümle **fiille** başlar: *Wenn ich Zeit habe, **komme** ich.* (Fiil – virgül – fiil kuralı.)' },
  { p: 'Aşağıdaki listede her bağlacı örnek cümleleriyle bulabilirsin. Sonda bir alıştırma var.' },
];

// Bağlaç sözlüğü: "#Grup|Türkçe" ve "bağlaç|Türkçe|örnek|örnek Türkçe"
window.KONJ = `#Position 0 – Fiil yerinde kalır|Position 0
und|ve|Ich koche und mein Mann deckt den Tisch.|Ben yemek yapıyorum ve eşim sofrayı kuruyor.
aber|ama|Die Wohnung ist schön, aber sie ist zu teuer.|Daire güzel ama çok pahalı.
oder|veya, yoksa|Trinkst du Tee oder möchtest du Kaffee?|Çay mı içersin yoksa kahve mi istersin?
denn|çünkü|Ich gehe früh ins Bett, denn ich muss um fünf aufstehen.|Erken yatıyorum, çünkü beşte kalkmam gerekiyor.
sondern|aksine, bilakis (olumsuzdan sonra)|Er kommt nicht heute, sondern morgen.|Bugün değil, yarın geliyor.
#Position 1 – Fiil hemen arkadan gelir|Position 1
deshalb / deswegen / daher|bu yüzden|Es regnet, deshalb nehme ich den Bus.|Yağmur yağıyor, bu yüzden otobüse biniyorum.
trotzdem|yine de|Ich war müde, trotzdem bin ich zum Kurs gegangen.|Yorgundum, yine de kursa gittim.
dann / danach|sonra, ondan sonra|Zuerst frühstücke ich, dann gehe ich zur Arbeit.|Önce kahvaltı yaparım, sonra işe giderim.
sonst|yoksa, aksi halde|Beeil dich, sonst verpassen wir den Zug.|Acele et, yoksa treni kaçıracağız.
außerdem|ayrıca|Die Wohnung ist groß, außerdem hat sie einen Balkon.|Daire büyük, ayrıca balkonu var.
also|yani, demek ki|Der Laden ist zu, also gehen wir morgen.|Dükkân kapalı, demek ki yarın gideriz.
dennoch|buna rağmen|Das Essen war teuer, dennoch war es nicht gut.|Yemek pahalıydı, buna rağmen iyi değildi.
#Nebensatz – Fiil sona gider|Nebensatz
weil|çünkü (-dığı için)|Ich lerne Deutsch, weil ich in Deutschland arbeiten möchte.|Almanca öğreniyorum, çünkü Almanya'da çalışmak istiyorum.
da|-dığı için (bilinen sebep)|Da es spät ist, nehmen wir ein Taxi.|Geç olduğu için taksiye biniyoruz.
dass|-dığını, ki|Ich hoffe, dass du bald gesund wirst.|Yakında iyileşeceğini umuyorum.
ob|-ip -mediğini|Weißt du, ob der Laden heute offen ist?|Dükkânın bugün açık olup olmadığını biliyor musun?
wenn|eğer; -dığında (her seferinde, şimdi/gelecek)|Wenn ich Zeit habe, rufe ich dich an.|Vaktim olursa seni ararım.
als|-dığında (geçmişte bir kez)|Als ich ein Kind war, wohnte ich in Ankara.|Çocukken Ankara'da oturuyordum.
obwohl|-masına rağmen|Obwohl er krank ist, geht er zur Arbeit.|Hasta olmasına rağmen işe gidiyor.
damit|-sın diye, için|Ich spreche langsam, damit alle mich verstehen.|Herkes beni anlasın diye yavaş konuşuyorum.
um … zu|-mek için (aynı özne)|Ich spare Geld, um ein Auto zu kaufen.|Araba almak için para biriktiriyorum.
bevor|-meden önce|Bevor ich schlafen gehe, lese ich ein bisschen.|Yatmadan önce biraz okurum.
nachdem|-dikten sonra|Nachdem wir gegessen hatten, gingen wir spazieren.|Yemek yedikten sonra yürüyüşe çıktık.
während|-ken, süresince; oysa|Während ich koche, hört sie Musik.|Ben yemek yaparken o müzik dinliyor.
seit / seitdem|-den beri|Seitdem ich in Berlin wohne, fahre ich Fahrrad.|Berlin'de oturduğumdan beri bisiklete biniyorum.
bis|-e kadar|Warte hier, bis ich zurückkomme.|Ben dönene kadar burada bekle.
sobald|-ir -mez|Sobald ich zu Hause bin, schreibe ich dir.|Eve varır varmaz sana yazarım.
falls|olur da, eğer|Falls es regnet, bleiben wir zu Hause.|Olur da yağmur yağarsa evde kalırız.
sodass|öyle ki, bu yüzden|Es hat stark geschneit, sodass die Schule ausfiel.|Çok kar yağdı, öyle ki okul tatil oldu.
indem|-erek|Man lernt eine Sprache am besten, indem man viel spricht.|Bir dil en iyi çok konuşarak öğrenilir.
ohne dass / ohne … zu|-meden|Er ging, ohne sich zu verabschieden.|Vedalaşmadan gitti.
statt … zu|-mek yerine|Statt fernzusehen, solltest du lernen.|Televizyon izlemek yerine ders çalışmalısın.
#Zweiteilige Konnektoren – İki parçalı|İki parçalı
nicht nur …, sondern auch|sadece … değil, aynı zamanda …|Sie spricht nicht nur Deutsch, sondern auch Englisch.|Sadece Almanca değil, İngilizce de konuşuyor.
sowohl … als auch|hem … hem de|Sowohl mein Bruder als auch meine Schwester wohnen hier.|Hem erkek kardeşim hem kız kardeşim burada oturuyor.
weder … noch|ne … ne de|Ich habe weder Zeit noch Geld.|Ne vaktim var ne de param.
entweder … oder|ya … ya da|Entweder wir fahren mit dem Zug oder wir nehmen das Auto.|Ya trenle gideriz ya da arabayı alırız.
zwar …, aber|gerçi … ama|Das Hotel war zwar teuer, aber sehr schön.|Otel gerçi pahalıydı ama çok güzeldi.
je …, desto|ne kadar … o kadar|Je mehr du übst, desto besser sprichst du.|Ne kadar çok pratik yaparsan o kadar iyi konuşursun.
einerseits …, andererseits|bir yandan …, öte yandan|Einerseits verdiene ich gut, andererseits habe ich wenig Freizeit.|Bir yandan iyi kazanıyorum, öte yandan az boş vaktim var.`;
