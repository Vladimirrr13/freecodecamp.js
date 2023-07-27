"use strict";

/* --------------------------------- TASK 28 --------------------------------- */

/* Используйте обратную косую черту , чтобы присвоить строку переменной myStr, чтобы, если вы выведете ее на консоль, вы увидели:

I am a "double quoted" string inside "double quotes".  */

/* const myStr = "I am a \"double quoted\" string inside \"double quotes\"."; 

console.log(myStr);
*/

/* --------------------------------- TASK 29 --------------------------------- */

/* Измените предоставленную строку на строку с одинарными кавычками в начале и в конце и без escape-символов.

Прямо сейчас <a>тег в строке везде использует двойные кавычки. Вам нужно будет изменить внешние кавычки на одинарные, чтобы вы могли удалить escape-символы.  */

/* const myStr = '<a href="http://www.example.com" target="_blank">Link</a>';

console.log(myStr);
*/

/* --------------------------------- TASK 30 --------------------------------- */

/* Назначьте следующие три строки текста одной переменной, myStrиспользуя escape-последовательности.

Первая линия
    \Вторая линия
Третья 

Вам нужно будет использовать управляющие последовательности, чтобы правильно вставлять специальные символы. Вам также нужно будет соблюдать интервалы, как показано выше, без пробелов между управляющими последовательностями или словами.

Примечание. Отступ для SecondLineдостигается с помощью escape-символа табуляции, а не пробелов.  */

/* const myStr = "FirstLine\n\t\\SecondLine\nThirdLine";

console.log(myStr);
*/

/* --------------------------------- TASK 31 --------------------------------- */

/* Построить myStrиз строк This is the start.и This is the end.с помощью +оператора. Не забудьте включить пробел между двумя строками. */

/* const myStr = "This is the start. " + "This is the end.";

console.log(myStr);
*/

/* --------------------------------- TASK 32 --------------------------------- */

/* Создайте myStrнесколько строк, соединив эти две строки: This is the first sentence.и This is the second sentence.используя +=оператор.
Используйте +=оператор аналогично тому, как он показан в примере, и убедитесь, что между двумя строками есть пробел.
Начните с присвоения первой строки myStr, затем добавьте вторую строку. */

/* let myStr = "This is the first sentence. ";
myStr += "This is the second sentence.";

console.log(myStr);
*/

/* --------------------------------- TASK 33 --------------------------------- */

/* Установите myNameстроку, равную вашему имени, и постройте myStrмежду myNameстроками My name is и and I am well! */

/* const myName = "Vlad";
const myStr = "My name is " + myName + "and I am well!";

console.log(myStr);
*/

/* --------------------------------- TASK 34 --------------------------------- */

/* Установите someAdjectiveстроку из не менее 3 символов и добавьте ее к myStrоператору +=. */

/* const someAdjective = "bmwx";
let myStr = "Learning to code is ";
myStr += someAdjective;

console.log(myStr);
*/

/* --------------------------------- TASK 35 --------------------------------- */

/* Используйте .lengthсвойство, чтобы задать lastNameLengthколичество символов в lastName. */

/* let lastNameLength = 0;
const lastName = "Lovelace";

lastNameLength = lastName.length;

console.log(lastNameLength);
*/

/* --------------------------------- TASK 36 --------------------------------- */

/* Используйте запись в квадратных скобках, чтобы найти первый символ в lastNameпеременной и присвоить его firstLetterOfLastName. */

/* let firstLetterOfLastName = "";
const lastName = "Lovelace";

firstLetterOfLastName = lastName[0];

console.log(firstLetterOfLastName);
*/

/* --------------------------------- TASK 37 --------------------------------- */

/* Исправьте присваивание, myStrчтобы оно содержало строковое значение, Hello Worldиспользуя подход, показанный в приведенном выше примере. */

/* let myStr = "Jello World";

myStr = "Hello World";

console.log(myStr);
*/

/* --------------------------------- TASK 38 --------------------------------- */

/* Попробуем установить thirdLetterOfLastNameравной третью букву переменной lastName, используя запись в скобках. */

/* const lastName = "Lovelace";

const thirdLetterOfLastName = lastName[2];

console.log(thirdLetterOfLastName);
*/

/* --------------------------------- TASK 39 --------------------------------- */

/* Используйте скобки , чтобы найти последний символ в lastNameпеременной. */

/* const lastName = "Lovelace";

const lastLetterOfLastName = lastName[lastName.length-1];

console.log(lastLetterOfLastName);
*/

/* --------------------------------- TASK 40 --------------------------------- */

/* Используйте запись в квадратных скобках , чтобы найти предпоследний символ в lastNameстроке. */

/* const lastName = "Lovelace";

const secondToLastLetterOfLastName = lastName[lastName.length-2];

console.log(secondToLastLetterOfLastName);
*/

/* --------------------------------- TASK 41 --------------------------------- */

/* В этом задании мы предлагаем вам существительное, глагол, прилагательное и наречие. Вам нужно составить полное предложение,
используя слова по вашему выбору вместе со словами, которые мы предоставляем.

Вам нужно будет использовать оператор конкатенации строк +для создания новой строки, используя предоставленные переменные: myNoun, myAdjective, myVerbи myAdverb.
Затем вы присвоите сформированную строку переменной wordBlanks. Вы не должны изменять слова, присвоенные переменным.

Вам также нужно будет учитывать пробелы в вашей строке, чтобы в последнем предложении были пробелы между всеми словами.
В результате должно получиться законченное предложение. */

/* const myNoun = "dog";
const myAdjective = "big";
const myVerb = "ran";
const myAdverb = "quickly";

const wordBlanks = myAdjective + " " + myNoun + " " + myVerb + " " + myAdverb + ".";

console.log(wordBlanks);
*/
