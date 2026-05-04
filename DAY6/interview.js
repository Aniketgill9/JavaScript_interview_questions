console.log("Q1: What is JavaScript and common uses");

document.body.innerHTML = "<h1>Hello JavaScript</h1>";

const button = document.createElement("button");
button.innerText = "Click Me";
document.body.appendChild(button);

button.addEventListener("click", function () {
  alert("JavaScript makes websites interactive");
});




console.log("Q2: Template literals");

let name = "Aniket";
let course = "JavaScript";

console.log(`Hello ${name}, welcome to ${course}`);
console.log(`2 + 3 = ${2 + 3}`);



console.log("Q3: Hoisting");

console.log(a); // undefined
var a = 10;

hello();

function hello() {
  console.log("Function is hoisted");
}

// console.log(b); // ReferenceError
let b = 20;




console.log("Q4: let var const");

var x = 10;
var x = 20;
console.log(x);

let y = 30;
y = 40;
console.log(y);

const z = 50;
console.log(z);



console.log("Q5: Data types");

let str = "Hello";
let num = 100;
let bool = true;
let empty = null;
let notDefined;
let big = 12345678901234567890n;
let sym = Symbol("id");
let obj = { name: "Aniket" };
let arr = [1, 2, 3];

console.log(typeof str);
console.log(typeof num);
console.log(typeof bool);
console.log(typeof empty);
console.log(typeof notDefined);
console.log(typeof big);
console.log(typeof sym);
console.log(typeof obj);
console.log(Array.isArray(arr));




console.log("Q6: Array and access elements");

let languages = ["HTML", "CSS", "JavaScript"];

console.log(languages[0]);
console.log(languages[1]);
console.log(languages[2]);

languages.push("React");
console.log(languages);



console.log("Q7: == vs ===");

console.log(5 == "5");   // true
console.log(5 === "5");  // false

console.log(true == 1);   // true
console.log(true === 1);  // false


console.log("Q8: isNaN");

console.log(isNaN("hello"));
console.log(isNaN(123));
console.log(isNaN("123"));

console.log(Number.isNaN(NaN));
console.log(Number.isNaN("hello"));


console.log("Q9: null vs undefined");

let a;
let b = null;

console.log(a);
console.log(b);

console.log(typeof a);
console.log(typeof b);


console.log("Q10: typeof operator");

console.log(typeof "Aniket");
console.log(typeof 25);
console.log(typeof true);
console.log(typeof undefined);
console.log(typeof null);
console.log(typeof {});
console.log(typeof []);
console.log(typeof function () {});



console.log("Q11: map method");

let numbers = [1, 2, 3, 4, 5];

let double = numbers.map(function (num) {
  return num * 2;
});

console.log(double);



console.log("Q12: Event bubbling and capturing");

/*
HTML:
<div id="parent">
  <button id="child">Click</button>
</div>
*/

let parent = document.getElementById("parent");
let child = document.getElementById("child");

parent.addEventListener("click", function () {
  console.log("Parent clicked - bubbling");
});

child.addEventListener("click", function () {
  console.log("Child clicked");
});

parent.addEventListener(
  "click",
  function () {
    console.log("Parent clicked - capturing");
  },
  true
);




console.log("Q13: Higher order function");

function greet(name) {
  return `Hello ${name}`;
}

function processUser(callback) {
  let user = "Aniket";
  return callback(user);
}

console.log(processUser(greet));




console.log("Q14: IIFE");

(function () {
  console.log("IIFE executed immediately");
})();

(() => {
  console.log("Arrow function IIFE");
})();





console.log("Q15: Closure");

function counter() {
  let count = 0;

  return function () {
    count++;
    console.log(count);
  };
}

let increment = counter();

increment();
increment();
increment();





console.log("Q16: setTimeout and setInterval");

setTimeout(function () {
  console.log("Runs after 2 seconds");
}, 2000);

let count = 1;

let timer = setInterval(function () {
  console.log(count);
  count++;

  if (count > 5) {
    clearInterval(timer);
  }
}, 1000);





console.log("Q17: Promise");

let promise = new Promise(function (resolve, reject) {
  let success = true;

  if (success) {
    resolve("Promise resolved successfully");
  } else {
    reject("Promise rejected");
  }
});

promise
  .then(function (result) {
    console.log(result);
  })
  .catch(function (error) {
    console.log(error);
  });


console.log("Q18: async await");

function getData() {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve("Data received");
    }, 2000);
  });
}

async function showData() {
  try {
    let result = await getData();
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}

showData();



console.log("Q19: call apply bind");

const user = {
  name: "Aniket"
};

function greet(city, country) {
  console.log(`Hello ${this.name} from ${city}, ${country}`);
}

greet.call(user, "Delhi", "India");

greet.apply(user, ["Delhi", "India"]);

let newGreet = greet.bind(user, "Delhi", "India");
newGreet();



console.log("Q20: Event delegation");

/*
HTML:
<ul id="list">
  <li>HTML</li>
  <li>CSS</li>
  <li>JavaScript</li>
</ul>
*/

let list = document.getElementById("list");

list.addEventListener("click", function (event) {
  if (event.target.tagName === "LI") {
    console.log(event.target.textContent);
  }
});




console.log("Q21: Event loop");

console.log("Start");

setTimeout(function () {
  console.log("setTimeout");
}, 0);

Promise.resolve().then(function () {
  console.log("Promise");
});

console.log("End");

// Output:
// Start
// End
// Promise
// setTimeout




console.log("Q22: Promise vs async await");

function fetchData() {
  return new Promise(function (resolve) {
    resolve("Data loaded");
  });
}

fetchData()
  .then(function (data) {
    console.log("Promise:", data);
  })
  .catch(function (error) {
    console.log(error);
  });

async function loadData() {
  try {
    let data = await fetchData();
    console.log("Async Await:", data);
  } catch (error) {
    console.log(error);
  }
}

loadData();




console.log("Q23: reduce method");

let nums = [1, 2, 3, 4, 5];

let sum = nums.reduce(function (acc, current) {
  return acc + current;
}, 0);

console.log(sum);



console.log("Q24: Currying");

function add(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

console.log(add(10)(20)(30));



console.log("Q25: Generator function");

function* generateNumbers() {
  yield 1;
  yield 2;
  yield 3;
}

let gen = generateNumbers();

console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());




console.log("Q26: WeakMap and WeakSet");

let userObj = { name: "Aniket" };

let weakMap = new WeakMap();
weakMap.set(userObj, "Private data");

console.log(weakMap.get(userObj));

let weakSet = new WeakSet();
weakSet.add(userObj);

console.log(weakSet.has(userObj));



console.log("Q27: Memory management");

let user = {
  name: "Aniket"
};

console.log(user);

user = null;

console.log(user);

// Now old object can be removed by garbage collector



console.log("Q28: Shallow copy and deep copy");

const original = {
  name: "Aniket",
  address: {
    city: "Delhi"
  }
};

const shallowCopy = { ...original };

shallowCopy.address.city = "Mumbai";

console.log(original.address.city); // Mumbai

const deepOriginal = {
  name: "Aniket",
  address: {
    city: "Delhi"
  }
};

const deepCopy = structuredClone(deepOriginal);

deepCopy.address.city = "Mumbai";

console.log(deepOriginal.address.city); // Delhi
console.log(deepCopy.address.city);     // Mumbai




console.log("Q29: Strict mode");

"use strict";

let x = 10;
console.log(x);

// Without let/const/var, strict mode gives error
// y = 20;
// console.log(y);





console.log("Q30: Observer pattern");

class Subject {
  constructor() {
    this.observers = [];
  }

  subscribe(observer) {
    this.observers.push(observer);
  }

  unsubscribe(observer) {
    this.observers = this.observers.filter(function (item) {
      return item !== observer;
    });
  }

  notify(message) {
    this.observers.forEach(function (observer) {
      observer(message);
    });
  }
}

function userOne(message) {
  console.log("User One received:", message);
}

function userTwo(message) {
  console.log("User Two received:", message);
}

const channel = new Subject();

channel.subscribe(userOne);
channel.subscribe(userTwo);

channel.notify("New JavaScript video uploaded");

channel.unsubscribe(userTwo);

channel.notify("New React video uploaded");