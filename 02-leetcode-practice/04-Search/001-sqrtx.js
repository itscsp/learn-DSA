/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x = 4) {
    if (x == 0) {
        return x;
    }
    if (x == 1) {
        return x;
    }

    for(let i = 0; i < x; i++){
        if(i*i == x){
            return i;
        }
    }
};

mySqrt()