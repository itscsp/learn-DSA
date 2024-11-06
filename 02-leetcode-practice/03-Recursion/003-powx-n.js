/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
    console.log("X: ",x)
    console.log("N: ",n)

    if(n < 0){
        x = 1/x
        n = -n
    }

    if(n == 0){
        return 1;
    }

    if(n == 1){
        return x
    }

    if(n%2 === 0){
        let half = myPow(x, n/2)
    console.log("Half: ",half)

        return half * half;
    }else {
        console.log("x * myPow(x, n-1)", x * myPow(x, n-1))
        return x * myPow(x, n-1)
    }
};

console.log("pow: ",myPow(2, 10))