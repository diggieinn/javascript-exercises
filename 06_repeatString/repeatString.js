const repeatString = function(str, num) {
    if (num < 0 ){
        return "ERROR"
    }
     if (num == 0 ){
        return ""
    }
    let temp = str; //hey
    for (let index = 1; index < num; index++) {
        str = str + temp; //1 hey+hey
        //2 heyhey + hey
    }

    return str;

};

// Do not edit below this line
module.exports = repeatString;
