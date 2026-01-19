document.addEventListener('DOMContentLoaded', function() {

    //Local Storage zurückgesetzt
    stelleStatusWiederHer();

    let heute;
    let aktuellesJahr;
    let aktuellerMonat;
    let aktuellerTag;


    //hier kommen die Inhalte der Türchen hin
    const inhalte = {
        2025: {
        1: {
            titel: "1. Dezember",
            text: `Weihnachten gilt als eine ruhige und schöne Zeit, die man gemeinsam mit Freunden oder der
Familie verbringt. Doch in der kalten Weihnachtsnacht des Jahres 2008 war dies im sonst
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
zu bringen. Es stellt sich heraus, dass es sich um das Haus der Familie Ortega handelt. Wie
jedes Jahr hatte sich die Familie dort zu einer großen Weihnachtsfeier versammelt.
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
wurden schwer verletzt, neun weitere haben die Nacht nicht überlebt. Für die Familie Ortega
ist es ein schwerer Schicksalsschlag, der das Weihnachtsfest für immer überschattet.
<br><br>
Verstorben sind:
<ul>
    <li>Alicia Sotomayor Ortega, 70 Jahre alt, Schwiegermutter</li>
    <li>Joseph S. Ortega, 79 Jahre alt, Schwiegervater</li>
    <li>Charles Ortega, 50 Jahre alt, Schwager</li>
    <li>Cheri Lynn Ortega, 45 Jahre alt, Schwägerin</li>
    <li>James Ortega, 52 Jahre alt, Schwager</li>
    <li>Teresa Ortega, 52 Jahre alt, Schwägerin</li>
    <li>Alicia Ortega Ortiz, 46 Jahre alt, Schwägerin</li>
    <li>Sylvia Ortega Pardo, 43 Jahre alt, Ex-Frau von Bruce Pardo</li>
    <li>Michael Andre Ortiz, 17 Jahre alt, Neffe</li>
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
„Der Weihnachtsmann ist eine Zeit lang hin und her gelaufen außerhalb des Grundstückes“,
berichtet eines der Kinder. Ein ungewöhnliches Verhalten, das die Ermittler aufmerksam
werden lässt.`
        },
        5: {
            titel: "5. Dezember",
            text: `<u>Erster Verdächtiger (A):</u><br>
Die Ermittlungen richten sich zunächst auf ein Familienmitglied. Ethan Ortega, ein Cousin der
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
Verdächtigen A in den Wochen vor Weihnachten. Ethan Ortega habe gereizt gewirkt und
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
Um 23:09 Uhr ist ein Mann in einem Santa-Claus-Kostüm zu sehen, die ein großes Geschenk
zum Haus der Familie Ortega trägt.
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
<i>„Für Sylvia – Frohe Weihnachten.“</i>
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
            text: `<u>Zweiter Verdächtigter (B):</u><br>
Jordan Stuckey, ein Freund der Familie und Bekannter von Sylvia Ortega, gerät ins Visier. Er
ist für handwerkliche Arbeiten bekannt, besitzt Erfahrung im Umgang mit Gasbehältern und
hat bereits kleinere Geräte improvisiert gebaut.
<br><br>
Zuletzt hatte er einen Streit mit Sylvia Ortega.
<br><br>
Die Ermittler prüfen nun, ob er in Verbindung mit dem Paket oder den Materialien stehen
könnte.`
        },
        12: {
            titel: "12. Dezember",
            text: `Die Ermittlungen ergeben, dass die Teile in einem Baumarkt („The Home Depot“ in Glendale)
gekauft wurden. Auf den Überwachungsvideos ist ein großer Mann mit Kapuze und
Sonnenbrille zu erkennen. Sein Gesicht ist nicht sichtbar.
<br><br>
Die Bezahlung erfolgte bar, weitere Spuren sind bisher nicht bekannt.`
        },
        13: {
            titel: "13. Dezember",
            text: `Die Polizei durchsucht eine alte Garage, die Verdächtiger A gelegentlich nutzte. Dort werden
gefunden:
<ul>
    <li>ein roter Stofffetzen</li>
    <li>Werkzeug</li>
    <li>feuerfeste Handschuhe</li>
</ul>
Der Stoff ähnelt dem Material eines Santa-Kostüms. Die Ermittler werten dies als mögliche
Verbindung zum Täter.`
        },
        14: {
            titel: "14. Dezember",
            text: `Bei der Durchsicht der Brandreste im Haus finden die Ermittler kleine rote Stoffreste,
eindeutig von einem Santa-Kostüm stammend.
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
            text: `<u>Dritter Verdächtigter (C):</u><br>
Bruce Jeffrey Pardo, der Ex-Mann von Sylvia Ortega, wird als Verdächtiger aufgenommen. Er
hatte Zugang zum Haus und stand unter finanziellem Druck. Bisher gibt es jedoch keine
Hinweise darauf, dass er am Abend der Tat gesehen wurde.
<br><br>
Er ist bislang unauffindbar, die Ermittler nehmen die Fahndung auf.`
        },
        17: {
            titel: "17. Dezember",
            text: `Die Ermittler überprüfen das Alibi von Verdächtigem A, Ethan Ortega. Durch
Zeugenaussagen und Belege wird klar, dass er zur Tatzeit nachweislich in einem anderen
Bundesstaat war.
<br><br>
Es handelt sich um ein lückenloses Alibi. Damit wird Ethan endgültig aus den Ermittlungen
ausgeschlossen.`
        },
        18: {
            titel: "18. Dezember",
            text: `<u>Überwachungskamera Nr. 2:</u><br>
Diese Kamera nimmt die Flucht des Mannes im Santa-Kostüm auf.
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
Inhalts eine offene Flamme im Haus berührte, gab es eine Explosion.
<br><br>
Die Konstruktion war komplex, aber nicht professionell.
Wahrscheinlich von jemandem gebaut, der Hobby-Techniker, aber kein Experte ist.`
        },
        20: {
            titel: "20. Dezember",
            text: `Ein Gerichtsakten-Fund bringt neue Informationen: Eine Woche zuvor war die Scheidung
zwischen Sylvia Ortega und ihrem Ex-Mann abgeschlossen worden.
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
Der letzte bekannte Kontakt mit der Waffe war der Ex-Mann von Sylvia Ortega.
<br><br>
Damit rückt er endgültig ins Zentrum der Ermittlungen.`
        },
        22: {
            titel: "22. Dezember",
            text: `Der blaue Dodge, der bei der Flucht gesehen wurde, gehört nicht einem der Verdächtigen,
sondern dem Bruder des Ex-Mannes von Sylvia Ortega.
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
folgendes raus:
<br><br>
Der Täter, verkleidet als Weihnachtsmann und bewaffnet mit Pistolen sowie einem
selbstgebauten Flammenwerfer, war Bruce Jeffrey Pardo, der Ex-Mann von der
verstorbenen Sylvia Ortega.
<br><br>
<b>Motiv:</b>
<ul>
    <li>Hass und Rache an der Exfrau</li>
    <li>Eheprobleme nach Scheidung</li>
    <li>Scheidungskosten und Unterhaltszahlungen für 3 Kinder</li>
    <li>Jobverlust</li>
    <li>Keine Komplizen → Einzeltäter</li>
</ul>
<b>Schicksal:</b>
<br>
Nach der Tat flieht Bruce Jeffrey Pardo, selbst schwer verletzt durch Feuer und Explosion.
Er fährt zum Haus seines Bruders in Sylmar, Kalifornien. Dort wird er später tot aufgefunden,
nach abschließenden Untersuchungen steht fest, dass er sich durch eine Schussverletzung
selbst das Leben genommen hat.
<br><br>
Ein geplanter Fluchtversuch am nächsten Morgen nach Moline, Illinois, bleibt ungenutzt.
Laut Polizeiberichten wurde in seinem Körper zum Zeitpunkt der Tat Kokain nachgewiesen.
<br><br>
Bei dem Angriff tötete Pardo gezielt Mitglieder der Familie seiner Ex-Frau Sylvia Ortega,
darunter ihre Eltern sowie ihre Brüder und deren Partnerinnen.
Seine eigenen Kinder befanden sich ebenfalls im Haus, überlebten die Tat jedoch.
Die Familie Ortega erlitt schwere Verluste.
Insgesamt verloren 16 Kinder einen oder beide Elternteile.
<br><br>
Bis heute gilt die Tat als eines der schwersten Verbrechen in der Geschichte von Covina und
hinterließ tiefe Spuren innerhalb der Familie und der gesamten Gemeinde.
<br><br>
<b>Quellen der Informationen:</b><br>
https://en.wikipedia.org/wiki/Covina_massacre<br>
https://www.theguardian.com/world/2008/dec/27/santa-shooting-covina-los-angeles<br>
https://www.cbsnews.com/losangeles/news/5-years-after-man-in-santa-suit-massacred-9-relatives-covina-woman-leads-family-healing<br>
https://www.nytimes.com/2008/12/26/us/26Santa.html<br>
https://truecrimesocietyblog.com/2024/12/04/covina-christmas-massacre<br>
https://www.welt.de/vermischtes/article2940187/Amoklauf-Weihnachtsmann-macht-16-Kinder-zu-Waisen.html`
        }

    },
        2026: {
            1: { titel: "Start 2026", text: "Ein ganz neues Jahr!" },
            6: { titel: "Nikolaus 2026", text: "Warst du dieses Jahr brav?" },
            24: { titel: "Weihnachten 2026", text: "Geschenke 2026!" }
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
        
        aktuellesJahr = heute.getFullYear();
        aktuellerMonat = heute.getMonth();
        aktuellerTag = heute.getDate();
        

        /*
        aktuellesJahr = 2025;
        aktuellerMonat = 11;
        aktuellerTag = 24;
        */

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