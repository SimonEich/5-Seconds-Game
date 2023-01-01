//inputs to call the functions...
document.getElementById("moreP").addEventListener("click",upPlayer);
document.getElementById("lessP").addEventListener("click",downPlayer);
document.getElementById("submitP").addEventListener("click",submitG);
document.getElementById("startt").addEventListener("click",startg);
document.getElementById("stop").addEventListener("click",stop);
//document.getElementById("allTimes").addEventListener("click",showAllTimes);
document.getElementById("newGame").addEventListener("click", newGameFunction); //creates a new Game
document.getElementById("backEndGame").addEventListener("click",backEndGameFunction);//going back from evaluation to End Game page



//variables
var title = "Choose number of Players";//title of the first site
var player = 1;                        //Number of players (min 1)
var state = "chosingPlayer";           //state of the game
var milli = 0;                         //starting time
var times = [0];                       //array that stores the times
var playernumber = 0;                  //variables to count up the playernumber during the game
var Interval = 0;                      //interval varialble
var time = 0;                           // variable with the time that gonna be put into the array
const goal = 500;                      //try to guess 5 sec
var r = 0;                             //the diffrence between the 5sec and the time guessed
var min = 0;                           //the best guest time in the times array
var index = 1;                         // the index with the best guest time in the array

//call of the show function
show();
//changing title
document.getElementById("start").innerHTML = title ;

//functions to choose the number of Player
function upPlayer(){// Function to increase the number of player
  player = player +1;
  document.getElementById("numPlayer").innerHTML = player;
  console.log("+1");
};

function downPlayer(){ //function to decrease the number of player
  if (player > 1){
    player = player-1;
    document.getElementById("numPlayer").innerHTML = player;
    console.log("-1");
  };
}

//saving time of Players in array


//stopwatch time
function timestart(){
  clearInterval(Interval);
    Interval = setInterval(startTimer, 10);
}

function startTimer(){
  time++;
}

function timestop(){
  r=goal-time;
  if (r>0){
    times[playernumber-1]=r;
  }else{
    r=r*(-1);
    times[playernumber-1]=r
  }
  clearInterval(Interval);
  time=0;
  endevaluation();
}

//changing player number in the game
function playerNumb(){
  playernumber = playernumber +1;
  return playernumber;
}

//saving Number in the right array
function endevaluation(){
  min = Math.min(...times);
  index = times.indexOf(min)+1;
  document.getElementById("victory").innerHTML = index ;
}

//compare Playernumber to player and change gamestate when necessary
function comparePlayerNumb(){
  if (player == playernumber){
    state= "endGame";
    show();
    endevaluation();
  } else {
    state= "game";
  }
}


// functions to call the state of the game
function submitG (){
  state = "game";
  show ();
  document.getElementById("playerNumGame").innerHTML = "Player "+(playernumber+1);
  console.log(state);
  console.log(playernumber);
}

function startg(){
  state= "start";
  document.getElementById("playerNumGamerun").innerHTML = "Player "+(playernumber+1);
  timestart();
  show();
  console.log(state);
}

function stop(){
  playerNumb();
  comparePlayerNumb();
  document.getElementById("playerNumGame").innerHTML = "Player " +(playernumber+1);
  timestop();
  show();
}

function showAllTimes(){
  state = "evaluation"
  console.log(state);
  show();
}

function newGameFunction (){
  state = "chosingPlayer";
  console.log("new"+state);
  playernumber = 0;
  console.log(playernumber);
  show();
}

function backEndGameFunction (){
  console.log(state);
}

// show function
function show (){
  switch (state){

    case "chosingPlayer":

    var x = document.getElementById("game");
    x.style.display = "none";
    var y = document.getElementById("run");
    y.style.display = "none";
    var z = document.getElementById("chosingPl");
    z.style.display = "block";
    var z = document.getElementById("endGame");
    z.style.display = "none";
    var z = document.getElementById("evaluation");
    z.style.display = "none";
    console.log(state);
    break;

    case "game":

    var x = document.getElementById("game");
    x.style.display = "block";
    var y = document.getElementById("run");
    y.style.display = "none";
    var z = document.getElementById("chosingPl");
    z.style.display = "none";
    var z = document.getElementById("endGame");
    z.style.display = "none";
    var z = document.getElementById("evaluation");
    z.style.display = "none";
    console.log(state);
    break;

    case "start":

    var x = document.getElementById("game");
    x.style.display = "none";
    var y = document.getElementById("run");
    y.style.display = "block";
    var z = document.getElementById("chosingPl");
    z.style.display = "none";
    var z = document.getElementById("endGame");
    z.style.display = "none";
    var z = document.getElementById("evaluation");
    z.style.display = "none";
    console.log(state);
    break;

    case "evaluation":

    var x = document.getElementById("game");
    x.style.display = "none";
    var y = document.getElementById("run");
    y.style.display = "none";
    var z = document.getElementById("chosingPl");
    z.style.display = "none";
    var z = document.getElementById("endGame");
    z.style.display = "none";
    var z = document.getElementById("evaluation");
    z.style.display = "block";
    console.log(state);
    break;

    case "endGame":

    var x = document.getElementById("game");
    x.style.display = "none";
    var y = document.getElementById("run");
    y.style.display = "none";
    var z = document.getElementById("chosingPl");
    z.style.display = "none";
    var z = document.getElementById("endGame");
    z.style.display = "block";
    var z = document.getElementById("evaluation");
    z.style.display = "none";
    console.log(state);
    break;


}
}


//k=onclick=function(){k?(S=new Date,T=setInterval("a.innerHTML=(new Date-S)/1e3")):clearInterval(T);k=!k}

console.log(times);
