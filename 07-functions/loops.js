function fizzBuzz(limit) {
    let results = [];

    for (let i = 1; i <= limit; i++) {
        switch (true) {
            case (i % 3 === 0 && i % 5 === 0):
                results.push("FizzBuzz");
                break;

            case (i % 3 === 0):
                results.push("Fizz");
                break;

            case (i % 5 === 0):
                results.push("Buzz");
                break;

            default:
                results.push(i);
        }
    }

    return results;
}

console.log("FizzBuzz:", fizzBuzz(100));




// Task 2: Multiplication Table 1-10

function multiplicationTable(limit) {
    let results = [];

    for (let i = 1; i <= limit; i++) {
        for (let j = 1; j <= limit; j++) {
            results.push(`${i} x ${j} = ${i * j}`);
        }
    }

    return results;
}

console.log("Multiplication Table:", multiplicationTable(10));



// Task 3: Sum, Average, Min and Max

function calculateStatistics(numbers) {
    if (numbers.length === 0) {
        return null;
    }

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

    return {
        sum: sum,
        average: average,
        min: min,
        max: max
    };
}

const numbers = [12, 5, 8, 21, 3, 17];

console.log("Statistics:", calculateStatistics(numbers));