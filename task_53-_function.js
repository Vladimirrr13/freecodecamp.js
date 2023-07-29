"use strict";

/* --------------------------------- TASK 53 --------------------------------- */

/* Создайте вызываемую функцию reusableFunction, которая выводит строку Hi Worldна консоль разработчика.
Вызов функции.

Ожидание :reusableFunctionдолжна быть функция.
Ожидание :Если reusableFunctionвызывается, он должен вывести строку Hi Worldна консоль.
Ожидание :Вы должны позвонить, reusableFunctionкак только он будет определен. */

/* function reusableFunction() {
  console.log("Hi World")
};

reusableFunction();
*/

/* --------------------------------- TASK 54 --------------------------------- */

/* Создайте вызываемую функцию functionWithArgs, которая принимает два аргумента и выводит их сумму в консоль разработчика.
Вызовите функцию с двумя числами в качестве аргументов.

Ожидание :functionWithArgsдолжна быть функция.
Ожидание :functionWithArgs(1,2)должен выводить 3.
Ожидание :functionWithArgs(7,9)должен выводить 16.
Ожидание :Вы должны звонить functionWithArgsс двумя номерами после того, как вы его определите.
*/

/* function functionWithArgs(a, b) {
  sum = a + b;
  console.log(sum);
}

console.log(functionWithArgs(1, 2));
console.log(functionWithArgs(1, 2)); */

/* function functionWithArgs(a, b) {
    return a + b;
  }
  
  console.log(functionWithArgs(1, 2));
  console.log(functionWithArgs(9, 7)); */

/*   function functionWithArgs(a, b) {
    console.log(a + b);
  }
  
  console.log(functionWithArgs(1, 2));
  console.log(functionWithArgs(7, 9)); */

/* --------------------------------- TASK 55 --------------------------------- */

/* Создайте функцию timesFive, которая принимает один аргумент, умножает его на 5и возвращает новое значение.

Ожидание :timesFiveдолжна быть функция
Ожидание :timesFive(5)должен вернуться25
Ожидание :timesFive(2)должен вернуться10
Ожидание :timesFive(0)должен вернуться0  */

/* function timesFive (nam) {
  return nam * 5;
}

console.log(timesFive(5));
console.log(timesFive(2));
console.log(timesFive(0));
*/

/* --------------------------------- TASK 56 --------------------------------- */

/* С помощью letили constобъявите глобальную переменную с именем myGlobalвне какой-либо функции. Инициализируйте его со значением 10.

Внутри функции fun1назначьте 5без oopsGlobal использования ключевых слов varили .letconst 

Ожидание :myGlobalдолжны быть определены
Ожидание :myGlobalдолжно иметь значение10
Ожидание :myGlobalдолжны быть объявлены с использованием ключевых слов let или const
Ожидание :oopsGlobalдолжна быть глобальной переменной и иметь значение 5
*/

/* 
let myGlobal = 10;

function fun1() {
oopsGlobal = 5;
}

function fun2() {
  let output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}
*/

/* --------------------------------- TASK 57 --------------------------------- */

/* В редакторе есть два console.log, чтобы помочь вам увидеть, что происходит. Проверяйте консоль во время написания кода, чтобы увидеть, как она меняется.
myVarОбъявите внутри локальную переменную myLocalScopeи запустите тесты.

Ожидание :Код не должен содержать глобальную myVarпеременную.
Ожидание :Вы должны добавить локальную myVarпеременную. */

/* function myLocalScope() {

const myVar = "foo";
  console.log('inside myLocalScope', myVar);
}

myLocalScope();
console.log('outside myLocalScope', myVar);
*/

/* --------------------------------- TASK 58 --------------------------------- */

/* Добавьте локальную переменную в myOutfitфункцию, чтобы переопределить значение outerWearстрокой sweater.

Вы не должны изменять значение глобального outerWear.
Ожидание :myOutfitдолжен вернуть строку sweater.
Ожидание :Вы не должны изменять оператор возврата. */

/* const outerWear = "T-Shirt";

function myOutfit() {
const outerWear = "sweater";


  return outerWear;
}

myOutfit();
*/

/* --------------------------------- TASK 59 --------------------------------- */

/* Создайте функцию addFiveбез каких-либо аргументов. Эта функция добавляет 5 к sumпеременной, но возвращает значение undefined.

Ожидание :addFiveдолжна быть функция.
Ожидание :После запуска обеих функций значение sumдолжно быть равно 8.
Ожидание :Возвращаемое значение addFiveдолжно быть undefined.
Ожидание :Внутри addFiveфункции вы должны добавить 5к sumпеременной. */

/* let sum = 0;

function addThree() {
  sum = sum + 3;
}

function addFive () {
  sum += 5;
};

addThree();
addFive();
*/

/* --------------------------------- TASK 60 --------------------------------- */

/* Вызовите processArgфункцию с аргументом 7и присвойте возвращаемое значение переменной processed.

Ожидание :processedдолжно иметь значение2
Ожидание :Вы должны processArgназначитьprocessed */

/* // Setup
let processed = 0;

function processArg(num) {
  return (num + 3) / 5;
}

// Only change code below this line

processed = processArg(7);
console.log(processed);
*/

/* --------------------------------- TASK 61 --------------------------------- */

/* Напишите функцию nextInLine, которая принимает массив ( arr) и число ( item) в качестве аргументов.

Добавьте число в конец массива, затем удалите первый элемент массива.

Затем функция nextInLineдолжна вернуть элемент, который был удален.

Ожидание :nextInLine([], 5)должен вернуть число.
Ожидание :nextInLine([], 1)должен вернуться1
Ожидание :nextInLine([2], 1)должен вернуться2
Ожидание :nextInLine([5,6,7,8,9], 1)должен вернуться5
Ожидание :После nextInLine(testArr, 10)должно testArr[4]быть10 */

/* function nextInLine(arr, item) {

  arr.push(item);
  return arr.shift();

}

let testArr = [1, 2, 3, 4, 5];

console.log(nextInLine([], 5));
console.log(nextInLine([], 1));
console.log(nextInLine([2], 1));
console.log(nextInLine([5,6,7,8,9], 1));
*/

/* --------------------------------- TASK 62 --------------------------------- */

/* Измените welcomeToBooleansфункцию, чтобы она возвращала trueвместо false.

Ожидание :Функция welcomeToBooleans()должна возвращать логическое значение ( trueили false).
Ожидание :welcomeToBooleans()должен вернуться true.  */

/* function welcomeToBooleans() {

  return !false; 

  console.log(welcomeToBooleans());
} */

/* --------------------------------- TASK 63 --------------------------------- */

/* Создайте if оператор внутри функции для возврата, Yes, that was trueесли параметр wasThatTrueесть true, и возврата No, that was falseв противном случае. 

Ожидание :trueOrFalseдолжна быть функция
Ожидание :trueOrFalse(true)должен вернуть строку
Ожидание :trueOrFalse(false)должен вернуть строку
Ожидание :trueOrFalse(true)должен вернуть строкуYes, that was true
Ожидание :trueOrFalse(false)должен вернуть строкуNo, that was false  */

/* function trueOrFalse(wasThatTrue) {

if (wasThatTrue === true) {
  return "Yes, that was true"; 
};
return "No, that was false";
}

console.log(trueOrFalse(true));
console.log(trueOrFalse(0)); */

/* --------------------------------- TASK 64 --------------------------------- */

/* Добавьте в указанную строку оператор равенства, чтобы функция возвращала строку, Equalкогда valона эквивалентна 12.

Ожидание :testEqual(10)должен вернуть строку Not Equal
Ожидание :testEqual(12)должен вернуть строку Equal
Ожидание :testEqual("12")должен вернуть строку Equal
Ожидание :Вы должны использовать == оператор  */

/* function testEqual(val) {
  if (val == 12) { 
    return "Equal";
  }
  return "Not Equal";
}

console.log(testEqual(10));
console.log(testEqual(12));
console.log(testEqual("12")); */

/* --------------------------------- TASK 65 --------------------------------- */

/* Используйте оператор строгого равенства в ifоператоре, чтобы функция возвращала строку Equal, когда valона строго равна 7.

Ожидание :testStrict(10)должен вернуть строкуNot Equal
Ожидание :testStrict(7)должен вернуть строку Equal
Ожидание :testStrict("7")должен вернуть строкуNot Equal
Ожидание :Вы должны использовать === оператор */

/* function testStrict(val) {
  if (val===7) { 
    return "Equal";
  }
  return "Not Equal";
}

console.log(testEqual(10));
console.log(testEqual(7));
console.log(testEqual("7")); */

/* --------------------------------- TASK 66 --------------------------------- */

/* Функция compareEqualityв редакторе сравнивает два значения с помощью оператора равенства.
Измените функцию, чтобы она возвращала строку Equalтолько тогда, когда значения строго равны.

Ожидание :compareEquality(10, "10")должен вернуть строкуNot Equal
Ожидание :compareEquality("20", 20)должен вернуть строкуNot Equal
Ожидание :Вы должны использовать === оператор  */

/* function compareEquality(a, b) {
  if (a === b) { 
    return "Equal";
  }
  return "Not Equal";
}

console.log(compareEquality(10, "10"));
console.log(compareEquality(10, 10)); */

/* --------------------------------- TASK 67 --------------------------------- */

/* Добавьте оператор неравенства !=в ifоператор, чтобы функция возвращала строку Not Equal, когда valона не эквивалентна 99.

Ожидание :testNotEqual(99)должен вернуть строкуEqual
Ожидание :testNotEqual("99")должен вернуть строкуEqual
Ожидание :testNotEqual(12)должен вернуть строкуNot Equal
Ожидание :testNotEqual("12")должен вернуть строкуNot Equal
Ожидание :testNotEqual("bob")должен вернуть строкуNot Equal
Ожидание :Вы должны использовать !=оператор */

/* // Setup
function testNotEqual(val) {
  if (val != 99) { 
    return "Not Equal";
  }
  return "Equal";
}

console.log(testNotEqual(99));
console.log(testNotEqual(10)); */

/* --------------------------------- TASK 68 --------------------------------- */

/* Добавьте в выражение оператор строгого неравенства if, чтобы функция возвращала строку, Not Equalесли valона не строго равна 17

Ожидание :testStrictNotEqual(17)должен вернуть строкуEqual
Ожидание :testStrictNotEqual("17")должен вернуть строкуNot Equal
Ожидание :testStrictNotEqual(12)должен вернуть строкуNot Equal
Ожидание :testStrictNotEqual("bob")должен вернуть строкуNot Equal
Ожидание :Вы должны использовать !==оператор  */

/* function testStrictNotEqual(val) {
  if (val !== 17) { 
    return "Not Equal";
  }
  return "Equal";
}

console.log(testStrictNotEqual(17));
console.log(testStrictNotEqual(10));
*/

/* --------------------------------- TASK 69 --------------------------------- */

/* Добавьте оператор «больше чем» к указанным строкам, чтобы операторы return имели смысл.

Ожидание :testGreaterThan(0)должен вернуть строку10 or Under
Ожидание :testGreaterThan(10)должен вернуть строку10 or Under
Ожидание :testGreaterThan(11)должен вернуть строкуOver 10
Ожидание :testGreaterThan(99)должен вернуть строкуOver 10
Ожидание :testGreaterThan(100)должен вернуть строкуOver 10
Ожидание :testGreaterThan(101)должен вернуть строкуOver 100
Ожидание :testGreaterThan(150)должен вернуть строкуOver 100
Ожидание :Вы должны использовать >оператор как минимум дважды  */

/* function testGreaterThan(val) {
  if (val > 100) {  
    return "Over 100";
  }

  if (val > 10) {  
    return "Over 10";
  }

  return "10 or Under";
}

console.log(testGreaterThan(0));
console.log(testGreaterThan(10));
console.log(testGreaterThan(11));
console.log(testGreaterThan(99));
console.log(testGreaterThan(101));
console.log(testGreaterThan(150)); */

/* --------------------------------- TASK 70 --------------------------------- */

/* Добавьте оператор больше или равно к указанным строкам, чтобы операторы return имели смысл.

testGreaterOrEqual(0)должен вернуть строкуLess than 10
Ожидание :testGreaterOrEqual(9)должен вернуть строкуLess than 10
Ожидание :testGreaterOrEqual(10)должен вернуть строку10 or Over
Ожидание :testGreaterOrEqual(11)должен вернуть строку10 or Over
Ожидание :testGreaterOrEqual(19)должен вернуть строку10 or Over
Ожидание :testGreaterOrEqual(100)должен вернуть строку20 or Over
Ожидание :testGreaterOrEqual(21)должен вернуть строку20 or Over
Ожидание :Вы должны использовать >=оператор как минимум дважды */

/* function testGreaterOrEqual(val) {
  if (val >= 20) {  
    return "20 or Over";
  }

  if (val >= 10) {  
    return "10 or Over";
  }

  return "Less than 10";
}

console.log(testGreaterOrEqual(0));
console.log(testGreaterOrEqual(9));
console.log(testGreaterOrEqual(10));
console.log(testGreaterOrEqual(11));
console.log(testGreaterOrEqual(19));
console.log(testGreaterOrEqual(100));
console.log(testGreaterOrEqual(21));
*/

/* --------------------------------- TASK 71 --------------------------------- */

/* Добавьте оператор «меньше чем» к указанным строкам, чтобы операторы return имели смысл.

Ожидание :testLessThan(0)должен вернуть строкуUnder 25
Ожидание :testLessThan(24)должен вернуть строкуUnder 25
Ожидание :testLessThan(25)должен вернуть строкуUnder 55
Ожидание :testLessThan(54)должен вернуть строкуUnder 55
Ожидание :testLessThan(55)должен вернуть строку55 or Over
Ожидание :testLessThan(99)должен вернуть строку55 or Over
Ожидание :Вы должны использовать <оператор как минимум дважды  */

/* function testLessThan(val) {
  if (val < 25) {  
    return "Under 25";
  }

  if (val < 55) {  
    return "Under 55";
  }

  return "55 or Over";
}

console.log(testLessThan(0));
console.log(testLessThan(24));
console.log(testLessThan(25));
console.log(testLessThan(54));
console.log(testLessThan(55));
console.log(testLessThan(99));
*/
