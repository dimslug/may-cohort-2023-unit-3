/*     
Reference your capitalize function from last week's Capitalize Lab

    Put this function at the top of your file.

    If you don't have a working version of this function you can use the following. Please make sure to fully understand this before you use it. Ask your fellow classmates or your instructors if you need any clarification.

function capitalize(string) {
  Isolate first letter of word
  let firstLetter = string[0];
  capitalize the first letter
  firstLetter = firstLetter.toUpperCase();
  get the rest of the word
  let restOfWord = string.slice(1).toLowerCase();

  rejoin the parts of the word
  let fullWord = firstLetter + restOfWord;
  return fullWord;
} 
*/
let myString = 'the rain in spain falls MAINLY on the PLAIN';
let myString2 = 'tHe QuIcK bRoWn FoX jUmPs OvEr ThE lAzY dOg';
let riddleOfStrider = 'All that is gold does not glitter, Not all those who wander are lost; Deep roots are not reached by the frost. From the ashes a fire shall be woken, A light from the shadows shall spring; Renewed shall be blade that was broken, The crownless again shall be king.';

function capitalize(string) {
  let firstLetter = string[0];
  firstLetter = firstLetter.toUpperCase();
  let restOfWord = string.slice(1).toLowerCase();
  let fullWord = firstLetter + restOfWord;
  return fullWord;
}

/* Create the titleize function

  Declare a function named titleize that will take a string as its argument.


    Within the titleize code block, call the.join() method on our new array we created from.map().You should join the array on spaces.

Call the titleize functiom
    Call the function several times passing in different multi - word strings with different styles of capitalization.Print the results of those functions, and run the program.
 */

//* Declare a function named titleize that will take a string as its argument.
function titleize(string) {
  let newArray = string.split(' '); //* Within the titleize code block, assign the returned value from calling.split() on our string to a variable.You should split the string on spaces.
  //console.log(newArray);
  //* Within the titleize code block, call the.map() method on our new array we created from.split() and use the capitalize function as our callback function. Assign the result to a variable.
  let mappedArray = newArray.map(x => capitalize(x));
  //console.log(mappedArray);
  let joinedArray = mappedArray.join(" "); //* Within the titleize code block, call the.join() method on our new array we created from.map().You should join the array on spaces.
  console.log(`${joinedArray}`);
  return `$[joinedArray]`
}


titleize(myString);
titleize(myString2);
titleize(riddleOfStrider);

// call map on new array - newstring



