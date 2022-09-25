var player1Btn = document.getElementById("player1");
var player2Btn = document.getElementById("player2");
var resetBtn = document.getElementById("reset");
var h1 = document.querySelector("h1");
var p = document.querySelector("p");
var pirmo = document.getElementById("pirmo");
var antro = document.getElementById("antro");
var numInput = document.querySelector("input");
var pradzia = document.querySelector('#pradzia');
var taskai1 = 0;
var taskai2 = 0;
var pradzia = 5;
var gameOver = false;

function printScore(){
  pirmo.innerHTML = taskai1;
  antro.innerHTML = taskai2;
}

function resetGame(){
  taskai1 = 0;
  taskai2 = 0;
  pirmo.style.color = "#876445";
  antro.style.color = "#876445";
  gameOver = false;
  printScore();
}

player1Btn.addEventListener("click",function(){
  if(!gameOver){
    taskai1++;
    if(taskai1 === pradzia){
        pirmo.style.color = "red";
      gameOver = true;
    }
  }
  printScore();
});

player2Btn.addEventListener("click",function(){
  if(!gameOver){
    taskai2++;
    if(taskai2 === pradzia){
        antro.style.color = "red";
      gameOver = true;
    }
  }
    printScore();
});

resetBtn.addEventListener("click",function(){
  resetGame();
});

numInput.addEventListener("change", function(){
  gameScoreGoal = Number(this.value);
  playingToDisplay.textContent = gameScoreGoal;
  resetGame();
});
