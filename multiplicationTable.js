const multiplicationTable = function(maxValue) {
  let result = "";
  for (var i = 0; i < maxValue + 1; i++) {
    for (var j = 0; j < maxValue + 1; j++) {
      if (i > 0 && j > 0) {
        result += i * j + " ";
      }
    }
    result += "\n";
  }

  return result;
};

console.log(multiplicationTable(1));
console.log(multiplicationTable(5));
console.log(multiplicationTable(10));
