 function capitalize(string) {
        let firstLetter = string[0];
        firstLetter = firstLetter.toUpperCase();
        let restOfWord = string.slice(1).toLowerCase();
        let fullWord = firstLetter + restOfWord;
        return fullWord;
      }

let myString = 'the rain in spain falls MAINLY on the PLAIN';

function titleize (string) {
    const splitString = string.split(' ');
    console.log(splitString);
    let capString = splitString;
    let mappedString = newstring.map(x => capitalize(capString));
    // let capString = capitalize(mappedString);
    joinedArray = capString.join(' ');
    console.log(`${joinedArray}`);
}


titleize(myString);

// call map on new array - newstring
//