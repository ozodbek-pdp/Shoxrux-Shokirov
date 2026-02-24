// lesson 2 -1

let n1 = 15; 
let evenCount = 0;
let oddCount = 0;

for (let i = 1; i <= n1; i++) {
    if (i % 2 === 0) {
        evenCount++;
    } else {
        oddCount++;
    }
}

console.log(evenCount);
console.log(oddCount);

// lesson 2 -2

let num2 = 1234;
let reversedNum = 0;

while (num2 > 0) {
    let lastDigit = num2 % 10;
    reversedNum = (reversedNum * 10) + lastDigit;
    num2 = Math.floor(num2 / 10);
}

console.log(reversedNum);

// lesson 2 -3

let num3 = 8394;
let largestDigit = 0;

while (num3 > 0) {
    let lastDigit = num3 % 10;
    if (lastDigit > largestDigit) {
        largestDigit = lastDigit;
    }
    num3 = Math.floor(num3 / 10);
}

console.log(largestDigit);
