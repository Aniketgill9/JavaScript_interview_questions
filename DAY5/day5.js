console.log("********** 1. Reverse a String **********");

function reverseString(str) {
  let reverse = "";

  for (let i = str.length - 1; i >= 0; i--) {
    reverse += str[i];
  }

  return reverse;
}

console.log(reverseString("aniket"));



console.log("********** 2. Check Palindrome **********");

function isPalindrome(str) {
  let reverse = "";

  for (let i = str.length - 1; i >= 0; i--) {
    reverse += str[i];
  }

  return str === reverse;
}

console.log(isPalindrome("madam"));
console.log(isPalindrome("hello"));



console.log("********** 3. Find Largest Number in Array **********");

function largestNumber(arr) {
  let largest = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }

  return largest;
}

console.log(largestNumber([10, 5, 30, 2, 100]));



console.log("********** 4. Remove Duplicates from Array **********");

function removeDuplicates(arr) {
  let unique = [];

  for (let i = 0; i < arr.length; i++) {
    let found = false;

    for (let j = 0; j < unique.length; j++) {
      if (arr[i] === unique[j]) {
        found = true;
      }
    }

    if (found === false) {
      unique.push(arr[i]);
    }
  }

  return unique;
}

console.log(removeDuplicates([1, 2, 2, 3, 4, 4]));



console.log("********** 5. Count Vowels in a String **********");

function countVowels(str) {
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    let char = str[i].toLowerCase();

    if (
      char === "a" ||
      char === "e" ||
      char === "i" ||
      char === "o" ||
      char === "u"
    ) {
      count++;
    }
  }

  return count;
}

console.log(countVowels("aniket"));



console.log("********** 6. Find Factorial **********");

function factorial(num) {
  let result = 1;

  for (let i = 1; i <= num; i++) {
    result = result * i;
  }

  return result;
}

console.log(factorial(5));



console.log("********** 7. Check Prime Number **********");

function isPrime(num) {
  if (num <= 1) {
    return false;
  }

  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}

console.log(isPrime(7));
console.log(isPrime(10));



console.log("********** 8. First Non-Repeating Character **********");

function firstNonRepeatingChar(str) {
  for (let i = 0; i < str.length; i++) {
    let count = 0;

    for (let j = 0; j < str.length; j++) {
      if (str[i] === str[j]) {
        count++;
      }
    }

    if (count === 1) {
      return str[i];
    }
  }

  return null;
}

console.log(firstNonRepeatingChar("aabbcdd"));



console.log("********** 9. Flatten Nested Array **********");

function flattenArray(arr) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      let flat = flattenArray(arr[i]);

      for (let j = 0; j < flat.length; j++) {
        result.push(flat[j]);
      }
    } else {
      result.push(arr[i]);
    }
  }

  return result;
}

console.log(flattenArray([1, [2, [3, 4], 5]]));



console.log("********** 10. Capitalize First Letter of Each Word **********");

function capitalizeWords(str) {
  let result = "";
  let capitalizeNext = true;

  for (let i = 0; i < str.length; i++) {
    let char = str[i];

    if (char === " ") {
      result += char;
      capitalizeNext = true;
    } else {
      if (capitalizeNext === true) {
        result += char.toUpperCase();
        capitalizeNext = false;
      } else {
        result += char;
      }
    }
  }

  return result;
}

console.log(capitalizeWords("hello world"));