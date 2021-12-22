export function checkHand(userHand, compHand) {
  if (userHand === 'Rock' && compHand === 'Paper') return 'Loss';
  if (userHand === 'Paper' && compHand === 'Scissors') return 'Loss';
  if (userHand === 'Scissors' && compHand === 'Rock') return 'Loss';
  if (userHand === 'Rock' && compHand === 'Scissors') return 'Win';
  if (userHand === 'Scissors' && compHand === 'Paper') return 'Win';
  if (userHand === 'Paper' && compHand === 'Rock') return 'Win';
  if (userHand === compHand) return 'Draw';
}

export function compVisual(compHand, compImage) {
  if (compHand === 'Rock') compImage.src = './assets/Card-rock.jpg';
  if (compHand === 'Paper') compImage.src = './assets/Card-paper.jpg';
  if (compHand === 'Scissors') compImage.src = './assets/Card-scissors.jpg';
}

export function roshambo(x) {
  //Scissors
  if (x === 3) {
    return 'Scissors';
  }
  //Paper
  if (x === 2) {
    return 'Paper';
  }
  //Rock
  if (x === 1) {
    return 'Rock';
  }

}
