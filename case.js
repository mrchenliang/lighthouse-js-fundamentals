let camelCase = function(input) {
  let string = input.split(" ");
  for (let i = 1; i < string.length; i++) {
    string[i] = string[i].charAt(0).toUpperCase() + string[i].substring(1);
  }
  let answer = string.join("");
  return answer;
};

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));
// thisIsAString
// loopyLighthouse
// supercalifragalisticexpialidocious
