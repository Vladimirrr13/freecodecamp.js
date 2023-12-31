"use strict";

/* --------------------------------- TASK 42 --------------------------------- */

/* Измените новый массив myArrayтак, чтобы он содержал как строку, так и число (в указанном порядке).

myArrayдолжен быть массив.
Ожидание :Первым элементом myArrayдолжна быть строка.
Ожидание :Второй элемент myArrayдолжен быть числом. */

/* const myArray = ["peanut butter", 3];

console.log(myArray);
*/

/* --------------------------------- TASK 43 --------------------------------- */

/* Создайте вложенный массив с именем myArray.

Ожидание :myArrayдолжен иметь хотя бы один массив, вложенный в другой массив. */

/* const myArray = [[1, 2, 3, "stringOne"], false, [4, 5, 6, "stringSecond"]];

console.log(myArray);
*/

/* --------------------------------- TASK 44 --------------------------------- */

/* Создайте переменную с именем myDataи установите ее равной первому значению myArrayиспользования скобочной записи.

Переменная myDataдолжна равняться первому значению myArray.
Ожидание :Доступ к данным в переменной myArrayдолжен осуществляться с использованием записи в квадратных скобках. */

/* const myArray = [50, 60, 70];
const myData = myArray[0];

console.log(myData);
*/

/* --------------------------------- TASK 45 --------------------------------- */

/* Измените данные, хранящиеся в индексе 0, myArrayна значение 45.

myArrayтеперь должно быть [45, 64, 99].
Ожидание :Вы должны использовать правильный индекс для изменения значения в myArray. */

/* const myArray = [18, 64, 99];
myArray[0] = 45;

console.log(myArray);
*/

/* --------------------------------- TASK 46 --------------------------------- */

/* Используя обозначение в скобках, выберите элемент из myArrayтаких, который myDataравен 8.

Ожидание :myDataдолжно быть равно 8.
Ожидание :Вы должны использовать запись в квадратных скобках, чтобы прочитать правильное значение из myArray. */

/* const myArray = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [[10, 11, 12], 13, 14],
];

const myData = myArray[2][1];

console.log(myData);
*/

/* --------------------------------- TASK 47 --------------------------------- */

/* Добавьте ["dog", 3] на конец переменной myArray.

myArrayтеперь должно равняться [["John", 23], ["cat", 2], ["dog", 3]]. */

/* const myArray = [["John", 23], ["cat", 2]];

myArray.push(["dog", 3])

console.log(myArray);
*/

/* --------------------------------- TASK 48 --------------------------------- */

/* Используйте .pop()функцию, чтобы удалить последний элемент myArrayи присвоить выскочившее значение новой переменной, removedFromMyArray.

Ожидание :myArrayдолжен содержать только [["John", 23]].
Ожидание :Вы должны использовать pop()на myArray.
Ожидание :removedFromMyArrayдолжен содержать только ["cat", 2]. */

/* const myArray = [["John", 23], ["cat", 2]];

const removedFromMyArray = myArray.pop();

console.log(removedFromMyArray);;
*/

/* --------------------------------- TASK 49 --------------------------------- */

/* Используйте .shift()функцию, чтобы удалить первый элемент из myArrayи присвоить «сдвинутое значение» новой переменной, removedFromMyArray.
Ожидание :myArrayтеперь должно равняться [["dog", 3]].
Ожидание :removedFromMyArrayдолжен содержать ["John", 23]. */

/* const myArray = [["John", 23], ["dog", 3]];
const removedFromMyArray = myArray.shift();

console.log(removedFromMyArray); */

/* --------------------------------- TASK 50 --------------------------------- */

/* Добавьте ["Paul", 35]в начало переменной, myArrayиспользуя unshift().

Ожидание :myArrayтеперь должен был [["Paul", 35], ["dog", 3]]. */

/* const myArray = [["John", 23], ["dog", 3]];
myArray.shift();
myArray.unshift(["Paul", 35]);

console.log(myArray); */

/* --------------------------------- TASK 51 --------------------------------- */

/* В списке должно быть не менее 5 подмассивов.
Ожидание :myListдолжен быть массив.
Ожидание :Все первые элементы в каждом из ваших подмассивов должны быть строками.
Ожидание :Все вторые элементы в каждом из ваших подмассивов должны быть числами.
Ожидание :В вашем списке должно быть не менее 5 пунктов.
*/

/* const myList = [["1", 2], ["3", 4], ["5", 6], ["7", 8], ["9", 10]];

console.log(myList); */

/* --------------------------------- TASK 52 --------------------------------- */

/* Создайте вызываемую функцию reusableFunction, которая выводит строку Hi Worldна консоль разработчика.
Вызов функции.
Ожидание :reusableFunctionдолжна быть функция.
Ожидание :Если reusableFunctionвызывается, он должен вывести строку Hi Worldна консоль.
Ожидание :Вы должны позвонить, reusableFunctionкак только он будет определен.
*/

/* const myList = [["1", 2], ["3", 4], ["5", 6], ["7", 8], ["9", 10]];

console.log(myList); */

