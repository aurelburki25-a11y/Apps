let richtigeAntwort = null;

function zufallAus(liste) {
    return liste[Math.floor(Math.random() * liste.length)];
}

function neueFrage() {
    let schwierigkeit = Number(prompt('Gib eine Stufe ein: 1 (Schwer), 2 (Mittel), 3 (Leicht)'));
    let zahlen;

    if (schwierigkeit === 3) {
        zahlen = [1, 2, 3, 4, 5];
    } else if (schwierigkeit === 2) {
        zahlen = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    } else if (schwierigkeit === 1) {
        zahlen = [5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
    } else {
        alert('Bitte nur 1, 2 oder 3 eingeben!');
        return;
    }

    let a = zufallAus(zahlen);
    let b = zufallAus(zahlen);
    let rechenart = zufallAus(['+', '-', '*']);

    if (rechenart === '+') richtigeAntwort = a + b;
    if (rechenart === '-') richtigeAntwort = a - b;
    if (rechenart === '*') richtigeAntwort = a * b;

    document.getElementById('frage').textContent = 'Löse: ' + a + ' ' + rechenart + ' ' + b + ' = ?';
    document.getElementById('antwort').value = '';
    document.getElementById('ergebnis').textContent = '';
}

function pruefen() {
    if (richtigeAntwort === null) {
        alert('Klick zuerst auf "Neue Frage"!');
        return;
    }

    let eingabe = document.getElementById('antwort').value;
    let ergebnis = document.getElementById('ergebnis');

    if (eingabe === '') {
        ergebnis.textContent = 'Bitte gib zuerst eine Antwort ein.';
        return;
    }

    if (Number(eingabe) === richtigeAntwort) {
        ergebnis.textContent = 'Richtig! 😍';
    } else {
        ergebnis.textContent = 'Leider falsch. Richtig wäre: ' + richtigeAntwort;
    }
}
