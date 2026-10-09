function myMax(numbers){
    let max = numbers[0];
    for (let i = 0 ; i < numbers.length ; i++){
        if (numbers[i]>max){
            max=numbers[i];
        }
    }
    return max;
}

console.log("max numbers : ",myMax([3,4,5,1,10]) );

function myReverse(numbers) {
    let reversed = [];

    for (let i = numbers.length - 1; i >= 0; i--) {
        reversed[reversed.length] = numbers[i];
    }

    return reversed;
}

console.log(myReverse([1, 2, 3, 4]));


function myIncludes(array , value){
    for (let i = 0 ; i < array.length ; i++){
        if (array[i]===value){
            return true;
        }
    }

    return false;

    

}

console.log("myIncludes:", myIncludes([10, 20, 30, 40], 30));


function myUnique(array) {
let unique = [];
for (let i=0 ; i < array.length ; i++){
    let alreadyExists= false;
    for ( let j=0 ; j < unique.length ; j++){
        if (unique[j]===array[i]){
            alreadyExists = true ; 
            break;
        }
    }

    if (!alreadyExists){
        unique[unique.length]= array[i];
    }
}

return unique

}

function myFlatten(array) {
    let flattened = [];

    for (let i = 0; i < array.length; i++) {

        if (Array.isArray(array[i])) {

            for (let j = 0; j < array[i].length; j++) {
                flattened[flattened.length] = array[i][j];
            }

        } else {
            flattened[flattened.length] = array[i];
        }
    }

    return flattened;
}

console.log(
    "myFlatten:",
    myFlatten([1, [2, 3], 4, [5, 6]])
);
