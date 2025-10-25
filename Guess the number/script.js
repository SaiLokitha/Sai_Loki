/*
1.Generate a random number from 1 to 20
2. Get user entered input from form
3. Guess == random:
            you win -->
            background colour
            reveal number ?
            highscore update --> 
            check btn disable
guess < random; Too Low!! --> s=s-1
guess > random; Too High!! --> s=s-1
4. again --> reset
5.if all chances are done
            background red
            number reveal
            You Lost!
*/

/*
"use strict";

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

// Helper function to display messages
const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

// Check button functionality
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".g").value);

  // When there's no input
  if (!guess) {
    displayMessage("⛔️ No number!");

    // When player wins
  } else if (guess === secretNumber) {
    displayMessage("🎉 Correct Number!");
    document.querySelector(".number").textContent = secretNumber;
    document.body.style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";

    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }

    // When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? "📈 Too high!" : "📉 Too low!");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      displayMessage("💥 You lost the game!");
      document.querySelector(".score").textContent = 0;
    }
  }
});

// Again button functionality
document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  displayMessage("Start guessing...");
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".g").value = "";

  document.body.style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});
*/

"use strict";

const body = document.querySelector("body");
const again = document.querySelector(".again");
const number = document.querySelector(".number");
const guess = document.querySelector("#guess");
const check = document.querySelector(".check");
const msg = document.querySelector(".message");
const score = document.querySelector(".score");
const hiscore = document.querySelector(".highscore");

let random = Math.floor(Math.random() * 20) + 1;
let totalscore = 20;
let hs = 0;
let gameOver = false;

guess.addEventListener("input", () => {
  if (Number(guess.value) < 1) {
    guess.value = "";
  }
});

check.addEventListener("click", () => {
  if (gameOver) return; // Prevent further checking

  const guessedNumber = Number(guess.value);

  if (!guessedNumber) {
    msg.textContent = "⛔ No number entered!";
    return;
  }

  if (guessedNumber < 1 || guessedNumber > 20) {
    msg.textContent = "🚫 Enter a number between 1 and 20!";
    return;
  }

  if (guessedNumber < random) {
    if (totalscore > 1) {
      totalscore--;
      msg.textContent = "📉 Too low!";
    } else {
      totalscore = 0;
      msg.textContent = "💥 You lost!";
      body.style.backgroundColor = "#8B0000"; // dark red
      gameOver = true;
    }
  } else if (guessedNumber > random) {
    if (totalscore > 1) {
      totalscore--;
      msg.textContent = "📈 Too high!";
    } else {
      totalscore = 0;
      msg.textContent = "💥 You lost!";
      body.style.backgroundColor = "#8B0000";
      gameOver = true;
    }
  } else {
    msg.textContent = "🎉 You won!";
    number.textContent = random;
    body.style.backgroundColor = "#60b347";
    if (totalscore > hs) {
      hs = totalscore;
      hiscore.textContent = hs;
    }
    gameOver = true;
  }

  score.textContent = totalscore;
});

again.addEventListener("click", () => {
  totalscore = 20;
  random = Math.floor(Math.random() * 20) + 1;
  gameOver = false;

  msg.textContent = "Start guessing...";
  score.textContent = totalscore;
  number.textContent = "?";
  guess.value = "";
  body.style.backgroundColor = "#222";
});
