// Programmiere die Funktion 'summeBis100()', die alle ganzen Zahlen
// von 1 bis 100 aufsummiert.

function summeBis100() {
    var summe = 0;
    for(zahl = 1; zahl <= 100; zahl++) {
        summe += zahl;
    }
    return summe;
}


// Verändere die Funktion so, dass die höchste Zahl als Parameter übergeben wird.
function summeBis(hoechste) {
    var summe = 0;
    for(zahl = 1; zahl <= hoechste; zahl++) {
        summe += zahl;
    }
    return summe;
}


// Verändere den Algorithmus so, dass die Berechnung auch bei
// sehr großen Zahlen, z.B. 99999999, unmittelbar ein Ergebnis liefert.
function summeBis2(hoechste) {
    // Gaussche Formel: n * (n + 1) / 2
    return hoechste * (hoechste + 1) / 2;
}
