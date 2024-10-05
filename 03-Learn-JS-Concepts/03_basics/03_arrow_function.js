/**
 * Small intro about this
 */

const user = {
    username: "Chethan",
    price: 100,
    wellComeMessage: function() {
        console.log(`${this.username}, welcome to website.`);
        console.log(this) // this will print complete object user
    }
}

// user.wellComeMessage(); //Here it refer inital value. which is Chethan
user.username = "Chethan S Poojary"
// user.wellComeMessage(); // Here it refers to current execution object "Chethan S Poojary"

// console.log(this) // Here this refers to empty object: {}. this is becouse here it run in node Environment

function testThis() {
    /**
     * This function return many things please try to run.
     */
    console.log(this)
}


// testThis()

function testThis2(){
    let username = "CSP"
    console.log(this.username) //Output: undefined
    console.log(this) // here it print object
}

// testThis2()

const testThisWithArrow = () => {
    console.log(this) //Output: {}
}

testThisWithArrow()