const fibonacci = function(n) {
    let index = parseInt(n)
    if (index <0){
        return "OOPS";
    }
    if (index == 1 ){
        return 1;
    }
    if (index == 2 ){
        return 1;
    }
    let n1 = 1;
    let n2 = 1;
    let sum = 0;

    for(let i = 2; i < index; i++){
        sum = n1 + n2;
        n1 = n2;
        n2 = sum;

    }

    return sum;
};

// Do not edit below this line
module.exports = fibonacci;
//1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144


