class Location {

    constructor(name, description) {
        // your code here
        this.name = name;
        this.description = description;
    }

}

let home = new Location("home", 'very comfortable');
let sidewalk = new Location('sidewalk', 'sunny');
let store = new Location('store', 'cold and bright');

let locationCurrent = "home";


// dictionary
let locationLookUp = {
    'home' : home,
    'sidewalk' : sidewalk,
    "store" : store
};

// state machine
let locationStates = {
    /* your code here*/
    home: ['sidewalk'],
    sidewalk: ['store', 'home'],
    store: ['sidewalk']
};

console.log("You are at your " + locationCurrent)

function moveLocation(newLocation) {
/*     Create the function moveLocation that accepts the parameter of newLocation.
    Inside of moveLocation, set up an if statement whose conditional logic checks if locationStates[locationCurrent] includes newLocation.
    Inside of this if statement, set locationCurrent to now be newLocation.
    Inside of this if statement, console log the name and description of locationCurrent by checking it in locationLookUp using bracket notation.
    Outside of this if, else console log a message informing the user they cannot go from locationCurrent to newLocation. */
    if(locationStates[locationCurrent].includes(newLocation) ) {
        locationCurrent = newLocation;
        console.log(`You are in the ${locationLookUp[locationCurrent].name} it is ${locationLookUp[locationCurrent].description}`)
    } else {
        console.error (`You can't move from ${locationCurrent} to ${newLocation}.`)
    }
}

moveLocation("sidewalk");
// Prints 'You are on the sidewalk.'
moveLocation("store");
// Prints 'You are in the store.'
moveLocation("sidewalk");
// Prints 'You are on the sidewalk.'
moveLocation("home");
// Prints 'You are at your house.'
moveLocation("park");
  // Prints 'You cannot go from sidewalk to park.'

