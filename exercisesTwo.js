///////////////////////////////////   1. Length limit    ///////////////////////////////////////
class Stringer {
    constructor(string, length) {
        this.innerString = string;
        this.innerLength = length;
    }
    decrease(number) {
        this.innerLength -= number;
        if(this.innerLength < 0) {
            this.innerLength = 0;
        }
    }
    increase(number) {
        this.innerLength += number;
    }
    toString() {
        if(this.innerLength < this.innerString.length) {
            return this.innerString.slice(0, this.innerLength) + '...';
        }
        return this.innerString;
    }
}

let test = new Stringer('Tester', 8);
test.decrease(3);
test.decrease(1);
console.log(test.toString());

test.decrease(3);
console.log(test.toString());

test.increase(5);
console.log(test.toString());





///////////////////////////////////   2. IIFE with class    /////////////////////////////////
const Extensible = (function(){
    let id = 0;
    return class Extend {
        constructor() {
            this.id = id;
            id++;
            return this.id;   
        }
    }
})();


let obj1 = new Extensible();
let obj2 = new Extensible();
let obj3 = new Extensible();

console.log(obj1.id);
console.log(obj2.id);
console.log(obj3.id);





////////////////////////////////////////    3. Task    ////////////////////////////////////////
class SortedList {
    id = [];
    add(number) {
        this.id.push(number);
        this.id.sort((a, b) => a - b)
    }
    get(index) {
        if(index >= this.id.length) {
            throw new Error('Do not have this index')
        }
        return this.id[index];
    }
    toString() {
        return this.id;
    }
    remove(index) {
        if(index >= this.id.length) {
            throw new Error('Do not have this index')
        }
        return this.id.splice(index, 1);
    }
}

let list = new SortedList();
list.add(2);
list.add(9);
list.add(0);
list.add(100);
list.remove(3);
console.log(list.toString());
console.log(list.get(2));
