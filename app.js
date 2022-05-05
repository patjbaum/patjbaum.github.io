//import deck.js;
//import {deck, shuffle} from './deck.js';

console.log("help")

//add event listeners
const hitter = document.querySelector('#hit');
hitter.addEventListener('click', hit)

const stander = document.querySelector('#stand');
stander.addEventListener('click', stand)

const gamer = document.querySelector('#newgame');
gamer.addEventListener('click', newGame)


let dealerScore = 0;
let playerScore = 0;

let dealerZone = [];
let playerZone = [];

//player draws a card
function hit() {
  console.log('player hits')
  newCard = deck.pop();
  playerZone.push(newCard);
  //update visual hand
  playerScore+=newCard.num;
  console.log('player hand: ' + playerScore);
  //update scoreboard
  if(playerScore>21){
    //bust message
    gameOver();
  }
}

//dealer draws a card
function draw() {
  console.log('dealer draws')
  newCard = deck.pop();
  dealerZone.push(newCard);
  //update visual hand
  dealerScore+=newCard.num;
  console.log('dealer hand: ' + dealerScore);
}

//player stands
//hides buttons
function stand() {
  console.log('player stands')
  //reveal dealer facedown card
  //checks if dealer should draw
  while(dealerScore<17){
    draw();
  }
  //game ends
  gameOver();
}

//updates scoreboard
function score(){

}

function newGame() {
  //removes cards from hands
  deck.push(playerZone);
  deck.push(dealerZone);
  dealerZone = [];
  playerZone = [];
  //shuffles deck
  shuffle(deck);

  //starts new game
  console.log('new game started');
  hitter.classList.remove("invisibleButton");
  stander.classList.remove("invisibleButton");
  gamer.classList.add("invisibleButton");
  dealerScore = 0;
  playerScore = 0;

  //draws two new cards
  draw();
  hit();
  draw();
  hit();
}

function gameOver() {
  console.log("gama ovar")
  //display loss message
  //can test different cases for game end here

  //if player busts
  if(playerScore>21){
    console.log('player bust');
  }
  //if dealer busts
  else if (dealerScore>21) {
    console.log('dealer bust');
  }
  //if dealer wins
  else if (dealerScore>playerScore){
    console.log('dealer win');
  }
  //if player wins
  else if (playerScore>dealerScore) {
    console.log('player win')
  }
  //change button visibility
  hitter.classList.add("invisibleButton");
  stander.classList.add("invisibleButton");
  gamer.classList.remove("invisibleButton");
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

//all hearts
deck.push(AceHearts = {
  card: 1,
  col: "red",
  suit: "hearts",
  num: 1,
  faceUp: false
});
deck.push(TwoHearts = {
  card: 2,
  col: "red",
  suit: "hearts",
  num: 2,
  faceUp: false
});
deck.push( ThreeHearts = {
  card: 3,
  col: "red",
  suit: "hearts",
  num: 3,
  faceUp: false
});
deck.push( FourHearts = {
  card: 4,
  col: "red",
  suit: "hearts",
  num: 4,
  faceUp: false
});
deck.push( FiveHearts = {
  card: 5,
  col: "red",
  suit: "hearts",
  num: 5,
  faceUp: false
});
deck.push( SixHearts = {
  card: 6,
  col: "red",
  suit: "hearts",
  num: 6,
  faceUp: false
});
deck.push( SevenHearts = {
  card: 7,
  col: "red",
  suit: "hearts",
  num: 7,
  faceUp: false
});
deck.push( EightHearts = {
  card: 8,
  col: "red",
  suit: "hearts",
  num: 8,
  faceUp: false
});
deck.push( NineHearts = {
  card: 9,
  col: "red",
  suit: "hearts",
  num: 9,
  faceUp: false
});
deck.push( TenHearts = {
  card: 10,
  col: "red",
  suit: "hearts",
  num: 10,
  faceUp: false
});
deck.push( JackHearts = {
  card: 11,
  col: "red",
  suit: "hearts",
  num: 11,
  faceUp: false
});
deck.push( QueenHearts = {
  card: 12,
  col: "red",
  suit: "hearts",
  num: 12,
  faceUp: false
});
deck.push( KingHearts = {
  card: 13,
  col: "red",
  suit: "hearts",
  num: 13,
  faceUp: false
});

//all spades
deck.push( AceSpades = {
  card: 14,
  col: "black",
  suit: "spades",
  num: 1,
  faceUp: false
});
deck.push( TwoSpades = {
  card: 15,
  col: "black",
  suit: "spades",
  num: 2,
  faceUp: false
});
deck.push( ThreeSpades = {
  card: 16,
  col: "black",
  suit: "spades",
  num: 3,
  faceUp: false
});
deck.push( FourSpades = {
  card: 17,
  col: "black",
  suit: "spades",
  num: 4,
  faceUp: false
});
deck.push( FiveSpades = {
  card: 18,
  col: "black",
  suit: "spades",
  num: 5,
  faceUp: false
});
deck.push( SixSpades = {
  card: 19,
  col: "black",
  suit: "spades",
  num: 6,
  faceUp: false
});
deck.push( SevenSpades = {
  card: 20,
  col: "black",
  suit: "spades",
  num: 7,
  faceUp: false
});
deck.push( EightSpades = {
  card: 21,
  col: "black",
  suit: "spades",
  num: 8,
  faceUp: false
});
deck.push( NineSpades = {
  card: 22,
  col: "black",
  suit: "spades",
  num: 9,
  faceUp: false
});
deck.push( TenSpades = {
  card: 23,
  col: "black",
  suit: "spades",
  num: 10,
  faceUp: false
});
deck.push( JackSpades = {
  card: 24,
  col: "black",
  suit: "spades",
  num: 11,
  faceUp: false
});
deck.push( QueenSpades = {
  card: 25,
  col: "black",
  suit: "spades",
  num: 12,
  faceUp: false
});
deck.push( KingSpades = {
  card: 26,
  col: "black",
  suit: "spades",
  num: 13,
  faceUp: false
});

//all diamonds
deck.push( AceDiamonds = {
  card: 27,
  col: "red",
  suit: "diamonds",
  num: 1,
  faceUp: false
});
deck.push( TwoDiamonds = {
  card: 28,
  col: "red",
  suit: "diamonds",
  num: 2,
  faceUp: false
});
deck.push( ThreeDiamonds = {
  card: 29,
  col: "red",
  suit: "diamonds",
  num: 3,
  faceUp: false
});
deck.push( FourDiamonds = {
  card: 30,
  col: "red",
  suit: "diamonds",
  num: 4,
  faceUp: false
});
deck.push( FiveDiamonds = {
  card: 31,
  col: "red",
  suit: "diamonds",
  num: 5,
  faceUp: false
});
deck.push( SixDiamonds = {
  card: 32,
  col: "red",
  suit: "diamonds",
  num: 6,
  faceUp: false
});
deck.push( SevenDiamonds = {
  card: 33,
  col: "red",
  suit: "diamonds",
  num: 7,
  faceUp: false
});
deck.push( EightDiamonds = {
  card: 34,
  col: "red",
  suit: "diamonds",
  num: 8,
  faceUp: false
});
deck.push( NineDiamonds = {
  card: 35,
  col: "red",
  suit: "diamonds",
  num: 9,
  faceUp: false
});
deck.push( TenDiamonds = {
  card: 36,
  col: "red",
  suit: "diamonds",
  num: 10,
  faceUp: false
});
deck.push( JackDiamonds = {
  card: 37,
  col: "red",
  suit: "diamonds",
  num: 11,
  faceUp: false
});
deck.push( QueenDiamonds = {
  card: 38,
  col: "red",
  suit: "diamonds",
  num: 12,
  faceUp: false
});
deck.push( KingDiamonds = {
  card: 39,
  col: "red",
  suit: "diamonds",
  num: 13,
  faceUp: false
});

//all clubs
deck.push( AceClubs = {
  card: 40,
  col: "black",
  suit: "clubs",
  num: 1,
  faceUp: false
});
deck.push( TwoClubs = {
  card: 41,
  col: "black",
  suit: "clubs",
  num: 2,
  faceUp: false
});
deck.push( ThreeClubs = {
  card: 42,
  col: "black",
  suit: "clubs",
  num: 3,
  faceUp: false
});
deck.push( FourClubs = {
  card: 43,
  col: "black",
  suit: "clubs",
  num: 4,
  faceUp: false
});
deck.push( FiveClubs = {
  card: 44,
  col: "black",
  suit: "clubs",
  num: 5,
  faceUp: false
});
deck.push( SixClubs = {
  card: 45,
  col: "black",
  suit: "clubs",
  num: 6,
  faceUp: false
});
deck.push( SevenClubs = {
  card: 46,
  col: "black",
  suit: "clubs",
  num: 7,
  faceUp: false
});
deck.push( EightClubs = {
  card: 47,
  col: "black",
  suit: "clubs",
  num: 8,
  faceUp: false
});
deck.push( NineClubs = {
  card: 48,
  col: "black",
  suit: "clubs",
  num: 9,
  faceUp: false
});
deck.push( TenClubs = {
  card: 49,
  col: "black",
  suit: "clubs",
  num: 10,
  faceUp: false
});
deck.push( JackClubs = {
  card: 50,
  col: "black",
  suit: "clubs",
  num: 11,
  faceUp: false
});
deck.push( QueenClubs = {
  card: 51,
  col: "black",
  suit: "clubs",
  num: 12,
  faceUp: false
});
deck.push( KingClubs = {
  card: 52,
  col: "black",
  suit: "clubs",
  num: 13,
  faceUp: false
});
