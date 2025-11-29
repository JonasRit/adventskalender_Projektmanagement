// Dieser Code wird ausgeführt, sobald das HTML-Dokument geladen ist
document.addEventListener('DOMContentLoaded', () => {


    const inhalte = {
        1: { titel: "1. Dezember", text: "Tag1" },
        2: { titel: "2. Dezember", text: "Tag2" },
        3: { titel: "3. Dezember", text: "Tag3" },       
        6: { titel: "6. Dezember", text: "Tag6" },
        24: { titel: "24. Dezember", text: "Tag24" }
    };

    function holeInhalt(tag) {
        const standard = {
            titel: `Türchen ${tag}`,
            text: "Noch ein Tag näher an Weihnachten!"
        };
    
        return inhalte[tag] || standard;
    }

    const kalender = document.querySelector('.adventskalender');
    const fenster = document.getElementById('id_aktivesFenster');
    const schliessenKnopf = document.getElementById('schliessenKnopf');
    const fensterTitel = document.getElementById('fensterTitel');
    const fensterText = document.getElementById('fensterText');

    //Klick auf Türchen
    kalender.addEventListener('click', (e) => {
        const tuerchen = e.target.closest('.tuerchen');

        if (!tuerchen) {
            return;
        }

        const tuerNummer = tuerchen.id.split('_')[1];

        const inhalt = holeInhalt(tuerNummer);

        fensterTitel.textContent = inhalt.titel;
        fensterText.textContent = inhalt.text;

        fenster.style.display = 'flex';
    });

    function schliesseFenster() {
        fenster.style.display = 'none';
    }

    schliessenKnopf.addEventListener('click', schliesseFenster);

    fenster.addEventListener('click', (e) => {
        if (e.target === fenster) {
            schliesseFenster();
        }
    });
});