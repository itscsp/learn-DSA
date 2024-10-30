/*
Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.
*/
//Brute force
var strStr = function(haystack = "hello", needle = "ll") {
    let exist = false
    let index = 0

    //   console.log(haystack.search(needle));  
    for(let i=0; i < haystack.length; i++){
        let value = ''

        for(let j = i; j < needle.length+i; j++){
            value += haystack[j]
        }

        if(value == needle){
            index = haystack.indexOf(value);
            exist = true
        }
    }

    if(exist){
        return index
    } else {
        return -1
    }
};

//Optimised solution
var strStr2 = function(haystack, needle) {
    if(needle.length > haystack.length) return -1;
        for (let index = 0; index <= haystack.length - needle.length; index++) {
        if (haystack.substring(index, index + needle.length) === needle) {
            return index;
        }
    }
    return -1;    
};

console.log(strStr())