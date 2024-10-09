/**
 * Find Sum Of Matrix
*/

/**
 * Time complexity of this operation is O(n(2))
 */

let matrixArray = [[1, 2, 3],[2, 4, 5],[6,7, 8]]

let sum = 0;
for(let i = 0; i < matrixArray.length; i++){
    for(let j = 0; j < matrixArray[i].length; j++){
        sum +=  matrixArray[i][j]
    }
}
console.log("Sum of matrix: ", sum)