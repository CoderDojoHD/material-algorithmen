// Ein paar nützliche mathematische Operatoren

var rest = 100 % 31;
console.log("Der Rest von 100 / 31 =", rest);

var potenz = Math.pow(2, 10);
console.log("2 hoch 10 =", potenz);

console.log("Betrag von -99 =", Math.abs(-99));
console.log("Wurzel von 25 =", Math.sqrt(25));
console.log("Pi =", Math.PI);


// Programme und Funktionen können verzweigen

function druckeGerade(zahl) {
  if (zahl % 2 == 0) {
    console.log(zahl + " ist gerade.")
  } else {
    console.log(zahl + " ist ungerade.")
  }
}

druckeGerade(1);
druckeGerade(2);
druckeGerade(99);



// Funktionen können andere Funktionen benutzen

function istGerade(zahl) {
  return zahl % 2 == 0;
}

function druckeAlleGeradenZahlenBis(hoechste) {
  var zahl = 1;
  while(zahl <= hoechste) {
    if (istGerade(zahl)) {
      console.log("Gerade Zahl:", zahl);
    }
    zahl++;
  }
}

druckeAlleGeradenZahlenBis(99);
