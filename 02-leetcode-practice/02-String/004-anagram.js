/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s = "rat", t= "car") {
    console.log(s.split('').sort().join() === t.split('').sort().join())

    // count = s.length;
    // for(let i=0; i<s.length; i++){
    //     let containNumber = t.includes(s[i])
    //     if(containNumber){
    //         count--
    //     }
    // }
    // if(count==0){
    //     return true;
    // } else {
    //     return false
    // }
};

isAnagram()