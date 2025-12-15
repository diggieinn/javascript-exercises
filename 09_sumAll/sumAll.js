const sumAll = function(a,b) {
    if(a < 0 || b < 0){
        return "ERROR"
    }

    if(!Number.isInteger(a) || !Number.isInteger(b)){
        return "ERROR";
    }

      if(Number.isNaN(a) || Number.isNaN(b)){
        return "ERROR";
    }


    newA = Math.min(a, b);
    newB = Math.max(a, b);
    let num = 0;
    for (let index = newA; index <= newB; index++) {
    
        num += index;
    }

    return num;

};

// Do not edit below this line
module.exports = sumAll;
