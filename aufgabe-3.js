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
