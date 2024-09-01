/**
 Pattern Number 1:
 1. ******
    ******
    ******
    ******
    ******
 */

const pattern01 = function (n) {
  console.log("Pattern Number 1: \n");
  for (let row = 0; row < n; row++) {
    console.log("******");
  }
  console.log("\n");
};

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
  let pattern = "";
  console.log("Pattern Number 2:\n");

  for (let row = 0; row < n; row++) {
    for (let col = 0; col <= row; col++) {
      pattern += "*";
    }
    pattern += "\n";
  }
  console.log(pattern);
};

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
  let pattern = "";
  console.log("Pattern Number 3: \n");

  for (let row = 0; row < n; row++) {
    for (let col = n; col > row; col--) {
      pattern += "*";
    }
    pattern += "\n";
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
  let pattern = "";
  console.log("Pattern Number 4: \n");
  for (let row = 1; row <= n; row++) {
    for (let col = 1; col <= row; col++) {
      pattern += col + " ";
    }
    pattern += "\n";
  }

  console.log(pattern);
};

// pattern04(10)

/**
     Pattern Number 5:
     5. *
        **
        ***
        **
        *
     */

const pattern05 = (n) => {
  let pattern = "";
  let mid = null;
  console.log("Pattern Number 5: \n");
  for (let row = 1; row <= n * 2; row++) {
    mid = row > n ? mid - 1 : row;
    for (let col = 1; col <= mid; col++) {
      pattern += "*";
    }
    pattern += "\n";
  }
  console.log(pattern);
};

// pattern05(5)

/**
     Pattern Number 6:
     6.     *
           **
          ***
         ****
        *****    
     */

function pattern06(n) {
  console.log("Pattern Number 6: \n");

  for (let row = 1; row <= n; row++) {
    let pattern = "";

    // Add spaces
    for (let spaceCol = 1; spaceCol <= n - row; spaceCol++) {
      pattern += " ";
    }

    // Add stars
    for (let star = 1; star <= row; star++) {
      pattern += "*";
    }

    console.log(pattern);
  }
}

// pattern06(5)

/**
     Pattern Number 7:
     7. *****
        ****
        ***
        **
        *   
     */

function pattern07(n) {
  console.log("Pattern Number 7: \n");

  for (let row = 1; row <= n; row++) {
    let pattern = "";

    // Add spaces
    for (let spaceCol = 1; spaceCol <= n - row; spaceCol++) {
      pattern += " ";
    }

    // Add stars
    for (let star = 1; star <= row; star++) {
      pattern += "*";
    }

    console.log(pattern);
  }
}

// pattern07(5)

/**
     Pattern Number 8:
     8.   *
         ***
        *****
       *******
      ********* 
     */

function pattern08(n) {
  console.log("Pattern Number 8: \n");

  let pattern = "";
  for (let row = 0; row < n; row++) {
    let totalColsInRow = 2 * row + 1;
    let noOfSpcaes = n - row - 1;

    for (let s = 0; s < noOfSpcaes; s++) {
      pattern += " ";
    }

    for (let col = 0; col < totalColsInRow; col++) {
      pattern += "*";
    }
    pattern += "\n";
  }
  console.log(pattern);
}

// pattern08(5)

/**
     Pattern Number 9:
     9.   
        ********* 
         *******
          *****
           ***
            *
     */

function pattern09(n) {
  console.log("Pattern Number 9: \n");

  let pattern = "";
  for (let row = n - 1; row > -1; row--) {
    let totalColsInRow = 2 * row + 1;
    let noOfSpaces = n - row;

    for (let space = 0; space < noOfSpaces - 1; space++) {
      pattern += " ";
    }
    for (let col = totalColsInRow; col > 0; col--) {
      pattern += "*";
    }

    pattern += "\n";
  }
  console.log(pattern);
}

// pattern09(5)

/**
     Pattern Number 10:
10.      *
        * *
       * * *
      * * * *
     * * * * *
     
     */

function pattern10(n) {
  console.log("Pattern Number 10: \n");

  let pattern = "";
  for (let row = 0; row <= n; row++) {
    let noOfSpaces = n - row;

    for (let space = 0; space <= noOfSpaces; space++) {
      pattern += " ";
    }
    
    for (let col = 0; col < row ; col++) {
      pattern += "* ";
    }

    pattern += "\n";
  }
  console.log(pattern);
}

// pattern10(5);

/*
Pattern Number 11:
11.   
    * * * * * 
     * * * *
      * * *
       * *
        *
*/

function pattern11(n) {
  console.log("Pattern Number 11: \n");

  let pattern = "";
  for (let row = n; row > -1; row--) {
    let noOfSpaces = n - row;

    for (let space = 0; space < noOfSpaces; space++) {
      pattern += " ";
    }
    for (let col = row; col > 0; col--) {
      pattern += " *";
    }

    pattern += "\n";
  }
  console.log(pattern);
}

// pattern11(5);


/*
Pattern Number 12:
12.  * * * * *
      * * * *
       * * *
        * *
         *
         *
        * *
       * * *
      * * * *
     * * * * *
*/


const pattern12 = (n) => {
    let pattern = ""
    console.log("Pattern Number 12: \n");

    // Upper half of the pattern
    for(let row = 0; row < n; row++){  // Change loop to < n
        let start  =  n - row - 1;  // Adjust start value
        let space = row;

        for(let col = 0; col <= space; col++){
            pattern += " ";
        }
        for (let col = 0; col <= start; col++){
            pattern += "* ";
        }
        
        pattern += "\n";
    }

    // Lower half of the pattern
    for (let row = 0; row < n; row++) {  // Change loop to < n
        let noOfSpaces = n - row - 1;  // Adjust noOfSpaces value
    
        for (let space = 0; space <= noOfSpaces; space++) {
          pattern += " ";
        }
        
        for (let col = 0; col <= row; col++) {
          pattern += "* ";
        }
    
        pattern += "\n";
    }

    console.log(pattern);
}

// pattern12(5);


/*
Pattern Number 13:
13.      *
        * *
       *   *
      *     *
     * * * * *
*/


const pattern13 = (n) => {
    let pattern = ""
    console.log("Pattern Number 13: \n");

    // Upper half of the pattern
    for(let row = 0; row < n; row++){  // Change loop to < n
        let start  =  n - row - 1;  // Adjust start value
        let space = row;

        for(let col = 0; col <= start; col++){
            pattern += " ";
        }
        for (let col = 0; col <= space; col++){
            pattern += "* ";
        }
        
        pattern += "\n";
    }

    console.log(pattern)

}

pattern13(5);
