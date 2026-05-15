// 1. Square Pattern
/*
****
****
****
****
*/
for (let i = 1; i <= 4; i++) {
  console.log("****");
}


// 2. Right Triangle
/*
*
**
***
****
*/
for (let i = 1; i <= 4; i++) {
  console.log("*".repeat(i));
}


// 3. Reverse Triangle
/*
****
***
**
*
*/
for (let i = 4; i >= 1; i--) {
  console.log("*".repeat(i));
}


// 4. Number Triangle
/*
1
12
123
1234
*/
for (let i = 1; i <= 4; i++) {
  let row = "";
  for (let j = 1; j <= i; j++) {
    row += j;
  }
  console.log(row);
}


// 5. Reverse Number Triangle
/*
1234
123
12
1
*/
for (let i = 4; i >= 1; i--) {
  let row = "";
  for (let j = 1; j <= i; j++) {
    row += j;
  }
  console.log(row);
}


// 6. Floyd’s Triangle
/*
1
2 3
4 5 6
7 8 9 10
*/
let num = 1;
for (let i = 1; i <= 4; i++) {
  let row = "";
  for (let j = 1; j <= i; j++) {
    row += num + " ";
    num++;
  }
  console.log(row);
}


// 7. Pyramid Pattern
/*
   *
  ***
 *****
*******
*/
for (let i = 1; i <= 4; i++) {
  let space = " ".repeat(4 - i);
  let star = "*".repeat(2 * i - 1);
  console.log(space + star);
}


// 8. Reverse Pyramid
/*
*******
 *****
  ***
   *
*/
for (let i = 4; i >= 1; i--) {
  let space = " ".repeat(4 - i);
  let star = "*".repeat(2 * i - 1);
  console.log(space + star);
}


// 9. Diamond Pattern
/*
   *
  ***
 *****
*******
 *****
  ***
   *
*/
let n = 4;

for (let i = 1; i <= n; i++) {
  console.log(" ".repeat(n - i) + "*".repeat(2 * i - 1));
}

for (let i = n - 1; i >= 1; i--) {
  console.log(" ".repeat(n - i) + "*".repeat(2 * i - 1));
}


// 10. Hollow Square
/*
****
*  *
*  *
****
*/
let size = 4;

for (let i = 1; i <= size; i++) {
  let row = "";
  
  for (let j = 1; j <= size; j++) {
    if (i === 1 || i === size || j === 1 || j === size) {
      row += "*";
    } else {
      row += " ";
    }
  }
  
  console.log(row);
}


// 11. Hollow Triangle
/*
*
**
* *
****
*/
for (let i = 1; i <= 4; i++) {
  let row = "";
  
  for (let j = 1; j <= i; j++) {
    if (j === 1 || j === i || i === 4) {
      row += "*";
    } else {
      row += " ";
    }
  }
  
  console.log(row);
}


// 12. Binary Triangle
/*
1
01
101
0101
*/
for (let i = 1; i <= 4; i++) {
  let row = "";
  
  for (let j = 1; j <= i; j++) {
    row += (i + j) % 2;
  }
  
  console.log(row);
}


// 13. Alphabet Triangle
/*
A
AB
ABC
ABCD
*/
for (let i = 1; i <= 4; i++) {
  let row = "";
  
  for (let j = 0; j < i; j++) {
    row += String.fromCharCode(65 + j);
  }
  
  console.log(row);
}


// 14. Butterfly Pattern
/*
*      *
**    **
***  ***
********
*/
let rows = 4;

for (let i = 1; i <= rows; i++) {
  let stars = "*".repeat(i);
  let spaces = " ".repeat(2 * (rows - i));
  console.log(stars + spaces + stars);
}


// 15. Pascal Triangle
/*
1
1 1
1 2 1
1 3 3 1
*/
for (let i = 0; i < 4; i++) {
  let row = "";
  let val = 1;

  for (let j = 0; j <= i; j++) {
    row += val + " ";
    val = val * (i - j) / (j + 1);
  }

  console.log(row);
}