document.addEventListener('DOMContentLoaded', function() {

    let heute;
    let aktuellesJahr;
    let aktuellerMonat;
    let aktuellerTag;


    //hier kommen die Inhalte der Türchen hin
    const inhalte = {
        2025: {
            1: { titel: "1. Dezember", text: `In der Weihnachtsnacht 2008 meldet jemand von einem Nachbarshaus
                 das Schüsse und eine Explosion in einem Wohnhaus in dem Ort Covina, California, USA zu hören war.
                  Eine ganze Familie sei in diesem Haus, rund 25-30 Leute feierten dort Weihnachten.` },
            2: { titel: "2. Dezember", text: `In dem Wohnhaus befand sich die Familie Ortega, sie hatte wie jedes 
                Jahr ihre große Weihnachtsfeier in ihrem Anwesen gefeiert mit vielen Familienmitgliedern.` },
            3: { titel: "3. Dezember", text: `Nach Ermittlungen gab es an dem Abend 3 Verletzte und 9 verstorbene.
                <br>
                 Das Haus komplett in Ruinen nachdem es verbrannt ist.
                 <ul>
                    <li>Sylvia Ortega Pardo, 43 Jahre alt, Ex-Frau von Bruce Pardo</li>
                    <li>Alicia Sotomayor Ortega, 70 Jahre alt, Schwiegermutter</li>
                    <li>Joseph S. Ortega, 79 Jahre alt, Schwiegervater</li>
                    <li>Charles Ortega, 50 Jahre alt, Schwager</li>
                    <li>Cheri Lynn Ortega, 45 Jahre alt, Schwägerin</li>
                    <li>James Ortega, 52 Jahre alt, Schwag</li>
                    <li>James Ortega, 52 Jahre alt, Schwager</li>
                    <li>Teresa Ortega, 52 Jahre alt, Schwägerin</li>
                    <li>Alicia Ortega Ortiz, 46 Jahre alt, Schwägerin</li>
                    <li>Michael Andre Ortiz, 17 Jahre alt, Neffe</li>

                </ul> ` },
            4: { titel: "4. Dezember ", text: `Die Polizei beginnt Zeugenaussagen aufzunehmen.
                        Zwei Kinder sagen unabhängig voneinander, sie hätten vor dem Haus einen Mann in einem
                        Weihnachtsmannkostümgesehen mit Geschenken.
                        „Der Weihnachtsmann kommt jedes Jahr mit Geschenken“, sagt eines der Kinder.
                        Ein anders hingegen erzählt „Der Weihnachtsmann ist eine Zeitlang hin und her gelaufen
                        außerhalb des Grundstückes“.` },
            5: { titel: "5. Dezember ", text: `<u>Erste verdächtige (A):</u><br>
                            Ein Cousin hatte kürzlich finanzielle Probleme.
                            Er hat die Familie um Geld gebeten, wurde aber abgewiesen.
                            Er erschien an dem Abend nicht beim Familienhaus.
                            Ein Familienmitglied behauptet aber nun ihn kurz gesehen zu haben?<br>
                            (Stellt sich später raus er wurde verwechselt mit jemand anderes und er war tatsächlich nicht
                            da → Alibi)` },
             6: { titel: "6. Dezember", text: `Eine Rechnung über 315 Dollar für Spezialmaterial:<br>
                <ul>
                    <li>Metallrohre</li>
                    <li>Lötbrenner</li>
                    <li>Druckflaschen</li>
                </ul>` },
             7: { titel: "7. Dezember ", text: `Ein Telefonprotokoll:<br>
                            Am Abend der Tat hat der Ex-Mann von der verstorbenen Sylvia Ortega Pardo zweimal bei
                            der Familie angerufen obwohl er seit Monaten keinen Kontakt hatte.
                            Beim zweiten Anruf ging niemand mehr ran.
                            Er behauptet: „Wollte nur Frohe Weihnachten sagen.“
                            Die Polizei glaubt das nicht und nimmt den Ex-Mann als verdächtigen auf (B). Er sei laut
                            Aussagen aber nicht aufgetaucht an der Weihnachtsfeier. ` },
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
        /*
        aktuellesJahr = heute.getFullYear();
        aktuellerMonat = heute.getMonth();
        aktuellerTag = heute.getDate();
        */

        aktuellesJahr = 2025;
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

       fensterTitel.textContent = inhalt.titel;
       
       fensterText.innerHTML = inhalt.text;
       
       fenster.style.display = 'flex';

       const tuerchenElement = document.getElementById(`tuer_${tuerNummer}`);
       if (tuerchenElement) {
           tuerchenElement.classList.remove('closed');
           tuerchenElement.classList.add('opened');
       }
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

});