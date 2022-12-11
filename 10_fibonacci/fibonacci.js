const fibonacci = function(n) {
  if(n < 0) return "OOPS";

  function fibAux(n, m, l) {
    if(l == 0) return m;
    else
      return fibAux(m, m+n, l-1);
  }

  return fibAux(1, 0, n);
};

// Do not edit below this line
module.exports = fibonacci;
