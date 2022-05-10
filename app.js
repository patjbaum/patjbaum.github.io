//import deck.js;
//import {deck, shuffle} from './deck.js';

console.log("help")

//cardHand objects
const playerHand = document.querySelector('#playerHand');
const dealerHand = document.querySelector('#dealerHand');

//add event listeners
const hitter = document.querySelector('#hit');
hitter.addEventListener('click', hit);

const stander = document.querySelector('#stand');
stander.addEventListener('click', stand);

const gamer = document.querySelector('#newgame');
gamer.addEventListener('click', newGame);

const starter = document.querySelector('#beginGame');
starter.addEventListener('click', function(){
  document.querySelector('#startsite').className ='invisibleButton';
  document.querySelector('#centerBlock').className = '';

  newGame();
} );

const scoreD = document.querySelector('#dealerNum');
const scoreP = document.querySelector('#playerNum');
const scoreR = document.querySelector('#result');

const handSize = ['nocards',
                  'onecards',
                  'twocards',
                  'threecards',
                  'fourcards', 'fivecards', 'sixcards', 'sevencards', 'eightcards'];

let dealerScore = 0;
let playerScore = 0;
let faceDownScore = 0;

let dealerZone = [];
let playerZone = [];
let faceDown = [];

let cardDir = './cards/';

//player draws a card
function hit() {
  console.log('player draws');
  newCard = deck.pop();
  if(newCard.num<11){
    playerScore+=newCard.num;
  }else {
    playerScore+=10;
  }
  playerZone.push(newCard);

  //create new image tag with newCard.pic
  newCardImage = document.createElement('img');
  newCardImage.src = cardDir + newCard.pic;
  newCardImage.classList.add('card'); //some class to determine whatever it needs
                                  //probably add additional css here for proper location
  //display in current position
  playerHand.className = handSize[playerZone.length];
  playerHand.appendChild(newCardImage);

  console.log('player hand: ' + playerScore);
  //update scoreboard
  score();
  if(playerScore>21){
    //bust message
    gameOver();
  }
  else if (playerScore===21) {
    //check dealer cards
    stand();
  }
}

//dealer draws a card
function dealDraw() {
  console.log('dealer draws');
  newCard = deck.pop();

  if(newCard.num<11){
    dealerScore+=newCard.num;
  }else {
    dealerScore+=10;
  }
  dealerZone.push(newCard);

  //create new image tag with newCard.pic
  newCardImage = document.createElement('img');
  newCardImage.src = cardDir + newCard.pic;
  newCardImage.classList.add('card'); //some class to determine whatever it needs
                                  //probably add additional css here for proper location
  //display in current position
  dealerHand.className = handSize[dealerZone.length + faceDown.length];
  dealerHand.appendChild(newCardImage);


  console.log('dealer hand: ' + dealerScore);
}

//dealer draws a face down card
function faceDownDraw(){
  newCard = deck.pop();
  if(newCard.num<11){
    faceDownScore+=newCard.num;
  }else {
    faceDownScore+=10;
  }
  faceDown.push(newCard);

  //display faceDownCard
  //create new image tag with newCard.pic
  newCardImage = document.createElement('img');
  newCardImage.src = cardDir + 'faceDownCard.png';
  newCardImage.classList.add('card');
  newCardImage.classList.add('backCard');  //probably add additional css here for proper location
  //display in current position
  dealerHand.appendChild(newCardImage);

}




//player stands
//hides buttons
function stand() {
  console.log('player stands')
  //reveal dealer facedown card
  dealerdown = document.querySelector('.backCard');
  dealerdown.src= cardDir + faceDown[0].pic;
  dealerScore +=faceDownScore;
  dealerZone.push(faceDown[0]);
  faceDown = [];
  score();
  //checks if dealer should draw

  while(dealerScore<17){
    //setTimeout(dealDraw, 500);
    dealDraw();
    score();
  }
  //game ends
  gameOver();
}

//updates scoreboard
function score(){
  scoreD.innerText = dealerScore;
  scoreP.innerText = playerScore;
}


//ends game
function gameOver() {
  console.log("gama ovar");
  //display loss message
  //can test different cases for game end here
  //if player busts
  if(playerScore>21){
    console.log('player bust');
    scoreR.innerText = 'Player Bust!';
    //setTimeout(scoreR.classList.remove("invisibleButton"),10000);
    scoreR.classList.remove("invisibleText");
  }
  //if dealer busts
  else if (dealerScore>21) {
    console.log('dealer bust');
    scoreR.innerText = 'Dealer Busts!';
    scoreR.classList.remove("invisibleText");
  }
  //if dealer wins
  else if (dealerScore>=playerScore){
    console.log('dealer win');
    scoreR.innerText = 'Dealer Wins!';
    scoreR.classList.remove("invisibleText");
  }
  //if player wins
  else if (playerScore>dealerScore) {
    console.log('player win');
    scoreR.innerText = 'You Win!';
    scoreR.classList.remove("invisibleText");
  }

  //change button visibility
  hitter.classList.add("invisibleButton");
  stander.classList.add("invisibleButton");
  gamer.classList.remove("invisibleButton");
}



//begin new game//////////////////////////////////////////
function newGame() {
  //reset scoreboard
  scoreD.innerText = 0;
  scoreP.innerText = 0;
  scoreR.innerText = '___';

  //removes cards from hands
  for(let i = 0; i<dealerZone.length; i++){
    deck.push(dealerZone[i]);
  }
  for(let i = 0; i<playerZone.length; i++){
    deck.push(playerZone[i]);
  }

  dealerZone = [];
  playerZone = [];
  faceDown = [];

  //removes images from board
  while (dealerHand.contains(document.querySelector('.card'))) {
    dealerHand.removeChild(document.querySelector('.card'));
  }
  while (playerHand.contains(document.querySelector('.card'))) {
    playerHand.removeChild(document.querySelector('.card'));
  }



  //shuffles deck
  shuffle(deck);

  //starts new game
  console.log('new game started');
  scoreR.classList.add("invisibleText");
  hitter.classList.remove("invisibleButton");
  stander.classList.remove("invisibleButton");
  gamer.classList.add("invisibleButton");
  dealerScore = 0;
  playerScore = 0;
  faceDownScore = 0;

  //draws two new cards
  faceDownDraw();
  hit();
  dealDraw();
  hit();
}



////////////////////////////////////////// deck dot js
deck = [];

function shuffle(deck) {
  let finger = deck.length;

  while (finger != 0) {
    randomIndex = Math.floor(Math.random() * finger);
    finger--;
    [deck[finger], deck[randomIndex]] = [deck[randomIndex], deck[finger]];
  }

  return deck;
};

//card objects
///////////////need to add the filename/image name to each object to bring image onto screen

//playing card class
class playingCard {
  constructor(num, suit, color, pic) {
    this.num=num;
    this.suit=suit;
    this.color=color;
    this.pic=pic;
  }
}
//fills deck with cards
let suits = ['spades','hearts','clubs','diamonds'];
for(let i = 1; i<=13; i++){
  for(let s = 0; s<suits.length;s++){
    let picfile = i.toString() + suits[s] + '.png';
    if(suits[s]==='spades'||suits[s]==='clubs'){
      deck.push(new playingCard(i,suits[s],'black',picfile));
    }else {
      deck.push(new playingCard(i,suits[s],'red',picfile));
    }
  }
}
