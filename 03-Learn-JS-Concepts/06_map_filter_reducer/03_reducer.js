const myNums = [1, 2, 3]

const newNums = myNums.reduce((acc, curr) => {
    // console.log(acc, "and", curr)
    return acc + curr
}, 0)

// console.log(newNums)
/*
0 and 1
1 and 2
3 and 3
6
*/



const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToday = shoppingCart.reduce((acc, cur) => acc + cur.price, 0)

console.log(priceToday);