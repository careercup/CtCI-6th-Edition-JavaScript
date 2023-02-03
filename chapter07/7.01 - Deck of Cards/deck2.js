class Card {
    constructor(rank, suit, value) {
        this.rank = rank;
        this.suit = suit;
        this.value = value;
    }
}

class Deck {
    constructor() {
        this.cards = [];
        const suits = ['hearts', 'diamonds', 'clubs', 'spades'];
        const ranks = ['ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'jack', 'queen', 'king'];
        const values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10];
        for (let i = 0; i < suits.length; i++) {
            for (let j = 0; j < ranks.length; j++) {
                const card = new Card(ranks[j], suits[i], values[j]);
                this.cards.push(card);
            }
        }
    }

    shuffle() {
        for (let i = this.cards.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
        }
    }

    drawCard() {
        return this.cards.pop();
    }

}

class Blackjack extends Deck{
    constructor() {
        super();
        this.deck = new Deck();
        this.playerCards = [];
        this.dealerCards = [];
        this.playerScore = 0;
        this.dealerScore = 0;
    }

    start() {
        this.deck.shuffle();
        this.playerCards.push(this.deck.drawCard());
        this.dealerCards.push(this.deck.drawCard());
        this.playerCards.push(this.deck.drawCard());
        this.dealerCards.push(this.deck.drawCard());
        this.playerScore = this.calculateScore(this.playerCards);
        this.dealerScore = this.calculateScore(this.dealerCards);
    }

    hit() {
        this.playerCards.push(this.deck.drawCard());
        this.playerScore = this.calculateScore(this.playerCards);
    }

    stand() {
        while (this.dealerScore < 17) {
            this.dealerCards.push(this.deck.drawCard());
            this.dealerScore = this.calculateScore(this.dealerCards);
        }
    }

    doubleDown() {
        this.hit();
        // perform double down logic
    }

    split() {
        // perform split logic
    }

    calculateScore(cards) {
        let score = 0;
        let aceCount = 0;
        for (let i = 0; i < cards.length; i++) {
            score += cards[i].value;
            if (cards[i].rank === 'ace') {
                aceCount++;
            }
        }
        while (score > 21 && aceCount > 0) {
            score -= 10;
            aceCount--;
        }
        return score;
    }

    checkWin() {
        if (this.playerScore > 21) {
            return "Player lost";
        } else if (this.dealerScore > 21) {
            return "Player won";
        } else if (this.playerScore > this.dealerScore) {
            return "Player won";
        } else if (this.playerScore < this.dealerScore) {
            return "Player lost";
        } else {
            return "Tie";
        }
    }
}

let game = new Blackjack();
game.start();
console.log("Player cards: ", game.playerCards);
console.log("Player score: ", game.playerScore);
console.log("Dealer cards: ", game.dealerCards);
console.log("Dealer score: ", game.dealerScore);

// player chooses to hit
game.hit();
console.log("Player cards: ", game.playerCards);
console.log("Player score: ", game.playerScore);

// player chooses to stand
game.stand();
console.log("Dealer cards: ", game.dealerCards);
console.log("Dealer score: ", game.dealerScore);

// check the outcome of the game
console.log(game.checkWin());
