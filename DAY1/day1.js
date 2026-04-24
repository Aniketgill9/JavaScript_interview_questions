// 1. Print numbers from 1 to N
// function printNumbers(n) {
//   for (let i = 1; i <= n; i++) {
//     console.log(i);
//   }
// }
// printNumbers(5)


//2. Print numbers in reverse (N to 1)
// function reverse (n){
//     for (let i = n;i>=n ;i--){
//         console.log(i)
//     }
// }
// reverse(5)



// function evenNumber (n){
//    for( let i = 0 ; i<=n; i ++){
//     if(i %2 == 0){
//         console.log(i);
        
//     }
//    }
// }
// evenNumber(10)


// function sumN(n) {
//   let sum = 0;

//   for (let i = 1; i <= n; i++) {
//     sum += i;
//   }

//   return sum;
// }
// console.log(sumN(5));


// function sumN(n){
//     let sum = 0;
//      for(let i =1 ; i <=n ; i ++){
//         sum +=1;
//      }
//      return sum;
// }
// console.log(sumN(5));


// function fact (n) {
//     let result = 1;

//      for (let i = 1; i <=n ; i++){
//         result *=i
//      }
//      return result
// }
// console.log(fact(5));

// function reverseNumber (num){
//     let reverse = 0;

//     while (num >0){
//         let digit = num%10;
//         reverse = reverse*10 +digit;
//         num = Math.floor(num /10);
//     }
//     return reverse
// }
// console.log(reverseNumber(123));














// *********************************************************
console.log( "********Print numbers from 1 to N**********");

function number(n){
    for (let i = 1 ; i<=n; i++){
        console.log(i);
        
    }
}
number(5)

console.log( "**********Print numbers from N to 1********");



// 2
function reverseN (n){
    for(let i =n ; i>=0 ;i--){
        console.log(i);
        
    }
}
reverseN(5)

console.log( "********Print even numbers up to N**********");

//3
function evenNumber(n){
    for(let i =1 ; i <=n ; i++){
        if( i % 2==0){
            console.log(i);
            
        }
    }
}evenNumber(10)

console.log( "********Find sum of first N natural numbers**********");
// 4
function sumN (n){
    let sum = 0;

    for (let i = 1; i<=n ; i++){
        sum +=i
    }
    return sum
}
console.log(sumN(1)); 