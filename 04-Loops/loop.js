// Task 1: FizzBuzz 1-100

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


// Task 2: Multiplication Table 1-10

for (let i = 1; i <= 10; i++) {

    for (let j = 1; j <= 10; j++) {
        console.log(`${i} x ${j} = ${i * j}`);
    }
}


// Task 3: Sum, Average, Min and Max

let numbers = [12, 5, 8, 21, 3, 17];

let sum = 0;
let min = numbers[0];
let max = numbers[0];

for (let i = 0; i < numbers.length; i++) {

    sum = sum + numbers[i];

    if (numbers[i] < min) {
        min = numbers[i];
    }

    if (numbers[i] > max) {
        max = numbers[i];
    }
}

let average = sum / numbers.length;

console.log("Sum:", sum);
console.log("Average:", average);
console.log("Min:", min);
console.log("Max:", max);