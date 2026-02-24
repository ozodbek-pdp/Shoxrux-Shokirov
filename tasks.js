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

// lesson 4 -1

let a = 15;
let b = 25;

if (a > b) {
    console.log(a);
} else {
    console.log(b);
}

//lesson 4 -2

let num1 = 3;
let num2 = -7;
let num3 = 2;

let product = num1 * num2 * num3;

if (product < 0) {
    alert("-");
} else if (product > 0) {
    alert("+");
} else {
    alert("0");
}

// lesson 4 -3 

let x = 0;
let y = -1;
let z = 4;

if (x >= y && x >= z) {
    if (y >= z) {
        alert(x + ", " + y + ", " + z);
    } else {
        alert(x + ", " + z + ", " + y);
    }
} else if (y >= x && y >= z) {
    if (x >= z) {
        alert(y + ", " + x + ", " + z);
    } else {
        alert(y + ", " + z + ", " + x);
    }
} else {
    if (x >= y) {
        alert(z + ", " + x + ", " + y);
    } else {
        alert(z + ", " + y + ", " + x);
    }
}

//lesson 4 -4

for (let i = 0; i <= 15; i++) {
    if (i % 2 === 0) {
        console.log(i + "even");
    } else {
        console.log(i + "odd");
    }
}

//lesson 4 -5

for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}

//lesson 4 -6
