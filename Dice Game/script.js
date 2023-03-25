'use strict';

const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

let score = 0;

let scoreArr = [0,0];
let active = true;
let isPlaying = 0;


score0El.textContent = 0;
score1El.textContent = 0;


btnRoll.addEventListener("click",function(){
    
    let dice  = Math.trunc(Math.random()*6)+1;
  
        diceEl.src= `dice-${dice}.png`;

        if(dice != 1){
            score += dice;
            document.getElementById(`current--${isPlaying}`).textContent = score;
    
        }else{
            
            player0El.classList.toggle("player--active"); // ovo togle znaci da ukoliko player0El sadrzi klasu active uklonice je; a ukoliko ne sandrzi tu klasu onda je dodaje
            player1El.classList.toggle("player--active");
            document.getElementById(`current--${isPlaying}`).textContent = 0;
            score = 0;
            if(isPlaying === 0){
                isPlaying = 1;
            }
            else {
                isPlaying = 0;
            }

        }
    
})


btnHold.addEventListener("click",function(){

scoreArr[isPlaying] += score;
document.getElementById(`score--${isPlaying}`).textContent = scoreArr[isPlaying];

player0El.classList.toggle("player--active"); // ovo togle znaci da ukoliko player0El sadrzi klasu active uklonice je; a ukoliko ne sandrzi tu klasu onda je dodaje
player1El.classList.toggle("player--active")
document.getElementById(`current--${isPlaying}`).textContent = 0;
score = 0;
if(isPlaying === 0){
    isPlaying = 1;
}
else if(isPlaying === 1){
    isPlaying = 0;
}

})