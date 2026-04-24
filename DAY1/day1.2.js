// 1
console.log("******************print number from 1 to n *************");
 function number (n){
    for (let i = 1; i <=n ; i++){
        console.log(i);
        
    }
 }
number(10);

// 1 
function number2 (n){
    for (let i = 1;i<=n ; i++){
        console.log(i);
        
    }
}
number(10)




console.log("*********Print numbers in reverse (N to 1)**********");

// 2

function reverse(n){
    for(let i =n;i>=1;i--){
        console.log(i);
        
    }
}
reverse(10)

// 2
function reverse2 (n){
    for(let i = n ; i>=1;i--){
        console.log(i);
        
    }
}
reverse2(10)


// 3`

console.log("****************Print all even numbers up to N*****************");

function evenN(n){
    for(let i=1;i<=n;i++){
        if(i%2==0){
            console.log(i);
            
        }
    }
}
evenN(10)



console.log("***************Find sum of first N natural numbers************************");


function sumN(n){
    let sum =0;

    for(let i =1; i <= n; i++){
        sum = sum +i;
    }
    return sum;
}
console.log(sumN(5)); 

// 4

function sumn2 (n){
    let sum = 0
    for(let i =1; i <=n; i++){
        sum = sum +i
    }
    return sum;
}
console.log(sumn2(4));


// 5

console.log("****************Find factorial of a number***************");

function fact (n){
    let factorial = 1;
    for (let i =n ;i>=1; i--){
        factorial = factorial*i
    }
    return factorial
}
console.log(fact(5));

// 5

function fact2(n){
    let factorial2 =1;

    for(let i = n ; i >=1 ; i--){
        factorial2= factorial2*i;

    }
    return factorial2
}
console.log(fact(4));


// 6
console.log("**********Count digits in a number********");


function CountDigit(num){
    let Count = 0;

    while (num>0){
        num = Math.floor(num/10);
        Count++
    }
    return Count;
}
console.log(CountDigit(10202));


// 6

function CountDigit2 (num){
    let Count2 = 0;

    while (num >0) {
        num = Math.floor(num/10)
        Count2++
    }
    return  Count2
}
console.log(CountDigit2(11001100));




console.log('****************Reverse a number***********');

function reverseNumber4(num) {
  let reverse4 = 0;

  while (num > 0) {
    let digit = num % 10;
    reverse4 = reverse4 * 10 + digit;
    num = Math.floor(num / 10);
  }

  return reverse4;
}

console.log(reverseNumber4(405)); 



console.log("************Check if a number is palindrome************");


function palindrome(num){
    let original = num;
    let reverseP =0;

    while (num > 0){
        let digit = num % 10;
        reverseP = reverseP * 10 + digit
        num = Math.floor(num/10)
    }
    return original === reverseP;
}
console.log(palindrome(121));
console.log(palindrome(123));


// 2

function palindrome2(num){
    let original1 = num;
    let reverseP2 = 0;

    while (num >0){
        let digit1 = num %10;
        reverseP2 = reverseP2 *10 + digit1
        num = Math.floor(num/10)
    }
    return original1 === reverseP2
}
console.log(palindrome2(121));


console.log("*************Find largest digit in a number**********");


function largestDigit(num) {
  let max = 0;

  while (num > 0) {
    let digit = num % 10;

    if (digit > max) {
      max = digit;
    }

    num = Math.floor(num / 10);
  }

  return max;
}

console.log(largestDigit(9382)); 

// 2
function largestDigit1 (num){
    let max1 = 0;

    while (num > 0){
        let  digit = num %10;

        if(digit > max1){
            max1 = digit
        }
        num = Math.floor (num  /10)
    }
    return max1
}
console.log(largestDigit1(4800));



console.log(  "*******************Find sum of digits*******************");

function sumOfDigits(num) {
  let sum = 0;

  while (num > 0) {
    let digit = num % 10;
    sum = sum + digit;
    num = Math.floor(num / 10);
  }

  return sum;
}

console.log(sumOfDigits(1234567)); 