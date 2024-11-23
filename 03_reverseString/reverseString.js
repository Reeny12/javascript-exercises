const reverseString = function(phrase) {
let reversedPhrase = "";
let phraseLength = phrase.length;

    for (i = phraseLength - 1; i >= 0; i--){
        console.log(phrase[i]);
        reversedPhrase += phrase[i];
    }
    console.log(reversedPhrase);
    return (reversedPhrase);
}
//reverseString("Greetings, how are you?");

// Do not edit below this line
module.exports = reverseString;
