const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

class Game {
  constructor() {
    this.stacks = [[1,2,3],[],[]];
  }
  
  promptMove(callback) {
    console.log(this.stacks);
    reader.question(
      "Choose a stack to move the disc from: ", function(start) {
        reader.question("Choose a stack to move the disc to: ", function(end) {
          console.log(`from: ${start} to: ${end}`);
          callback(start, end);
        });
      }
    );
  }
  
  isValidMove(start, end) {
    if (this.stacks[end].length === 0 || 
      this.stacks[start][0] < this.stacks[end][0]) {
      console.log(true);
      return true;
    } else {
      console.log(false);
      return false;
    }
  }
  
  move(start, end) {
    if (this.isValidMove(start, end)) {
      this.stacks[end].unshift(this.stacks[start].shift());
    } else {
      console.log("Invalid move!!");
    }
  }
  
  printStacks() {
    console.log(JSON.stringify(this.stacks));
  }
  
  isWon() {
    for (let i = 1; i < this.stacks.length; i++) {
      if (this.stacks[i].length === 3 ) {
        console.log(true);
        return true;
      } else {
        console.log(false);
        return false;
      }
    }
  }
  
  run(completionCallback) {
    while (!this.isWon()) {
      this.promptMove( (start, end) => this.move(start, end) );
    }
  }
}

const game = new Game();
game.run();
