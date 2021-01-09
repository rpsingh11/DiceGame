function rollDice() {
  let player1 = Math.ceil(Math.random() * 6);
  let player2 = Math.ceil(Math.random() * 6);
  image(player1, ".img1");
  image(player2, ".img2");
  if (player1 > player2) {
    document.querySelector("h2").textContent = "Player 1 Wins 🎈";
  } else if (player2 > player1) {
    document.querySelector("h2").textContent = "Player 2 Wins🎈";
  } else {
    document.querySelector("h2").textContent = "Match Draw";
  }
}

function imagesGenerator(player, imgName) {
  return document
    .querySelector(player)
    .setAttribute("src", "./images/" + imgName);
}
function image(playerNumber, img) {
  switch (playerNumber) {
    case 1:
      imagesGenerator(img, "dice1.png");
      break;
    case 2:
      imagesGenerator(img, "dice2.png");
      break;
    case 3:
      imagesGenerator(img, "dice3.png");
      break;
    case 4:
      imagesGenerator(img, "dice4.png");
      break;
    case 5:
      imagesGenerator(img, "dice5.png");
      break;
    case 6:
      imagesGenerator(img, "dice6.png");
      break;
  }
}

rollDice();
let btn = document.getElementById("roll");
btn.addEventListener("click", rollDice);
