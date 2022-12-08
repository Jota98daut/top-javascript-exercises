const reverseString = function(str) {
  let result = "";
  let strArray = str.split(""); // Turn the string into an array

  for(let i = str.length-1; i >= 0; i--)
    result += strArray[i];

  return result;
};

// Do not edit below this line
module.exports = reverseString;
