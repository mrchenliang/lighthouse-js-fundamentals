const squareCode = function(message) {
  message = message.replace(/[-_ ]/g, "");
  let length = Math.ceil(Math.sqrt(message.length));
  result = "";
  for (let i = 0; i < message.length; i++) {
    if ((i+1) % length === 0) {
      result += message[i] + " ";
    } else {
      result += message[i];
    }
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
