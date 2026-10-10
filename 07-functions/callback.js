function myMax(numbers) {
    let max = numbers[0];

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > max) {
            max = numbers[i];
        }
    }

    return max;
}

function processNumbers(numbers, callback) {
    return callback(numbers);
}

const result = processNumbers([3, 4, 5, 1, 10], myMax);

console.log(result); // 10