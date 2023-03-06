let EnemyScoreGlobal=0;
let PlayerScoreGlobal =0;

function updateScoreboard(computerScore, playerScore, draw) {
  document.querySelector('.computer_score').textContent = computerScore;
  document.querySelector('.player_score').textContent = playerScore;
}

function deleteHands() {
    var deletePlayerHand = document.getElementById('playerHand');
    var deleteEnemyHand= document.getElementById('enemyHand');
    deletePlayerHand.parentNode.removeChild(deletePlayerHand);
    deleteEnemyHand.parentNode.removeChild(deleteEnemyHand);
  }
  
 // <div id="playerHand"></div>  <-- create in HTML using JS so we can destroy at will! [x]
 // <div id="enemyHand"></div>   <-- create in HTML using JS so we can destroy at will! [x]
function createHands() {
  let Player = document.createElement("div");
  Player.id = "playerHand";
  document.body.appendChild(Player);

  let Enemy = document.createElement("div");
  Enemy.id = "enemyHand";
  document.body.appendChild(Enemy);
}

function play(){

var elementExists = document.getElementById("playerHand");
if (elementExists){
deleteHands();
}

createHands();

let selection = prompt("Paper Scissors Or Rock? (1, 2, 3?)")
console.log("Player selected: " + selection);

let paper= 1;
let scissors= 2;
let rock= 3;

enemyhand=[1,2,3];


if (isNaN(selection)) {
  console.log("invalid input");
  window.alert("Invalid selection!");
  return;
}
else if (selection<1||selection>3) {
  console.log("invalid input");
  window.alert("Invalid selection!");
  return;
}
// valid input received --> continue the function :)


// overlay chosen hand over player on bg image
if (selection==paper) {
var img = document.createElement("img");
img.src = img.src = "./assets/images/paper.png";
var src = document.getElementById("playerHand");
src.appendChild(img);
}
if (selection==scissors) {
var img = document.createElement("img");
img.src = "./assets/images/scissors.png";
var src = document.getElementById("playerHand");
src.appendChild(img);
}
if (selection==rock) {
var img = document.createElement("img");
img.src = "./assets/images/rock.png";
var src = document.getElementById("playerHand");
src.appendChild(img);
}

// 'enemies' turn to choose a hand!
const randomIndex = Math.floor(Math.random() * enemyhand.length);
enemy=(enemyhand[randomIndex]);
  // console log enemy chosen hand
  console.log("enemy chose " + enemy);


  // overlay chosen hand over enemy on bg image
  if (enemy==1) {
  var img = document.createElement("img");
  img.src = "./assets/images/paper.png";
  var src = document.getElementById("enemyHand");
  src.appendChild(img);
  }
  if (enemy==2) {
  var img = document.createElement("img");
  img.src = "./assets/images/scissors.png";
  var src = document.getElementById("enemyHand");
  src.appendChild(img);
  }
  if (enemy==3) {
  var img = document.createElement("img");
  img.src = "./assets/images/rock.png";
  var src = document.getElementById("enemyHand");
  src.appendChild(img);
  }

let win = false;
let lose = false;
// Draw Case
if (enemy==selection){window.alert("draw")}
// Lose Cases
else if (enemy==scissors&&selection==paper){window.alert("...you lose!"), lose=true}
else if (enemy==rock&&selection==scissors){window.alert("...you lose!"),lose=true}
else if (enemy==paper&&selection==rock){window.alert("...you lose!"),lose=true}
// Win Cases
else if (selection==scissors&&enemy==paper){window.alert("You Win!!"),win=true}
else if (selection==rock&&enemy==scissors){window.alert("You Win!!"),win=true}
else if (selection=paper&&enemy==rock){window.alert("You Win!!"),win=true}

if (win){
PlayerScoreGlobal++;
}
else if (lose){
EnemyScoreGlobal++;
}
updateScoreboard(PlayerScoreGlobal, EnemyScoreGlobal);
 
}
