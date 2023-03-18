'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}


/*
 * Complete the 'findMedian' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function findMedian(arr) {
    // Write your code here
    return quick_sort(arr)[Math.floor(arr.length/2)];
}

function quick_sort(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    let pivot = arr[Math.floor(arr.length/2)];
    let larger = [];
    let smaller = [];
    let equals = [];
    arr.forEach(item => {
        if (item > pivot) {
            larger.push(item);
        }else if (item < pivot) {
            smaller.push(item);
        }else {
            equals.push(item);
        }
    })
    return [...quick_sort(smaller), ...equals, ...quick_sort(larger)];
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    const result = findMedian(arr);

    ws.write(result + '\n');

    ws.end();
}