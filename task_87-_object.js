"use strict";

/* --------------------------------- TASK 87 --------------------------------- */

/* Создайте объект, представляющий вызываемую собаку myDog, который содержит свойства name(строку) legs, tailsи friends.
Вы можете установить для этих свойств объекта любые значения, которые вы хотите, если nameэто строка, legsчисла tailsи friendsмассив. 

Ожидание :myDogдолжен содержать свойство name, и это должен быть файл string.
Ожидание :myDogдолжен содержать свойство legs, и это должен быть файл number.
Ожидание :myDogдолжен содержать свойство tails, и это должен быть файл number.
Ожидание :myDogдолжен содержать свойство friendsи должен быть array.
Ожидание :myDogдолжен содержать только все заданные свойства.
*/

/* const myDog = {

name: "Dog",
legs: 5,
tails: 2,
friends: ["Dog1", "Dog2"]
};

console.log(myDog); */

/* --------------------------------- TASK 88 --------------------------------- */

/* Считайте значения свойств testObjс помощью записи через точку. 
Установите переменную hatValueравной свойству объекта hatи установите переменную shirtValueравной свойству объекта shirt. 

Ожидание :hatValueдолжна быть строка
Ожидание :Значение hatValueдолжно быть строкойballcap
Ожидание :shirtValueдолжна быть строка
Ожидание :Значение shirtValueдолжно быть строкойjersey
Ожидание :Вы должны использовать запись через точку дважды
*/

/* const testObj = {
  "hat": "ballcap",
  "shirt": "jersey",
  "shoes": "cleats"
};

const hatValue = testObj.hat;     
const shirtValue = testObj.shirt;    

console.log(hatValue);
console.log(shirtValue); */

/* --------------------------------- TASK 89 --------------------------------- */

/* Прочитайте значения свойств an entreeи the drinkиспользования testObjскобочной нотации и присвойте их соответственно entreeValueи drinkValue.

Ожидание :entreeValueдолжна быть строка
Ожидание :Значение entreeValueдолжно быть строкойhamburger
Ожидание :drinkValueдолжна быть строка
Ожидание :Значение drinkValueдолжно быть строкойwater
Ожидание :Вы должны использовать скобки дважды
*/

/* const testObj = {
  "an entree": "hamburger",
  "my side": "veggies",
  "the drink": "water"
};

const entreeValue = testObj["an entree"];   
const drinkValue = testObj['the drink'];     */

/* --------------------------------- TASK 90 --------------------------------- */

/* Установите playerNumberпеременную в 16. Затем используйте переменную, чтобы найти имя игрока и присвоить его player.

Ожидание :playerNumberдолжно быть число
Ожидание :Переменная playerдолжна быть строкой
Ожидание :Значение playerдолжно быть строкойMontana
Ожидание :Вы должны использовать обозначение в квадратных скобках для доступаtestObj
Ожидание :Вы не должны присваивать значение Montanaпеременной playerнапрямую.
Ожидание :Вы должны использовать переменную playerNumberв скобках
*/

/* const testObj = {
  12: "Namath",
  16: "Montana",
  19: "Unitas"
};

const playerNumber = 16; 
const player = testObj[playerNumber];  

console.log(player); */

/* --------------------------------- TASK 91 --------------------------------- */

/* Обновите myDogсвойство имени объекта. Давайте изменим ее имя с Coderна Happy Coder. Вы можете использовать либо точку, либо квадратную нотацию.

Ожидание :Вы должны обновить myDogсвойство name, чтобы оно равнялось строке Happy Coder.
Ожидание :Не следует редактировать myDogопределение.
*/

/* const myDog = {
  "name": "Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"]
};

myDog.name = "Happy Coder";

console.log(myDog); */

/* --------------------------------- TASK 92 --------------------------------- */

/* Добавьте barkсвойство myDogи задайте для него звук собаки, например "гав". Вы можете использовать либо точку, либо квадратную нотацию.

Ожидание :Вы должны добавить свойство barkв myDog.
Ожидание :Вы не должны добавлять barkк инициализации myDog.
*/

/* const myDog = {
  "name": "Happy Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"]
};

myDog.bark = "ufd";

console.log(myDog); */

/* --------------------------------- TASK 93 --------------------------------- */

/* Удалить tailsсвойство из myDog. Вы можете использовать либо точку, либо квадратную нотацию.

Ожидание :Вы должны удалить свойство tailsиз myDog.
Ожидание :Не следует изменять myDogустановку.
*/

/* const myDog = {
  "name": "Happy Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"],
  "bark": "woof"
};

delete myDog.tails;

console.log(myDog); */

/* --------------------------------- TASK 94 --------------------------------- */

/* Преобразуйте оператор switch в объект с именем lookup. Используйте его, чтобы найти valи присвоить связанную строку переменной result.

Ожидание :phoneticLookup("alpha")должна равняться строкеAdams
Ожидание :phoneticLookup("bravo")должна равняться строкеBoston
Ожидание :phoneticLookup("charlie")должна равняться строкеChicago
Ожидание :phoneticLookup("delta")должна равняться строкеDenver
Ожидание :phoneticLookup("echo")должна равняться строкеEasy
Ожидание :phoneticLookup("foxtrot")должна равняться строкеFrank
Ожидание :phoneticLookup("")должен равнятьсяundefined
Ожидание :Вы не должны изменять returnзаявление
Ожидание :Вы не должны использовать операторы case, switch, илиif
*/

/* function phoneticLookup(val) {
  var lookup = {
    "alpha": "Adams",
    "bravo": "Boston",
    "charlie": "Chicago",
    "delta": "Denver",
    "echo": "Easy",
    "foxtrot": "Frank"
  };

  var result = lookup[val];
  return result;
}

console.log(phoneticLookup("alpha")); 
console.log(phoneticLookup("bravo")); 
console.log(phoneticLookup("charlie")); 
console.log(phoneticLookup("delta")); 
console.log(phoneticLookup("echo")); 
console.log(phoneticLookup("foxtrot")); 
console.log(phoneticLookup(""));

/* --------------------------------- TASK 95 --------------------------------- */

/*  Modify the function checkObj to test if the object passed to the function parameter obj contains the specific property passed to the function parameter checkProp.
If the property passed to checkProp is found on obj, return that property's value. If not, return Not Found.

checkObj({gift: "pony", pet: "kitten", bed: "sleigh"}, "gift") should return the string pony.
Passed:checkObj({gift: "pony", pet: "kitten", bed: "sleigh"}, "pet") should return the string kitten.
Passed:checkObj({gift: "pony", pet: "kitten", bed: "sleigh"}, "house") should return the string Not Found.
Passed:checkObj({city: "Seattle"}, "city") should return the string Seattle.
Passed:checkObj({city: "Seattle"}, "district") should return the string Not Found.
Passed:checkObj({pet: "kitten", bed: "sleigh"}, "gift") should return the string Not Found.
*/

/* function checkObj(obj, checkProp) {
  if (obj.hasOwnProperty(checkProp)) {
    return obj[checkProp];
  } else {
    return "Not Found";
  }
}

// Tests
console.log(checkObj({gift: "pony", pet: "kitten", bed: "sleigh"}, "gift"));     // Output: pony
console.log(checkObj({gift: "pony", pet: "kitten", bed: "sleigh"}, "pet"));      // Output: kitten
console.log(checkObj({gift: "pony", pet: "kitten", bed: "sleigh"}, "house"));    // Output: Not Found
console.log(checkObj({city: "Seattle"}, "city"));                                // Output: Seattle
console.log(checkObj({city: "Seattle"}, "district"));                            // Output: Not Found
console.log(checkObj({pet: "kitten", bed: "sleigh"}, "gift"));  */

/* --------------------------------- TASK 96 --------------------------------- */

/*  */

/*  */

/* --------------------------------- TASK 97 --------------------------------- */

/*  */

/*  */

/* --------------------------------- TASK 98 --------------------------------- */

/*  */

/*  */

/* --------------------------------- TASK 99 --------------------------------- */

/*  */

/*  */

/* --------------------------------- TASK 100 --------------------------------- */

/*  */

/*  */

/* --------------------------------- TASK 101 --------------------------------- */

/*  */

/*  */

/* --------------------------------- TASK 102--------------------------------- */

/*  */

/*  */
