// ================== 1. Find Second Largest Number ==================

/*
Input: [10, 5, 8, 20, 15]
Output: 15
*/

function secondLargest(arr) {
    let largest = -Infinity;
    let second = -Infinity;

    for (let num of arr) {
        if (num > largest) {
            second = largest;
            largest = num;
        } else if (num > second && num !== largest) {
            second = num;
        }
    }

    return second;
}

console.log(secondLargest([10, 5, 8, 20, 15]));



// ================== 2. Check Anagram ==================

/*
Input: "listen", "silent"
Output: true
*/

function isAnagram(str1, str2) {

    str1 = str1.toLowerCase().replaceAll(" ", "");
    str2 = str2.toLowerCase().replaceAll(" ", "");

    if (str1.length !== str2.length) {
        return false;
    }

    let sorted1 = str1.split("").sort().join("");
    let sorted2 = str2.split("").sort().join("");

    return sorted1 === sorted2;
}

console.log(isAnagram("listen", "silent"));



// ================== 3. Flatten Nested Array ==================

/*
Input: [1, [2, [3, 4]], 5]
Output: [1, 2, 3, 4, 5]
*/

function flattenArray(arr) {

    let result = [];

    for (let element of arr) {

        if (Array.isArray(element)) {
            result = result.concat(flattenArray(element));
        } else {
            result.push(element);
        }
    }

    return result;
}

console.log(flattenArray([1, [2, [3, 4]], 5]));



// ================== 4. Find Duplicate Elements ==================

/*
Input: [1, 2, 3, 2, 4, 5, 1]
Output: [2, 1]
*/

function findDuplicates(arr) {

    let seen = [];
    let duplicate = [];

    for (let i = 0; i < arr.length; i++) {

        if (seen.includes(arr[i]) && !duplicate.includes(arr[i])) {
            duplicate.push(arr[i]);
        } else {
            seen.push(arr[i]);
        }
    }

    return duplicate;
}

console.log(findDuplicates([1, 2, 3, 2, 4, 5, 1]));



// ================== 5. Reverse Words in Sentence ==================

/*
Input: "I love JavaScript"
Output: "JavaScript love I"
*/

function reverseWords(str) {

    let words = str.split(" ");
    let reversed = [];

    for (let i = words.length - 1; i >= 0; i--) {
        reversed.push(words[i]);
    }

    return reversed.join(" ");
}

console.log(reverseWords("I love JavaScript"));



// ================== 6. Find Missing Number ==================

/*
Input: [1, 2, 3, 5]
Output: 4
*/

function missingNumber(arr) {

    let n = arr.length + 1;

    let total = (n * (n + 1)) / 2;

    let sum = 0;

    for (let num of arr) {
        sum += num;
    }

    return total - sum;
}

console.log(missingNumber([1, 2, 3, 5]));



// ================== 7. Frequency Counter ==================

/*
Input:
["apple", "banana", "apple", "orange", "banana", "apple"]

Output:
{
  apple: 3,
  banana: 2,
  orange: 1
}
*/

function frequencyCounter(arr) {

    let count = {};

    for (let item of arr) {

        count[item] = (count[item] || 0) + 1;
    }

    return count;
}

console.log(
    frequencyCounter([
        "apple",
        "banana",
        "apple",
        "orange",
        "banana",
        "apple"
    ])
);



// ================== 8. Debounce Function ==================

function debounce(func, delay) {

    let timer;

    return function () {

        clearTimeout(timer);

        timer = setTimeout(() => {
            func();
        }, delay);
    };
}

function search() {
    console.log("Searching...");
}

const betterFunction = debounce(search, 1000);

betterFunction();



// ================== 9. Custom map() Function ==================

Array.prototype.myMap = function (callback) {

    let result = [];

    for (let i = 0; i < this.length; i++) {

        result.push(callback(this[i], i, this));
    }

    return result;
};

let nums = [1, 2, 3];

let output = nums.myMap((num) => num * 2);

console.log(output);



// ================== 10. Deep Clone Object ==================

const obj = {
    name: "Aniket",
    address: {
        city: "Punjab"
    }
};

function deepClone(object) {

    if (object === null || typeof object !== "object") {
        return object;
    }

    let clone = Array.isArray(object) ? [] : {};

    for (let key in object) {

        clone[key] = deepClone(object[key]);
    }

    return clone;
}

const clonedObj = deepClone(obj);

clonedObj.address.city = "Delhi";

console.log(obj);
console.log(clonedObj);



// ================== BONUS QUESTIONS ==================

/*

1. Implement Promise.all()

2. Build custom bind()

3. Implement custom filter()

4. Implement custom reduce()

5. Infinite currying
   sum(1)(2)(3)

6. Memoization function

7. Throttle function

8. Event Emitter

9. LRU Cache

10. Polyfills questions

*/