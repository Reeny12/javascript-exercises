/*const removeFromArray = function(container = [], number = []) {
    let containerLength = container.length;
    let numberLength = number.length;

    for (i = 0; i < containerLength; i++){
            console.log(`The number at position ${[i]} is ${container[i]}`);
            if (container[i] == number){
                container.splice([i], 1);
                console.log(`From position ${[i]} , remove ${number}`)
                containerLength--;
                i--;
            }
    }
console.log(container);

return (container);
};

removeFromArray([1, 2, 2, 4], 7, 2)*/

const removeFromArray = function (container = [], number) {
    const result = container.filter(item => item !== number);
    console.log(result);
    return result;
};

removeFromArray([1, 2, 3, 4], 1, 3);


// Do not edit below this line
module.exports = removeFromArray;
