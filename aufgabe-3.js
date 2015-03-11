function geradeFibonaccis(obereGrenze) {
  var x = 0;
  var y = 1;
  var sum = 0;

  var naechste;
  do {
    naechste = x + y;
    x = y;
    y = naechste;
    if (y % 2 == 0)  {
      sum += y;
    }
  } while (y <= obereGrenze);

  return sum;
}

geradeFibonaccis(4000000);


// Alternative Lösung

function geradeFibonaccis2(obereGrenze) {
  var sum = 0;
  var fibs = [1, 2];

  // Fuelle Array mit allen Fibonacci-Zahlen <= obere Grenze
  while(fibs[fibs.length-1] <= obereGrenze) {
      var letzte = fibs[fibs.length-1];
      var vorletzte = fibs[fibs.length-2];
      fibs.push(letzte + vorletzte);
  }

  // Addiere gerade Fibonacci-Zahlen auf
  fibs.forEach(function(zahl) {
    if (zahl % 2 == 0)  {
      sum += zahl;
    }
  });

  return sum;
}

geradeFibonaccis2(4000000);
