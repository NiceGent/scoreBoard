let home = 0;
let away = 0;

const homeScore = document.getElementById("home-score");
const awayScore = document.getElementById("away-score");

const homeScore1 = document.getElementById("home-btn-1");
const homeScore2 = document.getElementById("home-btn-2");
const homeScore3 = document.getElementById("home-btn-3");
const awayScore1 = document.getElementById("away-btn-1");
const awayScore2 = document.getElementById("away-btn-2");
const awayScore3 = document.getElementById("away-btn-3");

homeScore1.addEventListener("click", function homeAddOne(){
    home += 1;
    homeScore.textContent = home;
    highlightWinner();
})

homeScore2.addEventListener("click", function homeAddTwo(){
    home += 2;
    homeScore.textContent = home;
    highlightWinner();
})

homeScore3.addEventListener("click", function homeAddThree(){
    home += 3;
    homeScore.textContent = home;
    highlightWinner();
})

awayScore1.addEventListener("click", function awayAddOne() {
    away +=1
    awayScore.textContent = away;
    highlightWinner();
})

awayScore2.addEventListener("click", function awayAddTwo() {
    away += 2;
    awayScore.textContent = away;
    highlightWinner();
})

awayScore3.addEventListener("click", function awayAddThree() {
    away += 3;
    awayScore.textContent = away;
    highlightWinner();
})

function highlightWinner() {
    if (home > away) {
    document.getElementById("home-score-board").style.borderColor = "yellow";
    document.getElementById("away-score-board").style.borderColor = "black";
    } else if (away > home){
    document.getElementById("home-score-board").style.borderColor = "black";
    document.getElementById("away-score-board").style.borderColor = "yellow";
    } else {
    document.getElementById("home-score-board").style.borderColor = "black";
    document.getElementById("away-score-board").style.borderColor = "black"; 
    }
}

document.getElementById("new-game-btn").addEventListener("click", function newGame() {
    home = 0;
    away = 0;
    homeScore.textContent = home;
    awayScore.textContent = away;
    highlightWinner();
})
