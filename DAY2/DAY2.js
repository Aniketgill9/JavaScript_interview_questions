console.log("********************Reverse a string (without built-in)*******************");

// 1

// function reverseStr(str){
//     let reverse = "";

//     for(let i = str.length - 1; i >=0 ; i--){
//         reverse = reverse + str[i];
//     }
//     return reverse;

// }
// console.log( reverseStr("987654321"));


function reverseString(string) {
    let reverse = ""
    for (let i = string.length - 1; i >= 0; i--) {
        reverse = reverse + string[i]
    }
    return reverse
}
console.log(reverseString("23456"));





console.log("***************Check if a string is palindrome***********");

function palindromeString(str) {
    let reverse = ""

    for (let i = str.length - 1; i >= 0; i--) {
        reverse = reverse + str[i]
    }
    if (reverse === str) {
        return str + "is paladrom";
    } else {
        return str + "is not paladrom";

    }

}
console.log(palindromeString("madam"));
console.log(palindromeString("ghjkl"));




console.log("***********Count vowels in a string***********");

function vowels(str) {
    let count = 0;

    for (let i = 0; i < str.length; i++) {
        if (
            str[i] === "a" ||
            str[i] === "e" ||
            str[i] === "i" ||
            str[i] === "o" ||
            str[i] === "u" ||
            str[i] === "A" ||
            str[i] === "E" ||
            str[i] === "I" ||
            str[i] === "O" ||
            str[i] === "U"
        ) {
            count++;
        }
    }

    return count;
}

console.log(vowels("Aet"));


console.log("************Count consonants in a string***********************");


function consonants(str) {
    let count = 0;

    for (let i = 0; i < str.length; i++) {
        if (
            str[i] !== "a" &&
            str[i] !== "e" &&
            str[i] !== "i" &&
            str[i] !== "o" &&
            str[i] !== "A" &&
            str[i] !== "E" &&
            str[i] !== "u" &&
            str[i] !== "I" &&
            str[i] !== "O" &&
            str[i] !== "U"
        ) {
            count++;
        }
    }

    return count;
}

console.log(consonants("trxz"));



console.log("**************Remove all spaces from string****************");

function removeSpace(str) {

    let result = "";

    for (let i = 0; i < str.length; i++) {
        if (str[i] !== " ") {
            result = result + str[i];
        }
    }
    return result
}
console.log(removeSpace(" a n i k e t "));




console.log("************** Find length of string (without .length)****************");

// function length(str){

//     let count = 0;

//     for(let i = 0 ; i < str.length ; i++){

//         count ++
//     }
//     return count
// }
// console.log(length("sdfghjk"));



function length(str) {

    let count = 0;

    while (str[count] !== undefined) {
        count++
    }
    return count
}
console.log(length("sdfghjk"));




console.log("******* Find first non-repeating character*****");



function firstNonRepeating(str) {

    for (let i = 0; i < str.length; i++) {
        let count = 0;

        for (let j = 0; j < str.length; j++) {
            if (str[i] === str[j]) {
                count++
            }
        }
        if (count === i) {
            return str[i];
        }
    }
    return null
}
console.log(firstNonRepeating("swiss"))








console.log("************Check if two strings are anagrams***********");

function isAnagrams(str1,str2){

    str1 = str1.toLowerCase();
    str2 = str2.toLowerCase();

    if(str1.length !== str2.length){
        return false
    }

     let stored1 = str1.split("").sort().join("");
     let stored2 = str2.split("").sort().join("");


     return stored1 === stored2;
}
console.log(isAnagrams("listen","silent"));



console.log("*********Find duplicate characters in string**************");

function findDuplicates(str){
  let result ="";

  for ( let i = 0; i <str.length; i++){
    let count =0;

    for ( let j = 0 ; j <str.length;j++){
        if ( str[i] === str[j]){
            count ++
        }
    }
    if ( count > 1 &&  !result.includes(str[i])){
        result +=str[i] + " "
    }
  }
  return result . trim()
}
console.log(findDuplicates("aabbccdde"));



console.log("***************Capitalize first letter of each word******");


function capitalizeWords(str){


  let words = str.split(" ");
  let result = [];

  for (let i = 0; i < words.length; i++){
    let word = words[i];

    if (word.length > 0){
      let capital = word[0].toUpperCase() + word.slice(1);
      result.push(capital);
    } else {
      result.push(""); 
    }
  }

  return result.join(" ");
}
console.log(capitalizeWords("hello my name is aniket gill i am 24 yers old i live in chandighr and work in  itechnolabs"));
