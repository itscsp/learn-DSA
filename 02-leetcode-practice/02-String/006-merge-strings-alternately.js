/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1="abc", word2="pqr") {
    let string = ''
    for(let i=0; i<Math.max(word1.length, word2.length); i++){
        if(i < word1.length){
            string += word1[i] 
        }

        if(i < word2.length){
            string += word2[i] 
        }

    }
    return string

};

mergeAlternately()