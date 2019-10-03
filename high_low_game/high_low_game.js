let randomNum = Math.floor(Math.random() * 100);


function playGame() {
  var userGuess = document.getElementById("guess-value").value;

  document.getElementById("display-value").innerHTML = userGuess;

}
