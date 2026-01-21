document.addEventListener('DOMContentLoaded', function() {

    //Local Storage zurückgesetzt
    stelleStatusWiederHer();

    let heute;
    let aktuellesJahr;
    let aktuellerMonat;
    let aktuellerTag;


    //hier kommen die Inhalte der Türchen hin
    const inhalte = {
    2026: {
        1: {
            titel: "1. Dezember",
            text: `Weihnachten gilt als eine ruhige und schöne Zeit, die man gemeinsam mit Freunden oder der
Familie verbringt. Doch in einer kalten Weihnachtsnacht des Jahres 2008 war dies im sonst
friedlichen Ort Covina im US-Bundesstaat Kalifornien nicht der Fall.
<br><br>
Kurz vor Mitternacht meldet ein Nachbar panisch eine Explosion aus einem Wohnhaus, zwei
Häuser weiter. In dem Haus feiert eine große Familie Weihnachten, etwa 25 bis 30 Personen
sollen sich dort aufgehalten haben. Die örtliche Polizei von Covina sowie die Feuerwehr
werden sofort alarmiert und rücken aus.`
        },
        2: {
            titel: "2. Dezember",
            text: `Als die Einsatzkräfte am Tatort eintreffen, wird schnell klar, dass etwas Schlimmes passiert
ist. Das Wohnhaus steht in Flammen, dichter Rauch liegt in der Luft. Mehrere Menschen
laufen aufgeregt durch die Straße, einige sind verletzt.
<br><br>
Die Polizei sichert den Bereich, während die Feuerwehr versucht, den Brand unter Kontrolle
zu bringen. Es stellt sich heraus, dass es sich um das Haus der Familie O. handelt. Wie jedes
Jahr hatte sich die Familie dort zu einer großen Weihnachtsfeier versammelt.
<br><br>
Mehrere Familienmitglieder können sich schwer verletzt aus dem brennenden Haus retten.
„Es ging alles sehr schnell“, berichtet ein Zeuge später den Beamten.`
        },
        3: {
            titel: "3. Dezember",
            text: `Am nächsten Morgen zeigt sich das volle Ausmaß der Ereignisse. Das Haus ist vollständig
ausgebrannt und nicht mehr bewohnbar. Ermittler und Brandermittler beginnen mit der
Untersuchung der Ruine.
<br><br>
Die Polizei bestätigt nach ersten Erkenntnissen ein erschütterndes Ergebnis: Drei Menschen
wurden schwer verletzt, neun weitere haben die Nacht nicht überlebt. Für die Familie O. ist es
ein schwerer Schicksalsschlag, der das Weihnachtsfest für immer überschattet.
<br><br>
Verstorben sind:
<ul>
    <li>Alicia O. , 70 Jahre alt</li>
    <li>Joseph O. , 79 Jahre alt</li>
    <li>Charles O. , 50 Jahre alt</li>
    <li>Cheri O. , 45 Jahre alt</li>
    <li>James O. , 52 Jahre alt</li>
    <li>Teresa O. , 52 Jahre alt</li>
    <li>Alicia O. O. , 46 Jahre alt</li>
    <li>Sylvia O. P. , 43 Jahre alt</li>
    <li>Michael A. O. , 17 Jahre alt</li>
</ul>`
        },
        4: {
            titel: "4. Dezember",
            text: `Die Polizei von Covina beginnt Zeugenaussagen aufzunehmen. Jede Beobachtung könnte
ein wichtiger Hinweis sein.
<br><br>
Besonders zwei Aussagen fallen auf: Zwei Kinder berichten unabhängig voneinander, dass
sie kurz vor dem Brand einen Mann in einem Santa-Claus-Kostüm mit Geschenken vor dem
Haus gesehen haben.
<br><br>
Nach Rücksprache mit den Eltern wird klar, dass dieser Weihnachtsmann weder von der
Familie eingeladen noch organisiert wurde.
<br><br>
„Der Weihnachtsmann ist eine Zeit lang hin und her gelaufen außerhalb des Hauses“,
berichtet eines der Kinder. Ein ungewöhnliches Verhalten, das die Ermittler aufmerksam
werden lässt.`
        },
        5: {
            titel: "5. Dezember",
            text: `<u>Erster Verdächtiger (A, Ethan O.):</u><br>
Die Ermittlungen richten sich zunächst auf ein Familienmitglied. Ethan O. , ein Cousin der
Familie, hatte in den Wochen vor Weihnachten finanzielle Probleme. Er hatte die Familie um
Geld gebeten, wurde jedoch abgewiesen. Anschließend kündigte er an, an Weihnachten
nicht kommen zu wollen.
<br><br>
Ein Familienmitglied gibt jedoch an, Ethan an diesem Abend kurz im Haus gesehen zu
haben.
<br><br>
„Ich habe ihn aus der Ferne gesehen, er war gerade in der Küche“, sagt der Zeuge.
Die Ermittler nehmen diese Hinweise ernst.`
        },
        6: {
            titel: "6. Dezember",
            text: `Die Kriminaltechnik veröffentlicht den ersten Autopsiebericht. Dabei wird deutlich, dass nicht
alle Opfer durch das Feuer ums Leben kamen.
<br><br>
Mindestens vier Familienmitglieder wurden erschossen, noch bevor die Flammen sie
erreichten.
<br><br>
Die Analyse ergibt:
<ul>
    <li>bei allen Schüssen wurde dieselbe Waffe verwendet</li>
    <li>mehrere Schüsse fielen in sehr kurzer Zeit</li>
    <li>der Täter handelte offenbar entschlossen, jedoch nicht professionell.</li>
</ul>
Damit ist klar: Es handelt sich nicht nur um einen Brand, sondern um ein Gewaltverbrechen.`
        },
        7: {
            titel: "7. Dezember",
            text: `Mehrere Familienmitglieder berichten nun übereinstimmend von auffälligem Verhalten des
Verdächtigen A in den Wochen vor Weihnachten. Ethan O. habe gereizt gewirkt und
wiederholt von „Ungerechtigkeit“ gesprochen.
<br><br>
Eine Aussage bleibt den Ermittlern besonders im Gedächtnis: „Er sagte, irgendwann würde
die Familie dafür bezahlen.“
<br><br>
Ob es sich dabei um eine bloße Drohung oder einen ernstzunehmenden Hinweis handelt, ist
zu diesem Zeitpunkt noch unklar.`
        },
        8: {
            titel: "8. Dezember",
            text: `<u>Überwachungskamera Nr. 1:</u><br>
Eine Überwachungskamera aus der Nachbarschaft liefert neue Bilder.
<br><br>
Um 23:09 Uhr ist ein Mann in einem Santa-Claus-Kostüm zu sehen, der ein großes
Geschenk zum Haus der Familie O. trägt.
<br><br>
Das Paket wirkt ungewöhnlich schwer für einen normalen Inhalt. Die Person verschwindet
anschließend aus dem Blickfeld der Kamera.
<br><br>
Ein Detail, das die Ermittlungen in eine neue Richtung lenkt.`
        },
        9: {
            titel: "9. Dezember",
            text: `In der Nähe des Eingangs wird ein fast völlig verbranntes Geschenkpaket gefunden. Die
Polizei untersucht den Inhalt: Metallfragmente, ein kleiner Kompressor, Druckgasspray und
Pulver.
<br><br>
Auf dem Paket ist eine teilweise lesbare Adresse zu erkennen:
<br>
„Für Sylvia – Frohe Weihnachten.“
<br><br>
Niemand weiß, von wem das Paket stammt. Die Ermittler werten dies als möglichen Hinweis
auf den Täter.`
        },
        10: {
            titel: "10. Dezember",
            text: `Eine Rechnung über 315 US-Dollar für Spezialmaterial taucht auf. Sie umfasst unter
anderem:
<ul>
    <li>Metallrohre</li>
    <li>Lötbrenner</li>
    <li>Druckflaschen</li>
</ul>
Diese Materialien könnten für eine technische Vorrichtung verwendet worden sein. Die
Ermittler beginnen, die Herkunft der Bauteile nachzuvollziehen.`
        },
        11: {
            titel: "11. Dezember",
            text: `<u>Zweiter Verdächtigter (B, Jordan S.):</u><br>
Jordan S. , ein Freund der Familie und Bekannter von Sylvia O. , gerät ins Visier. Er ist für
handwerkliche Arbeiten bekannt, besitzt Erfahrung im Umgang mit Gasbehältern und hat
bereits kleinere Geräte improvisiert gebaut.
<br><br>
Zuletzt hatte er einen Streit mit Sylvia O. .
<br><br>
Die Ermittler prüfen nun, ob er in Verbindung mit dem Paket oder den Materialien stehen
könnte.`
        },
        12: {
            titel: "12. Dezember",
            text: `Die Ermittlungen ergeben, dass die Teile in einem Baumarkt „The Home Depot“ in Glendale
gekauft wurden. Auf den Überwachungsvideos ist ein großer Mann mit Kapuze und
Sonnenbrille zu erkennen. Sein Gesicht ist nicht sichtbar.
<br><br>
Die Bezahlung erfolgte bar, weitere Spuren sind bisher nicht bekannt.`
        },
        13: {
            titel: "13. Dezember",
            text: `Die Polizei durchsucht eine alte Garage, die Verdächtiger A, Ethan O. , gelegentlich nutzte.
Dort werden gefunden:
<ul>
    <li>ein roter Stofffetzen</li>
    <li>Werkzeug</li>
    <li>feuerfeste Handschuhe</li>
</ul>
Der Stoff ähnelt dem Material eines Santa-Claus-Kostüms. Die Ermittler werten dies als
mögliche Verbindung zum Täter.`
        },
        14: {
            titel: "14. Dezember",
            text: `Bei der Durchsicht der Brandreste im Haus finden die Ermittler kleine rote Stoffreste,
eindeutig von einem Santa-Claus-Kostüm stammend.
<br><br>
Die Teile sind leicht verkohlt, aber noch identifizierbar.
Es gibt keine Fingerabdrücke.
Wem das Kostüm gehörte, ist unklar.
<br><br>
Damit wird deutlich: Der zuvor gesichtete Mann im Santa-Kostüm befand sich auch im Haus.`
        },
        15: {
            titel: "15. Dezember",
            text: `Die Ermittler entdecken eine neue Spur: Sylvias Ex-Mann hat kurz vor der Tat zweimal
angerufen.
<br><br>
Er sagt am Telefon, nur „Frohe Weihnachten“ wünschen zu wollen. Niemand glaubt ihm zu
diesem Zeitpunkt, und die Polizei notiert die Anrufe als mögliche Hinweise.`
        },
        16: {
            titel: "16. Dezember",
            text: `<u>Dritter Verdächtigter (C, Bruce P.):</u><br>
Bruce P. , der Ex-Mann von Sylvia O. , wird als Verdächtiger aufgenommen. Er hatte Zugang
zum Haus und stand unter finanziellem Druck. Bisher gibt es jedoch keine Hinweise darauf,
dass er am Abend der Tat gesehen wurde.
<br><br>
Er ist bislang unauffindbar, die Ermittler nehmen die Fahndung auf.`
        },
        17: {
            titel: "17. Dezember",
            text: `Die Ermittler überprüfen das Alibi von Verdächtigen A, Ethan O. . Durch Zeugenaussagen
und Belege wird klar, dass er zur Tatzeit nachweislich in einem anderen Bundesstaat war.
<br><br>
Es handelt sich um ein lückenloses Alibi. Damit wird Ethan endgültig aus den Ermittlungen
ausgeschlossen.`
        },
        18: {
            titel: "18. Dezember",
            text: `<u>Überwachungskamera Nr. 2:</u><br>
Diese Kamera nimmt die Flucht des Mannes im Santa-Claus-Kostüm auf.
<br><br>
Nach dem Feuer läuft die gleiche Figur humpelnd mit angebranntem Kostüm davon. Kurz
danach fährt ein blauer Dodge viel zu schnell vom Tatort weg.
<br><br>
Die Ermittler vermuten, dass sich der Täter in diesem Fahrzeug befindet.`
        },
        19: {
            titel: "19. Dezember",
            text: `Ein technischer Bericht zeigt:
<br><br>
Das im Geschenkpaket gefundene Pulver war Teil einer Selbstzündvorrichtung. Die Polizei
glaubt, dass das Feuer mit einer Fackel entzündet werden sollte, aber als der Treibstoff des
Paketinhalts eine offene Flamme im Haus berührte, gab es eine Explosion.
<br><br>
Die Konstruktion war komplex, aber nicht professionell.
Wahrscheinlich von jemandem gebaut, der Hobby-Techniker, aber kein Experte ist.`
        },
        20: {
            titel: "20. Dezember",
            text: `Ein Gerichtsakten-Fund bringt neue Informationen: Eine Woche zuvor war die Scheidung
zwischen Sylvia O. P. und ihrem Ex-Mann abgeschlossen worden.
<br><br>
Das Urteil für ihn lautete:
<ul>
    <li>hohe Unterhaltszahlungen ($1,785 monatlich)</li>
    <li>Verlust des Jobs als Elektroingenieur</li>
    <li>massive Schulden ($10,000)</li>
</ul>
Diese Faktoren liefern ein mögliches Motiv für die Tat.`
        },
        21: {
            titel: "21. Dezember",
            text: `Ein Gutachten zu der gefundenen Waffe zeigt: Sie ist auf den Namen eines Familienmitglieds
registriert, aber nicht auf einen der bisherigen Verdächtigen.
<br><br>
Der letzte bekannte Kontakt mit der Waffe war der Ex-Mann von Sylvia O. .
<br><br>
Damit rückt er endgültig ins Zentrum der Ermittlungen.`
        },
        22: {
            titel: "22. Dezember",
            text: `Der blaue Dodge, der bei der Flucht gesehen wurde, gehört nicht einem der Verdächtigen,
sondern dem Bruder des Ex-Mannes von Sylvia O. .
<br><br>
Der Bruder war zum Tatzeitpunkt verreist und bestätigt, dass er den Wagen nicht benutzt hat.`
        },
        23: {
            titel: "23. Dezember",
            text: `Die Polizei findet den blauen Dodge bei einem verlassenen Haus in Sylmar, das dem Bruder
des Ex-Mannes gehört. Im Inneren werden entdeckt:
<ul>
    <li>Eine verbrannte Santa-Jacke</li>
    <li>Eine Schusswaffe</li>
    <li>Persönliche Dokumente</li>
    <li>Eine Leiche</li>
</ul>`
        },
        24: {
            titel: "24. Dezember",
            text: `Am Morgen des 24. Dezember wird die zuvor gefundene Leiche untersucht. Es stellt sich
Folgendes heraus:
<br><br>
Der Täter, verkleidet als Weihnachtsmann und bewaffnet mit Pistolen sowie einem
selbstgebauten Flammenwerfer, war <b>Bruce P.</b> , der Ex-Mann der verstorbenen Sylvia O. .
<br><br>
<b>Motiv:</b>
<ul>
    <li>Hass und Rache an der Ex-Frau</li>
    <li>Probleme nach der Scheidung</li>
    <li>Scheidungskosten und Unterhaltszahlungen für 3 Kinder</li>
    <li>Jobverlust</li>
    <li>Keine Komplizen → Einzeltäter</li>
</ul>
<b>Schicksal:</b>
<br>
Nach der Tat flieht Bruce P. , selbst schwer verletzt durch Feuer und Explosion.
Er fährt zum Haus seines Bruders in Sylmar, Kalifornien. Dort wird er später tot aufgefunden,
nach abschließenden Untersuchungen steht fest, dass er sich durch eine Schussverletzung
selbst das Leben genommen hat.
<br><br>
Ein geplanter Fluchtversuch am nächsten Morgen nach Moline, Illinois, bleibt ungenutzt.
Laut Polizeiberichten wurde in seinem Körper zum Zeitpunkt der Tat Kokain nachgewiesen.
<br><br>
Bei dem Angriff tötete Bruce P. gezielt Mitglieder der Familie seiner Ex-Frau Sylvia O. ,
darunter ihre Eltern sowie ihre Brüder und deren Partnerinnen.
Seine eigenen Kinder befanden sich ebenfalls im Haus, überlebten die Tat jedoch.
Die Familie O. erlitt schwere Verluste and dem Abend, dazu verloren ingesamt 16 Kinder
einen oder beide Elternteile.
<br><br>
Bis heute gilt die Tat als eines der schwersten Verbrechen in der Geschichte von Covina und
hinterließ tiefe Spuren innerhalb der Familie und der gesamten Gemeinde.`
        }
    },
    2027: {
        1: {
            titel: "1. Dezember",
            text: `15. Oktober 1993, Dortmund-Jungferntal.
<br><br>
Am frühen Morgen, gegen 8 Uhr, wird in der Feuerwehreinfahrt der Jungferntal-Grundschule
eine Leiche gefunden. Es ist die Leiche einer 16-jährigen Schülerin. Sie liegt nur etwa 20
Meter von der nächsten Bushaltestelle entfernt. Ihre Hose ist heruntergezogen, neben ihr
liegt ein Walkman.
<br><br>
Es wird über 20 Jahre dauern, bis ihr Mörder identifiziert werden kann.`
        },
        2: {
            titel: "2. Dezember",
            text: `Das 16-jährige Mädchen heißt Nicole S. . Sie besucht die 11. Klasse eines Gymnasiums in
Dortmund. In den Herbstferien dieses Jahres fährt sie zum ersten Mal nicht mit ihren Eltern
und ihrer jüngeren Schwester in den Urlaub. Es ist die Phase, in der Jugendliche anfangen,
sich selbst zu entdecken und eigene Wege zu gehen. Nicole bleibt zu Hause. Auch ihre
Großmutter lebt mit im Haus. Nichts deutet darauf hin, dass diese Entscheidung ihr Leben
verändern wird.`
        },
        3: {
            titel: "3. Dezember",
            text: `Nach der Schule verbringt Nicole einen Großteil ihrer Zeit im Reitstall. Dort kümmert sie sich
um ihre zwei Reitbeteiligungen, etwa sechs Kilometer von der Wohnung ihrer Familie
entfernt. Auch am 14. Oktober 1993 ist es nicht anders.
<br><br>
Am Abend fährt Nicole mit dem Bus weiter zu ihrem Freund nach Herne. Er ist ein Jahr älter
als sie und lebt ebenfalls noch bei seinen Eltern. Es ist ein ganz normaler Abend. Zumindest
wirkt er so.`
        },
        4: {
            titel: "4. Dezember",
            text: `Inzwischen ist es draußen dunkel, und es regnet in Strömen. Nicoles Freund bietet an, dass
sein Vater sie nach Hause fährt. Doch Nicole lehnt ab. Sie ist selbstbewusst, nimmt lieber den
Bus.
<br><br>
Um 22.45 Uhr erreicht sie ihre Endhaltestelle Wildstädter Straße im Dortmunder Stadtteil
Jungferntal. Mit ihr steigen zwei weitere Männer aus dem Bus.`
        },
        5: {
            titel: "5. Dezember",
            text: `Am Morgen nach der Tat entdeckt eine Reinigungskraft der Grundschule im Gebüsch der
Feuerwehreinfahrt eine Leiche. Sie ruft sofort den Hausmeister hinzu. Gemeinsam
verständigen sie Polizei und Rettungsdienst.
<br><br>
Als die Einsatzkräfte eintreffen und mit der Spurensicherung beginnen, wird schnell klar: Der
starke Regen der Nacht hat bereits viele Spuren verwischt. Wertvolle Hinweise könnten für
immer verloren sein.`
        },
        6: {
            titel: "6. Dezember",
            text: `Währenddessen befindet sich Nicoles Familie noch im Urlaub in den Niederlanden. Am
Vormittag des 15. Oktobers klingelt auf dem Campingplatz das Telefon. Der Anruf kommt aus
Deutschland.
<br><br>
Die Nachricht ist kaum zu begreifen: Ihre Tochter ist tot. Nur wenige hundert Meter von
ihrem Zuhause entfernt. Die Familie bricht den Urlaub sofort ab und fährt zurück nach
Dortmund. Dieser Moment wird sich für immer in ihr Gedächtnis einbrennen.`
        },
        7: {
            titel: "7. Dezember",
            text: `Wie in vielen Mordfällen richtet sich der erste Blick der Ermittler auf das persönliche Umfeld.
Auch Nicoles Freund gerät kurzzeitig in den Fokus.
<br><br>
Doch schnell zeigt sich: Er hat ein Alibi. Mehrere Zeugen bestätigen, dass Nicole den Abend
bei ihm verbracht und anschließend alleine den Bus nach Hause genommen hat. Der Tod
seiner Freundin trifft ihn schwer, doch für die Ermittler scheidet er bald als Tatverdächtiger
aus.`
        },
        8: {
            titel: "8. Dezember",
            text: `Eine wichtige Zeugenaussage kommt vom Busfahrer. Er erinnert sich an einen Mann, der in
letzter Sekunde aus dem Bus steigt, hastig und auffällig, kurz nachdem Nicole ausgestiegen
war. Der Fahrer beobachtet, wie der Mann eine Kapuze überzieht und Nicole in kurzem
Abstand folgt. Die Ermittler gehen davon aus, dass der Täter möglicherweise aus dem Bus
gekommen ist.`
        },
        9: {
            titel: "9. Dezember",
            text: `Zusätzlich wird von einem weiteren Mann berichtet, der ebenfalls an der Haltestelle
ausgestiegen sein soll, jedoch in eine andere Richtung lief. Ob er etwas gesehen hat oder mit
der Tat in Verbindung steht, bleibt unklar.
<br><br>
Viele Hinweise verlaufen im Nichts. Aussagen widersprechen sich, Erinnerungen sind vage.
Die Ungewissheit wächst, auch bei den Ermittlern.`
        },
        10: {
            titel: "10. Dezember",
            text: `Die Spurensicherung am Tatort findet wenige Haare, die sich an den Zweigen in der Hecke
verfangen haben, unter der Nicole lag. Aus einem Papierkorb an der nächsten Laterne
werden mehrere Taschentücher und eine Kassette geborgen.
<br><br>
In der Gerichtsmedizin wird Nicoles Leiche mit Spezialfolien abgeklebt, um mögliche Spuren
darauf zu sichern. Jede noch so kleine Spur könnte entscheidend sein.`
        },
        11: {
            titel: "11. Dezember",
            text: `Auf Grundlage der Aussagen des Busfahrers wird ein Phantombild des Mannes erstellt, der
Nicole kurz nach dem Aussteigen gefolgt sein soll. Der Mann wird als etwa 30 Jahre alt mit
dunklen Locken und Kapuze beschrieben.
<br><br>
Schon bald zeigt sich, dass das Phantombild die Ermittlungen kaum voranbringt. Die Suche
nach dem Täter gestaltet sich weiterhin schwierig.`
        },
        12: {
            titel: "12. Dezember",
            text: `Wenige Wochen vor der Tat hatte Nicole ihren Eltern von einem Auto erzählt, das ihr
mehrfach gefolgt sein soll. Es tauchte hinter ihr auf, wenn sie mit dem Bus unterwegs war.
<br><br>
Ihr Vater beobachtete die Strecke daraufhin eine Zeit lang selbst, doch weder er noch die
Polizei konnten das Fahrzeug ausfindig machen.`
        },
        13: {
            titel: "13. Dezember",
            text: `Vier Tage nach der Tat finden Fußgänger Nicoles Rucksack nahe einer Autobahnbrücke über
die A45. Der Fundort liegt nur wenige hundert Meter vom Tatort entfernt.
<br><br>
Im Rucksack befinden sich alltägliche Gegenstände, doch Geldbörse und Regenschirm fehlen
bis heute.`
        },
        14: {
            titel: "14. Dezember",
            text: `Die am Tatort gefundenen Haare können Nicole selbst zugeordnet werden. Die weiteren
DNA-Spuren sind jedoch zu gering, um daraus ein vollständiges Profil zu erstellen, das
Vergleichsanalysen ermöglicht.
<br><br>
Zusätzlich wurden Spuren auf der Kleidung, dem Rucksack und anderen Gegenständen durch
den starken Regen verwischt und unbrauchbar gemacht. Viele Hinweise gingen dadurch für
immer verloren.`
        },
        15: {
            titel: "15. Dezember",
            text: `Im April 1994 wird der Fall in der Sendung „Aktenzeichen XY … ungelöst“ vorgestellt. Die
Ermittler hoffen auf neue Hinweise aus der Bevölkerung.
<br><br>
Besonders das Phantombild und die verschwundenen Gegenstände stehen im Fokus der
Sendung. Kann dieser öffentliche Aufruf die Ermittlungen entscheidend voranbringen?`
        },
        16: {
            titel: "16. Dezember",
            text: `Trotz zahlreicher Hinweise und einer ausgesetzten Belohnung bleibt der erhoffte Durchbruch
aus. Keine Spur führt zu einem Tatverdächtigen.
<br><br>
Der Fall beginnt, sich zu einem sogenannten Cold Case zu entwickeln.`
        },
        17: {
            titel: "17. Dezember",
            text: `Für Nicoles Eltern beginnt eine jahrelange Zeit der Ungewissheit. Beide begeben sich in
psychologische Behandlung, geplagt von Schuldgefühlen und der Angst, der Täter könnte aus
dem eigenen Umfeld stammen.
<br><br>
Jeder Gang durch die Nachbarschaft wird begleitet von derselben Frage: Könnte er noch
immer hier sein?`
        },
        18: {
            titel: "18. Dezember",
            text: `Im Jahr 2000 übernimmt ein neuer Ermittler den Fall. Er verspricht den Eltern, den Mord an
ihrer Tochter nicht zu den Akten zu legen.
<br><br>
Er sichert zu, alles zu tun, um den Täter zu finden, noch vor seiner Pensionierung. Die Familie
schöpft Hoffnung, dass der lange ungelöste Fall endlich eine Wende nehmen könnte.`
        },
        19: {
            titel: "19. Dezember",
            text: `2007 werden die Spuren erneut untersucht, diesmal mit moderneren Methoden. An der
Kleidung des Opfers wird fremde männliche DNA gefunden.
<br><br>
Die Abgleiche mit 30 Speichelproben von Männern aus Nicoles Umfeld bleiben jedoch ohne
Ergebnis. 2013 geben noch einmal knapp 100 Männer freiwillig eine Speichelprobe ab,
ebenfalls ohne Treffer.`
        },
        20: {
            titel: "20. Dezember",
            text: `2015 trifft die Familie ein weiterer schwerer Schicksalsschlag. Auch ihre zweite Tochter stirbt.
Sie erliegt in jungen Jahren einer Krebserkrankung. Der Verlust beider Kinder hinterlässt tiefe
Spuren.`
        },
        21: {
            titel: "21. Dezember",
            text: `2018 werden alte Klebefolien an der Ludwig-Maximilians-Universität München mit einer
neuen Methode untersucht. Selbst winzige Spuren, etwa einzelne Hautschuppen, reichen
nun für ein DNA-Profil.
<br><br>
Der Abgleich führt erstmals zu einem Treffer!`
        },
        22: {
            titel: "22. Dezember",
            text: `Die DNA stammt von Ralf H., einem mehrfach vorbestraften Gewalttäter. Zur Tatzeit wäre er
28 Jahre alt gewesen. Er hatte bereits Frauen überfallen, gewürgt und bedroht, oft in der
Öffentlichkeit.
<br><br>
Kurz nach dem Mord saß er erneut im Gefängnis, was ihn jahrelang aus dem Fokus der
Ermittler rücken ließ.`
        },
        23: {
            titel: "23. Dezember",
            text: `Der Mordprozess beginnt Ende 2018 in Dortmund. Ralf H. bestreitet die Tat. Seine
Verteidigung stellt zahlreiche Anträge. Der Prozess zieht sich über Jahre. Zahlreiche
Nachermittlungen, Gutachten und Verzögerungen erschweren den Ablauf. Verlorene Akten,
erkrankte Richterinnen und ständige Verteidigerwechsel führten zu jahrelanger Ungewissheit
für die Familie S. .
<br><br>
Doch die Beweise sprechen gegen Ralf H. 2021 wird er wegen Mordes zu lebenslanger Haft
verurteilt. Doch das soll noch nicht alles gewesen sein.`
        },
        24: {
            titel: "24. Dezember",
            text: `Nach dem Urteil wird Ralf H. aus der Haft entlassen. Aufgrund der langen Verhandlungsdauer
hatten die Richter den Haftbefehl aufheben müssen. Das Urteil war zu diesem Zeitpunkt
noch nicht rechtskräftig. Da er zu allen Verhandlungstagen erschienen war, wurde zunächst
keine Fluchtgefahr angenommen. Bis zur Entscheidung des Bundesgerichtshofs stand er
unter Auflagen und trug eine elektronische Fußfessel.
<br><br>
Als der Bundesgerichtshof die Revision im Dezember verwarf und Ralf H. zu seiner
lebenslangen Haftstrafe antreten musste, entfernte er seine Fußfessel und floh mit seiner
Lebensgefährtin in die Niederlande. Drei Tage später, an Heiligabend 2021, wird er gefasst.
Die Suche endet, der Schmerz der Familie bleibt.
<br><br>
2024 verstarb Ralf H. im Gefängnis. Bis zuletzt hatte er bestritten, Nicole S. getötet zu haben.`
        }
    },
    2028: {
        1: {
            titel: "1. Dezember",
            text: `25.11.2019, Polizei Leitstelle Dresden:<br>
4:59Uhr. Eingehender Notruf:<br>
„Hallo, Leitzentrale im Residenzschloss und zwar haben wir bei uns einen Einbrecher
gerade in den Kameras gesehen im historisch grünen Gewölbe. 2 Personen. Wir
bräuchten polizeiliche Unterstützung.“
<br><br>
Kurz darauf geht ein weiterer Notruf ein. Es wird ein Brand im Pegelhaus an der
Augustusbrücke gemeldet. Die Straßenbeleuchtung rund um das Residenzschloss ist
ausgefallen.
<br>
5.15Uhr. Polizei und Feuerwehr sind bereits im vollen Einsatz. Ein weiterer Notruf geht
ein. In einer Tiefgarage scheinen mehrere Autos zu brennen.
<br>
Drei Ereignisse, drei Tatorte. Besteht hier ein Zusammenhang oder doch nur Zufall?`
        },
        2: {
            titel: "2. Dezember",
            text: `Die Kriminalhauptkommissarin fasst nochmal alles zusammen:
<br><br>
Am frühen Morgen dringen zwei Täter durch ein Fenster im Erdgeschoss ins Dresdner
Residenzschloss ein. Mit brachialer Gewalt schlagen sie mit zwei Äxten auf eine der
Vitrinen ein. Innerhalb von vier Minuten und 28 Sekunden entwenden die Täter mehrere
Juwelen. Als die ersten Einsatzkräfte am Schloss eintreffen, ist alles bereits vorbei. Die
Täter sind verschwunden.`
        },
        3: {
            titel: "3. Dezember",
            text: `Doch was ist das Grüne Gewölbe überhaupt?
<br><br>
Das Grüne Gewölbe in Dresden gilt als eine der ältesten und reichsten Schatzkammern
Europas. Es ist Teil der Staatlichen Kunstsammlungen Dresden und befindet sich im
Westflügel des Residenzschlosses.
Seinen Namen verdankt es den ursprünglich grün gefärbten Säulen und Wandflächen.
Angelegt wurde die Sammlung zwischen 1723-1729 auf Geheiß von August dem Starken,
Kurfürst von Sachsen und König von Polen.
<br><br>
Über 3000 Stücke aus Gold, Bergkristallen werden hier gezeigt. Viele der Schmuckstücke
sind mehr als 300 Jahre alt. Es handelt sich nicht um beliebige Kunstwerke, sondern um
den historischen Staatsschatz Sachsens: einzigartig, unersetzlich und von unschätzbarem
kulturellem Wert.
Genau dieser Ort wurde in jener Nacht zum Tatort.`
        },
        4: {
            titel: "4. Dezember",
            text: `Nach und nach wird klar, was in jener Nacht tatsächlich entwendet wurde.
Insgesamt verschwinden rund 24 Objekte.
<br><br>
Der materielle Schaden lässt sich kaum beziffern. Vergleichbare Objekte tauchen so gut
wie nie auf dem Kunstmarkt auf. Ihr Wert liegt nicht allein im Material, sondern in ihrer
Geschichte, ihrer Herkunft und ihrer Einzigartigkeit.
<br>
Der Versicherungswert der gestohlenen Stücke wird mit mindestens 113,8 Millionen
Euro angegeben. Mit einem Wert von ca. 40 Millionen Euro ist die „Epaulette“ das
wertvollste Objekt.`
        },
        5: {
            titel: "5. Dezember",
            text: `Es drängt sich die Frage auf: Wie konnte das passieren?
<br><br>
Das Sicherheitskonzept ist hochkomplex und gilt als streng geheim. Rund 30 Kameras
überwachen das Gelände rund um das Residenzschloss. Bewegungsmelder errichten eine
unsichtbare Wand, das Schutzschild des Museums. Wer hier einen Schritt zu viel macht,
löst den Alarm aus.
<br><br>
Der Sicherheitschef des Grünen Gewölbes zeigt sich in einer Pressekonferenz tief
betroffen. Es sei der furchtbarste Tag seines Lebens. Genau ein solcher Einbruch habe in
Dresden niemals passieren sollen. Viel sei getan worden, um ihn zu verhindern.
Bis zu diesem Zeitpunkt genoss das Museum einen ausgezeichneten Sicherheitsstatus.
Doch trotz aller Technik ist klar, es muss Lücken im System geben. Und diese gilt es nun
schnellstmöglich herauszufinden.`
        },
        6: {
            titel: "6. Dezember",
            text: `Nun wird es ernst für dich. Die Sonderkommission (SoKo) Epaulette wird gegründet.
Unter der Leitung von O. Richter beginnen insgesamt 10 Ermittler*innen mit der
Spurensicherung des Tatorts und der Prüfung der Überwachungsvideos. Jeder Hinweis
könnte der entscheidende Baustein sein. Und DU bist Teil davon. Schaffen wir es als
Team die Täter zu überführen?`
        },
        7: {
            titel: "7. Dezember",
            text: `Die Täter haben ein wahres Schlachtfeld hinterlassen. Teile der Schmuckstücke liegen
zerbrochen auf dem Boden, kaum zu unterscheiden von den Glassplittern der Vitrine.
Kurz bevor sie das Gebäude verließen, haben sie einen Feuerlöscher rund um die Vitrine
entleert, offenbar um Spuren zu verwischen.
<br><br>
Die Aufnahmen der Außenkamera geben nur wenig Hoffnung. Eine silberne Limousine ist
zu erkennen, mehr aber nicht. Kein Kennzeichen, keine Marke. Deine Ermittlungen
beginnen in einem Labyrinth aus Spuren und Rätseln.`
        },
        8: {
            titel: "8. Dezember",
            text: `Am Einstiegsfenster stellst du fest, dass die Gitterstäbe nicht einfach in der Tatnacht
entfernt werden konnten. Sie mussten bereits zuvor mit schwerem hydraulischen
Schneidwerkzeug geöffnet und dann provisorisch mit Klebeband befestigt worden sein.
<br><br>
Das muss jemandem aufgefallen sein. Du richtest dein Augenmerk auf die
Überwachungskameras direkt am Fenster, in der Hoffnung, dort Hinweise auf die Täter
zu finden und befragst später zusätzlich sämtliche Wachmänner.`
        },
        9: {
            titel: "9. Dezember",
            text: `Leider liefern die Überwachungsvideos kaum neue Erkenntnisse.
Speziell dieses Fenster scheint der neuralgische Punkt des ganzen Schlosses zu sein. Die
Kameras reichen dort nicht vollständig hin und der Fassadenscanner erfasst das
Einstiegsfenster nur teilweise. Ein blinder Fleck. Fast wie eine Einladung für Einbrecher.
<br><br>
Aber nur, wenn man genau weiß, wie er genutzt werden kann. Erfahrung oder
möglicherweise Insiderwissen?`
        },
        10: {
            titel: "10. Dezember",
            text: `Du führst eine Zeugenbefragung des Wachpersonals durch.
<br><br>
Keinem Wachmann ist in den Tagen vor der Tatnacht etwas aufgefallen. Weder das
eingeklebte Gitter noch die Arbeiten daran.
<br>
Auffällig ist aber, dass keiner der Wachleute in der Tatnacht den Notrufknopf ausgelöst
hat. Damit hätte die Polizei deutlich früher vor Ort sein können. Sie behaupten sich nicht
über dessen Funktion bewusst gewesen zu sein.
<br>
Auch waren sie laut Dienstvorschrift dazu verpflichtet Licht einzuschalten. Stattdessen
entschieden sie sich für die Dunkelheit, in der Annahme den Tätern so die Arbeit zu
erschweren.`
        },
        11: {
            titel: "11. Dezember",
            text: `Dir drängt sich eine andere Vermutung auf: Der Brand im Pegelhaus steht mit dem
Diebstahl im Zusammenhang. Die Täter sind durch die Dunkelheit im Museum davon
ausgegangen, dass sie den Strom erfolgreich gekappt haben. Auch Kameras und Notruf
sind somit außer Betrieb. Wäre das Licht angegangen, hätten sie vielleicht sofort die
Flucht ergriffen?`
        },
        12: {
            titel: "12. Dezember",
            text: `Dein Kollege spricht dich auf einen ähnlichen Fall an: den Diebstahl im Berliner Bode
Museum im März 2017. Eine 100 Kilogramm schwere Goldmünze, die „Big Maple Leaf“,
im Wert von 3,8 Millionen Euro, wurde gestohlen und ist bis heute verschwunden.
<br><br>
Die vermeintlichen Diebe, Angehörige einer arabischen Großfamilie, haben sich ebenfalls
durch ein Fenster Zugang verschafft und sind aktuell auch angeklagt.
<br>
Trotzdem handelt es sich zunächst nur um Vermutungen. Handfeste Beweise müssen
erst noch gefunden werden.`
        },
        13: {
            titel: "13. Dezember",
            text: `Du untersuchst die Schwachstellen des Sicherheitskonzepts. Auf der Homepage des
Grünen Gewölbes kann man per virtuellem Rundgang die Räume erkunden. Und wer
„Grünes Gewölbe Vitrinen Glas“ in Google eingibt, findet direkt Informationen über die
Art des Vitrinen Glases.
<br><br>
Die Scanner Anlage um das Einstiegsfenster hat die Täter nicht nur nicht richtig erfasst,
wie wir vor ein paar Tagen schon erfahren haben. Sie war hin und wieder auch komplett
ausgeschalten, weil Fehlalarme die Wachleute genervt hatten.
<br><br>
Hat man es den Tätern zu leicht gemacht? Museen werden immer ihre Schwachstellen
haben. Es gibt einfach zu viele wunde Punkte, die schwierig zu überwachen sind:
Besucher, Mitarbeiter, Technik.
<br>
Es ist ein ständiges Abwägen zwischen Sichtbarkeit und Sicherheit.`
        },
        14: {
            titel: "14. Dezember",
            text: `Drei Tage nach dem Einbruch gibt es Neuigkeiten zum Brand in der Tiefgarage, dem
dritten Tatort. Drei weitere Autos sind ausgebrannt.
<br><br>
Das explodierte Fahrzeug, ein Audi A6, wird untersucht. Es handelt sich offiziell um das
silberne Fluchtfahrzeug. Denn es konnten darin zwei Gitterstäbe vom Grünen Gewölbe
gefunden werden, ebenso ein Revolver und ein Brecheisen. Der Kauf des Wagens
erfolgte offenbar über einen Strohmann.
<br><br>
Du sicherst die Spuren und dokumentierst jeden Fund. Dieses Auto könnte der Schlüssel
sein, um die Täter endgültig zu identifizieren.`
        },
        15: {
            titel: "15. Dezember",
            text: `Ein Video der Tiefgarage zeigt, wie kurz nach Ankunft des silbernen Fluchtfahrzeugs
(Audi) eine Mercedes W212 Limousine in Taxifarbe die Garage verlässt. Mehrere
Überwachungskameras rundum Dresden filmen das Fahrzeug auf rasanter Fahrt.
<br><br>
Du erinnerst dich an das Kennzeichenerfassungssystem auf Autobahnen und prüfst die
Bilder. Glück gehabt. Die Bilder wurden gespeichert und du landest sogar einen Treffer,
ein Taxi! Auf der Strecke von Dresden nach Berlin. Mehrere weitere Sichtungen
bestätigen die Route.
<br><br>
Jetzt gilt es, den Halter zu ermitteln. Kannst du endlich eine direkte Spur zu den Tätern
aufbauen?`
        },
        16: {
            titel: "16. Dezember",
            text: `Du befragst den Halter des Fluchttaxis und Taxiunternehmer in Dresden, im
Polizeipräsidium:
<br>
- Wo waren Sie in der Tatnacht?<br>
- Fahren Sie öfters nach Berlin?<br>
- War das Fahrzeug in besagter Nacht unterwegs?<br>
- Wurden Ihre Kennzeichen vor geraumer Zeit gestohlen?
<br><br>
Alle Antworten weisen auf keine Auffälligkeiten hin. Deine Vermutung bestätigt sich. Es
muss sich um Dubletten handeln. Das sind kopierte Kennzeichen und dann noch ein
ähnlich aussehendes Taxi. Der Taxifahrer ist unschuldig. Noch immer gibt es keine heiße
Spur zu den Tätern.`
        },
        17: {
            titel: "17. Dezember",
            text: `Du sprichst mit einer Kunstexpertin, um herauszufinden, ob sich über den Kunsthandel
Hinweise zu den Juwelen und damit möglicherweise auf die Täter ergeben könnten. Sie
erklärt, dass das zwar schwierig, aber nicht ungewöhnlich ist. Gestohlene Kunst taucht
häufig irgendwann auf dem Kunstmarkt wieder auf, oft in abgeänderter Form.
<br><br>
Sie nennt das Beispiel der Mona Lisa, die 1911 aus dem Louvre gestohlen wurde und erst
durch den Versuch, sie zu verkaufen, wieder auftauchte.
<br>
Die SoKo Epaulette recherchiert intensiv, durchsucht den Darknet-Handel und
Juwelenbörsen. Doch bisher tauchen weder die Stücke noch ihre Einzelteile auf.`
        },
        18: {
            titel: "18. Dezember",
            text: `Die Verbindung zum Bode Museum lässt dich nicht los. Die Parallelen sind zu deutlich,
um sie zu ignorieren: brachiales Eindringen, hochmotorisierte Fahrzeuge, gezielte
Auswahl der Objekte.
<br><br>
Du analysierst die bisherigen Erkenntnisse und prüfst, wer im Fall des Bode Museums
angeklagt wurde. Dabei wird klar: Es handelt sich um Mitglieder der Großfamilie Remmo
aus Berlin.
<br><br>
Die Verbindungen sind noch nicht beweisbar, aber die Hinweise verdichten sich. Jeder
Schritt, jede Entdeckung könnte das Puzzle Stück für Stück vervollständigen.`
        },
        19: {
            titel: "19. Dezember",
            text: `Du recherchierst Hintergrundinformationen zur Remmo-Familie. Einige
Familienmitglieder lassen sich der Clan-Kriminalität zuordnen.
<br><br>
Behörden bringen sie mit schweren Gewalt- und Körperverletzungen,
Schutzgelderpressung, Raub, Drogenhandel, Geldwäsche, Diebstahl, illegalem
Waffenbesitz sowie Mord in Verbindung.`
        },
        20: {
            titel: "20. Dezember",
            text: `Die SoKo Epaulette stellt sich die Frage: Sind die Verdächtigen tatsächlich so dreist,
mitten in einer seit Monaten laufenden Gerichtsverhandlung im Fall des Bode Museums
direkt in das nächste Museum einzubrechen?
<br><br>
Noch immer fehlt das entscheidende Indiz, das die Tat mit der Remmo-Familie verbindet.`
        },
        21: {
            titel: "21. Dezember",
            text: `Drei Jahre nach der Tat, im Dezember 2022, kommt es zu einer unerwarteten Wendung:
Die Juwelen tauchen wieder auf! Zumindest ein Teil davon. Doch der Zustand der Stücke
ist erschreckend – viele sind beschädigt, und die wertvollsten, darunter auch die
namensgebende Epaulette der SOKO, fehlen weiterhin.
<br><br>
Moment mal, das bedeutet doch, dass die Täter bereits überführt wurden?
Was hat zu dieser überraschenden Rückkehr geführt?`
        },
        22: {
            titel: "22. Dezember",
            text: `Im September 2021 erhob die Staatsanwaltschaft Dresden Anklage gegen die
Verdächtigen. Fast ein Jahr später kam es zu einem Deal zwischen beiden Parteien: Die
Täter liefern das Diebesgut zurück und geben umfassende Geständnisse zum Tatvorgang,
im Gegenzug erhalten sie ein milderes Strafmaß und belasten keine Dritten.
<br><br>
Die entscheidende Frage bleibt: Wo ist den Verdächtigen der ausschlaggebende Fehler
unterlaufen, der zu einer Anklage führte, und wie hoch fällt das Strafmaß für solch eine
Tat aus?`
        },
        23: {
            titel: "23. Dezember",
            text: `Im Dezember 2019 meldet eine Berliner Anwohnerin der Polizei einen bereits länger
abgestellten silberfarbenen Mercedes mit offenem Fenster.
<br><br>
Die Polizei stellt auch hier gefälschte Kennzeichen, Dubletten, fest und brachte das
Fahrzeug aufgrund der Urkundenfälschung auf einen Sicherungsplatz. Und gehen erstmal
nicht weiter dagegen vor.`
        },
        24: {
            titel: "24. Dezember",
            text: `Am 25. Dezember 2019 brach an besagtem Sicherungsplatz gegen 3 Uhr ein Brand genau
an diesem silberfarbenen Mercedes aus. Der Wachmann konnte das Feuer löschen.
<br><br>
Erst durch diesen Vorfall wurden die Ermittler auf dieses Fahrzeug aufmerksam und
ließen es vom LKA Berlin und Sachsen umfangreich untersuchen. Irgendetwas muss mit
diesem Auto sein. DNA-Spuren wurden gesichert und mit einer Datenbank abgeglichen.
Drei Treffer: Cousins der Remmo Familie. Polizeibekannt wegen Raubüberfällen,
Diebstahl, Körperverletzung. Einer von ihnen, zum Zeitpunkt 22 Jahre alt, bereits
verurteilt für den Einbruch im Bode Museum.
<br><br>
Zusätzlich fanden die Ermittler elfenbeinfarbige Folienreste am Fahrzeug. Es handelt sich
also um das Taxi Fluchtfahrzeug, welches von der Tiefgarage aus nach Berlin fuhr. Mit
Glassplitter vom Vitrinen Glas aus dem Juwelenzimmer konnte die Tat nun vollständig
mit den Mitgliedern der Remmo Familie in Verbindung gebracht werden.
<br><br>
Die bekannten DNA Spuren wurden zudem mit 4.000 Proben an der Schlossmauer
gegenüber vom Einstiegsfenster abgeglichen, über welche die Täter geklettert waren.
Zehn Monate nach dem Diebstahl, wurden Übereinstimmungen mit 5 tatverdächtigen
Personen (Bashir R., Rabieh R., Wissam R., M. R., A.R.) gefunden. Die Qualität der Treffer
war so aussagekräftig, dass sie als zweifelsfrei erwiesen gelten konnten.
<br><br>
So konnten den Verdächtigen Haftbefehle ausgestellt werden. Nach langen
Verhandlungen, auch aufgrund des Deals mit der Staatsanwaltschaft, wurden die
Angeklagten letztendlich zu durchschnittlich fünf bis sechs Jahren Freiheitsstrafe
verurteilt. In drei Fällen mit Haftverschonung.
<br><br>
Die SOKO Epaulette und auch Du als Ermittler*in haben ganze Arbeit geleistet. Wie
zufrieden bist Du mit dem Urteil?
<br><br>
Wer weitere Details über den Fall erfahren will, kann in zahlreiche Dokus auf Streaming
Seiten (YouTube, ARD-Mediathek, usw.) oder Podcasts eintauchen und sich damit die
Weihnachtszeit versüßen.
<br><br>
<b>Frohe Weihnachten</b>`
        }
    }
};

    //hier werden Variablen definiert
    const kalender = document.querySelector('.adventskalender');
    const fenster = document.getElementById('id_hintergrundAktivesFenster');
    const schliessenKnopf = document.getElementById('schliessenKnopf');
    const fensterTitel = document.getElementById('fensterTitel');
    const fensterText = document.getElementById('fensterText');

    //hier wird definiert was passiert wenn irgendein Türchen
    kalender.addEventListener('click', function(e) {
        const tuerchen = e.target.closest('.tuerchen');
        if (!tuerchen){
            return;
        } 

        //hier wird das datum abgefragt
        heute = new Date();
        /*
        aktuellesJahr = heute.getFullYear();
        aktuellerMonat = heute.getMonth();
        aktuellerTag = heute.getDate();
        */

        
        aktuellesJahr = 2026;
        aktuellerMonat = 11;
        aktuellerTag = 24;
        

        const tuerNummer = parseInt(tuerchen.id.split('_')[1]);

        if (darfTuerOeffnen(tuerNummer) === true) {
            tuerWirdGeoeffnet(tuerNummer);
        }
    });


    //wichtig! 0 ist Januar 11 ist Dezember!!
    function darfTuerOeffnen(tuerNummer) {
        if (aktuellerMonat !== 11) {
            alert("Geduld! Der Adventskalender startet erst im Dezember.");
            return false;
        }

        if (tuerNummer > aktuellerTag) {
            alert(`Heute ist erst der ${aktuellerTag}. Dezember. Du kannst Türchen ${tuerNummer} noch nicht öffnen!`);
            return false;
        }

        return true;
    }

    function tuerWirdGeoeffnet(tuerNummer) {

        const inhalt = holeInhalt(tuerNummer);

        const tuerchenElement = document.getElementById(`tuer_${tuerNummer}`);
        if (tuerchenElement) {
            tuerchenElement.classList.remove('closed');
            tuerchenElement.classList.add('opened');
            speichereStatus(tuerNummer);
        }

        // Fenster INHALT setzen
        fensterTitel.textContent = inhalt.titel;
        fensterText.innerHTML = inhalt.text;

        // Fenster erst nach 5ms anzeigen
        setTimeout(() => {
            fenster.style.display = 'flex';
        }, 500);
    }

    function holeInhalt(tag) {
        const standard = {
            titel: `Türchen ${tag}`,
            text: "Noch ein Tag näher an Weihnachten!"
        };

        if (inhalte[aktuellesJahr] && inhalte[aktuellesJahr][tag]) {
            return inhalte[aktuellesJahr][tag];
        }
        
        return standard;
    }


    function schliesseFenster() {
        fenster.style.display = 'none';
    }
    schliessenKnopf.addEventListener('click', schliesseFenster);
    fenster.addEventListener('click', (e) => {
        if (e.target === fenster) schliesseFenster();
    });


    //Local Storage
    function speichereStatus(tuerNummer) {
        // Lade aktuelle Liste oder erstelle leere Liste
        let geoeffneteTueren = JSON.parse(localStorage.getItem('krimi_adventskalender_geoeffnet')) || [];
        
        // Nur hinzufügen, wenn noch nicht drin
        if (!geoeffneteTueren.includes(tuerNummer)) {
            geoeffneteTueren.push(tuerNummer);
            localStorage.setItem('krimi_adventskalender_geoeffnet', JSON.stringify(geoeffneteTueren));
        }
    }

    function stelleStatusWiederHer() {
        // Liste laden
        let geoeffneteTueren = JSON.parse(localStorage.getItem('krimi_adventskalender_geoeffnet')) || [];
        
        // Alle gespeicherten Türen öffnen
        geoeffneteTueren.forEach(nummer => {
            const tuerchen = document.getElementById(`tuer_${nummer}`);
            if (tuerchen) {
                tuerchen.classList.remove('closed');
                tuerchen.classList.add('opened');
            }
        });
    }


    //hier wird der storage zurückgesetzt
    document.getElementById('reset-btn').addEventListener('click', () => {
        localStorage.removeItem('krimi_adventskalender_geoeffnet');
        location.reload();
    });

});