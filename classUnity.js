//////////// Unity a classes ///////
class Rat {
    constructor(name) {
        this.name = name;
        this.unitedRats = [];
    }
    unite(otherRat) {
        if(otherRat instanceof Rat) {
            this.unitedRats.push(otherRat);
        }
    } 
    toString() {
        if(this.unitedRats.length > 0){
            return `${this.name}\n##${this.unitedRats.join('\n##')}`;
        }
        return this.name;
    }
    getRats() {
        return this.unitedRats;
    }
}

let firstRat = new Rat('Pesho');
console.log(firstRat.toString());

console.log(firstRat.getRats());

firstRat.unite(new Rat('Gosho'));
firstRat.unite(new Rat('Stamat'));

console.log(firstRat.getRats());
console.log(firstRat.toString());
console.log(firstRat);
