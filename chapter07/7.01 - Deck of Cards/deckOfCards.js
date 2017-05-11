var Card = function(suit, number) {
  this.suit = suit;
  this.number = number;
  this.value = `${this.number} ${this.suit}`;
};

var Deck = function() {
  this.cards = [];
  this.newDeck();
};

Deck.prototype.newDeck = function() {
  this.clear();
  var suits = ['\u2660', '\u2663', '\u2665', '\u2666'];
  var numbers = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
  suits.forEach((suit) => {
    numbers.forEach((number) => {
      this.cards.push(new Card(suit, number));
    });
  });
};

Deck.prototype.clear = function() {
  while (this.cards.length > 0) {
    this.cards.pop();
  }
};

Deck.prototype.shuffle = function() {
  this.cards.sort(() => Math.random() > 0.5 ? 1 : -1); 
};

Deck.prototype.deal = function() {
  return this.cards.pop();
};

// dealer - hand and deck
var Dealer = function() {
  this.deck = new Deck();
  this.hand = [];
};

Dealer.prototype.shuffleCards = function() {
  this.deck.shuffle();
  this.deck.shuffle();
  this.deck.shuffle();
};

Dealer.prototype.dealCard = function() {
  return this.deck.deal();
};

Dealer.prototype.receiveCard = function(card) {
  this.hand.push(card);
};

var Player = function() {
  this.hand = [];
};

Player.prototype.receiveCard = function(card) {
  this.hand.push(card);
};

Player.prototype.discardHand = function() {
  this.hand = [];
};

// blackjack game table

var Table = function() {
  this.dealer = new Dealer();
  this.players = [];
};

Table.prototype.join = function(player) {
  if (this.players.length > 5) {
    console.log('player is full');
  } else if (this.players.indexOf(player) > -1) {
    console.log('player is already on table');
  } else {
    this.players.push(player);  
  }
};

Table.prototype.runGame = function() {
  var dealer = this.dealer;
  var players = this.players;

  if (players.length === 0) {
    console.log('no players on table: game did not take place');
  } else {
    console.log('start blackjack game!');
    dealer.shuffleCards();
    for (var i = 0; i < 2; i++) {
      players.forEach((player) => {
        player.receiveCard(dealer.dealCard());
      });
      dealer.receiveCard(dealer.dealCard());
    }
    console.log('dealer hand', dealer.hand.map((card) => card.value));
    players.forEach((player) => {
      console.log('player hand', player.hand.map((card) => card.value));
    });
  }
};

/* TEST */
var table = new Table();
var eugene = new Player();
var david = new Player();
var luis = new Player();
var eric = new Player();

table.join(eugene);
table.join(david);
table.join(luis);
table.join(eric);

/* build until dealing of first hand */
table.runGame();
