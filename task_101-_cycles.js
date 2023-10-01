"use strict";

/* --------------------------------- TASK 101 --------------------------------- */

/* Сложите числа от 5 до 0 (включительно) в порядке убывания, myArrayиспользуя whileцикл.

Ожидание :Для этого вам следует использовать whileцикл.
Ожидание :myArrayдолжно быть равно [5, 4, 3, 2, 1, 0]. */

/* const myArray = [];
let i = 5;

while (i >= 0) {
  myArray.push(i);
  i-=1;
}

console.log(myArray); */

/* --------------------------------- TASK 102 --------------------------------- */

/* Используйте forцикл, чтобы передать значения от 1 до 5 в myArray.

Ожидание :Для этого вам следует использовать forцикл.
Ожидание :myArrayдолжно быть равно [1, 2, 3, 4, 5].*/

/* 
const myArray = [];

for (let i = 1; i <= 5; i+=1) {
  myArray.push(i);
  };

console.log(myArray); */

/* --------------------------------- TASK 103 --------------------------------- */

/* Нажмите нечетные числа от 1 до 9, чтобы myArrayиспользовать forцикл.

Ожидание :Для этого вам следует использовать forцикл.
Ожидание :myArrayдолжно быть равно [1, 3, 5, 7, 9]. */

/* const myArray = [];

for (let i = 1; i <= 9; i += 2) {
  myArray.push(i);
};

console.log(myArray); */

/* --------------------------------- TASK 104 --------------------------------- */

/* Push the odd numbers from 9 through 1 to myArray using a for loop.

Для этого вам следует использовать forцикл.
Пройдено :Вам следует использовать метод массива push.
Пройдено :myArrayдолжно быть равно [9, 7, 5, 3, 1]. */

/* const myArray = [];

for (let i = 9; i > 0; i -= 2) {
  myArray.push(i);
};

console.log(myArray); */

/* --------------------------------- TASK 105 --------------------------------- */

/* Объявите и инициализируйте totalпеременную 0. Используйте forцикл для добавления значения каждого элемента массива myArrв total.

Ожидание :totalдолжен быть объявлен и инициализирован значением 0.
Ожидание :totalдолжно быть равно 20.
Ожидание :Вы должны использовать forцикл для перебора myArr.
Ожидание :Не следует пытаться напрямую присвоить значение 20 total.*/

/* const myArr = [2, 3, 4, 5, 6];

let total = 0;

for (let i = 0; i < myArr.length; i += 1) {
  total += myArr[i];
};

console.log(total); */

/* --------------------------------- TASK 106 --------------------------------- */

/* Измените функцию multiplyAllтак, чтобы она возвращала произведение всех чисел в подмассивах arr.

Ожидание :multiplyAll([[1], [2], [3]])должен вернуться6
Ожидание :multiplyAll([[1, 2], [3, 4], [5, 6, 7]])должен вернуться5040
Ожидание :multiplyAll([[5, 1], [0.2, 4, 0.5], [3, 9]])должен вернуться54 */

/* function multiplyAll(arr) {
  let product = 1;

  for (let i = 0; i < arr.length; i+=1) {
    for (let j = 0; j < arr[i].length; j+=1) {
      product *= arr[i][j]; 
    }
  }

  return product;
}

console.log(multiplyAll([[1], [2], [3]])); 
console.log(multiplyAll([[1, 2], [3, 4], [5, 6, 7]])); 
console.log(multiplyAll([[5, 1], [0.2, 4, 0.5], [3, 9]]));  */

/* --------------------------------- TASK 107 --------------------------------- */

/* Измените whileцикл в коде на do...whileцикл, чтобы цикл передавал только число 10в myArray,
и iоно было равно значению 11на момент завершения выполнения вашего кода. 

Ожидание :Для этого упражнения вам следует использовать do...whileпетлю.
Ожидание :myArrayдолжно быть равно [10].
Ожидание :iдолжно быть равно11 */

/* 
const myArray = [];
let i = 10;

  do {
  myArray.push(i);
  i+=1;
} while (i < 11);

console.log(myArray); */



/* --------------------------------- TASK 108 --------------------------------- */

/* Написать рекурсивную функцию sum(arr, n), которая повергает все першие nэлементы массива arr.

В описании :sum([1], 0)можно дополнить 0.
В описании :sum([2, 3, 4], 1)можно дополнить 2.
В описании :sum([2, 3, 4, 5], 3)можно дополнить 9.
В описании :Ваш код не основан на одновременных циклах ( for, whileили функциях высшего порядка, как-от forEach, map, filterили reduce.).
В описании :Если вы хотите ускорить рекурсию, вы можете развязать это завещание. */

/* function sum(arr, n) {

  if (n === 0) {
    return 0;
  }

  return sum(arr, n - 1) + arr[n - 1];
}

console.log(sum([1], 0)); 
console.log(sum([2, 3, 4], 1)); 
console.log(sum([2, 3, 4, 5], 3)); */


/* --------------------------------- TASK 109 --------------------------------- */

/* Пошук профілю
У нас є масив об’єктів, які представляють різних людей зі списку контактів.

Функція lookUpProfile, яка приймає name та властивість (prop) як аргументи, вже записана для вас.

Функція повинна перевірити, чи name дійсно є ім’ям контакту (firstName) і надана властивість (prop) є властивістю цього контакту.

Якщо обидва є істинними, то поверніть значення цієї власності.

Якщо name не відповідає жодному контакту, поверніть рядок No such contact.

Якщо prop не збігається з жодною дійсною властивістю контакту, що відповідає name, поверніть рядок No such property.

Тести
Невдало:lookUpProfile("Kristian", "lastName") має повертати рядок Vos
Невдало:lookUpProfile("Sherlock", "likes") має повертати ["Intriguing Cases", "Violin"]
Невдало:lookUpProfile("Harry", "likes") має повертати масив
Невдало:lookUpProfile("Bob", "number") має повертати рядок No such contact
Невдало:lookUpProfile("Bob", "potato") має повертати рядок No such contact
Невдало:lookUpProfile("Akira", "address") має повертати рядок No such property */

/* const contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];

function lookUpProfile(name, prop) {
  for (let i = 0; i < contacts.length; i++) {
    if (contacts[i].firstName === name) {
      if (contacts[i][prop] !== undefined) {
        return contacts[i][prop];
      } else {
        return "No such property";
      }
    }
  }
  return "No such contact";
}

console.log(lookUpProfile("Kristian", "lastName"));
console.log(lookUpProfile("Sherlock", "likes"));
console.log(lookUpProfile("Harry", "likes")); 
console.log(lookUpProfile("Bob", "number"));
console.log(lookUpProfile("Bob", "potato"));
console.log(lookUpProfile("Akira", "address")); 
console.log(lookUpProfile("Akira", "likes")); 
 */



/* --------------------------------- TASK 110 --------------------------------- */

/* Змініть randomFraction, щоб поверталось випадкове число, а не 0.

Тести
В очікуванні:randomFraction має повертати випадкове число.
В очікуванні:Число, яке повернула randomFraction, повинне бути десятковим.
В очікуванні:Ви повинні використати Math.random, щоб згенерувати випадкове десяткове число.*/

/* function randomFraction() {

  return Math.random();
}

console.log(randomFraction()) */


/* --------------------------------- TASK 111 --------------------------------- */

/* Використайте цю техніку, щоб згенерувати та повернути випадкове ціле число в діапазоні від 0 до 9.

Тести
Пройдено:Результатом randomWholeNum повинне бути ціле число.
Пройдено:Ви повинні використати Math.random, щоб згенерувати випадкове число.
Пройдено:Ви повинні помножити результат Math.random на 10, щоб зробити його числом в діапазоні від 0 до 9.
Пройдено:Ви повинні використати Math.floor, щоб видалити десяткову частину числа. */

/* function randomWholeNum() {
  return Math.floor(Math.random() * 10);;
}

console.log(randomWholeNum()) */
