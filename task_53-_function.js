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

/* --------------------------------- TASK 72 --------------------------------- */

/* Добавьте оператор меньше или равно к указанным строкам, чтобы операторы return имели смысл.

Ожидание :testLessOrEqual(0)должен вернуть строкуSmaller Than or Equal to 12
Ожидание :testLessOrEqual(11)должен вернуть строкуSmaller Than or Equal to 12
Ожидание :testLessOrEqual(12)должен вернуть строкуSmaller Than or Equal to 12
Ожидание :testLessOrEqual(23)должен вернуть строкуSmaller Than or Equal to 24
Ожидание :testLessOrEqual(24)должен вернуть строкуSmaller Than or Equal to 24
Ожидание :testLessOrEqual(25)должен вернуть строкуMore Than 24
Ожидание :testLessOrEqual(55)должен вернуть строкуMore Than 24
Ожидание :Вы должны использовать <=оператор как минимум дважды */

/* function testLessOrEqual(val) {
  if (val <= 12) {  
    return "Smaller Than or Equal to 12";
  }

  if (val <= 24) {  
    return "Smaller Than or Equal to 24";
  }

  return "More Than 24";
}

console.log(testLessOrEqual(0));
console.log(testLessOrEqual(11));
console.log(testLessOrEqual(12));
console.log(testLessOrEqual(23));
console.log(testLessOrEqual(24));
console.log(testLessOrEqual(25));
console.log(testLessOrEqual(55)); */

/* --------------------------------- TASK 73 --------------------------------- */

/* Замените два оператора if одним оператором, используя &&оператор, который вернет строку, Yesесли valменьше или равно 50и больше или равно 25.
В противном случае будет возвращена строка No. 

Вы должны использовать &&оператор один раз
Ожидание :У вас должно быть только одно ifзаявление
Ожидание :testLogicalAnd(0)должен вернуть строкуNo
Ожидание :testLogicalAnd(24)должен вернуть строкуNo
Ожидание :testLogicalAnd(25)должен вернуть строкуYes
Ожидание :testLogicalAnd(30)должен вернуть строкуYes
Ожидание :testLogicalAnd(50)должен вернуть строкуYes
Ожидание :testLogicalAnd(51)должен вернуть строкуNo
Ожидание :testLogicalAnd(75)должен вернуть строкуNo
Ожидание :testLogicalAnd(80)должен вернуть строкуNo */

/* function testLogicalAnd(val) {

  if (val >= 25 && val <= 50) {
      return "Yes";
  }

  return "No";
}

console.log(testLogicalAnd(0));
console.log(testLogicalAnd(24));
console.log(testLogicalAnd(25));
console.log(testLogicalAnd(30));
console.log(testLogicalAnd(50));
console.log(testLogicalAnd(51));
console.log(testLogicalAnd(75));
console.log(testLogicalAnd(80));
*/

/* --------------------------------- TASK 74 --------------------------------- */

/* Объедините два ifоператора в один оператор, который возвращает строку, Outsideесли valона не находится между 10и 20включительно.
В противном случае вернуть строку Inside. 

Ожидание :Вы должны использовать ||оператор один раз
Ожидание :У вас должно быть только одно ifзаявление
Ожидание :testLogicalOr(0)должен вернуть строкуOutside
Ожидание :testLogicalOr(9)должен вернуть строкуOutside
Ожидание :testLogicalOr(10)должен вернуть строкуInside
Ожидание :testLogicalOr(15)должен вернуть строкуInside
Ожидание :testLogicalOr(19)должен вернуть строкуInside
Ожидание :testLogicalOr(20)должен вернуть строкуInside
Ожидание :testLogicalOr(21)должен вернуть строкуOutside
Ожидание :testLogicalOr(25)должен вернуть строкуOutside */

/* function testLogicalOr(val) {

  if (val < 10 || val > 20) {
    return "Outside";
  }

  return "Inside";

console.log(testLogicalOr(0));
console.log(testLogicalOr(9));
console.log(testLogicalOr(10));
console.log(testLogicalOr(15));
console.log(testLogicalOr(19));
console.log(testLogicalOr(20));
console.log(testLogicalOr(21));
console.log(testLogicalOr(22));
} */

/* --------------------------------- TASK 75 --------------------------------- */

/* Объедините ifутверждения в одно if/elseутверждение.

Ожидание :У вас должен быть только один ifоператор в редакторе
Ожидание :Вы должны использовать elseзаявление
Ожидание :testElse(4)должен вернуть строку5 or Smaller
Ожидание :testElse(5)должен вернуть строку5 or Smaller
Ожидание :testElse(6)должен вернуть строкуBigger than 5
Ожидание :testElse(10)должен вернуть строкуBigger than 5
Ожидание :Вы не должны изменять код выше или ниже указанных комментариев. */

/* function testElse(val) {
  let result = "";

  if (val > 5) {
    result = "Bigger than 5";
  }
  else {
    result = "5 or Smaller";
  }

  return result;
}

console.log(testElse(4));
console.log(testElse(5));
console.log(testElse(6));
console.log(testElse(10));  */

/* --------------------------------- TASK 76 --------------------------------- */

/* Преобразуйте логику, чтобы использовать else if операторы.

Ожидание :У вас должно быть как минимум два else заявления
Ожидание :У вас должно быть как минимум два if заявления
Ожидание :У вас должны быть закрывающие и открывающие фигурные скобки для каждого if elseблока кода.
Ожидание :testElseIf(0)должен вернуть строкуSmaller than 5
Ожидание :testElseIf(5)должен вернуть строкуBetween 5 and 10
Ожидание :testElseIf(7)должен вернуть строкуBetween 5 and 10
Ожидание :testElseIf(10)должен вернуть строкуBetween 5 and 10
Ожидание :testElseIf(12)должен вернуть строкуGreater than 10 */

/* function testElseIf(val) {
  if (val > 10) {
    return "Greater than 10";
  }

  else if (val < 5) {
    return "Smaller than 5";
  }
  else{
    return "Between 5 and 10";
  }
} 

console.log(testElse(0));
console.log(testElse(5));
console.log(testElse(7));
console.log(testElse(10));
console.log(testElse(12));
*/

/* --------------------------------- TASK 77 --------------------------------- */

/* Измените порядок логики в функции, чтобы она возвращала правильные операторы во всех случаях.

Ожидание :orderMyLogic(4)должен вернуть строкуLess than 5
Ожидание :orderMyLogic(6)должен вернуть строкуLess than 10
Ожидание :orderMyLogic(11)должен вернуть строкуGreater than or equal to 10 */

/* function orderMyLogic(val) {
  if (val < 5) {
    return "Less than 5";
  } else if (val < 10) {
    return "Less than 10";
  } else {
    return "Greater than or equal to 10";
  }
}

console.log(orderMyLogic(4));
console.log(orderMyLogic(6));
console.log(orderMyLogic(11)); */

/* --------------------------------- TASK 78 --------------------------------- */

/* Напишите цепочку операторов if/ else if, чтобы выполнить следующие условия:

num < 5- вернуться Tiny
num < 10- вернуться Small
num < 15- вернуться Medium
num < 20- вернуться Large
num >= 20- вернутьсяHuge

Ожидание :У вас должно быть не менее четырех elseутверждений
Ожидание :У вас должно быть не менее четырех ifутверждений
Ожидание :У вас должно быть хотя бы одно returnзаявление
Ожидание :testSize(0)должен вернуть строкуTiny
Ожидание :testSize(4)должен вернуть строкуTiny
Ожидание :testSize(5)должен вернуть строкуSmall
Ожидание :testSize(8)должен вернуть строкуSmall
Ожидание :testSize(10)должен вернуть строкуMedium
Ожидание :testSize(14)должен вернуть строкуMedium
Ожидание :testSize(15)должен вернуть строкуLarge
Ожидание :testSize(17)должен вернуть строкуLarge
Ожидание :testSize(20)должен вернуть строкуHuge
Ожидание :testSize(25)должен вернуть строкуHuge */

/* function testSize(num) {

if (num < 5) {
  return "Tiny";
}
else if (num < 10) {
return "Small";
}
else if (num < 15) {
return "Medium";
}
else if (num < 20) {
return "Large";
}
else {
return "Huge";
}
}

console.log(testSize(0));
console.log(testSize(4));
console.log(testSize(5));
console.log(testSize(8));
console.log(testSize(10));
console.log(testSize(14));
console.log(testSize(15));
console.log(testSize(17));
console.log(testSize(20));
console.log(testSize(25));
*/

/* --------------------------------- TASK 79 --------------------------------- */

/* Golf Code
In the game of Golf, each hole has a par, meaning, the average number of strokes a golfer is expected to make in order to sink the ball in the hole to complete the play. Depending on how far above or below par your strokes are, there is a different nickname.

Your function will be passed par and strokes arguments. Return the correct string according to this table which lists the strokes in order of priority; top (highest) to bottom (lowest):

Strokes	Return
1	"Hole-in-one!"
<= par - 2	"Eagle"
par - 1	"Birdie"
par	"Par"
par + 1	"Bogey"
par + 2	"Double Bogey"
>= par + 3	"Go Home!"
par and strokes will always be numeric and positive. We have added an array of all the names for your convenience.

golfScore(4, 1) should return the string Hole-in-one!
Passed:golfScore(4, 2) should return the string Eagle
Passed:golfScore(5, 2) should return the string Eagle
Passed:golfScore(4, 3) should return the string Birdie
Failed:golfScore(4, 4) should return the string Par
Passed:golfScore(1, 1) should return the string Hole-in-one!
Failed:golfScore(5, 5) should return the string Par
Failed:golfScore(4, 5) should return the string Bogey
Failed:golfScore(4, 6) should return the string Double Bogey
Failed:golfScore(4, 7) should return the string Go Home!
Failed:golfScore(5, 9) should return the string Go Home! */

/* const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes) {

if (strokes == 1) {
  return names[0];
}
else if (strokes <= par - 2) {
  return names[1];
}
else if (strokes == par - 1) {
  return names[2];
}
else if (strokes == par) {
  return names[3];
}
else if (strokes == par + 1) {
  return names[4];
}
else if (strokes == par + 2) {
  return names[5];
}
else if (strokes >= par + 3) {
  return names[6];
}

}

console.log(golfScore(4, 1));
console.log(golfScore(4, 2));
console.log(golfScore(5, 2));
console.log(golfScore(4, 3));
console.log(golfScore(4, 4));
console.log(golfScore(1, 1));
console.log(golfScore(5, 5));
console.log(golfScore(4, 5));
console.log(golfScore(4, 6));
console.log(golfScore(4, 7));
console.log(golfScore(5, 9)); */

/* --------------------------------- TASK 80 --------------------------------- */

/* Напишите оператор switch, который проверяет valи устанавливает answerследующие условия:
1- alpha
2- beta
3- gamma
4-delta

Ожидание :caseInSwitch(1)должно иметь значение строкиalpha
Ожидание :caseInSwitch(2)должно иметь значение строкиbeta
Ожидание :caseInSwitch(3)должно иметь значение строкиgamma
Ожидание :caseInSwitch(4)должно иметь значение строкиdelta
Ожидание :Вы не должны использовать операторы any ifилиelse
Ожидание :У вас должно быть не менее 3 breakутверждений */

/* function caseInSwitch(val) {
  let answer = "";

switch (val) {
case 1:
return "alpha";
break;
case 2:
return "beta";
break;
case 3:
return "gamma";
break;
case 4:
return "delta";
break;
}

  return answer;
};

console.log(caseInSwitch(1));
console.log(caseInSwitch(2));
console.log(caseInSwitch(3));
console.log(caseInSwitch(4)); */


/* --------------------------------- TASK 81 --------------------------------- */

/* 
Напишите оператор switch для установки answerследующих условий:
a- apple
b- bird
c- cat
default-stuff

switchOfStuff("a")должен вернуть строкуapple
Ожидание :switchOfStuff("b")должен вернуть строкуbird
Ожидание :switchOfStuff("c")должен вернуть строкуcat
Ожидание :switchOfStuff("d")должен вернуть строкуstuff
Ожидание :switchOfStuff(4)должен вернуть строкуstuff
Ожидание :Вы не должны использовать операторы any ifилиelse
Ожидание :Вы должны использовать defaultзаявление
Ожидание :У вас должно быть не менее 3 breakутверждений */

/* function switchOfStuff(val) {
  let answer = "";
  // Only change code below this line
switch (val) {
  case "a":
    answer = "apple";
    break;
  case "b":
    answer = "bird";
    break;
      case "c":
    answer = "cat";
    break;
      default:
    answer = "stuff";
    break;
}


  // Only change code above this line
  return answer;
}

console.log(switchOfStuff("a"));
console.log(switchOfStuff("b"));
console.log(switchOfStuff("c"));
console.log(switchOfStuff("d"));
console.log(switchOfStuff("4")); */

/* --------------------------------- TASK 82 --------------------------------- */

/* Напишите оператор switch для установки answerследующих диапазонов:
1-3- Low
4-6- Mid
7-9-High

Примечание. Вам потребуется caseзаявление для каждого числа в диапазоне.

Ожидание :sequentialSizes(1)должен вернуть строкуLow
Ожидание :sequentialSizes(2)должен вернуть строкуLow
Ожидание :sequentialSizes(3)должен вернуть строкуLow
Ожидание :sequentialSizes(4)должен вернуть строкуMid
Ожидание :sequentialSizes(5)должен вернуть строкуMid
Ожидание :sequentialSizes(6)должен вернуть строкуMid
Ожидание :sequentialSizes(7)должен вернуть строкуHigh
Ожидание :sequentialSizes(8)должен вернуть строкуHigh
Ожидание :sequentialSizes(9)должен вернуть строкуHigh
Ожидание :Вы не должны использовать операторы any ifилиelse
Ожидание :У вас должно быть девять caseутверждений */

/* function sequentialSizes(val) {
  var answer = "";
  // Only change code below this line
  switch (val) {
    case 1:
    case 2:
    case 3:
      return "Low";
      break;
    case 4:
    case 5:
    case 6:
      return "Mid";
      break;
    case 7:
    case 8:
    case 9:
      return "High";
      break;
  }
  // Only change code above this line
  return answer;
}
// Change this value to test
sequentialSizes(1);

console.log(sequentialSizes("1"));
console.log(sequentialSizes("2"));
console.log(sequentialSizes("3"));
console.log(sequentialSizes("4"));
console.log(sequentialSizes("5"));
console.log(sequentialSizes("6"));
console.log(sequentialSizes("7"));
console.log(sequentialSizes("8"));
console.log(sequentialSizes("9")); */

/* --------------------------------- TASK 83 --------------------------------- */

/* Change the chained if/else if statements into a switch statement.

You should not use any else statements anywhere in the editor
Waiting:You should not use any if statements anywhere in the editor
Waiting:You should have at least four break statements
Waiting:chainToSwitch("bob") should return the string Marley
Waiting:chainToSwitch(42) should return the string The Answer
Waiting:chainToSwitch(1) should return the string There is no #1
Waiting:chainToSwitch(99) should return the string Missed me by this much!
Waiting:chainToSwitch(7) should return the string Ate Nine
Waiting:chainToSwitch("John") should return "" (empty string)
Waiting:chainToSwitch(156) should return "" (empty string)*/

/* function chainToSwitch(val) {
  var answer = "";
  // Only change code below this line
  
  switch(val) {
    case "bob":
      answer = "Marley";
      break;
    case 42:
      answer = "The Answer";
      break;
    case 1:
      answer = "There is no #1";
      break;
    case 99:
      answer = "Missed me by this much!";
      break;
    case 7:
      answer = "Ate Nine";
      break;
  }
  // Only change code above this line
  return answer;
}

console.log(chainToSwitch("bob"));
console.log(chainToSwitch(42));
console.log(chainToSwitch(1));
console.log(chainToSwitch(99));
console.log(chainToSwitch(7));
console.log(chainToSwitch("John"));
console.log(chainToSwitch(156)); */ 

/* --------------------------------- TASK 84 --------------------------------- */

/* Исправьте функцию isLess, чтобы удалить if/else операторы.

Ожидание :isLess(10, 15)должен вернутьсяtrue
Ожидание :isLess(15, 10)должен вернутьсяfalse
Ожидание :Вы не должны использовать операторы any ifилиelse */

/* function isLess(a, b) {

return a < b;

}

console.log(isLess(10, 15));
console.log(isLess(15, 10)); */

/* --------------------------------- TASK 85 --------------------------------- */

/* Измените функцию abTestтак, чтобы, если aили bменьше, 0функция немедленно завершалась со значением undefined.

abTest(2, 2)должен вернуть число
Ожидание :abTest(2, 2)должен вернуться8
Ожидание :abTest(-2, 2)должен вернутьсяundefined
Ожидание :abTest(2, -2)должен вернутьсяundefined
Ожидание :abTest(2, 8)должен вернуться18
Ожидание :abTest(3, 3)должен вернуться12
Ожидание :abTest(0, 0)должен вернуться0 */

/* function abTest(a, b) {

if (a < 0 || b < 0) {
  return undefined;
};

  return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}

console.log(abTest(2,2));
console.log(abTest(-2,2));
console.log(abTest(2,-2));
console.log(abTest(2,8));
console.log(abTest(3,3));
console.log(abTest(0,0));  */

/* --------------------------------- TASK 86 --------------------------------- */

/* В игре казино Блэкджек игрок может определить, будет ли у него преимущество в следующей раздаче над казино, отслеживая относительное количество старших и младших карт, оставшихся в колоде. Это называется подсчетом карт.

Наличие большего количества старших карт в колоде благоприятствует игроку. Каждой карте присваивается значение в соответствии с таблицей ниже. Когда счет положительный, игрок должен делать большие ставки. Когда счет равен нулю или отрицательный, игрок должен делать ставку меньше.

Подсчет изменений	Карты
+1	2, 3, 4, 5, 6
0	7, 8, 9
-1	10, 'J', 'Q', 'К', 'А'
Вы напишете функцию подсчета карт. Он получит cardпараметр, который может быть числом или строкой, и увеличит или уменьшит глобальную countпеременную в соответствии со значением карты (см. таблицу). Затем функция вернет строку с текущим счетчиком и строку Bet, если счетчик положительный или Holdнулевой или отрицательный. Текущий счет и решение игрока ( Betили Hold) должны быть разделены одним пробелом.

Пример выходных данных: -3 Hold или5 Bet

Совет
НЕ сбрасывайте countна 0, когда значение равно 7, 8 или 9.
НЕ возвращайте массив.
НЕ включайте кавычки (одинарные или двойные) в вывод.

Ожидание :Ваша функция должна возвращать значение для счетчика и текст ( Betили Hold) с одним пробелом между ними.
Ожидание :Последовательность карт 2, 3, 4, 5, 6 должна возвращать строку5 Bet
Ожидание :Последовательность карт 7, 8, 9 должна возвращать строку0 Hold
Ожидание :Последовательность карт 10, J, Q, K, A должна возвращать строку-5 Hold
Ожидание :Последовательность карт 3, 7, Q, 8, A должна возвращать строку-1 Hold
Ожидание :Cards Sequence 2, J, 9, 2, 7 должны возвращать строку1 Bet
Ожидание :Последовательность карт 2, 2, 10 должна возвращать строку1 Bet
Ожидание :Последовательность карт 3, 2, A, 10, K должна возвращать строку-1 Hold  */

/* let count = 0;

function cc(card) {
  // Only change code below this line

  if (card === 2 || card === 3 || card === 4 || card === 5 || card === 6) {
    count += 1;
  } else if (card === 7 || card === 8 || card === 9) {
    count += 0;
  } else if (card === 10 || card === 'J' || card === 'Q' || card === 'K' || card === 'A') {
    count -= 1;
  }

  return count > 0 ? count + " Bet" : count + " Hold";
  // Only change code above this line
}

console.log(cc(2));   // Вывод: 1 Bet
console.log(cc(3));   // Вывод: 2 Bet
console.log(cc(7));   // Вывод: 2 Bet
console.log(cc('K')); // Вывод: 1 Bet
console.log(cc('A')); // Вывод: 0 Hold */

