const sumAll = function(start, finish) {
    let sum = 0;
    if (start < 0 || finish < 0){
        return ("ERROR");
    }
    else if (Number.isInteger(start) == false || Number.isInteger(finish) == false){
        return ("ERROR");
    }
    else if(start > finish){
        for (i = finish; i < start + 1; i++){
            sum = sum + i;
        }
    }

    for (i = start; i < finish + 1; i++){
        sum = sum + i;
    }
    return (sum);
};

sumAll(10, [90, 1]);

// Do not edit below this line
module.exports = sumAll;
