


function findLargest(arr) {
    let max = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i]
        }
    }
    return max
}
console.log(findLargest([35, 4, 5, 5, 45]));



function findSmallest(arr) {

    let min = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i]
        }
    }
    return min
}
console.log(findSmallest([45, 67, 7878, 4, 56, 46, , 3, 3]));



function FindSecondLargest(arr) {
    let largest = -Infinity;
    let second = -Infinity

    for (let i = 0; i < arr.length; i++) {

        if (arr[i] > largest) {

            second = largest;
            largest = arr[i];
        }
        else if (arr[i] > second && arr[i] !== largest) {
            second = arr[i]
        }
    }
    return second

}
console.log(FindSecondLargest([2345, 5332, 234, 234, 123143, 4]));



function OddOREven(arr) {
    let odd = [];
    let even = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            even.push(arr[i])
        } else {
            odd.push(arr[i])
        }
    }
    return { odd, even };
}
console.log(OddOREven([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));



function ZeroAtEnd(arr) {
    let result = [];
    let zeros = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {
            zeros.push(arr[i])
        } else {
            result.push(arr[i])
        }
    }
    return result.concat(zeros)
}
console.log(ZeroAtEnd([0, 1, 0, 2, 0, 3, 0, 4, 0, 5]));



function negativeNumbersToStart(arr) {
    let positive = [];
    let negative = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            negative.push(arr[i])
        } else {
            positive.push(arr[i])
        }
    }
    return negative.concat(positive)
}
console.log(negativeNumbersToStart([1, 2, 3, 4, 5, -5, -4, -3, -2, -1]));



function evenNumbersToStart(arr) {

    let even = [];
    let odd = []

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            even.push(arr[i])
        } else {
            odd.push(arr[i])
        }
    }
    return even.concat(odd)
}
console.log(evenNumbersToStart([1, 2, 3, 4, 5, 6, 7, 8, 9]));



function findMissing(arr, N){
    let total = (N * (N + 1)) / 2;

    let sum = 0;
    for (let i = 0; i < arr.length; i++){
        sum += arr[i];
    }

    return total - sum;
}
console.log(findMissing([1,2,3,5], 5));



function removeDuplicate(arr) {
    let unique = [];

    for (let i = 0; i < arr.length; i++) {
        if (!unique.includes(arr[i])) {
            unique.push(arr[i])
        }
    }
    return unique;
}
console.log(removeDuplicate([1, 2, 5, 3, 6, 4, 5, 6, 22, 1, 1, 1, 22]));



function removeDuplicate2(arr) {
    let unique = [];

    for (let i = 0; i < arr.length; i++) {
        if (!unique.includes(arr[i])) {
            unique.push(arr[i])
        }
    }
    return unique
}
console.log(removeDuplicate([1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9]));



function reverseArr(arr) {

    let rev = [];

    for (let i = arr.length - 1; i >= 0; i--) {
        rev.push(arr[i])
    }
    return rev
}
console.log(reverseArr([1, 2, 3, 4, 5, 6, 7, 8, 9]));



function FindSumOfArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i]

    }
    return sum
}
console.log(FindSumOfArray([2, 2]));



function checkPrimeNum(n) {
    if (n <= 1) return n + " is not a prime number";

    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return n + " is not a prime number";
        }
    }
    return n + " is a prime number";
}

console.log(checkPrimeNum(7));   
console.log(checkPrimeNum(10)); 
console.log(checkPrimeNum(1));   
console.log(checkPrimeNum(13)); 




function findGCD(a,b){
    let gcd = 1;

    for( let i = 1; i <= Math.min(a,b) ; i++){
        if(a % i ===0 && b % i ===0){
            gcd = i
        }
    }
    return gcd
}
console.log(findGCD(48, 18));
