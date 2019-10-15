function repeatNumbers(array) { 
  return array.map(([number, count]) => number.toString().repeat(count)).join(',')
}



console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));