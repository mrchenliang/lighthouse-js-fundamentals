function lengthArray() {
  const output = [];
  for (let i = 1; i <= 8; i++) {
    output.push(i);
  }
  return output;
}

function boardMaker(len) {
  const board = [];
  for (let j = 0; j < len.length; j++) {
    let x = len[j];
    for (let k = 0; k < len.length; k++) {
      let y = len[k];
      board.push([x, y]);
    }
  }
  return board;
} 

const queen1 = [3, 4];
const queen2 = [1, 1];

function queenThreat(queen1, queen2) {
  let len = lengthArray();
  const board = boardMaker(len);

  // if queen shares the same x or y axis => true
  if (queen1[0] == queen2[0] || queen1[1] == queen2[1]) {
    return true;
  }

  // diagnol logic
  // true sets
  // right diagnol => coordinates [x-1][y+1] and [x+1][y-1]
  // left diagnol => coordinates [x+1][y+1] and [x-1][y-1]

  const diag = [];
  for (let l = 0; l < len.length; l++) {
    const mod = len[l];
    const testtopx = queen1[0] + mod;
    const testtopy = queen1[1] - mod;
    const testbotx = queen1[0] - mod;
    const testboty = queen1[1] + mod;
    for (let tile of board) {
      const tilex = tile[0];
      const tiley = tile[1];
      if (
        (testtopx == tilex && testtopy == tiley) ||
        (testbotx == tilex && testboty == tiley) ||
        (testtopx == tilex && testboty == tiley) ||
        (testbotx == tilex && testtopy == tiley)
      ) {
        diag.push([tilex, tiley]);
      }
    }
  }
  for (let threat of diag) {
    const threatx = threat[0];
    const threaty = threat[1];

    if (queen2[0] == threatx && queen2[1] == threaty) {
      return true;
    }
  }
  return false;
}

console.log(queenThreat(queen1, queen2));
