document.querySelector("button").addEventListener("click", RoleDices);

function RoleDices() {
  // Dice 1
  var randomNumber1 = Math.floor(Math.random() * 6) + 1;  // 1-6

  var randomDiceImage1 = "Dice" + randomNumber1 + ".png"; // Dice1.png - Dice6.png

  var randomImageSource1 = "images/" + randomDiceImage1; // images/Dice1.png - images/Dice6.png

  var image1 = document.querySelectorAll("img")[0];

  image1.setAttribute("src", randomImageSource1);

  // Dice 2
  var randomNumber2 = Math.floor(Math.random() * 6) + 1;  // 1-6

  var randomDiceImage2 = "Dice" + randomNumber2 + ".png"; // Dice1.png - Dice6.png

  var randomImageSource2 = "images/" + randomDiceImage2; // images/Dice1.png - images/Dice6.png

  var image2 = document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

  // Dice 3
  var randomNumber3 = Math.floor(Math.random() * 6) + 1;  // 1-6

  var randomDiceImage3 = "Dice" + randomNumber3 + ".png"; // Dice1.png - Dice6.png

  var randomImageSource3 = "images/" + randomDiceImage3; // images/Dice1.png - images/Dice6.png

  var image3 = document.querySelectorAll("img")[2].setAttribute("src", randomImageSource3);

  // Dice 4
  var randomNumber4 = Math.floor(Math.random() * 6) + 1;  // 1-6

  var randomDiceImage4 = "Dice" + randomNumber4 + ".png"; // Dice1.png - Dice6.png

  var randomImageSource4 = "images/" + randomDiceImage4; // images/Dice1.png - images/Dice6.png

  var image4 = document.querySelectorAll("img")[3].setAttribute("src", randomImageSource4);

  // Dice 5
  var randomNumber5 = Math.floor(Math.random() * 6) + 1;  // 1-6

  var randomDiceImage5 = "Dice" + randomNumber5 + ".png"; // Dice1.png - Dice6.png

  var randomImageSource5 = "images/" + randomDiceImage5; // images/Dice1.png - images/Dice6.png

  var image5 = document.querySelectorAll("img")[4].setAttribute("src", randomImageSource5);
  

  // // If Player 1 wins
  // if (randomNumber1 > randomNumber2) {
  //   document.querySelector("h1").innerHTML = "🚩Player 1 Wins!";
  // }

  // // If Player 2 wins
  // else if (randomNumber1 < randomNumber2) {
  //   document.querySelector("h1").innerHTML = "Player 2 Wins!🚩";
  // }

  // // If there is no winnar!
  // else {
  //   document.querySelector("h1").innerHTML = "😲Draw!";
  // }
}




