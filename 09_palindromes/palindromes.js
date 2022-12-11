const palindromes = function (s) {
  s = prepare(s);

  for(let i = 0; i < s.length / 2; i++)
    if(s[i] !== s[s.length-1-i]) return false;

  return true;
};

function prepare(s) {
  for(c of s)
    if(!(/\w/.test(c))) s = s.replace(c,"");
  return s.toLowerCase();
}

// Do not edit below this line
module.exports = palindromes;
