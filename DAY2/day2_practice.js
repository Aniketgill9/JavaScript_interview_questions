function reverseString(str) {
    let rev = "";

    for (let i = str.length - 1; i >= 0; i--) {
        rev = rev + str[i];
    }
    return rev
}
console.log(reverseString("123456"));


// palindrom

function palindrom(str) {
    let rev = "";

    for (let i = str.length - 1; i >= 0; i--) {
        rev = rev + str[i]
    }
    if (rev === str) {
        return str + "is palindrom"
    } else {
        return str + "is not a palindrom"
    }
    return rev
}
console.log(palindrom("madam"));


function vowels(str) {
    let count = 0;

    for (let i = 0; i < str.length; i++) {
        if (
            str[i] === "a" ||
            str[i] === "e" ||
            str[i] === "i" ||
            str[i] === "o" ||
            str[i] === "u"
        ) {
            count++;
        }
    }

    return count;
}

console.log(vowels("aeiox")); // 4


function vowels(str) {
    let count = 0;

    for (let i = 0; i < str.length; i++) {
        if (
            str[i] !== "a" &&
            str[i] !== "e" &&
            str[i] !== "i" &&
            str[i] !== "o" &&
            str[i] !== "u"
        ) {
            count++;
        }
    }

    return count;
}

console.log(vowels("aeioxtr"));




function removeSpace(str) {
    let space = "";

    for (let i = 0; i < str.length; i++) {
        if (str[i] !== " ") {
            space = space + str[i]
        }
    }
    return space
}
console.log(removeSpace("a n i k e t"));





function findLength (str){

    let len =0;

    while( str[len] !==undefined){
        len ++
    }
    return len
}
console.log(findLength("aniket"));





function firstNonRepeating(str){

    for (let i = 0; i < str.length; i++){
        let count = 0;

        for (let j = 0; j < str.length; j++){
            if (str[i] === str[j]){
                count++;
            }
        }

        if (count === 1){
            return str[i];
        }
    }

    return null;
}

console.log(firstNonRepeating("aabbcddee")); 