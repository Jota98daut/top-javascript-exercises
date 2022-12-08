const sumAll = function(n1, n2) {
  if(typeof n1 !== "number" || typeof n2 !== "number") return "ERROR";

  if(n1 < 0 || n2 < 0) return "ERROR";

  let init = (n1 <= n2) ? n1 : n2;
  let end = (n1 > n2) ? n1 : n2;
  let result = 0;

  for(let i = init; i <= end; i++)
    result += i;

  return result;
};

// Do not edit below this line
module.exports = sumAll;
