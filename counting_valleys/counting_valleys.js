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
 * Complete the 'countingValleys' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER steps
 *  2. STRING path
 */

function countingValleys(steps, path) {
    // Write your code here
    let i = 0;
    let valleys = 0;
    let level = 0;
    while (i < steps) {
        if (i === (steps - 1)) {
            return valleys;
        } else  {
            switch(path[i]) {
                case 'D':
                    if (level === 0) {
                        valleys += 1;
                        level -= 1;
                    } else {
                        level -= 1;
                    }
                    break;
                case 'U':
                    level += 1;
                    break;
            }
               
        i += 1;
        }
        
    }
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const steps = parseInt(readLine().trim(), 10);

    const path = readLine();

    const result = countingValleys(steps, path);

    ws.write(result + '\n');

    ws.end();
}
