/* Create a menu Object

    Create an Object named menu.
    Inside of menu, we will need a series of key: value pairs that represent the items on the menu and their cost.
    Hint: burger: 5.55
    Have at least four entries to represent four different items on your menu. Each should have a different price. */
firstOrder = 'burger,fries,salad';
secondOrder = 'hotdog,fries,shake,salad';
thirdOrder = 'salad,shake,fries';

let menu = {
    burger: 5.00,
    fries: 3.50,
    shake: 1.11,
    salad: 4.25,
    hotdog: 4.75,
    /* Create an order Method on the menu Object
    After the initial key: value pairs inside of menu, create a method named order.
    Hint: The key is order and the value is the function the method will run.
    order's anonymous function should take the parameter orderPlaced. */
    order: (orderPlaced) => {
        //* The orderPlaced will be coming in as a String of multiple items. Create a variable orderSplit to hold the result of splitting orderPlaced into an Array with each item its own index.
        orderSplit = orderPlaced.split(',');

        //*  Create a sum variable to contain our order sum, starting at 0.
        sum = 0;

        //* Set up a for...of iteration loop. It will need to iterate over every item of orderSplit.Within the code block of the for...of loop
        for (element of orderSplit) {

            //* reassign sum to be sum plus the cost of the item from the menu. You will need bracket notation here.
            //console.log(element);
            sum += menu[element];

        }
        //* After the loop completes, print the sum variable.
        console.log(`Your order comes to : ${sum}`);
    }
}

//* Call the method menu.order()
menu.order(firstOrder);
menu.order(secondOrder);
menu.order(thirdOrder);
