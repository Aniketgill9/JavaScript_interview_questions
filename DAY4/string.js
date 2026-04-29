// Strings (20 Questions)
// 1

console.log("********1. Reverse a string (without built-in)*********I");

function ReverseStr(str){
 let rev ="";

 for(let i =str.length-1 ; i >= 0;i--){
    rev = rev+str[i]
 }
 return rev
}
console.log(ReverseStr("simran"));


// 2
console.log("*********Check if a string is palindrome********");

function palindrome(str){

    let palindrome ="";
    for(let i = str.length-1; i >=0;i--){
        palindrome =palindrome+str[i]
        
        if( palindrome === str){
            return palindrome +" is palendrom"
        }
        else{
            return palindrome +" is not apalendrom"
        }
    }
    return palindrome
}
console.log(palindrome("madam"));
console.log(palindrome("mamamm"));


// 3
console.log("***********Count vowels in a string************");

function vowels(str){

    let vowels = "";

    for( let i =0; i < str.length ;i++){
        if( str[i] ==="a" ||
            str[i] ==="e" ||
            str[i] ==="i" ||
            str[i] ==="o" ||
            str[i] ==="u" 
        ){
         vowels++
        }
    }return vowels
}
console.log(vowels("aniket"));


//4

console.log("***********Count consonants in a string**********");

function consonants(str){
    let consonants = "";

    for( let i = 0 ; i < str.length ; i++){
        if( str[i] !== "a" &&
            str[i] !== "e" &&
            str[i] !== "i" &&
            str[i] !== "o" &&
            str[i] !== "u" 
        ){
            consonants ++
        }
    }
    return consonants
}
console.log(consonants("aniket"));


//5
console.log("*************Remove all spaces from a string********");

function removespace(str){
 
    let space = ""
    for( let i = 0 ;i< str.length; i++){
      if( str[i] !== " "){
            space = space+ str[i]
      }
    }
    return space
}
console.log(removespace(" a n i k e t"));

// 6
console.log("********. Find length of string (without .length)**********");

function findLenghtStr(str){
 let Count = 0;

for(element of str){
    Count ++
}
return Count

}
console.log(findLenghtStr("aniket"));


// 7
console.log("************Find first non-repeating character**********");

function nonRepeating(str){
 let count = {}

 for( let char of str){
    count[char]=(count[char] || 0) +1
 }
for(let char of str){
    if(count[char]===1){
        return char
    }
}
return null

}
console.log(nonRepeating("annikkeett"));


// 8
console.log("*********. Check if two strings are anagrams********8");


function isAnagrams(str1, str2) {
    str1 = str1.toLowerCase();
    str2 = str2.toLowerCase();

    if (str1.length !== str2.length) {
        return false;
    }

    let string1 = str1.split("").sort().join("");
    let string2 = str2.split("").sort().join("");

    return string1 === string2;
}

console.log(isAnagrams("asd", "dsa")); // true




// 9
console.log("************Count duplicate characters in string*************");

function countDuplicate(str){
    let count = {};
    let result ={};
    
    for( let char of str){
        count[char] = (count[char] || 0)+1
    }

    for( let key in count){
        if(count[key]>1){
            result[key]= count[key];
        }
    }
    return result
    
}
console.log(countDuplicate("aanniikkeett"));

// same
function countDuplicate(str){
    let count ={};
    let result ={};

    for( let char of str){
        count[char] = ( count[char] || 0)+1
    }
    for( let key in count){
        if(count[key]>0){
            result[key]= count[key]
        }
    }
    return result
    
}
console.log(countDuplicate("aanniikkeett"));



// 10
console.log("*********Convert string to uppercase (without built-in)******************");

function toUpperCase(str) {
    let result = "";

    for (let char of str) {
        let code = char.charCodeAt(0);

   
        if (code >= 97 && code <= 122) {
            result += String.fromCharCode(code - 32);
        } else {
            result += char;
        }
    }

    return result;
}

console.log(toUpperCase("aniket"));


// 11
console.log("**************Count number of words in a string*************")

function countNum(str){
    let  count = 0;
    let inWord =false;

    for ( let char of str){
        if ( char !== " " && !inWord){
            count ++
            inWord = true
        }else if( char === " "){
            inWord = false
        }
    }
    return count
    
}
console.log(countNum("aniket is"));



// 12
console.log("**************Capitalize first letter of each word**********************");
