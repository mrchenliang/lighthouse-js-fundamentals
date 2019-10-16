const squareCode = function(message) {
  message = message.replace(/[-_ ]/g, "");
  let length = Math.ceil(Math.sqrt(message.length));
  let temp = "";
  let result = " ";
  for (let i = 0; i < message.length; i++) {
    if ((i + 1) % length === 0) {
      temp += message[i] + " ";
    } else {
      temp += message[i];
    }
  }
  let answer = temp.split(" ");
  for (let j = 0; j < length; j++) {
    for (let k = 0; k < answer.length; k++) {
      if (answer[k][j]) {
        result += answer[k][j];
      }
    }
    result += " ";
  }

  return result;
};

console.log(squareCode("chill out"));
console.log(squareCode("feed the dog"));
console.log(squareCode("have a nice day"));
console.log(
  squareCode(
    "if man was meant to stay on the ground god would have given us roots"
  )
);
