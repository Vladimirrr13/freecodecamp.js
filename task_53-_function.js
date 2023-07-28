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

const myOutfit = "sweater";
return outerWear;
}

myOutfit();
*/
