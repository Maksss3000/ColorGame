"use-strict";


//Clicking on "Start Game" button.
//Or Reloading the Page.
startGame();

let allColorCircles;
allColorCircles=document.getElementById("container");

//Start Game Button Clicked.
//Or Page was Reloaded.
function startGame() {
  
  let startGameBtn;
  let mousein;
  let mouseout;
  
  startGameBtn = document.getElementById("start").addEventListener("click", startGame);
  mousein = document.getElementById("start").addEventListener("mouseover", mouseOverBtn);
  mouseout = document.getElementById("start").addEventListener("mouseout", mouseOutBtn);
  
  let rgbTitle;
  rgbTitle = document.getElementById("par");
  

  createGuessMessageStyle();
  createStyleOfRgbTitle();

  let countOfCircles;
  countOfCircles=givingColorsToEveryCircle();  
  
  //Getting the  random number between 0 And (countOfCircles-1)
  let num;
  num = randNum(countOfCircles);
  
  choosingColorToGuess(num,countOfCircles);

} 

function mouseOverBtn() {
  mouse = document.getElementById("start");
  mouse.style.backgroundColor = "red";
  mouse.style.color = "black";
}

function mouseOutBtn() {
  mouse = document.getElementById("start");
  mouse.style.backgroundColor = "burlywood";
  mouse.style.color = "white";
}

//Randomize colors.
function color() {
  return Math.floor(Math.random() * 255);
}


function createStyleOfRgbTitle(){
  rgbTitle = document.getElementById("par");
  rgbTitle.style = "red";
}

function givingColorsToEveryCircle(){

  let allCircles;
  let countOfCircles;

  allCircles=document.querySelectorAll("button.circle");
  countOfCircles=allCircles.length;

  //Giving to every circle specific color.
  for(let i=0;i<countOfCircles;i++){
    allCircles[i].style.backgroundColor=`rgb(${color()}, ${color()},${color()}`;
    allCircles[i].style.opacity=10;
    allCircles[i].disabled=false;
  }

  return countOfCircles;

}

function createGuessMessageStyle(){
  message = document.getElementById("answer");
  message.style.visibility="hidden";
}


function randNum(countOfCircles){
  return Math.floor(Math.random() * countOfCircles);
}

function choosingColorToGuess(num,countOfCircles){

  let allCircles;
  allCircles=document.querySelectorAll("button.circle");

  for(let i=0;i<countOfCircles;i++){

    if(i==num){
      rgbTitle.innerHTML=allCircles[i].style.backgroundColor;
      guesscollor=allCircles[i].style.backgroundColor;
      return;
    }
}

}

//Clicking on Circle to Guess the Color.
allColorCircles.addEventListener("click",function(e){
 
  let clickedBtn;
  let colorOfBtn;

  clickedBtn=document.getElementById(e.target.id);
  if(clickedBtn.className=="color-container")
  return;

  colorOfBtn=clickedBtn.style.backgroundColor;

  if (guesscollor==colorOfBtn){
    guessColorRight();
  }
  else{
    didNotGuessColor(clickedBtn);
  }

});


function guessColorRight(){

  message.style.visibility="visible";
  message.innerHTML = "Correct!";
  
  let allCircles;
  let length;

  allCircles=document.querySelectorAll("button.circle");
  length=allCircles.length;
  

  for(let i=0;i<length;i++){
    allCircles[i].style.opacity=10;
    allCircles[i].style.backgroundColor=guesscollor;
    allCircles[i].disabled=true;
  }

  rgbTitle.style.color=guesscollor;
}


function didNotGuessColor(clickedBtn){

    let wrongClickedBtn;
    wrongClickedBtn=clickedBtn;

    message.style.visibility="visible";
    message.innerHTML = "Wrong ,Try again";

    wrongClickedBtn.style.opacity=0;
    wrongClickedBtn.disabled=true;
}
