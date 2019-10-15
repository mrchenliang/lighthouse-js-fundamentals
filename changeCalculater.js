let calculateChange = function(total, cash) {
  var change = cash - total;
  //creates changeBack object
  var changeBack = {
    twentyDollar: 0,
    ten: 0,
    fiveDollar: 0,
    twoDollar: 0,
    dollar: 0,
    quarter: 0,
    dime: 0,
    nickel: 0,
    penny: 0,
  };

  let twentyD = 2000;
  let tenD = 1000;
  let fiveD = 500;
  let twoD = 200;
  let oneD = 100;
  let quarterD = 25;
  let dimeD = 10;
  let nickelD = 5;
  let pennyD = 1;

 //loops through var change
  while (change > 0) {

  if (change - twentyD >= 0) {
    changeBack.twentyDollar += 1;
    change -= 2000;
  }else if(change - tenD >= 0){
    changeBack.ten +=1;
    change -= 1000;
  }else if (change - fiveD >= 0) {
    changeBack.fiveDollar +=1;
    change -= 500;
  }else if (change - twoD >= 0) {
    changeBack.twoDollar += 1;
    change -= 200;
  }else if (change - oneD >= 0) {
    changeBack.dollar += 1;
    change -= 100;
  }else if (change - quarterD >= 0){
    changeBack.quarter += 1;
    change -= 25;
  }else if (change - dimeD >= 0) {
    changeBack.dime += 1;
    change -= 10;
  }else if (change - nickelD >= 0){
    changeBack.nickel += 1;
    change -= 5;
  }else (change - pennyD >= 0)
     changeBack.penny += 1;
     change -= 1;

  }; //console.log(changeBack);

  //applied to an object property, will remove the named property from the object
  if(changeBack.twentyDollar === 0){
    delete changeBack.twentyDollar;
  }if (changeBack.ten === 0 ){
    delete changeBack.ten;
  }if (changeBack.fiveDollar === 0) {
    delete changeBack.fiveDollar;
  }if (changeBack.twoDollar === 0) {
    delete changeBack.twoDollar;
  }if (changeBack.dollar === 0 ){
    delete changeBack.dollar;
  }if (changeBack.quarter === 0) {
    delete changeBack.quarter;
  }if(changeBack.dime === 0 ){
    delete changeBack.dime;
  }if (changeBack.nickel === 0) {
    delete changeBack.nickel;
  }if (changeBack.penny === 0) {
   delete changeBack.penny;
  }
  //returns an object
  return changeBack;
};

console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));