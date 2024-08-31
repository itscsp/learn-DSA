/**
 Pattern Number 1:
 1. ******
    ******
    ******
    ******
    ******
 */

const pattern01 = function(n){
    console.log("Pattern Number 1: \n")
    for(let row = 0; row < n; row++){
        console.log("******")
    }
    console.log("\n")

}

// pattern01(5);

/**
 Pattern Number 2:
 2. *
    **
    ***
    ****
    *****
 */

const pattern02 = (n) => {
    let pattern = ""
    console.log("Pattern Number 2:\n")

    for(let row=0; row < n; row++){
        for(let col=0; col<=row; col++){
            pattern += "*"
        }
        pattern+="\n"
    }
    console.log(pattern)

}

// pattern02(5)


/**
 Pattern Number 3:
 3. *****
    ****
    ***
    **
    *
 */

function pattern03(n) {
    let pattern = ""
    console.log("Pattern Number 3: \n");

    for(let row = 0; row < n; row++){
        for(let col = n; col > row; col-- ){
            pattern+= "*"
        }
        if(n != row){
            pattern += "\n"
        }
    }

    console.log(pattern);
}

// pattern03(5)

/**
 Pattern Number 4:
 4. 1
    1 2
    1 2 3
    1 2 3 4
    1 2 3 4 5
 */

const pattern04 = (n) => {
    let pattern = ""
    console.log("Pattern Number 4: \n")
    for(let row =1; row <= n; row++){
        for(let col=1; col < row; col++){
            pattern += col;
        }
        pattern = "\n";
    }
    console.log(pattern)
} 

pattern04(5)