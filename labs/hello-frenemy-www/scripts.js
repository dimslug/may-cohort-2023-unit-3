function greeter(aName) {
    let result;
    if (aName == "darth vader") {
        return `Go away ${aName}!`
    } else if (aName == "lex luthor") {
        return `Go away ${aName}!`

    } else if (aName == "luke skywalker") {
        return `Hello, ${aName}, you are a good friend!`
    } else {
        return `Hello there", ${aName}, " you are a swell friend!`
    }
}



const form = document.querySelector('#name-form');
const h2 = document.querySelector('#computer-response');
const userInput = document.querySelector('#user-input')
const aName = userInput.value;

form.addEventListener("submit", word => {
    word.preventDefault();
    form.reset();
    let enemies = ['lex luthor', 'darth vader', 'sauron', 'saruman', 'smaug'];
    if (enemies.includes(aName)) {
        h2.textContent = `Go away ${aName}!`;
    } else {
        h2.textContent = `Welcome ${aName}!`
    };
    console.log(aName);
});