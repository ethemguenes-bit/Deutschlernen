// Gemeinsam etwas planen. Kalıplar: "#Grup|Türkçe" + "Almanca|Türkçe".
window.PLANEN_REDEMITTEL = `#Vorschlag machen|Öneri yapma
Wie wäre es, wenn wir …?|… yapsak nasıl olur?
Ich schlage vor, dass wir …|… yapmamızı öneriyorum.
Wir könnten doch …|… yapabiliriz aslında.
Was hältst du davon, wenn …?|… fikrine ne dersin?
Hast du Lust, … zu …?|… yapmaya canın ister mi?
Lass uns doch …!|Haydi … yapalım!
#Zustimmen|Katılma
Gute Idee! Das machen wir.|İyi fikir! Öyle yapalım.
Einverstanden!|Anlaştık! / Tamam!
Das finde ich super.|Bunu harika buluyorum.
Ja, das passt mir gut.|Evet, bu bana uyar.
Da hast du recht.|Bu konuda haklısın.
#Ablehnen & Gegenvorschlag|Reddetme ve karşı öneri
Das geht leider nicht, weil …|Bu maalesef olmaz, çünkü …
Ich weiß nicht, ob das eine gute Idee ist.|Bunun iyi bir fikir olup olmadığını bilmiyorum.
Das ist zu teuer / zu weit / zu spät.|Bu çok pahalı / çok uzak / çok geç.
Lieber würde ich …|Ben daha çok … yapmak isterim.
Ich habe eine bessere Idee: …|Daha iyi bir fikrim var: …
Was hältst du stattdessen von …?|Onun yerine … nasıl olur?
#Nachfragen|Soru sorma
Wann passt es dir?|Sana ne zaman uyar?
Wer kümmert sich um …?|… ile kim ilgilenecek?
Wer bringt was mit?|Kim ne getiriyor?
Wo treffen wir uns?|Nerede buluşuyoruz?
Wie viel Geld wollen wir ausgeben?|Ne kadar para harcamak istiyoruz?
#Aufgaben verteilen|Görev paylaştırma
Ich kann mich um … kümmern.|Ben … ile ilgilenebilirim.
Kannst du … übernehmen?|… işini sen üstlenebilir misin?
Ich besorge die Getränke.|İçecekleri ben alırım.
Du schreibst die Einladungen, oder?|Davetiyeleri sen yazıyorsun, değil mi?
#Zusammenfassen|Özetleme
Also, dann machen wir es so: …|O zaman şöyle yapıyoruz: …
Fassen wir zusammen: …|Özetleyelim: …
Dann ist alles klar. Bis Samstag!|O zaman her şey tamam. Cumartesi görüşürüz!`;

// Konular: "=Başlık|Türkçe|emoji|görev cümlesi (Türkçe)" + "?Planlanacak noktalar" + "A: …|…" / "B: …|…"
window.PLANEN = `=Geburtstag|Doğum günü|🎂|Bir iş arkadaşınızın doğum günü için birlikte bir sürpriz planlayın.
?Wann? · Wo? · Geschenk? · Kuchen? · Wer organisiert was?
A: Hallo Murat, nächsten Freitag hat Lisa Geburtstag. Sollen wir etwas für sie organisieren?|Merhaba Murat, gelecek cuma Lisa'nın doğum günü. Onun için bir şey düzenleyelim mi?
B: Gute Idee! Wie wäre es mit einem kleinen Frühstück im Büro?|İyi fikir! Ofiste küçük bir kahvaltıya ne dersin?
A: Ja, das finde ich gut. Um wie viel Uhr? Sie fängt um acht an.|Evet, bunu iyi buluyorum. Saat kaçta? O sekizde başlıyor.
B: Dann treffen wir uns um halb acht und bereiten alles vor.|O zaman yedi buçukta buluşup her şeyi hazırlayalım.
A: Und was schenken wir ihr?|Peki ona ne hediye edelim?
B: Sie liest gern. Wir könnten einen Buchgutschein kaufen.|Okumayı seviyor. Bir kitap hediye çeki alabiliriz.
A: Einverstanden. Ich sammle das Geld bei den Kollegen ein.|Anlaştık. Ben iş arkadaşlarından parayı toplarım.
B: Super. Ich backe einen Kuchen und bringe Kerzen mit.|Süper. Ben bir kek yapıp mum getiririm.
A: Also: Freitag, halb acht, Gutschein und Kuchen. Bis dann!|Yani: cuma, yedi buçuk, hediye çeki ve kek. Görüşürüz!

=Zusammen grillen|Birlikte mangal yapmak|🔥|Arkadaşlarınızla parkta mangal yapmayı planlayın.
?Wann? · Wo? · Essen und Getränke? · Grill? · Was bei Regen?
A: Das Wetter soll am Sonntag super werden. Wollen wir grillen?|Pazar günü hava harika olacakmış. Mangal yapalım mı?
B: Oh ja! Wo denn? Bei dir im Garten?|Ah evet! Peki nerede? Senin bahçede mi?
A: Mein Garten ist zu klein. Lass uns doch in den Stadtpark gehen. Dort darf man grillen.|Bahçem çok küçük. Haydi şehir parkına gidelim. Orada mangal yakmak serbest.
B: Gute Idee. Wer bringt den Grill mit?|İyi fikir. Mangalı kim getiriyor?
A: Ich habe einen kleinen Grill, den nehme ich mit. Kannst du die Kohle kaufen?|Benim küçük bir mangalım var, onu getiririm. Kömürü sen alabilir misin?
B: Klar. Und ich mache einen Salat. Was ist mit Fleisch?|Tabii. Bir de salata yaparım. Et ne olacak?
A: Ich kaufe Hähnchen und Köfte. Für die Vegetarier nehme ich Halloumi mit.|Ben tavuk ve köfte alırım. Vejetaryenler için hellim getiririm.
B: Und wenn es doch regnet?|Peki ya yine de yağmur yağarsa?
A: Dann grillen wir auf meinem Balkon.|O zaman benim balkonda mangal yaparız.
B: Perfekt. Sonntag um zwölf am Parkeingang?|Mükemmel. Pazar saat on ikide park girişinde mi?
A: Einverstanden!|Anlaştık!

=Abschiedsparty|Veda partisi|👋|Kurstan bir arkadaşınız memleketine dönüyor. Bir veda partisi planlayın.
?Wann? · Wo? · Wen einladen? · Geschenk? · Essen?
A: Hast du gehört? Ana geht im nächsten Monat zurück nach Portugal.|Duydun mu? Ana gelecek ay Portekiz'e dönüyor.
B: Ja, schade. Wir sollten eine Abschiedsparty für sie machen.|Evet, yazık. Onun için bir veda partisi yapmalıyız.
A: Unbedingt! Wo könnten wir feiern?|Kesinlikle! Nerede kutlayabiliriz?
B: Wie wäre es mit unserem Kursraum? Wir fragen die Lehrerin.|Kurs sınıfımıza ne dersin? Öğretmene soralım.
A: Gute Idee. Am letzten Kurstag, nach dem Unterricht?|İyi fikir. Kursun son günü, dersten sonra mı?
B: Ja. Jeder bringt etwas zu essen aus seinem Land mit.|Evet. Herkes kendi ülkesinden yiyecek bir şey getirsin.
A: Schön! Und als Geschenk? Vielleicht ein Fotoalbum mit Bildern vom Kurs?|Güzel! Hediye olarak ne? Belki kurstan fotoğraflarla bir albüm?
B: Das ist eine tolle Idee. Ich sammle die Fotos und du kaufst das Album.|Bu harika bir fikir. Ben fotoğrafları toplarım, sen albümü alırsın.
A: Gut, so machen wir es.|Tamam, böyle yapalım.

=Neue Wohnung feiern|Yeni evi kutlamak|🏡|Yeni evinize taşındınız. Bir arkadaşınızla birlikte ev partisi planlayın.
?Wann? · Wen einladen? · Essen? · Nachbarn informieren? · Aufräumen?
A: Endlich ist der Umzug fertig! Ich möchte eine Einweihungsparty machen.|Sonunda taşınma bitti! Bir ev partisi yapmak istiyorum.
B: Super! Wann denn? Hast du schon alles ausgepackt?|Süper! Ne zaman? Her şeyi çıkardın mı?
A: Noch nicht ganz. Vielleicht in zwei Wochen, am Samstagabend?|Henüz tam değil. Belki iki hafta sonra, cumartesi akşamı?
B: Das passt mir gut. Wen willst du einladen?|Bu bana uyar. Kimi davet etmek istiyorsun?
A: Freunde, Kollegen und vielleicht auch die neuen Nachbarn.|Arkadaşları, iş arkadaşlarını ve belki yeni komşuları da.
B: Gute Idee, dann beschweren sie sich nicht über den Lärm.|İyi fikir, böylece gürültüden şikâyet etmezler.
A: Genau! Ich hänge auch einen Zettel im Treppenhaus auf.|Aynen! Merdiven boşluğuna da bir not asarım.
B: Soll ich beim Kochen helfen?|Yemekte yardım edeyim mi?
A: Das wäre toll. Wir machen ein Buffet.|Harika olur. Açık büfe yaparız.
B: Und ich komme am Samstagmorgen und helfe beim Aufräumen.|Ben de cumartesi sabahı gelip toplamaya yardım ederim.

=Ausflug machen|Gezi yapmak|🚲|Kurs arkadaşlarınızla bir hafta sonu gezisi planlayın.
?Wohin? · Wie hinkommen? · Kosten? · Essen? · Treffpunkt?
A: Am Wochenende haben wir frei. Wollen wir einen Ausflug machen?|Hafta sonu boşuz. Bir geziye çıkalım mı?
B: Gern! Wohin denn? Ans Meer ist es zu weit.|Memnuniyetle! Peki nereye? Denize çok uzak.
A: Wir könnten an den See fahren. Da kann man schwimmen und wandern.|Göle gidebiliriz. Orada yüzülebilir ve yürüyüş yapılabilir.
B: Gute Idee. Fahren wir mit dem Auto oder mit dem Zug?|İyi fikir. Arabayla mı yoksa trenle mi gidelim?
A: Mit dem Zug. Mit dem Deutschlandticket kostet das nichts extra.|Trenle. Deutschlandticket ile ekstra bir şey tutmaz.
B: Stimmt. Und das Essen? Gehen wir ins Restaurant?|Doğru. Peki yemek? Restorana mı gidelim?
A: Lieber ein Picknick, das ist billiger. Jeder bringt etwas mit.|Daha iyisi piknik, daha ucuz. Herkes bir şey getirsin.
B: Okay. Wann treffen wir uns?|Tamam. Ne zaman buluşuyoruz?
A: Samstag um neun Uhr am Hauptbahnhof, vor der Bäckerei.|Cumartesi saat dokuzda ana garda, fırının önünde.
B: Abgemacht!|Anlaştık!

=Gesünder leben|Daha sağlıklı yaşamak|🥦|Bir arkadaşınızla birlikte daha sağlıklı yaşamayı planlayın.
?Sport? · Ernährung? · Wann und wie oft? · Motivation?
A: Ich fühle mich in letzter Zeit so müde. Ich möchte gesünder leben.|Son zamanlarda kendimi çok yorgun hissediyorum. Daha sağlıklı yaşamak istiyorum.
B: Ich auch! Sollen wir zusammen Sport machen?|Ben de! Birlikte spor yapalım mı?
A: Gute Idee. Was schlägst du vor?|İyi fikir. Ne önerirsin?
B: Wir könnten dreimal pro Woche joggen gehen, morgens vor der Arbeit.|Haftada üç kez sabahları işten önce koşuya gidebiliriz.
A: Morgens ist schwierig für mich. Wie wäre es abends nach der Arbeit?|Sabahlar benim için zor. Akşam işten sonra nasıl olur?
B: Okay, dann um sieben. Und wir sollten auch weniger Süßigkeiten essen.|Tamam, o zaman yedide. Bir de daha az tatlı yemeliyiz.
A: Stimmt. Wir könnten am Sonntag zusammen gesund kochen.|Doğru. Pazar günü birlikte sağlıklı yemek yapabiliriz.
B: Super, dann motivieren wir uns gegenseitig.|Süper, böylece birbirimizi motive ederiz.

=Hochzeit|Düğün|💍|Bir arkadaşınız evleniyor. Birlikte hediye ve hazırlıkları planlayın.
?Geschenk? · Wie viel Geld? · Kleidung? · Anreise? · Glückwunschkarte?
A: Hast du auch die Einladung zu Mehmets Hochzeit bekommen?|Mehmet'in düğün davetiyesini sen de aldın mı?
B: Ja! Was schenken wir ihm und seiner Frau?|Evet! Ona ve eşine ne hediye edelim?
A: Sie haben eine Wunschliste, aber vielleicht ist Geld praktischer.|Bir dilek listeleri var ama belki para daha pratik.
B: Das finde ich auch. Wir legen zusammen. Wie viel möchtest du geben?|Ben de öyle düşünüyorum. Birlikte para toplayalım. Ne kadar vermek istersin?
A: Jeder 50 Euro? Dann kaufen wir noch eine schöne Karte.|Herkes 50 euro mu? Sonra bir de güzel bir kart alırız.
B: Gut. Die Hochzeit ist in Köln. Fahren wir zusammen mit dem Auto?|Tamam. Düğün Köln'de. Birlikte arabayla gidelim mi?
A: Ja, gern. Ich kann fahren, dann teilen wir das Benzin.|Evet, memnuniyetle. Ben sürebilirim, benzini paylaşırız.
B: Perfekt. Und was ziehst du an?|Mükemmel. Peki sen ne giyeceksin?
A: Einen Anzug. Ich muss ihn nur noch reinigen lassen.|Takım elbise. Sadece temizlettirmem lazım.

=Ein Kind bekommen|Bebek dünyaya gelmesi|👶|Bir iş arkadaşınızın bebeği oldu. Birlikte ziyareti ve hediyeyi planlayın.
?Besuch wann? · Geschenk? · Essen mitbringen? · Wie lange bleiben?
A: Weißt du schon? Sabine hat letzte Woche ein Baby bekommen!|Biliyor musun? Sabine geçen hafta bebek doğurdu!
B: Wie schön! Sollen wir sie besuchen?|Ne güzel! Onu ziyaret edelim mi?
A: Ja, aber nicht zu früh. Die Familie braucht Ruhe.|Evet ama çok erken değil. Ailenin dinlenmeye ihtiyacı var.
B: Stimmt. Ich schreibe ihr und frage, wann es passt.|Doğru. Ona yazıp ne zaman uygun olduğunu sorayım.
A: Und was schenken wir? Babykleidung?|Peki ne hediye edelim? Bebek kıyafeti mi?
B: Davon hat sie bestimmt schon viel. Wie wäre es mit Windeln und einem Gutschein?|Ondan muhtemelen çok var. Bez ve bir hediye çekine ne dersin?
A: Gute Idee. Und ich koche eine Suppe, dann muss sie nicht kochen.|İyi fikir. Ben de çorba yaparım, böylece o yemek yapmak zorunda kalmaz.
B: Sehr lieb! Wir bleiben aber nur eine Stunde.|Çok tatlı! Ama sadece bir saat kalalım.

=Zusammen Deutsch lernen|Birlikte Almanca öğrenmek|📚|Kurs arkadaşınızla birlikte sınava hazırlanmayı planlayın.
?Wann? · Wo? · Was üben? · Material? · Wie oft?
A: Die B1-Prüfung ist in sechs Wochen. Ich habe ein bisschen Angst.|B1 sınavı altı hafta sonra. Biraz korkuyorum.
B: Ich auch. Sollen wir zusammen lernen?|Ben de. Birlikte çalışalım mı?
A: Ja, gern! Wann hast du Zeit?|Evet, memnuniyetle! Ne zaman vaktin var?
B: Dienstags und donnerstags nach dem Kurs.|Salı ve perşembe günleri kurstan sonra.
A: Das passt. Wo lernen wir? Bei mir ist es zu laut, meine Kinder sind zu Hause.|Uyar. Nerede çalışalım? Bende çok gürültülü, çocuklarım evde.
B: In der Stadtbibliothek gibt es Gruppenräume.|Şehir kütüphanesinde grup odaları var.
A: Super. Ich möchte vor allem Sprechen und Briefe schreiben üben.|Süper. Ben özellikle konuşma ve mektup yazma çalışmak istiyorum.
B: Und ich muss mehr Hören üben. Ich bringe Modelltests mit.|Ben de daha çok dinleme çalışmalıyım. Örnek sınavları getiririm.
A: Prima, dann fangen wir nächsten Dienstag an.|Harika, o zaman gelecek salı başlıyoruz.

=Sich um ein Kind kümmern|Bir çocukla ilgilenmek|🧸|Komşunuzun çocuğuna bir gün bakmanız gerekiyor. Arkadaşınızla birlikte planlayın.
?Wann abholen? · Essen? · Programm? · Wer macht was? · Notfallnummer?
A: Frau Becker muss morgen ins Krankenhaus. Wir passen auf ihren Sohn Leo auf.|Bayan Becker'in yarın hastaneye gitmesi gerekiyor. Oğlu Leo'ya biz bakıyoruz.
B: Okay. Wann müssen wir ihn abholen?|Tamam. Onu ne zaman almamız gerekiyor?
A: Um zwölf Uhr vom Kindergarten. Ich kann ihn abholen.|Saat on ikide anaokulundan. Ben alabilirim.
B: Gut, dann koche ich etwas. Was isst er gern?|Tamam, o zaman ben bir şey pişiririm. Ne yemeyi sever?
A: Nudeln mit Tomatensoße. Er hat keine Allergien.|Domates soslu makarna. Alerjisi yok.
B: Und am Nachmittag? Wir könnten auf den Spielplatz gehen.|Peki öğleden sonra? Oyun parkına gidebiliriz.
A: Wenn es regnet, malen wir oder spielen ein Spiel.|Yağmur yağarsa resim yaparız ya da bir oyun oynarız.
B: Wir brauchen auch die Telefonnummer vom Vater, für den Notfall.|Acil durum için babasının telefon numarası da lazım.
A: Stimmt, ich frage Frau Becker heute Abend danach.|Doğru, bu akşam Bayan Becker'e sorarım.

=Geburtstagsparty|Doğum günü partisi|🎈|Çocuğunuz için arkadaşınızla birlikte bir doğum günü partisi planlayın.
?Wie viele Kinder? · Spiele? · Essen? · Ort? · Uhrzeit?
A: Meine Tochter wird sieben. Hilfst du mir bei der Party?|Kızım yedi yaşına giriyor. Partide bana yardım eder misin?
B: Natürlich! Wie viele Kinder kommen?|Elbette! Kaç çocuk gelecek?
A: Ungefähr zehn aus ihrer Klasse.|Sınıfından yaklaşık on kişi.
B: Das ist viel für eine kleine Wohnung. Wie wäre es mit dem Jugendzentrum?|Küçük bir ev için bu çok. Gençlik merkezine ne dersin?
A: Gute Idee, ich frage, ob der Raum frei ist.|İyi fikir, salon boş mu diye sorarım.
B: Ich kann Spiele vorbereiten: Topfschlagen und Stopptanz.|Ben oyunlar hazırlayabilirim: tencere vurma ve donma dansı.
A: Toll! Ich backe einen Schokoladenkuchen und mache Pizza.|Harika! Ben çikolatalı kek yapar, pizza hazırlarım.
B: Von drei bis sechs Uhr, ist das okay?|Saat üçten altıya kadar, uygun mu?
A: Ja, perfekt. Dann schreibe ich heute die Einladungen.|Evet, mükemmel. O zaman bugün davetiyeleri yazarım.

=Schulfest|Okul şenliği|🏫|Okulunuzda bir şenlik var. Veli olarak bir stant planlayın.
?Was anbieten? · Preise? · Wer steht wann am Stand? · Was kaufen?
A: Beim Schulfest sollen die Eltern einen Stand organisieren.|Okul şenliğinde velilerin bir stant düzenlemesi gerekiyor.
B: Was könnten wir anbieten? Vielleicht Essen aus verschiedenen Ländern?|Ne sunabiliriz? Belki farklı ülkelerden yemekler?
A: Gute Idee! Ich mache Börek und Sigara Böreği.|İyi fikir! Ben börek ve sigara böreği yaparım.
B: Und ich frage die anderen Eltern, ob sie auch etwas mitbringen.|Ben de diğer velilere bir şey getirip getirmeyeceklerini sorarım.
A: Wie viel soll ein Stück kosten?|Bir parça ne kadar olsun?
B: Ein Euro. Das Geld ist für die neue Schulbibliothek.|Bir euro. Para yeni okul kütüphanesi için.
A: Wer steht am Stand? Das Fest dauert fünf Stunden.|Standda kim duracak? Şenlik beş saat sürüyor.
B: Wir machen einen Plan: Jeder steht eine Stunde.|Bir plan yaparız: Herkes bir saat durur.
A: Einverstanden. Ich kaufe noch Servietten und Teller.|Anlaştık. Ben de peçete ve tabak alırım.

=Beim Umzug helfen|Taşınmaya yardım etmek|📦|Bir arkadaşınız taşınıyor. Birlikte yardım etmeyi planlayın.
?Datum? · Transporter? · Helfer? · Essen? · Kartons?
A: Yusuf zieht nächsten Samstag um. Wir sollten ihm helfen.|Yusuf gelecek cumartesi taşınıyor. Ona yardım etmeliyiz.
B: Klar! Hat er schon einen Transporter?|Tabii! Kamyoneti var mı?
A: Nein, noch nicht. Ich kann einen mieten, ich habe einen Führerschein.|Hayır, henüz yok. Ben bir tane kiralayabilirim, ehliyetim var.
B: Super. Und ich frage noch zwei Freunde, dann sind wir genug Leute.|Süper. Ben de iki arkadaşa daha sorarım, böylece yeterli kişi oluruz.
A: Wir brauchen auch Kartons. Im Supermarkt bekommt man sie oft kostenlos.|Koliye de ihtiyacımız var. Süpermarketten genelde bedava alınabiliyor.
B: Die hole ich. Und mittags bestellen wir Pizza für alle.|Onları ben alırım. Öğlen herkese pizza söyleriz.
A: Gute Idee. Wir fangen um acht Uhr an, dann sind wir am Nachmittag fertig.|İyi fikir. Saat sekizde başlarız, öğleden sonra biter.

=Kranken Kollegen besuchen|Hasta iş arkadaşını ziyaret|🏥|Bir iş arkadaşınız hastanede. Birlikte ziyaret etmeyi planlayın.
?Wann? · Besuchszeiten? · Geschenk? · Wie hinkommen?
A: Thomas liegt seit gestern im Krankenhaus. Er wurde am Knie operiert.|Thomas dünden beri hastanede. Dizinden ameliyat oldu.
B: Oh nein! Wollen wir ihn besuchen?|Eyvah! Onu ziyaret edelim mi?
A: Ja. Die Besuchszeit ist von 15 bis 19 Uhr.|Evet. Ziyaret saati 15 ile 19 arası.
B: Dann gehen wir am Mittwoch nach der Arbeit, um fünf.|O zaman çarşamba işten sonra, saat beşte gidelim.
A: Was bringen wir mit? Blumen?|Ne götürelim? Çiçek mi?
B: Lieber Obst und eine Zeitschrift. Ihm ist bestimmt langweilig.|Daha iyisi meyve ve bir dergi. Kesin canı sıkılıyordur.
A: Gute Idee. Wir fahren mit der Straßenbahn, Linie 4 hält direkt vor der Klinik.|İyi fikir. Tramvayla gideriz, 4 numaralı hat kliniğin hemen önünde duruyor.`;
