// DOM Elements
let passbox = document.querySelector("#passbox");
let inputslider = document.querySelector("#inputslider");
let slidervalue = document.querySelector("#slidervalue");

let idLowerCase = document.querySelector("#LowerCase");
let idUpperCase = document.querySelector("#UpperCase");
let idNumbers = document.querySelector("#Numbers");
let idSymbols = document.querySelector("#Symbols");
let GeneratePassword = document.querySelector("#Create");

// Character sets
let upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowerChars = "abcdefghijklmnopqrstuvwxyz";
let allNumbers = "0123456789";
let allSymbols = "~!@#$%^&*";

// Show slider value
slidervalue.innerText = inputslider.value;
inputslider.addEventListener('input', () => {
    slidervalue.innerText = inputslider.value;
});

// Password Generator
GeneratePassword.addEventListener('click', () => {
    passbox.value = gp();
});

function gp() {
    let gppassword = '';
    let allchars = '';

    // Collect selected character sets
    if (idUpperCase.checked) {
        allchars += upperChars;
    }

    if (idLowerCase.checked) {
        allchars += lowerChars;
    }

    if (idNumbers.checked) {
        allchars += allNumbers;
    }

    if (idSymbols.checked) {
        allchars += allSymbols;
    }

    if (allchars.length === 0) {
        return "Please select at least one option!";
    }

    // Get length from slider
    let passwordLength = inputslider.value;

    // Generate password
    for (let i = 0; i < passwordLength; i++) {
        let randomIndex = Math.floor(Math.random() * allchars.length);
        gppassword += allchars.charAt(randomIndex);
    }

    return gppassword;
}



