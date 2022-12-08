const removeFromArray = function(array, ...args) {
  let newArray = [...array];
  args.forEach(e => {
    for(let i = newArray.length-1; i >= 0; i--) {
      if(newArray[i] === e)
        newArray.splice(i,1);
    }
  });

  return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
