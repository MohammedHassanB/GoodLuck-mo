'use strict';
const roll=document.querySelector(".btn--roll");
const newGame=document.querySelector(".btn--new");
const hold=document.querySelector(".btn--hold");
const score0=document.querySelector("#score--0");
const score1=document.querySelector("#score--1");
const current0=document.getElementById("current--0");
const current1=document.getElementById("current--1");
const player0=document.querySelector(".player--0");
const player1=document.querySelector(".player--1");
const dice=document.querySelector(".dice");
let currscore,curplayer,scores,playing;

const init=function()
{
  currscore=0;
  curplayer=0;
  scores=[0,0];
  playing=true;
  dice.classList.add("hidden");
  score0.textContent=0;
  score1.textContent=0;
  current0.textContent=0;
  current1.textContent=0;
  player0.classList.remove('player--winner');
  player1.classList.remove('player--winner');
  player0.classList.add('player--active');
  player1.classList.remove('player--active');
}
init();

const switchPlayer=function()
{
  document.getElementById(`current--${curplayer}`).textContent=0;
  currscore=0;
  curplayer=curplayer===0?1:0;
  player0.classList.toggle("active-player");
  player1.classList.toggle("active-player");
}


roll.addEventListener("click",function(){

  if(playing)
  {
    dice.classList.remove("hidden");
    let randN=Math.trunc(Math.random()*6)+1;
    dice.src=`dice-${randN}.png`;
    if(randN!==1)
    {
      currscore+=randN;
      console.log(currscore);
      document.getElementById(`current--${curplayer}`).
      textContent=currscore;
    }
    else{
      switchPlayer();
    }
  }
});

hold.addEventListener("click",function(){
if(playing)
{
  scores[curplayer]+=currscore;
  document.getElementById(`score--${curplayer}`).textContent=scores[curplayer];
if(scores[curplayer]>=100)
{
playing=false;
document.querySelector(`.player--${curplayer}`).classList.add("player--winner");
document.querySelector(`.player--${curplayer}`).classList.remove("player--active");
}
else
{
  switchPlayer();
}
}
});

newGame.addEventListener("click",init);