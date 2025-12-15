const reverseString = function(str) {

    let reversedString = "";

   for (let index = str.length - 1; index >= 0; index--){

        reversedString += str.charAt(index);

    }


    return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
