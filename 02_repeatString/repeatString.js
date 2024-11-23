const repeatString = function(phrase, number) {

if (number < 0){
    return "ERROR";
}
let container = "";
for (i = 0; i < number; i++){
    container = container + phrase;
}
return (container);
};

// Do not edit below this line
module.exports = repeatString;
