// forEach METHOD - FUNCTION WILL ACTIVATE FOR EACH ITEM WITHIN AN ARRAY

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

function print(element) {
    console.log(element);
}

nums.forEach(print);

// map METHOD - CREATES A NEW ARRAY WITH RESULTS OF RETURN VALUE

const texts = ['rofl', 'lol', 'omg', 'byeee'];

const caps = texts.map(function (t) {
    return t.toUpperCase();
})

// ARROW => FUNCTIONS  (VERY IMPORTANT) WRITE FUNCTIONS WITHOUT WRITING "FUNCTION"

const sum = (x, y) => {
    return x + y;
}

// IMPLICIT RETURNS ONLY WITH ARROW FUNCTIONS, REPLACE CURLY WITH PARENS/ NO ; NEEDED
const square = x => ( // NO () NEEDED IF ONLY ONE ARGUMENT, AESTHETIC PURPOSES
    x * x
)

const mult = (x, y) => x * y  // IMPLICIT ONE LINER FOR SHORT FUNCS

// setTIMEOUT & setINTERVAL

// setTimeout(() => {
//     console.log("HELLOOOO!!")
// }, 3000)

// const id = setInterval(() => {
//     console.log(Math.random())
// }, 2000)    // clearInterval(id) TO STOP REPEATED INTERVAL CALLS

// filter METHOD

const filtNums = nums.filter(n => {
    return n < 10
})

const movies = [
    {
        title: 'Amadeus',
        score: 99,
        year: 1984
    },
    {
        title: 'Stand By Me',
        score: 85,
        year: 1986
    },
    {
        title: 'Sharknado',
        score: 35,
        year: 2013
    },
    {
        title: '13 Going on 30',
        score: 70,
        year: 2004
    },
    {
        title: 'Waterworld',
        score: 62,
        year: 1995
    },
    {
        title: 'Jingle All the Way',
        score: 71,
        year: 1996
    },
    {
        title: 'Parasite',
        score: 95,
        year: 2019
    },
    {
        title: 'Notting Hill',
        score: 77,
        year: 1999
    },
    {
        title: 'Alien',
        score: 90,
        year: 1979
    },

]

movies.some(movie => movie.year > 2015);

// const goodMovies = movies.filter(movie => {
//     return movie.score > 80
// })
const goodMovies = movies.filter(m => m.score > 80)
const goodTitles = goodMovies.map(m => m.title)

movies.filter(m => m.score > 80).map(m => m.title);

const badMovies = movies.filter(m => m.score < 70)

const recentMovies = movies.filter(m => m.year > 2000)

const UserNames = ['mark', 'staceysmom1978', 'q29832128238983', 'carrie98', 'MoanaFan'];

function validUserNames(usernames) {
    return usernames.filter(function (username) {
        return username.length < 10;
    })
}

function validUserNames1(usernames) {
    return usernames.filter(function (username) {
        if (username.length < 10) {
            return username;
        }
    })
}

// SOME/EVERY METHODS FOR BOOLEAN

const exams = [80, 98, 92, 77, 78, 90, 89, 84, 81, 77];
const exams1 = [80, 98, 92, 77, 78, 70, 90, 89, 84, 81, 77];

exams.every(score => score >= 75); // TRUE
exams1.every(score => score >= 75); // FALSE

exams1.some(score => score >= 75); // TRUE
exams1.some(score => score >= 75); // TRUE

// REDUCE METHOD - EXECUTES A REDUCER ON EACH ELEMENT OF THE ARRAY MAKING A SINGLE VALUE

// WILL TOTAL THE INTEGERS 1-15 TO A SINGULAR AMOUNT
let reduce1 = nums.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
});

let reduce2 = nums.reduce((nums, numTotal) => nums + numTotal);

nums.reduce((minimum, number) => {
    if (number < minimum) {
        return number;
    }
    return minimum;
})

nums.reduce((maximum, number) => {
    if (number > maximum) {
        return number;
    }
    return maximum;  // CAN OMIT ELSE STATEMENT?
})

const evens = [2, 4, 6, 8]
evens.reduce((sum, num) => sum + num, 10)  // 10 IS STARTING/INITIALIZED VALUE = 30

// ARROW FUNCTIONS & 'THIS'

const person = {
    firstName: 'Sheen',
    lastName: 'Kirkland',
    age: 24,  // CANNOT USE ARROW NOTATION TO DEFINE A METHOD
    fullName: function () {
        return `${this.firstName} ${this.lastName}`
    },
    shoutName: function () {
        setTimeout(() => { // CAN USE ARROW NOTATION FOR THIS TYPE OF COMMAND
            console.log(this);
            console.log(this.fullName())
        }, 3000)
    }
};