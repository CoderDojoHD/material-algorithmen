// Berechnungen können in Funktionen ausgelagert werden

function summiere1und2() {
  return 1 + 2;
}

var summe = summiere1und2();
console.log("1 + 2 =", summe);


// Funktionen können Parameter haben

function summiere(zahl1, zahl2, zahl3) {
  return zahl1 + zahl2 + zahl3;
}

var summeVon3 = summiere(3, 4, 5);
console.log("3 + 4 + 5 =", summeVon3);


// Man kann auch Arrays als Parameter übergeben

function summiereAlle(zahlen) {
  var summe = 0;
  for (i = 0; i < zahlen.length; i++) {
    var zahl = zahlen[i];
    summe += zahl;
  }
  return summe;
}

var meineZahlen = [10, 23, 55, 99];
console.log(summiereAlle(meineZahlen));
