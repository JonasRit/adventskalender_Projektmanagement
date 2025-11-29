// Dieser Code wird ausgeführt, sobald das HTML-Dokument geladen ist
document.addEventListener('DOMContentLoaded', () => {

    // --- 1. Inhalte für die Türchen ---
    // Hier können Sie für jeden Tag den Inhalt anpassen.
    // Ich verwende Platzhalter-Texte.
    const inhalte = {
        1: { titel: "1. Dezember", text: "Der erste Schnee ist da!" },
        2: { titel: "2. Dezember", text: "Zeit, Plätzchen zu backen." },
        3: { titel: "3. Dezember", text: "Ein schönes Adventsgedicht für dich." },
        // ...
        6: { titel: "6. Dezember", text: "Frohen Nikolaus! 🎅" },
        // ...
        24: { titel: "24. Dezember", text: "Frohe Weihnachten! 🎄🎁" }
    };

    // Funktion, um den Inhalt für einen Tag zu holen
    // Falls kein spezieller Inhalt definiert ist, gibt es einen Standardtext
    function holeInhalt(tag) {
        const standard = {
            titel: `Türchen ${tag}`,
            text: "Noch ein Tag näher an Weihnachten!"
        };
        // Gibt den spezifischen Inhalt ODER den Standardinhalt zurück
        return inhalte[tag] || standard;
    }


    // --- 2. Wichtige Elemente aus dem HTML holen ---
    const kalender = document.querySelector('.adventskalender');
    const fenster = document.getElementById('id_aktivesFenster');
    const schliessenKnopf = document.getElementById('schliessenKnopf');
    const fensterTitel = document.getElementById('fensterTitel');
    const fensterText = document.getElementById('fensterText');

    // --- 3. Klick-Aktionen (Event-Listener) ---

    // Klick auf den Kalender (findet heraus, welches Türchen geklickt wurde)
    kalender.addEventListener('click', (e) => {
        // e.target ist das Element, das geklickt wurde
        // .closest('.tuerchen') findet das nächste übergeordnete Türchen
        const tuerchen = e.target.closest('.tuerchen');

        // Überprüfen, ob wirklich ein Türchen geklickt wurde
        if (!tuerchen) {
            return; // Klick war daneben, nichts tun
        }

        // Die Nummer aus der ID des Türchens holen (z.B. 'tuer_1' -> '1')
        const tuerNummer = tuerchen.id.split('_')[1];
        
        // Den passenden Inhalt für diese Nummer holen
        const inhalt = holeInhalt(tuerNummer);

        // Das Pop-up-Fenster mit dem Inhalt füllen
        fensterTitel.textContent = inhalt.titel;
        fensterText.textContent = inhalt.text;

        // Das Pop-up-Fenster sichtbar machen (CSS-Klasse .aktivesFenster)
        fenster.style.display = 'flex';
    });

    // --- 4. Aktionen zum Schließen des Fensters ---

    // Funktion zum Schließen
    function schliesseFenster() {
        fenster.style.display = 'none';
    }

    // Klick auf den Schließen-Knopf ('x')
    schliessenKnopf.addEventListener('click', schliesseFenster);

    // Klick auf den dunklen Hintergrund (schließt das Fenster auch)
    fenster.addEventListener('click', (e) => {
        // Nur schließen, wenn direkt auf den Hintergrund (e.target) geklickt wird,
        // nicht auf die weiße Inhalts-Box (.fensterInhalt)
        if (e.target === fenster) {
            schliesseFenster();
        }
    });
});