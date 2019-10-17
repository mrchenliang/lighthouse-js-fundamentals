let prompt = require("prompt-sync")();

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
}

function evaluation(guess, theNumber, guessNumber) {
  guess = parseInt(guess, 10);

  if (guess < theNumber) {
    return console.log("Too Low!");
  } else if (guess > theNumber) {
    return console.log("Too High!");
  } else if (guess == theNumber) {
    return console.log("You got it! You took " + guessNumber + " attempts!");
  } else {
    console.log("please select a valid number");
    return;
  }
}

function game() {
  let guessNumber = 1;
  let theNumber = getRandomIntInclusive(1, 100);
  const guesses = [];
  let victory = false;
  while (victory == false) {
    const guess = prompt("Guess a number: ");
    if (!guesses.includes(guess)) {
      guesses.push(guess);
      evaluation(guess, theNumber, guessNumber);
      guessNumber += 1;
      if (isNaN(parseInt(guess, 10))) {
        guessNumber -= 1;
      }
      if (guess == theNumber) {
        victory = true;
      }
    } else {
      console.log("You've already selected that");
    }
  }
}

game();
