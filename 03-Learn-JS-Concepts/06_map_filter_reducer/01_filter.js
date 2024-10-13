const names = ["a", "b", "c", "d", "e", "f", "g"]

const extractedNames = names.forEach((item) => {
    // console.log(item)
    return item
})

console.log(extractedNames); //undefined


const Newnames = ["aA", "bB", "cC", "dD", "eE", "fF", "gG"]

const extractedNewNames = Newnames.filter((item) => {
    return item === "gG";
})

// console.log(extractedNewNames) // return ["gG"]


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

let userBooks = books.filter((bk) => bk.genre === "History")

// console.log(userBooks)

let bookGenreAndYearPublised = books.filter((bk) => {
    return bk.publish >= 1995 && bk.genre === "History"
})

console.log(bookGenreAndYearPublised)