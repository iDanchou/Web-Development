const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

// DEFAULT PARAMS - IF USER DOESN'T PROVIDE ARGS - OLD WAY
function rollDie(numSides) {
    if (numSides === undefined) {
        numSides = 6;
    }
    return Math.floor(Math.random() * numSides) + 1
}

// NEW WAY, MULTIPLE DEFAULT PARAMS MUST MAINTAIN SAME ORDER DEFAULT PARAMS COME LAST
function rollDie1(numSides = 6) {
    return Math.floor(Math.random() * numSides) + 1
}

// SPREAD FUNCTION CALLS - ALLOWS ITERABLE TO BE EXPANDED WHERE ZERO+ ARGS ARE EXPECTED
Math.max(nums) //NaN
Math.max(...nums) // 15
Math.min(...nums) // 1

//console.log(nums) [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
//console.log(...nums) 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15

// SPREAD IN ARRAY LITERALS
const nums1 = [1, 2, 3];
const nums2 = [4, 5, 6];
const nums3 = [...nums1, ...nums2];  // [1, 2, 3, 4, 5, 6]

// SPREAD IN OBJECTS
const feline = { legs: 4, isFurry: true }
const canine = { legs: 4, isFurry: true }
const catDog = { ...feline, ...canine }
// GREAT FOR CREATING COPIES OF OBJECTS 

// REST - COLLECTS ALL ARGUMENTS AND PLACES THEM INTO AN ARRAY -SIMILAR TO SPREAD
function raceResults(gold, silver, ...everyoneElse) {
    console.log(`GOLD MEDAL GOES TO: ${gold}`)
    console.log(`SILVER MEDAL GOES TO: ${silver}`)
    console.log(`AND THANKS TO EVERYONE ELSE: ${everyoneElse}`)
}

// DESTRUCTURING ARRAYS - UNPACKING VARIABLES
const scores = [600, 500, 400, 300, 200, 100, 0];
const [gold, silver, bronze] = scores;

// DESTRUCTURING OBJECTS - MORE COMMON
const user = {
    email: 'harvey@gmail.com',
    password: 'password',
    firstName: 'Harvey',
    lastName: 'Milk',
    born: 1930,
    died: 1978,
    city: 'San Fran',
    state: 'Cali'
};
const firstName = user.firstName;
// OR
const { email, lastName, born: birthYear, died = 'N/A', state } = user;