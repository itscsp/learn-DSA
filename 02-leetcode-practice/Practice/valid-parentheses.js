/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let parenthesis = []

    let parenthesisArray = s.split('')
    parenthesisArray.forEach((item) => {
        
        if(item == '(' || item == '['|| item == '{'){
            parenthesis.push(item)
        }
        
        if(item == ')'){
            if(parenthesis.find(el => el > 0)){
                parenthesis.pop("(")
            }
        } else {
            return false;
        }
        
        if(item == '}'){
            if(parenthesis.find(el => el > 0)){
                parenthesis.pop('(')
            }
        } else {
            return false;
        }
        
        if(item == ']'){
            if(parenthesis.find(el => el > 0)){
                parenthesis.pop("(")
            }
        } else {
            return false;
        }
        
        console.log(parenthesis)
        return true
    })
    
};

console.log(isValid('()'))