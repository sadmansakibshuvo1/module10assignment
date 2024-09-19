// 1) Calculate Difference
function calculateDifference(num1, num2) {
    return num1 - num2;
}

function calculateAndShowDifference() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const result = calculateDifference(num1, num2);
    document.getElementById("diffResult").innerText = `Difference: ${result}`;
}

// 2) Check if Number is Odd
function isOdd(num) {
    return num % 2 !== 0;
}

function checkIfOdd() {
    const num = parseInt(document.getElementById("oddNumber").value);
    const result = isOdd(num);
    document.getElementById("oddResult").innerText = `Is Odd: ${result}`;
}

// 3) Find Minimum Number
function findMin(arr) {
    return Math.min(...arr);
}

function findMinNumber() {
    const input = document.getElementById("minNumbers").value;
    const arr = input.split(',').map(Number);
    const minValue = findMin(arr);
    document.getElementById("minResult").innerText = `Minimum: ${minValue}`;
}

// 4) Filter Even Numbers
function filterEvenNumbers(arr) {
    return arr.filter(num => num % 2 === 0);
}

function filterEvenNumbersFromArray() {
    const input = document.getElementById("evenNumbers").value;
    const arr = input.split(',').map(Number);
    const evenNumbers = filterEvenNumbers(arr);
    document.getElementById("evenResult").innerText = `Even Numbers: ${evenNumbers.join(', ')}`;
}

// 5) Sort Array Descending
function sortArrayDescending(arr) {
    return arr.sort((a, b) => b - a);
}

function sortNumbersDesc() {
    const input = document.getElementById("sortNumbers").value;
    const arr = input.split(',').map(Number);
    const sortedArray = sortArrayDescending(arr);
    document.getElementById("sortResult").innerText = `Sorted: ${sortedArray.join(', ')}`;
}

// 6) Lowercase First Letter
function lowercaseFirstLetter(str) {
    return str.charAt(0).toLowerCase() + str.slice(1);
}

function lowercaseFirst() {
    const input = document.getElementById("lowercaseString").value;
    const result = lowercaseFirstLetter(input);
    document.getElementById("lowercaseResult").innerText = `Result: ${result}`;
}

// 7) Count Vowels
function countVowels(str) {
    const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    return str.split('').filter(char => vowels.includes(char)).length;
}

function countVowelsInString() {
    const input = document.getElementById("vowelString").value;
    const result = countVowels(input);
    document.getElementById("vowelResult").innerText = `Vowels Count: ${result}`;
}

// 8) Find Average
function findAverage(arr) {
    const sum = arr.reduce((acc, num) => acc + num, 0);
    return sum / arr.length;
}

function findArrayAverage() {
    const input = document.getElementById("averageNumbers").value;
    const arr = input.split(',').map(Number);
    const average = findAverage(arr);
    document.getElementById("averageResult").innerText = `Average: ${average}`;
}
