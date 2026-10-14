// Navigation: zeigt immer nur einen Teil der Webseite an

function zeigeTeil(ziel) {
    // alle Teile verstecken
    document.querySelectorAll('.teil').forEach(function (teil) {
        teil.classList.remove('sichtbar');
    });

    // gewählten Teil anzeigen
    document.getElementById(ziel).classList.add('sichtbar');

    // aktiven Knopf in der Leiste markieren
    document.querySelectorAll('.nav-knopf').forEach(function (knopf) {
        knopf.classList.toggle('aktiv', knopf.dataset.ziel === ziel);
    });

    window.scrollTo(0, 0);
}

// Alles mit data-ziel (Leiste, Kacheln, Zurück-Knopf) klickbar machen
document.querySelectorAll('[data-ziel]').forEach(function (element) {
    element.addEventListener('click', function (event) {
        event.preventDefault();
        zeigeTeil(element.dataset.ziel);
    });
});
