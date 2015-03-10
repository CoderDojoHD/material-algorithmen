
function geradeFibonaccis(obereGrenze) {
  var fib = [1, 2];
  var sum = 0;

  function naechsteZahl(arr) {
    return arr[arr.length - 1] + arr[arr.length - 2];
  }

  while (fib[fib.length - 1] < obereGrenze) {
    fib.push(naechsteZahl(fib));
  }

  for(i = 0; i < fib.length; i++) {
    var n = fib[i];
    if (n % 2 === 0) {
      sum += n;
    }
  };

  return sum;
}

geradeFibonaccis(4000000);
