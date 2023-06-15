/* 
! Classes
    - Introduced in 2015
    - a function that helps us create objects
    - defines a category of objects

    base structure:

    class NameOfClass {
        contructor(parameter) {
            this.key = parameter
        }

        methodName() {
            ... code block
        }
    }

    * new keywords : class, this, constructor
*/

// 1    2
class Item {
//       3
    constructor(name, desc, price) {

//      5      6        7
        this.name = name;
        this.description = desc;
        this.price = price;
    }
}

/* 
    1. Keyword to establish what type of "function"
    2. the name of our class. should be pascal cose.
    3. keyword - is automatically run when the class is instantiated
    4. the parameters for out constructed object.
    established the values of the new object.
    5.  "this" keyword established the context of THIS specific object
    6. The name of a key to our new objec.
        - "Item" has 3 keys being constructed
    7. The value 
*/

    //* Instantiating Classes 

class NewObject {
    constructor() {
        this.name;
        this.desc;
    }
}

let one = new Object ();
console.log('ONE: ', one);
one.name = 'sample';
console.log('ONE: ', one);

// let firstObject = {
//     one: 1,
//     two: 2,
//     three: 3,
//     four: 4
// }

let itemZero = new Item ();
console.log(itemZero); // object with undefined values withing each key.

let itemOne = new Item('beans', 'canned', 0.89);
console.log(itemOne);
let itemTest = new Item('beans', null , .99);
console.log(itemTest);

// let brokenItem = item()
// Class Constructor Item cannont be invoked without 'new'

//* Factor Functions

let iType = 'tomato soup';
let iDesc = 'canned';
let iCost = 1.29;

function processItem(i,d,c) {
    return new Item(i,d,c);
};

let useFunction = processItem(iType, iDesc, iCost);
console.log(useFunction);

//* Methods

class DeptInventory {
    constructor(dept) {
        this.department = dept;
        this.items = []; // making a default value for this key
    } 
//      1           2  
    addToInventory(newItem) {
//              3       4
        this.items.push(newItem);
        console.log("Item Added!");
    }
}

/* 
    1. Establish a name for the method
    2. requiring a parameter
    3. "this" keyword being use to reference the specific object before the method
    4. pushing the argument into the items array
*/


// 5 - generating new objects
let dryGoods = new DeptInventory('Dry Goods');
let itemTwo = new Item('corn', 'canned', .79);

// 6 - targeting the method to add to our array of items.
dryGoods.addToInventory(itemOne);
dryGoods.addToInventory(itemTwo);
console.log(dryGoods);


//* Factory Methods
class Expense {
    static addUpChargeForProfit(wholesale){
        let upcharge = wholesale + (wholesale * .25);
        return new Expense(wholesale, upcharge);
    }
    // ^^^ only reachable withing the class itself.
    constructor(w, s) {
        this.purchages_price = w;
        this.sell_at = s;
        this.plus_sales_tax;
    }

    addTax(x) {
        let percentage = x;
        let saleCost = this.sell_atl;

        this.plus_sales_tax = (saleCost + (saleCost * percentage)).toFixed(2);
    }
}

let itemToSell = Expense.addUpChargeForProfit(1);
itemToSell.addTax(.075);
console.log(itemToSell);

let anotherItem = Expense.addUpChargeForProfit(2);
anotherItem.addTax(.075);
console.log(anotherItem);
