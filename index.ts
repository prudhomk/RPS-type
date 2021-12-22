// import functions and grab DOM elements
import { checkHand, compVisual, roshambo } from './utilities.js';

const button = document.getElementById('button');
const compImage = document.getElementById('compImage');
const totalGames = document.getElementById('total-games');
const wins = document.getElementById('wins');
const losses = document.getElementById('losses');
const draws = document.getElementById('draws');

// initialize state

let total = String(0);
let win = String(0);
let loss = String(0);
let draw = String(0);

button.addEventListener('click', () => {
  compImage.style.display = 'block';
  let cpu = Number(Math.ceil(Math.random() * 3));
  total++;

  const radioPick = document.querySelector<HTMLInputElement>('input:checked');
  const userHand = radioPick.value;
  const compHand = roshambo(cpu);
  const winOrLose = checkHand(userHand, compHand);
    
  compVisual(compHand, compImage);
    
  switch (winOrLose) {
    case 'Loss':
      totalGames.textContent = total;
      loss++;
      losses.textContent = loss;  
      break;
    case 'Win':
      totalGames.textContent = total;
      win++;
      wins.textContent = win;
      break;
    case 'Draw':
      totalGames.textContent = total;
      draw++;
      draws.textContent = draw;
      break;
    default:
      totalGames.textcontent = total;
      break;
       
  }
});

