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

/* Добавьте новый альбом в myMusicмассив. Добавьте artistи titleстроки, release_yearчисло и formatsмассив строк.

Ожидание :myMusicдолжен быть массив
Ожидание :myMusicдолжно быть не менее двух элементов
Ожидание :Элементы массива myMusicдолжны быть объектами
Ожидание :Ваш объект myMusicдолжен иметь как минимум 4 свойства.
Ожидание :Ваш объект myMusicдолжен содержать свойство artist, которое является строкой
Ожидание :Ваш объект myMusicдолжен содержать свойство title, которое является строкой
Ожидание :Ваш объект myMusicдолжен содержать свойство release_year, которое является числом
Ожидание :Ваш объект myMusicдолжен содержать formatsсвойство, которое является массивом
Ожидание :formatsдолжен быть массивом строк, состоящим как минимум из двух элементов
*/

/* const myMusic = [
  {
    artist: "Billy Joel",
    title: "Piano Man",
    release_year: 1973,
    formats: ["CD", "8T", "LP"],
    gold: true
  },
  // Add record here
  {
    artist: "Deep Purple",
    title: "Smoke on the water",
    release_year: 1976,
    formats: ["CD", "8T", "LP"]
  }
];

console.log(myMusic); */

/* --------------------------------- TASK 97 --------------------------------- */

/* Получите доступ к myStorageобъекту и присвойте содержимое свойства glove boxпеременной gloveBoxContents.
По возможности используйте точечную запись для всех свойств, в противном случае используйте запись в скобках. 

gloveBoxContentsдолжно быть равно строке maps.
Ожидание :Для доступа к файлам в вашем коде должны использоваться точки и скобки myStorage.
Ожидание :gloveBoxContentsвсе равно должен быть объявлен с помощью const.
*/

/* const myStorage = {
  "car": {
    "inside": {
      "glove box": "maps",
      "passenger seat": "crumbs"
     },
    "outside": {
      "trunk": "jack"
    }
  }
};

const gloveBoxContents = myStorage.car.inside['glove box'];

console.log(myStorage);
console.log(gloveBoxContents); */

/* --------------------------------- TASK 98 --------------------------------- */

/* Используя точку и скобки, задайте для переменной secondTreeвторой элемент в treesсписке от myPlantsобъекта.

Ожидание :secondTreeдолжно быть равно строке pine.
Ожидание :Для доступа к файлам в вашем коде должны использоваться точки и скобки myPlants.

*/

/* const myPlants = [
  {
    type: "flowers",
    list: ["rose", "tulip", "dandelion"],
  },
  {
    type: "trees",
    list: ["fir", "pine", "birch"],
  },
];

const secondTree = myPlants[1].list[1];

console.log(secondTree);
console.log(myPlants); */

/* --------------------------------- TASK 99 --------------------------------- */

/* я помогает поддерживать коллекцию музыкальных альбомов. Коллекция организована как объект, содержащий несколько альбомов, которые также являются объектами. Каждый альбом представлен в коллекции с уникальным idименем свойства. Внутри каждого объекта альбома существуют различные свойства, описывающие информацию об альбоме. Не во всех альбомах есть полная информация.

Функция updateRecordsпринимает 4 аргумента, представленных следующими параметрами функции:

records- объект, содержащий несколько отдельных альбомов
id- число, обозначающее конкретный альбом в recordsобъекте
prop— строка, представляющая имя свойства альбома, которое необходимо обновить.
value— строка, содержащая информацию, используемую для обновления свойства альбома.
Завершите функцию, используя приведенные ниже правила, чтобы изменить объект, переданный в функцию.

Ваша функция всегда должна возвращать весь recordsобъект.
Если valueэто пустая строка, удалите данное propсвойство из альбома.
Если propэто не так tracksи valueне является пустой строкой, присвойте valueэтому альбому prop.
Если propэто tracksи valueне пустая строка, вам необходимо обновить массив альбома tracks. Во-первых, если у альбома нет tracksсвойства, присвойте ему пустой массив. Затем добавьте valueпоследний элемент в массив альбома tracks.
Примечание.recordCollection Для тестов используется копия объекта . Не следует напрямую изменять recordCollectionобъект.

Тесты
Ожидание :После updateRecords(recordCollection, 5439, "artist", "ABBA")должна artistбыть строкаABBA
Ожидание :После updateRecords(recordCollection, 5439, "tracks", "Take a Chance on Me"), tracksстрока должна быть Take a Chance on Meпоследним и единственным элементом.
Ожидание :После updateRecords(recordCollection, 2548, "artist", "")не artistследует устанавливать
Ожидание :После updateRecords(recordCollection, 1245, "tracks", "Addicted to Love"), tracksстрока должна быть Addicted to Loveпоследним элементом.
Ожидание :После updateRecords(recordCollection, 2468, "tracks", "Free"), в качестве первого элемента tracksдолжна быть строка .1999
Ожидание :После updateRecords(recordCollection, 2548, "tracks", "")не tracksследует устанавливать
Ожидание :После updateRecords(recordCollection, 1245, "albumTitle", "Riptide")должна albumTitleбыть строкаRiptide

*/

/* // Setup
const recordCollection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};

function updateRecords(records, id, prop, value) {
  if (value === "") {
    // Если value пустая строка, удалите данное свойство prop из альбома
    delete records[id][prop];
  } else if (prop !== "tracks") {
    // Если prop не "tracks" и value не пустая строка, присвойте value этому альбому prop
    records[id][prop] = value;
  } else {
    // Если prop равен "tracks" и value не пустая строка
    if (!records[id].hasOwnProperty("tracks")) {
      // Если у альбома нет свойства "tracks", присвойте ему пустой массив
      records[id]["tracks"] = [];
    }
    // Добавьте value в конец массива альбома tracks
    records[id]["tracks"].push(value);
  }

  return records;
}

// Примеры тестов:

const recordCollectionCopy = { ...recordCollection }; // Создаем копию объекта для тестов

console.log(updateRecords(recordCollectionCopy, 5439, "artist", "ABBA"));
console.log(updateRecords(recordCollectionCopy, 5439, "tracks", "Take a Chance on Me"));
console.log(updateRecords(recordCollectionCopy, 2548, "artist", ""));
console.log(updateRecords(recordCollectionCopy, 1245, "tracks", "Addicted to Love"));
console.log(updateRecords(recordCollectionCopy, 2468, "tracks", "Free"));
console.log(updateRecords(recordCollectionCopy, 2548, "tracks", ""));
console.log(updateRecords(recordCollectionCopy, 1245, "albumTitle", "Riptide"));
 */

/* --------------------------------- TASK 100 --------------------------------- */

/* Завершите функцию, используя приведенные ниже правила, чтобы изменить объект, переданный в функцию.

Ваша функция всегда должна возвращать весь recordsобъект.
Если valueэто пустая строка, удалите данное propсвойство из альбома.
Если propэто не так tracksи valueне является пустой строкой, присвойте valueэтому альбому prop.
Если propэто tracksи valueне пустая строка, вам необходимо обновить массив альбома tracks. Во-первых, если у альбома нет tracksсвойства, присвойте ему пустой массив. Затем добавьте valueпоследний элемент в массив альбома tracks.
Примечание.recordCollection Для тестов используется копия объекта . Не следует напрямую изменять recordCollectionобъект.

После updateRecords(recordCollection, 5439, "artist", "ABBA")должна artistбыть строкаABBA
Ожидание :После updateRecords(recordCollection, 5439, "tracks", "Take a Chance on Me"), tracksстрока должна быть Take a Chance on Meпоследним и единственным элементом.
Ожидание :После updateRecords(recordCollection, 2548, "artist", "")не artistследует устанавливать
Ожидание :После updateRecords(recordCollection, 1245, "tracks", "Addicted to Love"), tracksстрока должна быть Addicted to Loveпоследним элементом.
Ожидание :После updateRecords(recordCollection, 2468, "tracks", "Free"), в качестве первого элемента tracksдолжна быть строка .1999
Ожидание :После updateRecords(recordCollection, 2548, "tracks", "")не tracksследует устанавливать
Ожидание :После updateRecords(recordCollection, 1245, "albumTitle", "Riptide")должна albumTitleбыть строкаRiptide */

/* // Setup
const recordCollection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};

function updateRecords(records, id, prop, value) {
  if (value === "") {
    // Если value пустая строка, удалите данное свойство prop из альбома
    delete records[id][prop];
  } else if (prop !== "tracks") {
    // Если prop не "tracks" и value не пустая строка, присвойте value этому альбому prop
    records[id][prop] = value;
  } else {
    // Если prop равен "tracks" и value не пустая строка
    if (!records[id].hasOwnProperty("tracks")) {
      // Если у альбома нет свойства "tracks", присвойте ему пустой массив
      records[id]["tracks"] = [];
    }
    // Добавьте value в конец массива альбома tracks
    records[id]["tracks"].push(value);
  }

  return records;
}

// Примеры тестов:

const recordCollectionCopy = { ...recordCollection }; // Создаем копию объекта для тестов

console.log(updateRecords(recordCollectionCopy, 5439, "artist", "ABBA"));
console.log(updateRecords(recordCollectionCopy, 5439, "tracks", "Take a Chance on Me"));
console.log(updateRecords(recordCollectionCopy, 2548, "artist", ""));
console.log(updateRecords(recordCollectionCopy, 1245, "tracks", "Addicted to Love"));
console.log(updateRecords(recordCollectionCopy, 2468, "tracks", "Free"));
console.log(updateRecords(recordCollectionCopy, 2548, "tracks", ""));
console.log(updateRecords(recordCollectionCopy, 1245, "albumTitle", "Riptide"));
 */

