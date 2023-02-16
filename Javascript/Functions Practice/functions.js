function singSong() {
    console.log("DO")
    console.log("RE")
    console.log("MI")
}

// singSong()

function greet(name) {
    console.log(`Hi ${name}`)
}

// greet("sheen")

function add(x, y) {
    return x + y;
}

let final = add(3, 3);

const arr1 = [3, 5, 7];
const arr2 = [1];
const arr3 = [];

// console.log(arr1.length);
// console.log(arr2.length);
// console.log(arr3.length);

function lastElement(arr) {
    if (arr.length === 0) {
        return null;
    }
    else {
        let lastItem = arr[arr.length - 1];
        return lastItem;
    }
}

let result1 = lastElement(arr1);
let result2 = lastElement(arr2);
let result3 = lastElement(arr3);

console.log(result1);
console.log(result2);
console.log(result3);

// function capitalize(str) {
//     let arr = Array.from(str);
//     let newStr = '';
//     newStr = arr.shift();
//     newStr = newStr.toUpperCase();
//     for (let i = 0; i < arr.length; i++) {
//         newStr += arr.shift();
//     }
//     return newStr;
// }

// let newWord = capitalize("over the moon");
// console.log(newWord);

function capitalize(str) {
    let arr = Array.from(str);
    arr = arr[0]
}

let returnDay = function (num) {
    if (num > 7 || num < 1) {
        num = 0;
    }
    let day = '';

    switch (num) {
        case 0:
            day = null;
            break;
        case 1:
            day = "Monday";
            break;
        case 2:
            day = "Tuesday";
            break;
        case 3:
            day = "Wednesday";
            break;
        case 4:
            day = "Thursday";
            break;
        case 5:
            day = "Friday";
            break;
        case 6:
            day = "Saturday";
            break;
        case 7:
            day = "Sunday";
    }
    return day;
}

// function callTwice(func) {
//     func();
//     func();
// }

// callTwice(singSong);

function makeMysteryFunc() {
    const rand = Math.random();
    if (rand > 0.5) {
        return function () {
            console.log("CONGRATS, I AM A GOOD FUNCTION")
        }
    }
    else {
        return function () {
            alert("BOOO, I AM A BAD FUNCTION")
            alert("STOP CLOSING MY ALERTS")
        }
    }
}

// WILL CREATE A FUNCTION FOR YOU (FACTORY FUNCTION)

function makeBetweenFunc(min, max) {
    return function (num) {
        return num >= min && num <= max
    }
}

// makeBetweenFunc(5, 10)

// function isBetween(num) {
//     return num >= 50 && num <= 100
// }
// function isBetween2(num) {
//     return num >= 1 && num <= 10
// }

const math = {
    multiply: function (x, y) {
        return x * y;
    },
    divide: function (x, y) {
        return x / y;
    },
    square: function (x) {
        return x * x;
    },
    add(x, y) {  // SHORTHAND FOR ABOVE METHOD CREATION
        return x + y;
    }
};

console.log(math.multiply(3, 3));
console.log(math.square(2));
console.log(math.divide(8, 2));

const person = {
    first: 'Sheen',
    last: 'Kirkland',
    fullName() {  // USE 'THIS' TO ACCESS OTHER PROPERTIES ON THE SAME OBJECT INSIDE METHOD
        return `${this.first} ${this.last}`
    }
}

console.log(person.fullName());
person.first = 'Captain';
console.log(person.fullName());

// TRY-CATCH TO ACCOUNT FOR ERRORS WITHOUT BREAKING CODE