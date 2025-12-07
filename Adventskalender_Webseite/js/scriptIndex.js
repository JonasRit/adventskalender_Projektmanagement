document.addEventListener('DOMContentLoaded', function() {

    // --- 1. GLOBALE VARIABLEN (innerhalb dieses Skripts) ---
    // Wir definieren sie hier mit 'let', damit alle Funktionen sie sehen.
    // Werte bekommen sie aber erst beim Klick (damit die Zeit immer aktuell ist).
    let heute;
    let aktuellesJahr;
    let aktuellerMonat;
    let aktuellerTag;

    const inhalte = {
        2025: {
            1: { titel: "Start 2025", text: "Willkommen im Jahr 2025!" },
            6: { titel: "Nikolaus 2025", text: "Hast du deine Stiefel geputzt?" },
            24: { titel: "Weihnachten 2025", text: "Frohes Fest 2025!" }
        },
        2026: {
            1: { titel: "Start 2026", text: "Ein ganz neues Jahr!" },
            6: { titel: "Nikolaus 2026", text: "Warst du dieses Jahr brav?" },
            24: { titel: "Weihnachten 2026", text: "Geschenke 2026!" }
        }
    };

    const kalender = document.querySelector('.adventskalender');
    const fenster = document.getElementById('id_hintergrundAktivesFenster');
    const schliessenKnopf = document.getElementById('schliessenKnopf');
    const fensterTitel = document.getElementById('fensterTitel');
    const fensterText = document.getElementById('fensterText');


    // --- 2. DER HAUPT-KLICK ---
    kalender.addEventListener('click', function(e) {
        const tuerchen = e.target.closest('.tuerchen');
        if (!tuerchen) return;

        // HIER setzen wir die "globalen" Werte einmalig für diesen Klick
        heute = new Date();
        aktuellesJahr = heute.getFullYear();
        aktuellerMonat = heute.getMonth();
        aktuellerTag = heute.getDate();

        // Optional: Zum Testen hier das Datum manipulieren:
        // aktuellesJahr = 2025; aktuellerMonat = 11; aktuellerTag = 24;

        const tuerNummer = parseInt(tuerchen.id.split('_')[1]);

        // Schau mal: Wir müssen kein Datum mehr übergeben!
        if (darfTuerOeffnen(tuerNummer) === true) {
            tuerWirdGeoeffnet(tuerNummer);
        }
    });


    // --- 3. DIE FUNKTIONEN (Jetzt viel schlanker) ---

    function darfTuerOeffnen(tuerNummer) {
        // Greift direkt auf die Variable 'aktuellerMonat' von oben zu
        if (aktuellerMonat !== 11) {
            alert("Geduld! Der Adventskalender startet erst im Dezember.");
            return false;
        }

        // Greift direkt auf 'aktuellerTag' zu
        if (tuerNummer > aktuellerTag) {
            alert(`Heute ist erst der ${aktuellerTag}. Dezember. Du kannst Türchen ${tuerNummer} noch nicht öffnen!`);
            return false;
        }

        return true;
    }

    function tuerWirdGeoeffnet(tuerNummer) {
        // Greift sich das Jahr selbst
        const inhalt = holeInhalt(tuerNummer);

        fensterTitel.textContent = inhalt.titel;
        fensterText.textContent = inhalt.text;
        fenster.style.display = 'flex';

        // Styling ändern
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

        // Greift direkt auf 'aktuellesJahr' zu
        if (inhalte[aktuellesJahr] && inhalte[aktuellesJahr][tag]) {
            return inhalte[aktuellesJahr][tag];
        }
        
        return standard;
    }


    // --- 4. FENSTER SCHLIEßEN LOGIK ---
    function schliesseFenster() {
        fenster.style.display = 'none';
    }
    schliessenKnopf.addEventListener('click', schliesseFenster);
    fenster.addEventListener('click', (e) => {
        if (e.target === fenster) schliesseFenster();
    });

});