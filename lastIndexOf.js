function lastIndexOf(a,v){
  var value = 0;
  var match = false;
  for (var i = 0; i < a.length; i++){
    if (a[i] === v){
      value = i;
      match = true;
    }
  }
  if (match) {
    return value;
  }
  else
    {
    return -1;
  }
}

  
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 1), "=?", 3);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 2), "=?", 4);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 3), "=?", -1);
console.log(lastIndexOf([ 5, 5, 5 ], 5), "=?", 2);
console.log(lastIndexOf([], 3), "=?", -1);