```1. Diamond Star Pattern
2. Hollow Diamond Pattern
3. Butterfly Pattern
4. Hollow Butterfly Pattern
5. Pascal Triangle Pattern
6. Floyd’s Triangle Pattern
7. Number Pyramid Pattern
8. Palindromic Number Pyramid
9. Zig-Zag Star Pattern
10. Spiral Number Matrix
11. Hollow Square Pattern
12. Hollow Pyramid Pattern
13. Inverted Hollow Pyramid
14. X Star Pattern
15. Hourglass Pattern
16. Alphabet Pyramid Pattern
17. Alphabet Diamond Pattern
18. Continuous Alphabet Triangle
19. Binary Triangle Pattern
20. Snake Number Pattern```




// 1. Diamond Star
let n = 5;
for (let i = 1; i <= n; i++) {
  console.log(" ".repeat(n - i) + "*".repeat(2 * i - 1));
}
for (let i = n - 1; i >= 1; i--) {
  console.log(" ".repeat(n - i) + "*".repeat(2 * i - 1));
}





// 2. Hollow Diamond
for (let i = 1; i <= n; i++) {
  let row = " ".repeat(n - i);
  for (let j = 1; j <= 2 * i - 1; j++) {
    row += j === 1 || j === 2 * i - 1 ? "*" : " ";
  }
  console.log(row);
}
for (let i = n - 1; i >= 1; i--) {
  let row = " ".repeat(n - i);
  for (let j = 1; j <= 2 * i - 1; j++) {
    row += j === 1 || j === 2 * i - 1 ? "*" : " ";
  }
  console.log(row);
}




// 3. Butterfly
for (let i = 1; i <= n; i++) {
  console.log("*".repeat(i) + " ".repeat(2 * (n - i)) + "*".repeat(i));
}
for (let i = n; i >= 1; i--) {
  console.log("*".repeat(i) + " ".repeat(2 * (n - i)) + "*".repeat(i));
}



// 4. Hollow Butterfly
for (let i = 1; i <= n; i++) {
  let left = "*";
  if (i > 1) left += " ".repeat(i - 2) + "*";

  let middle = " ".repeat(2 * (n - i));

  let right = "*";
  if (i > 1) right = "*" + " ".repeat(i - 2) + "*";

  console.log(left + middle + right);
}
for (let i = n; i >= 1; i--) {
  let left = "*";
  if (i > 1) left += " ".repeat(i - 2) + "*";

  let middle = " ".repeat(2 * (n - i));

  let right = "*";
  if (i > 1) right = "*" + " ".repeat(i - 2) + "*";

  console.log(left + middle + right);
}



// 5. Pascal Triangle
for (let i = 0; i < n; i++) {
  let row = " ".repeat(n - i);
  let value = 1;

  for (let j = 0; j <= i; j++) {
    row += value + " ";
    value = (value * (i - j)) / (j + 1);
  }

  console.log(row);
}



// 6. Floyd Triangle
let num = 1;
for (let i = 1; i <= n; i++) {
  let row = "";
  for (let j = 1; j <= i; j++) {
    row += num + " ";
    num++;
  }
  console.log(row);
}




// 7. Number Pyramid
for (let i = 1; i <= n; i++) {
  let row = " ".repeat(n - i);
  for (let j = 1; j <= i; j++) {
    row += j + " ";
  }
  console.log(row);
}





// 8. Palindromic Number Pyramid
for (let i = 1; i <= n; i++) {
  let row = " ".repeat(n - i);

  for (let j = i; j >= 1; j--) {
    row += j;
  }

  for (let j = 2; j <= i; j++) {
    row += j;
  }

  console.log(row);
}





// 9. Zig-Zag Star Pattern
for (let i = 1; i <= 3; i++) {
  let row = "";
  for (let j = 1; j <= n * 2; j++) {
    if ((i + j) % 4 === 0 || (i === 2 && j % 4 === 0)) {
      row += "* ";
    } else {
      row += "  ";
    }
  }
  console.log(row);
}





// 10. Spiral Number Matrix
let size = 5;
let matrix = Array.from({ length: size }, () => Array(size).fill(0));

let top = 0;
let bottom = size - 1;
let left = 0;
let right = size - 1;
let count = 1;

while (top <= bottom && left <= right) {
  for (let i = left; i <= right; i++) matrix[top][i] = count++;
  top++;

  for (let i = top; i <= bottom; i++) matrix[i][right] = count++;
  right--;

  for (let i = right; i >= left; i--) matrix[bottom][i] = count++;
  bottom--;

  for (let i = bottom; i >= top; i--) matrix[i][left] = count++;
  left++;
}

for (let row of matrix) {
  console.log(row.map(x => String(x).padStart(2, " ")).join(" "));
}




// 11. Hollow Square
for (let i = 1; i <= n; i++) {
  let row = "";
  for (let j = 1; j <= n; j++) {
    row += i === 1 || i === n || j === 1 || j === n ? "* " : "  ";
  }
  console.log(row);
}





// 12. Hollow Pyramid
for (let i = 1; i <= n; i++) {
  let row = " ".repeat(n - i);

  for (let j = 1; j <= 2 * i - 1; j++) {
    row += i === n || j === 1 || j === 2 * i - 1 ? "*" : " ";
  }

  console.log(row);
}





// 13. Inverted Hollow Pyramid
for (let i = n; i >= 1; i--) {
  let row = " ".repeat(n - i);

  for (let j = 1; j <= 2 * i - 1; j++) {
    row += i === n || j === 1 || j === 2 * i - 1 ? "*" : " ";
  }

  console.log(row);
}





// 14. X Star Pattern
for (let i = 1; i <= n; i++) {
  let row = "";
  for (let j = 1; j <= n; j++) {
    row += i === j || i + j === n + 1 ? "* " : "  ";
  }
  console.log(row);
}




// 15. Hourglass Pattern
for (let i = n; i >= 1; i--) {
  console.log(" ".repeat(n - i) + "*".repeat(2 * i - 1));
}
for (let i = 2; i <= n; i++) {
  console.log(" ".repeat(n - i) + "*".repeat(2 * i - 1));
}





// 16. Alphabet Pyramid
for (let i = 1; i <= n; i++) {
  let row = " ".repeat(n - i);

  for (let j = 1; j <= i; j++) {
    row += String.fromCharCode(64 + j) + " ";
  }

  console.log(row);
}






// 17. Alphabet Diamond
for (let i = 1; i <= n; i++) {
  let row = " ".repeat(n - i);

  for (let j = 1; j <= i; j++) {
    row += String.fromCharCode(64 + j);
  }

  for (let j = i - 1; j >= 1; j--) {
    row += String.fromCharCode(64 + j);
  }

  console.log(row);
}

for (let i = n - 1; i >= 1; i--) {
  let row = " ".repeat(n - i);

  for (let j = 1; j <= i; j++) {
    row += String.fromCharCode(64 + j);
  }

  for (let j = i - 1; j >= 1; j--) {
    row += String.fromCharCode(64 + j);
  }

  console.log(row);
}





// 18. Continuous Alphabet Triangle
let charCode = 65;
for (let i = 1; i <= n; i++) {
  let row = "";

  for (let j = 1; j <= i; j++) {
    row += String.fromCharCode(charCode) + " ";
    charCode++;

    if (charCode > 90) charCode = 65;
  }

  console.log(row);
}




// 19. Binary Triangle
for (let i = 1; i <= n; i++) {
  let row = "";

  for (let j = 1; j <= i; j++) {
    row += (i + j) % 2 === 0 ? "1 " : "0 ";
  }

  console.log(row);
}




// 20. Snake Number Pattern
let value = 1;
for (let i = 1; i <= n; i++) {
  let row = [];

  for (let j = 1; j <= n; j++) {
    row.push(value++);
  }

  if (i % 2 === 0) row.reverse();

  console.log(row.join(" "));
}