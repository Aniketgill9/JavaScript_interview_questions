// function printNumber (n){
//     for (let i=1 ; i <=n ; i++){
//         console.log(i);
        
//     }
// }
// printNumber(10)




// function printReverse(n){

//     for (let i = n ; i >=1 ; i --){
//         console.log(i);
        
//     }
// }
// printReverse(5)



// function printEven(n){
//     for(let i =1 ; i <=n ;i++){
//         if (i %2 ==0){
//             console.log(i);
            
//         }
//     }
// }
// printEven(10)


// function sumN(n) {
//     let sum = 0;

//     for ( let i =1 ; i <=n ;i++){
//         sum = sum +i
//     }
//     return sum
// }

// console.log(sumN(5));




// function factorial(n) {
//   let fact = 1;

//   for (let i = n;i >=1; i--){
//     fact = fact*i
//   }
//   return fact
// }

// console.log(factorial(5));



// function countDigits(num) {
//   if (num === 0) return 1;

//   let count = 0;

//   while (num > 0) {
//     num = Math.floor(num / 10);
//     count++;
//   }

//   return count;
// }
// console.log(countDigits(22));



// function reverseNumber(num) {
//     let reverse = 0;

//   while (num > 0) {
//     let digit = num % 10;
//     reverse = reverse * 10 + digit;
//     num = Math.floor(num / 10);
//   }

//   return reverse;
// }


// console.log(reverseNumber(123));









// function largestDigit1 (num){
//     let max1 = 0;

//     while (num > 0){
//         let  digit = num %10;

//         if(digit > max1){
//             max1 = digit
//         }
//         num = Math.floor (num  /10)
//     }
//     return max1
// }
// console.log(largestDigit1(4800));



function largestDigit (num){
  let sum = 0;

  while (num > 0) {
     let  digit = num %10;
     if ( digit > sum){
      sum = digit
     }
     num = Math.floor(num/10)
    
  }return sum
}
console.log(largestDigit(345678));






