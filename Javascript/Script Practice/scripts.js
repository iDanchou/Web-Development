// //PRINT STATEMENTS

// console.log("Hello from first file");
// console.log("Goodbye");


// // CONDITIONALS

// let rating = 3;
// if (rating === 3) {
//     console.log("You're a superstar");
// }

// // RANDOM NUMBER PROCESS

let randNum = Math.floor(Math.random() * 2) + 1;
if (randNum == 1) {
    console.log("Heads!");
}
else {
    console.log("Tails!")
}

// // NESTING CONDITIONALS

// // const password = prompt("Please enter a new password");

// // if (password.length >= 6) {
// //     if (password.indexOf(' ') === -1) {
// //         console.log("Valid password");
// //     } else {
// //         console.log("Password cannot contain spaces!")
// //     }
// // } else {
// //     console.log("Password too short. Must be 6+ characters.")
// // }

// // AND STATEMENT

// // if (password.length >= 6 && password.indexOf(' ') === -1) {
// //     console.log("VALID PASSWORD");
// // } else {
// //     console.log("INVALID PASSWORD");
// // }

// // OR STATEMENT

// if (password.length >= 6 || password.indexOf(' ') === -1) {
//     console.log("VALID PASSWORD");
// } else {
//     console.log("INVALID PASSWORD");
// }

// // ARRAYS

let students = []; // DECALRING EMPTY ARRAY

let randObj = ['red', 3, null]; // CAN STORE ANY VARIABLE IN AN ARRAY

arrNum = randObj[1];

randObj.push("moon"); // ADDS VARIABLE TO THE END OF THE ARRAY
randObj.push(6);
console.log(randObj);

randObj.pop(); // REMOVES LAST VARIABLE FROM THE BACK
console.log(randObj);

console.log(randObj);

randObj.unshift("Moby");  // ADDS VARIABLE TO THE FRONT
console.log(randObj);

randObj.reverse();
console.log(randObj);

randObj.includes("moon"); // CHECK IF VALUE IS PRESENT IN THE ARRAY, RETURNS BOOLEAN VALUE
randObj.indexOf(null);
randObj.slice(1, 3); // COPIES A PORTION OF THE ARRAY
randObj.splice(1, 3); // REMOVES OR REPLACES SELECTED ELEMENTS FROM ARRAY

// // OBJECT LITERALS

const fitBitData = {   // WORKS JUST LIKE DICTIONARIES
    totalSteps: 308727,
    totalMiles: 211.7,
    avgCalorieBurn: 5755
};

const person = {
    firstName: 'Mick',
    lastName: 'Jagger',
    age: 50
};

person.lastName; // "Jagger"
fitBitData.totalSteps; // 308727
person.firstName = 'Sheen'

let shoppingCart = [  // OBJECTS NESTED WITHIN AN ARRAY
    {
        product: 'Jenga Classic',
        price: 6.88,
        quantity: 1
    },
    {
        product: 'Echo Dot',
        price: 29.99,
        quantity: 3
    },
    {
        product: 'Fire Stick',
        price: 39.99,
        quantity: 2
    }
]

shoppingCart[1].price;  // RETURNS 29.99

let student = {  // OBJECTS AND ARRAYS NESTED WITHIN AN OBJECT
    firstname: 'David',
    lastname: 'Jones',
    strengths: ['Music', 'Art'],
    exams: {
        midterm: 92,
        final: 88
    }
}

student.strengths[0]; // RETURNS MUSIC
student.exams.midterm; // RETURNS 92

// FOR LOOPS

for (let i = 0; i < 10; i++) {
    console.log(i);

}

let animals = ['lions', 'tigers', 'bears'];

for (let i = 0; i < animals.length; i++) {
    console.log(i, animals[i]);

}

const scoobyGang = ["Scooby", "Velma", "Daphne", "Shaggy", "Fred"];

for (let i = 0; i < scoobyGang.length; i++) {
    console.log(scoobyGang[i].toUpperCase());
}

// NESTED LOOPS

let str = 'LOL';
for (let i = 0; i <= 4; i++) {
    console.log('Outer:', i);
    for (let j = 0; j < str.length; j++) {
        console.log('   Inner:', str[j]);
    }
}

// WHILE LOOPS  // BREAK IS USED MOSTLY WHEN THERE ISN'T A SET NUMBER OF ITERATIONS

let num = 0;
while (num <= 10) {
    console.log(num);
    num++;
}

// let userInput = parseInt(prompt('Welcome. Please enter a max number: '));
// while (!userInput) {
//     userInput = parseInt(prompt('Welcome. Please enter a max number: '));
// }

// const randNum = Math.floor(Math.random() * userInput) + 1;
// console.log(randNum);

// let guess = parseInt(prompt("Enter your first guess: "))

// while (guess !== randNum) {
//     if (guess > randNum) {
//         guess = parseInt(prompt("Too high! Try again: "));
//     }
//     else {
//         guess = parseInt(prompt("Too low. Try again: "));
//     }
// }
// console.log("You got it!");

// FOR OF LOOOPS // GREAT FOR ITERATING OVER ITEMS, CAN BE NESTED

for (let members of scoobyGang) {
    console.log(members);
}

// FOR IN LOOPS // ONLY USED FOR OBJECTS

for (let info in person) {
    console.log(`${info}: ${person[info]}`);
}

console.log(Object.keys(person));  // PUTS ALL OBJECTS INTO AN ARRAY AND PRINTS OUTPUT
console.log(Object.entries(person));  // PRINTS NESTED ARRAY OF KEY/VALUE PAIRS