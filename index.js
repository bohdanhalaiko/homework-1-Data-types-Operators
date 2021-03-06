'use strict'
// 1. Write a Javascript program to get the Javascript version with patch number.
console.log('--------------------------\n№1:');

function getJsVersionAndPatch() {
  console.log('Javascript Version: 2.4.2\nJavascript Patch Level: 198')
}
getJsVersionAndPatch()

// 2. Write a Javascript program to display the current date and time.
console.log('--------------------------\n№2:');

function currentDateAndTime() {
  // return [...new Date().toLocaleString()]
  //   .slice(0,-3)
  //   .map(el => el === `.` ? `/` : el === `,` ? `` : el)
  //   .join``;
  return new Date().toLocaleString()
    .slice(0,-3)
    .replace(/\./g, `/`)
    .replace(`,`, ``)
}
console.log(currentDateAndTime());

// 3. Write a Javascript program to create a new string which is n copies of a given string where n is a non-negative integer.
console.log('--------------------------\n№3:');

function numCopiesOfString(str = '', num) {
  return [...Array(num)].map( (_, i) => str.toString().repeat(i+1)).join`\n`
}
console.log(numCopiesOfString('ab',5));

// 4. Write a Javascript program which accepts the radius of a circle from the user and compute the parameter and area.
console.log('--------------------------\n№4:');

function parameterAndArea(circle) {
  return `The perimeter is ${2 * circle * Math.PI}.\nThe area is ${circle **2 * Math.PI}.`
}
console.log(parameterAndArea(5));

// 5. Write a Javascript program to check if a string starts with "if".
console.log('--------------------------\n№5:');

function checkIf(str) {
  return str.slice(0,2) === 'if';
}
console.log(checkIf('if i have'));

// 6. Write a Javascript program which accepts the user's first and last name and print them in reverse order with a space between them. 
console.log('--------------------------\n№6:');

function reverseFirstAandLast(first, last) {
  return `Hello ${last} ${first}`;
}
console.log(reverseFirstAandLast('John', 'Rembo'));

// 7. Write a Javascript program to accept a filename from the user to print the extension of that. (With Regexp) 
console.log('--------------------------\n№7:');

function fileExtension(fileName) {
  return fileName.match(/\.[^\.]+$/g).pop();
}
console.log(fileExtension('te.st.rb'));

// 8. Write a Javascript program to check three numbers and return true if one or more of them are small. A number is called "small" if it is in the range 1..10 inclusive. 
console.log('--------------------------\n№8:');

function checkThreeNumbersAreSmall(num1, num2, num3) {
  return (num1 >= 1 && num1 <= 10) || (num2 >= 1 && num2 <= 10) || (num3 >= 1 && num3 <= 10);
}
console.log(checkThreeNumbersAreSmall(-21, 2, 11));

// 9. Write a Javascript program to check two numbers and return true if one or the other is small, but not both. A number is called "small" if it is in the range 1..10 inclusive.  
console.log('--------------------------\n№9:');

function checkTwoNumbersAreSmall(num1, num2) {
  return !( (num1 >= 1 && num1 <= 10) && (num2 >= 1 && num2 <= 10) ) && 
          ( (num1 >= 1 && num1 <= 10) || (num2 >= 1 && num2 <= 10) ) 
}
console.log(checkTwoNumbersAreSmall(1, 11));


// 10. Write a Javascript program to print the following 'here document'.  
console.log('--------------------------\n№10:');

function printHereDocument() {
  console.log('here document');
}
printHereDocument();

// 11. Write a Javascript program to create a new string where "if" is added to the front of a given string. If the string already begins with "if", return the string unchanged. 
console.log('--------------------------\n№11:');

function addedIfToTheFront(str) {
  return str.slice(0,2) === 'if' ? str : `if ${str}`;
}
console.log(addedIfToTheFront('if i have'));

// 12. Write a Javascript program to create a new string from a given string using the first three characters or whatever is there if the string is less than length 3. Return n copies of the string. 
console.log('--------------------------\n№12:');

function createNewStringUseFirstThreeCharAndRepeatN(str, n) {
  return str.slice(0,3).repeat(n);
}
console.log(createNewStringUseFirstThreeCharAndRepeatN('ab', 3));

// 13. Write a Javascript program which accepts the radius of the sphere as input and compute the volume.
console.log('--------------------------\n№13:');

function volumeSphere(r) {
  return 4 / 3 * Math.PI * r ** 3;
}
console.log(volumeSphere(3));

// 14. Write a Javascript program to create a new string from a given string where the first and last characters have been exchanged. 
console.log('--------------------------\n№14:');

function firstLastCharExchanged(str) {
  return str.slice(-1) + str.slice(1,-1) + str.slice(0,1);
}
console.log(firstLastCharExchanged('Python'));

// 15. Write a Javascript program to check two integers and return true if one of them is 20 otherwise return their sum.  
console.log('--------------------------\n№15:');

function checkTwoIntegers(int1, int2) {
  return int1 === 20 || int2 === 20 || int1 + int2;
}
console.log(checkTwoIntegers(21,30));

// 16. Write a Javascript program to find the greatest of three numbers.  
console.log('--------------------------\n№16:');

function maxThreeNumbers(...arg) {
  return Math.max(...arg);
}
console.log(maxThreeNumbers(1,2,5));

// 17. Write a Javascript program to check if a number is within 10 of 100 or 200. (E.g. 90, 110, 190, 210)
console.log('--------------------------\n№17:');

function checkNumber(num) {
  return (num >= 90 && num <= 110) || (num >= 190 && num <= 210);
}
console.log(checkNumber(220));

// 18. Write a Javascript program to compute the sum of the two integers, if the two values are equal return double their sum otherwise return their sum. 
console.log('--------------------------\n№18:');

function sumTwoTntegers(int1, int2) {
  return (int1 + int2) * (int1 === int2 ? 2 : 1);
}
console.log(sumTwoTntegers(10,10));

// 19. Write a Javascript program to print "Javascript Basic Exercises" 9 times. 
console.log('--------------------------\n№19:');

function printNineTimes(){
  return [...Array(9)].fill("Javascript Basic Exercises").join`\n`;
}
console.log(printNineTimes());

// 20. Write a Javascript program to create a new string from a given string with the last character added at the front and back of the given string. The length of the given string must be 1 or more
console.log('--------------------------\n№20:');

function addLastChar(str) {
  return [...str].pop() + str + str.slice(-1);
}
console.log(addLastChar('abc'));

// 21. Write a Javascript program to print 34 upto 41
console.log('--------------------------\n№21:');

function print34Undo41() {
  for(let i = 34; i < 42; i++) {
    console.log(i);
  }
}
print34Undo41();

// 22.  Write a Javascript program to print even numbers from 1 to 10
console.log('--------------------------\n№22:');

function evenFrom1To10() {
  for(let i = 1; i <= 10; i++) {
    if( i % 2 === 0 ) console.log(i);
  }
}
evenFrom1To10();

// 23. Write a Javascript program to print odd numbers from 10 to 1.
console.log('--------------------------\n№23:');
function oddFrom10To1() {
  for(let i = 10; i >= 1; i--) {
    if( i % 2 ) console.log(i);

  }
}
oddFrom10To1();

// 24.  Write a Javascript program to print the elements of a given array.
console.log('--------------------------\n№24:');

function printElementsArray(arr) {
  arr.forEach( el => console.log(el) );
}
printElementsArray(["Javascript", 2.3, 'Time.now']);

// 25.  Write a Javascript program to check two non-negative integer values and return true if they have the same last digit. 
console.log('--------------------------\n№25:');

function checkTwoIntSameLastDigit(int1, int2) {
  return int1.toString().slice(-1) === int2.toString().slice(-1)
}
console.log(checkTwoIntSameLastDigit(22,32));

// 26. Write a Javascript program to retrieve the total marks where the subject name and marks of a student stored in a hash. 
console.log('--------------------------\n№26:');

function totalMarks(...arg) {
  return arg.reduce( (sum,mark) => sum + mark, 0);
}
console.log(totalMarks(74,89,91));

// 27. Write a Javascript program to print a specified character twenty times. 
console.log('--------------------------\n№27:');

function printCharTwentyTimes(char) {
  return char.repeat(20);
}
console.log(printCharTwentyTimes('@'));

// 28. Write a Javascript program to test whether a year is a leap year or not.
console.log('--------------------------\n№28:');

function testYearLeap(year) {
  if( (year < 1582 && year%4 === 0) || year%400 === 0 || (year%4 === 0 && year%100) ) {
    return `${year} is leap year`;
  } else {
    return `${year} is not leap year`;
  }
}
console.log(testYearLeap(1500));

// 29. Write a Javascript program to check whether a string 'Java' appears at index 1 in a given string, if 'Java' appears to return the string without 'Java' otherwise return the string unchanged
console.log('--------------------------\n№29:');

function stringWithoutJavaIndex1(string) {
  return string.replace(/^Java\s+/g,'');
}
console.log(stringWithoutJavaIndex1('Java Script'));

// 30. Write a Javascript program to create a string using the first two characters (if present) of a given string if the first character is 'p' and the second one is 's' otherwise return a blank string.
console.log('--------------------------\n№30:');

function newStringFirstCharPSecondCharS(string) {
  return /^ps/.test(string) ? 'ps' : '';
}
console.log(newStringFirstCharPSecondCharS('ps Java Script'));

// 31.  Write a Javascript program to check two integers and return whichever value is nearest to the value 10, or return 0 if two integers are equal.  
console.log('--------------------------\n№31:');

function checkTwoIntNearest10(int1, int2) {
  if (int1 === int2) return 0;
  return Math.abs(int2 - 10) < Math.abs(int1 - 10) ? int2 : int1 ;
}
console.log(checkTwoIntNearest10(11,9));

// 32. Write a Javascript program to check two integer values and return true if they are both in the range 10..20 inclusive, or they are both in the range 20..30 inclusive.  
console.log('--------------------------\n№32:');

function checkTwoIntRange10_20Or20_30(int1, int2) {
  return (int1 >= 10 && int2 >= 10 && int1 <= 20 && int2 <= 20) ||
         (int1 >= 20 && int2 >= 20 && int1 <= 30 && int2 <= 30);
}
console.log(checkTwoIntRange10_20Or20_30(9,21));

// 33.  Write a Javascript program to check two positive integer values and return the larger value that is in the range 20..30 inclusive, or return 0 if no number is in that range.
console.log('--------------------------\n№33:');

function largerTwoPosIntRange20_30(int1, int2) {
  const intRange1 = (int1 >= 20 && int1 <= 30 && int1);
  const intRange2 = (int2 >= 20 && int2 <= 30 && int2);
  return Math.max(intRange1, intRange2)
}
console.log(largerTwoPosIntRange20_30(32,21));
console.log(largerTwoPosIntRange20_30(32,31));

// 34. Write a Javascript program to count the number of 5's in a given array.  
console.log('--------------------------\n№34:');

function countNumberOf5(arr) {
  return arr.filter(el => el === 5).length;
}
console.log(countNumberOf5([1,2,3,4,5,6]));

// 35. Write a Javascript program to check two non-negative integer values and return true if they have the same last digit. 
console.log('--------------------------\n№35:');
console.log('see task №25');

// 36. Write a Javascript program to check if the sequence of numbers 10, 20, 30 appears anywhere in a given array of integers. 
console.log('--------------------------\n№36:');

function checkSequenceNumbers10_20_30(arr) {
  return /102030/.test(arr.join``);
}
console.log(checkSequenceNumbers10_20_30([10,20,30,40,50,60]));

// 37. Write a Javascript program to check two given integers and return 11 if either one is 11. Return their sum or difference if sum or difference is 11.
console.log('--------------------------\n№37:');

function checkTwoInt11(int1, int2) {
  if(int1 === 11 || int2 === 11)    return 11;
  if(int1 + int2 === 11)            return Math.abs(int1 - int2);
  if(Math.abs(int1 - int2) === 11)  return int1 + int2;
}
console.log(checkTwoInt11(0,12));

// 38. Write a Javascript program to check three given integers and return true if one of them is 20 or more less than one of the others. 
console.log('--------------------------\n№38:');

function checkThreeGivenIntOneIs20MorelessOthers(...arg) {
  return arg.filter( el => el >= Math.min(...arg) + 20 ).length >= 1;
}
console.log(checkThreeGivenIntOneIs20MorelessOthers(10,20,30));

// 39.  Write a Javascript program to check two given integers and return the larger value. However, if the two values have the same remainder when divided by 5 then return the smaller value and if the two values are the same, return 0
console.log('--------------------------\n№39:');

function checkTwoIntLargerAndSameRemainderSmaller(int1, int2) {
  if(int1 === int2) return 0;
  return (int1 % 5 === int2 % 5) ? Math.min(int1,int2) : Math.max(int1,int2)

}
console.log(checkTwoIntLargerAndSameRemainderSmaller(11,20));

// 40. Write a Javascript program to check two given integers, each in the range 10..99, return true if there is a digit that appears in both numbers.
console.log('--------------------------\n№40:');

function digitAppearsBothNnumbers(x,y) {
  return x.toString().split``.some(el => y.toString().includes(el) );
}
console.log(digitAppearsBothNnumbers(23,30));

// 41. Write a Javascript program to check three given integers x, y, z and return true if one of y or z is close (differing from a by at most 1), while the other is far, differing from both other values by 3 or more. 
console.log('--------------------------\n№41:');

function checkThreeIntDiffering1And3(...arg) {
  arg.sort( (a,b) => a-b);
  return (arg[1] <= arg[0] + 1 && arg[2] >= arg[1] + 3) ||
         (arg[2] <= arg[1] + 1 && arg[1] >= arg[0] + 3);
}
console.log(checkThreeIntDiffering1And3(5,9,9));

// 42. На зустріч один одному відповідно з міста А та міста Б рухається заєць та черепаха. Ввести з клавіатури відстань між містами, швидкість зайця та швидкість черепахи. Обчислити на якій відстані від міста Б вони зустрінуться.
console.log('--------------------------\n№42:');

function distanceFromTheCityTurtle(dist, speedRabbit, speedTurtle){
  return dist * speedTurtle / (speedRabbit + speedTurtle);
}
console.log(distanceFromTheCityTurtle(10,9,3));

// 43. З міста А в місто Б їде велосипедист. З його плеча злітає муха. Вона летить до міста Б, долітає до нього та повертається назад. Знову долітає до велосипедиста, розвертається і летить до міста Б... і так до тих пір, поки велосипедист не доїде до пункту Б. Відомо відстань між містами, швидкість велосипедиста та швидкість мухи. Написати програму, що визначає скільки кілометрів налітає муха.
console.log('--------------------------\n№43:');

function distanceFly(distance, speesBicyclist, speedFly) {
  if(speesBicyclist >= speedFly) return distance * speedFly / speesBicyclist;
  let newDistance = distance * (speedFly - speesBicyclist) / (speedFly + speesBicyclist);
  if (newDistance <= 1e-14) {
    return 0
  } else {
    return distance + newDistance + distanceFly(newDistance, speesBicyclist, speedFly);
  }
}
const start = Date.now();
console.log(distanceFly(100,2.5,10));
console.log(distanceFly(100,10,2.5));
console.log(distanceFly(100,10,10));
console.log(distanceFly(100,0.03,10));
console.log(Date.now());
console.log(start);
console.log(Date.now() - start);

// 44. Написати програму, яка визначає дату наступного дня, на основі сьогоднішньої дати.
console.log('--------------------------\n№44:');

function nextDayDate() {
  const date = new Date;
  date.setDate(date.getDate() + 1);
  return date;
}
console.log(nextDayDate());

// 45. Написати программу, яка задає категорію та стаж працівника, а також ставку відповідно до категорії(1-ша категорія—3000, 2-га – 2000, 3-тя -- 1000). Обчислити заробітну плату, враховуючи надбавку за стаж роботи(до 2 років—0%, від 2 до 5 – 10%, від 5 до 10 – 20%, більше 10—30% ) і зняття податку – 15%.
console.log('--------------------------\n№45:');

function calculateSalary(catecory, experience) {
  const salary = [,3000,2000,1000][catecory] * 0.85;
  if(experience > 10) return salary *1.3;
  if(experience > 5)  return salary *1.2;
  if(experience > 2)  return salary *1.1;
  return salary;
}

console.log(calculateSalary(3, 0));

// 46. Написати програму, яка із введеного користувачем цілого чотирьохзначного числа (наприклад 5141):знаходить суму цифр цього числа (5141 це 5+1+4+1 = 11).перевіряє чи є однакові цифри (двічі зустрічається цифра 1)перевіряє чи сума двох перших цифр чотирьохзначного числа рівна двом наступним (5141 → 5+1 = 6 і 4+1 = 5 → суми першої та другої пар цифр даного числа різні)
console.log('--------------------------\n№46:');

function intFourDigitOtherOperations(num) {
  console.log('сума цифр:', [...num.toString()].reduce( (s,e) => s + +e, 0) );
  console.log('одинакові цифри:', [...new Set(num.toString())].length < 4 );
  const sumFirstSecond = [...num.toString().slice(0,2)].reduce( (s,e) => s + +e, 0);
  const sumThirdFourth = [...num.toString().slice(2,3)].reduce( (s,e) => s + +e, 0);
  console.log('сума двох перших цифр рівна двом наступним:', sumFirstSecond === sumThirdFourth);

}
intFourDigitOtherOperations(5141);

// 47. Написати програму, яка обчислює, скільки повинен заплатити водій за паркування автомобіля на стоянці протягом певного часу. Користувач вводить наступні дані: час заїзду на стоянку (у годинах і хвилинах), час від’їзду, вартість однієї години паркування. Водій платить за кожну повну годину. Також, здійснюється плата за перевищення користування стоянкою більше ніж на 10 хв., наприклад: якщо хтось використав стоянку протягом 2 год. і 15 хв., то повинен заплатити за 3 год. В кінцевому результаті на екран необхідно вивести повідомлення про час заїзду та виїзду авто, ціну за годину паркування і повну вартість.
console.log('--------------------------\n№47:');

class CalkPayDriverParking {
  constructor(timeStart, timeFinish, costHour) {
    this.timeStart = timeStart;
    this.timeFinish = timeFinish;
    this.costHour = costHour;
  }
  result() {
    if(timeToNum(...this.timeStart) >= timeToNum(...this.timeFinish)) {
      // throw new Error('Помилка введення');
      return console.log('Неправильний час виїзду');
    }
    console.log('---------------------');
    console.log('Інформація по оплаті:');
    console.log('час заїзду:', timeToString(...this.timeStart));
    console.log('час виїзду:', timeToString(...this.timeFinish));
    console.log('вартість години:', this.costHour);
    const timeInclud10Min = timeToNum(this.timeFinish[0], this.timeFinish[1] - 10);
    const cost = Math.ceil( timeInclud10Min - timeToNum(...this.timeStart) );
    console.log('до оплати:', (cost || 1) * this.costHour);
    console.log('---------------------');
  }
}
function timeToNum(hours, minutes) {
  return hours + minutes / 60;
}
function timeToString(hours, minutes) {
  return `${hours}:${minutes}`;
}

const parking1 = new CalkPayDriverParking([15,33],[15,34],20);
parking1.result();
const parking2 = new CalkPayDriverParking([15,33],[15,30],20);
parking2.result();
const parking3 = new CalkPayDriverParking([15,33],[15,40],20);
parking3.result();

