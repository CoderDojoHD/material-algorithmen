function istVielfacheVon(vielfache, teiler) {
    return vielfache % teiler == 0;
}

function summeVielfacheVon3Und5() {
  var summe = 0;
  var n = 1000;

  while (n-- > 0) {
    if (istVielfacheVon(n, 3) || istVielfacheVon(n, 5)) {
      summe += n;
    }
  }

  return summe;
}
