// write a function that takes the input string and reverses it
// example
// argument: Hello
// return: olleH
function reverseThisString(string) {
    let temp = "";
    for (let i = string.length - 1; i >= 0; i--) {
        temp += string.charAt(i);
    }
    return temp;
}


// write a function that takes the input string and switches all uppercase characters to lowercase and lowercase charcaters to uppercase
// example:
// argument: Hello World
// return: hELLO wORLD
function swapCase(string) {
    let temp = "";
    for (let i = 0; i < string.length; i++) {
        if (string.charAt(i) == string.charAt(i).toUpperCase()) {
            temp += string.charAt(i).toLowerCase();
        } else {
            temp += string.charAt(i).toUpperCase();
        }
    }
    return temp;
}

// convert array of numbers from farenheit to celcius
// example:
// argument: [23, 32, 41, 50, 59]
// return: [-5, 0, 5, 10, 15]
// hint: use Array.map
function toCelcius(array) {
    let temp = array.map(num => {
        return (num - 32) * (5 / 9);
    });
    return temp;
}


// write a function that takes an input array and returns an array of booleans (>=75) or fail (<75)
// example:
// argument: [20, 30, 50, 80, 90, 100]
// return: [false, false, false, true, true, true]
// hint: use Array.map
function passOrFail(array) {
    let temp = array.map(num => {
        if (num >= 75) return true;
        else return false;
    });
    return temp;
}


// write code that loops through the two variables returns an array ['2 is zwei', '3 is drei', '4 is vier', '5 is fünf', '6 is sechs']
// example:
// return: ['2 is zwei', '3 is drei', '4 is vier', '5 is fünf', '6 is sechs']
// hint: use Array.forEach, Array.map or a for loop
function germanNumbers() {
    const cardinalNumbers = [2,3,4,5,6];
    const germanNumbers = ['zwei', 'drei', 'vier', 'fünf', 'sechs'];
    let i = 0;
    let temp = cardinalNumbers.map(num => {
        i++;
        return num + " is " + germanNumbers[i - 1];
    });
    return temp;
}


// write code that returns an array of ONLY prime numbers that are in the array numbers
// example: 
// return [2, 3, 5, 7, 11, 13]
// hint use: Array.filter
function returnPrimeNumbers() {
    const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
    let temp = numbers.filter(num => {
        return num % 2 == 1;
    });
    return temp;
}

// Write a function that loops through and console.log's the numbers from 1 to 100
// except multiples of three, log (without quotes) "CSC225 RULES" instead of the number
// for the multiples of five, log (without quotes) "I LOVE JAVASCRIPT"
// For numbers which are multiples of both three and five, log (without quotes) "CSC225 RULES I LOVE JAVASCRIPT"

function loopHundredNums() {
    for (let i = 1; i <= 100; i++) {
        if (i % 3 == 0 && i % 5 == 0) {
            console.log("CSC225 RULES I LOVE JAVASCRIPT");
        } else if (i % 3 == 0) {
            console.log("CSC225 RULES");
        } else if (i % 5 == 0) {
            console.log("I LOVE JAVASCRIPT");
        } else {
            console.log(i);
        }
    }
}

function main() {
    let orig;
    let temp;

    orig = "Hello World";
    console.log("Original String: " + orig);
    temp = reverseThisString(orig);
    console.log("Reversed String: " + temp);

    orig = "rANdom cAsE";
    console.log("\nOriginal String: " + orig);
    temp = swapCase(orig)
    console.log("Case Swapped: " + temp);

    orig = [4, 16, 36, 44, 48];
    console.log("\nOriginal Temperatures: " + orig);
    temp = toCelcius(orig);
    console.log("Temperatures in Celcius: " + temp);

    orig = [4, 20, 65, 75, 80, 99];
    console.log("\nOriginal Numbers: " + orig);
    temp = passOrFail(orig);
    console.log("Bigger or Equal to 75: " + temp);

    console.log("\nGerman Numbers");
    temp = germanNumbers();
    console.log(temp);

    console.log("\nPrime Numbers");
    temp = returnPrimeNumbers();
    console.log(temp);

    console.log("\nLoop Hundred Numbers");
    loopHundredNums();
}