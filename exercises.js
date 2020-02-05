//////////// First task /////////////////////////
class Rectangle {
    constructor(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }
    calcArea() {
        return this.width * this.height;
    }
}

let rect = new Rectangle(4, 5, 'red');
console.log(rect.width);
console.log(rect.height);
console.log(rect.color);
console.log(rect.calcArea());
console.log(rect);





///////////////// Second Task /////////////////////
class Person {
    constructor(fisrtName, lastName, age, email) {
        this.fisrtName = fisrtName;
        this.lastName = lastName;
        this.age = age;
        this.email = email;
    }
    toString() {
        return `${this.fisrtName} ${this.lastName} (age: ${this.age}, email: ${this.email})`;
    }
}


let person = new Person('Pesho', 'Peshov', 22, 'pesho@abv.bg');
console.log(person.toString());






///////////////////// Third Task //////////////////////////////
let result = (function() {
    let suits = {
        spades: '\u2660',
        hearts: '\u2665',
        diamonds: '\u2666',
        clubs: '\u2663'
    };
    let faces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    class Card {
        constructor(face, suit) {
            if(!faces.includes(face) || !Object.keys(suits).map(x => suits[x]).includes(suit)){
                throw new Error('Do not have this property');
            }
            this.face = face;
            this.suit = suit;
        }
        facer() {
            return `${this.face} ${this.suit}`;
        }
    }
    return {
        suits,
        Card
    }
})();

let Card = result.Card;
let suits = result.suits;
let firstCard = new Card('10', suits.diamonds);
firstCard.face = '2';
firstCard.suit = suits.diamonds;

let cards = [
    firstCard,
    new Card('10', suits.spades),
    new Card('2', suits.diamonds),
    new Card('3', suits.clubs),
    new Card('K', suits.diamonds)
];
console.log(cards.map(x => x.facer()).join(' '));
