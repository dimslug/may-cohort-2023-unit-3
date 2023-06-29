class Cake {
    // your code here  
/* Define a class named Cake
Within Cake's code block, create a constructor that takes flavor, icing, and decoration as its arguments.
Within the constructor's code block, map: this.flavor to flavor, this.icing to icing, and this.decoration to decoration. */
    constructor(flavor, icing, decoration, slice) {
        this.flavor = flavor;
        this.icing = icing;
        this.decoration = decoration;
        this.slice = slice;
    }
/* Outside of the constructor's code block but within the Cake class, create a describe method.
describe should contain a console log that utilizes flavor, icing, and decoration, in a description of the cake. */
    describe() {
        console.log(`This is a ${this.flavor} cake, with ${this.icing} frosting, and ${this.decoration}.`)
    }

    eat(slice){
        console.log(`You eat a ${slice} of the cake, the ${this.flavor} is very prominent. `)
    }

}

let chocolateCake = new Cake('chocolate', 'caramel', 'sprinkles');
let funfettiCake = new Cake('vanilla', 'vanilla', 'a lot of sprinkles');
let strawberryCake = new Cake('strawberry','strawberry','strawberry drizzle');
let garbageCake = new Cake('garbage', 'sewage', 'trash');

chocolateCake.describe();
funfettiCake.describe();
strawberryCake.describe();
garbageCake.describe();
strawberryCake.eat('slice');
// Should print:
// 'It is a chocolate cake, with caramel frosting, and sprinkles'

/*   Construct the Cake class



Create the describe Cake class method

Outside of the constructor's code block but within the Cake class, create a describe method.
describe should contain a console log that utilizes flavor, icing, and decoration, in a description of the cake.

Define three new Cake class objects

  Create three new Cake objects. Their name and their property values passed to the constructor are your choice, but they should correlate with the keys of the properties (flavor, icing, decoration).

Invoke the describemethod

  Invoke the describe method on all three of your new cakes. */