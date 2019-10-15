let sumLargestNumbers = function(data) {
var large; 
var largeTwo;
var length = data.length;
if (length <= 2) {
  return data[0] + data[1]
}
else 
large = data[0];
largeTwo = data[1];
if (large < largeTwo) {
  large = data[1]
  largeTwo = data[0]
}
for (var i = 0; i < length; i++){
  if(data[i]>large){
    largeTwo = large;
    large = data[i];
  }
  else if(data[i]>largeTwo){
    largeTwo = data[i];
  }
}
return large + largeTwo
}
console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));  
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));