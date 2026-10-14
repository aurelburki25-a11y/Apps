console.log("JS läuft!");

function begrüßen () {
let name = prompt('Wie heißt du?');
alert('Hallo ' + name + ', guten Appetit!');
}

document.getElementById('begrüßung').onclick = begrüßen;

function Zufallsessen() {
    let lust = prompt('Worauf hast du Lust?  Snack/Warm/Kalt/Gebäck/Getränk');
    if (lust === null) return;          // Abbrechen gedrückt → nichts tun
    lust = lust.trim().toLowerCase();   // " WARM " wird zu "warm"

    let auswahl;

    if (lust === 'snack' || lust === 'snak') {
        auswahl = ['Laugenbrezel', 'Pizzaschnecke', 'Obstbecher'];
    } else if (lust === 'warm') {
        auswahl = ['Big Mac', 'Schnitzelbrötchen', 'Pizza Peperoni',
                   'Nudeln mit Tomatensoße', 'Currywurst mit Pommes'];
    } else if (lust === 'kalt') {
        auswahl = ['Salat', 'Obstbecher', 'Belegtes Brötchen'];
    } else if (lust === 'gebäck' || lust === 'gebaeck') {
        auswahl = ['Laugenbrezel', 'Pizzaschnecke', 'Belegtes Brötchen', 'Schnitzelbrötchen'];
    } else if (lust === 'getränk' || lust === 'getränke' || lust === 'getraenk' || lust === 'trinken') {
        auswahl = ['Durstlöcher', 'Wasser', 'Apfelschorle', 'Cola',
                   'Fanta', 'Sprite', 'Kakao', 'Kaffee'];
    } else {
        alert('Das kenne ich nicht 🤔 Bitte Snack, Warm, Kalt, Gebäck oder Getränk eingeben.');
        return;
    }

    let zufall = Math.floor(Math.random() * auswahl.length);
    alert('Ich empfehle dir: ' + auswahl[zufall] + ' 😍');
}

document.getElementById('zufall').onclick = Zufallsessen;
