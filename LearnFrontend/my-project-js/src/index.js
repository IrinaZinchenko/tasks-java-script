import './index.scss';

// Пример
const example = document.querySelector(".example");

const input = example.querySelector("#example-input");
const btn = example.querySelector(".example-btn");
const result = example.querySelector('.example-result');

btn.addEventListener("click", () => {
  const text = input.value;

  if (text) {
    const words = text.split(" ");
    const revWords = [];

    for (let word of words) {
      let revWord = "";

      for (let i = word.length - 1; i >= 0; --i) {
        revWord += word[i];
      }

      revWords.push(revWord);
    }

    const revText = revWords.join(" ");

    result.textContent = revText;

    input.value = "";
  }
});

// Задача 12.1
const task1 = document.querySelector('.task-1');
const input1 = task1.querySelector('#input-1');
const button1 = task1.querySelector('.btn-1');
const result1 = task1.querySelector('.result-1');

button1.addEventListener("click", () => {
  const phoneNumber = input1.value;

  const array = phoneNumber.split('');

  let result = `<p>Ваш ввод: ${phoneNumber}</p><p>Ваш телефонный номер в нормализованном виде: Некорректно введен номер. Попробуйте снова</p>`;

  let noSpecialSymbols = array.filter((item) => item !== ' ').filter((item) => item !== '(').filter((item) => item !== ')').filter((item) => item !== '-');

  if (noSpecialSymbols[0] === '+') {
    noSpecialSymbols.shift();
  }

  if (noSpecialSymbols.every((item) => item === '0' || item === '1' || item === '2' || item === '3' || item === '4' || item === '5' || item === '6' || item === '7' || item === '8' || item === '9')) {

    if (noSpecialSymbols.length === 11) {
      if (noSpecialSymbols[0] === '7') {
        noSpecialSymbols.unshift('+');

        result = `<p>Ваш ввод: ${phoneNumber}</p><p>Ваш телефонный номер в нормализованном виде: ${noSpecialSymbols.join('')}</p>`;
      } else if (noSpecialSymbols[0] === '8') {
        noSpecialSymbols.shift();
        noSpecialSymbols.unshift('7');
        noSpecialSymbols.unshift('+');

        result = `<p>Ваш ввод: ${phoneNumber}</p><p>Ваш телефонный номер в нормализованном виде: ${noSpecialSymbols.join('')}</p>`;
      }
    }
  }

  result1.innerHTML = result;

  input1.value = '';
});


// Задача 12.2
const task2 = document.querySelector('.task-2');
const input2 = task2.querySelector('#input-2');
const button2 = task2.querySelector('.btn-2');
const result2 = task2.querySelector('.result-2');

button2.addEventListener("click", () => {
  const string = input2.value;

  let resultArray = [];
  let number = '';
  const arrayOfNumbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

  for (let i = 0; i < string.length; i++) {
    if (arrayOfNumbers.includes(string[i])) {
      number += string[i];
    } else {
      if (number) {
        resultArray.push(number);
        number = '';
      }
    }
  }

  // если последний символ - число
  if (number) {
    resultArray.push(number);
  }

  let result = `<p>Ваш ввод: ${string}</p><p>Числа внутри вашей строки: ${resultArray.join(', ')}</p>`;

  result2.innerHTML = result;

  input2.value = '';
});


// Задача 12.3
const task3 = document.querySelector('.task-3');
const input3 = task3.querySelector('#input-3');
const button3 = task3.querySelector('.btn-3');
const result3 = task3.querySelector('.result-3');

button3.addEventListener("click", () => {
  const str = input3.value;

  let result = '';

  // код
  // Заглавные 65-90б строчные 97-122
  let capitl = 0;
  let lowercase = 0;

  for (let i = 0; i < str.length; i++) {
    if (str.codePointAt(i) >= 65 && str.codePointAt(i) <= 90) {
      ++capitl;
    } else if (str.codePointAt(i) >= 97 && str.codePointAt(i) <= 122) {
      ++lowercase;
    }
  }

  result = `<p>Ваш ввод: ${str}</p><p>Заглавных букв: ${capitl}</p><p>Строчных букв: ${lowercase}</p>`;

  result3.innerHTML = result;

  input3.value = '';
});


// Задача 12.4
const task4 = document.querySelector('.task-4');
const input4 = task4.querySelector('#input-4');
const button4 = task4.querySelector('.btn-4');
const result4 = task4.querySelector('.result-4');

button4.addEventListener("click", () => {
  const str = input4.value;

  let result = '';

  // код
  const array = str.split(' ');

  let longestWord = array[0];
  for (let i = 1; i < array.length; i++) {
    if (array[i].length > longestWord.length) {
      longestWord = array[i];
    }
  }

  result = `<p>Ваш ввод: ${str}</p><p>Самое длинное слово: ${longestWord}</p>`;

  result4.innerHTML = result;

  input4.value = '';
});


// Задача 12.5
const task5 = document.querySelector('.task-5');
const input5 = task5.querySelector('#input-5');
const button5 = task5.querySelector('.btn-5');
const result5 = task5.querySelector('.result-5');

button5.addEventListener("click", () => {
  const str = input5.value;

  let result = '';

  // код
  let reverseWord = '';

  for (let i = (str.length - 1); i >= 0; i--) {
    reverseWord += str[i];
  }

  let isChangeling;
  if (reverseWord === str) {
    isChangeling = true;
  } else {
    isChangeling = false;
  }

  result = `<p>Ваш ввод: ${str}</p><p>Является ли слово перевертышем: ${isChangeling}</p>`;

  result5.innerHTML = result;

  input5.value = '';
});


// Задача 12.6
const task6 = document.querySelector('.task-6');
const input6 = task6.querySelector('#input-6');
const button6 = task6.querySelector('.btn-6');
const result6 = task6.querySelector('.result-6');

button6.addEventListener("click", () => {
  const str = input6.value;

  let result = '';

  // код
  let array = str.split('');

  while (array[0] === ' ') {
    array.shift();
  }

  while (array[array.length - 1] === ' ') {
    array.pop();
  }

  for (let i = 1; i < array.length; i++) {
    if (array[i] === ' ' && array[i + 1] === ' ') {
      array.splice(i, 1);
      i--;
    }
  }

  let resultStr = array.join('');

  result = `<p>Ваш ввод без лишних пробелов: ${resultStr}</p>`;

  result6.innerHTML = result;

  input6.value = '';
});


// Задача 12.7
const task7 = document.querySelector('.task-7');
const input7 = task7.querySelector('#input-7');
const button7 = task7.querySelector('.btn-7');
const result7 = task7.querySelector('.result-7');

button7.addEventListener("click", () => {
  const str = input7.value;

  let result = '';

  // код
  let array = str.split(' ');

  let newArray = [];
  for (let word of array) {
    let newStr = word.slice(0, 1).toUpperCase();
    newStr += word.slice(1);
    newArray.push(newStr);
  }

  let resultStr = newArray.join(' ');

  result = `<p>Ваш ввод: ${str}</p><p>Результат: ${resultStr}</p>`;

  result7.innerHTML = result;

  input7.value = '';
});


// Задача 12.8
const task8 = document.querySelector('.task-8');
const input8 = task8.querySelector('#input-8');
const button8 = task8.querySelector('.btn-8');
const result8 = task8.querySelector('.result-8');

button8.addEventListener("click", () => {
  const str = input8.value;

  let result = '';

  // код
  let equal = str.indexOf("=");
  let plus = str.indexOf("+");
  let minus = str.indexOf("-");
  let multiplication = str.indexOf("*");
  let division = str.indexOf("/");

  let operation = '';
  if (plus !== -1) {
    operation = plus;
  } else if (minus !== -1) {
    operation = minus;
  } else if (multiplication !== -1) {
    operation = multiplication;
  } else {
    operation = division;
  }

  let num1 = parseInt(str.slice(0, operation));
  let num2 = parseInt(str.slice((operation + 1), equal));
  let num3 = parseInt(str.slice(equal + 1));

  let bool = false;

  switch (str[operation]) {
    case '+':
      if (num1 + num2 === num3) {
        bool = true;
      }
      break;

    case '-':
      if (num1 - num2 === num3) {
        bool = true;
      }
      break;

    case '*':
      if (num1 * num2 === num3) {
        bool = true;
      }
      break;

    case '/':
      if (num1 / num2 === num3) {
        bool = true;
      }
      break;
  }

  result = `<p>Ваш ввод: ${str}</p><p>Результат: ${bool}</p>`;

  result8.innerHTML = result;

  input8.value = '';
});