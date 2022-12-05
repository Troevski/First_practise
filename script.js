
// const a = prompt('Один из пофвопф ?',''),
//     b = prompt('Один asdasdasd ?',''),
//     c = prompt('Один asdasdasd ?',''),
//     d = prompt('Один asdasdasd ?','');

//     personalMovieDB.movies[a] = b;
//     personalMovieDB.movies[c] = d;
//     console.log(personalMovieDB);

// if (10>20){
//     console.log('huj!')
// } else if (10<20){
//     console.log('pizda')
// } else {
//     console.log('posheldomoj!')
// }
// const num = 50;
// switch(num){
//     case 49:
//         console.log('не верно');
//         break;
//     case 111:
//         console.log('не верно');
//         break;
//     case 214:
//         console.log('не верно');
//         break;
//     default:
//         console.log('не в этот раз');
//         break;
// }
// Мы хотим чтобы у нас было две колы и 4 гамбургера , или 3 нагетсов и 1 фрыток?
// const hamburger =4;
// const fries = 1;
// const cola =2;
// const nuggets = 3;
// if (cola===2 && hamburger===4 || nuggets===3 && fries ){
//     console.log('мы сыты!')
// } else {
//     console.log('домой!')
// }
// console.log((hamburger===4 && nuggets===6|| cola===2  && fries ));
// console.log(1 && 5) ; - 1 и 5 - true , выводится то , на чём последнем остановился отсчёт (так как оба тру)
// console.log(null && 5) ; - выводится нулл ( так как он всегда false , а это значит , что сразу же запнулся оператор)
// console.log(1 && 0) ; - выводится 0 , так как false , 0 - всегда фолс
// console.log(0 && 'asfawafssfa') ; - выводится 0 , так как false , 0 - всегда фолс

// let reportAnna, reportArtem , reportGleb = "done";
// console.log(reportAnna ||reportArtem || reportGleb );

 
// for (let i=0 ; i<3 ; i++){
//     console.log(i);
//         for (let j=0 ; j<3 ; j++){
//             console.log(j);
//         }
// }
// 0 0 1 2 1 0 1 2 2 0 1 2


// **
// ****
// ******
// ********
// **********
// ************
// **************
// ****************

// let result = '';
// const length = 12;

// for (let i=1; i<length; i++){
//     for (let j=0; j<i; j++){
//         result += '*';
//     }
//     result += '\n';
// }
// console.log(result);
// first: for (let i=0 ; i<3 ; i++){
//         console.log(`first level:${i}`);
//          for (let j=0 ; j<3 ; j++){
//                 console.log(`second level: ${j}`);
//             }
//                 for (let k=0 ; k<5 ; k++){
//                     if(k===3) continue first ;
//                     console.log(`third level:${k}`);
//                 }
//     }

// let number = 50;
// // while (number<55){
// //     console.log(number);
// //     number++;
// // }
// do {
//     console.log(number)
//     number++;
// } 
// while (number<=55);
// При помощи цикла for вывести числа от 20 до 10 в консоль. В обратном порядке (20, 19, 18...). 
// Когда цикл дойдет до числа 13 - остановить весь цикл


// for (let i = 2; i <= 10; i++) {
//     if (i % 2 === 0) {
//         console.log(i);
//     }
// }
// let i = 10;
// while (i>=2){
//     if(i % 2 !== 0){
//         i--;
//         console.log(i)
//     }
//     i--;
// }

// function fourthTask() {
//     let i = 2;
//     while(i<=16){
//         if(i % 2 === 0){
//             i++;
//             continue;
//         }else {
//          console.log(i);
//      }
//     }
     
//  }
//  let i = 2;
//     while(i<=16){
//         if(i % 2 === 0){
//             i++;
//             continue;
//         }else {
//          console.log(i);
//      }
//      i++;
//     }

// function fifthTask() {
//     const arrayOfNumbers = [];
//     arrayOfNumbers[0]= 5;
//     arrayOfNumbers[1]= 6;
//     arrayOfNumbers[2]= 7;
//     arrayOfNumbers[3]= 8;
//     arrayOfNumbers[4]= 9;
//     arrayOfNumbers[5]= 10;
//     console.log(arrayOfNumbers);
//     return arrayOfNumbers;
// }
// function fifthTask() {
//     const arrayOfNumbers = [];

//     for (let i = 5; i < 11; i++) {
//         arrayOfNumbers[i - 5] = i;
//     }

//     console.log(arrayOfNumbers);
//     return arrayOfNumbers;
// }
// Заполните новый массив (result) числами из старого (arr). 
// Количество элементов в массиве можно получить как arr.length, а к элементам обращаемся все так же: arr[0], arr[1] и тд.
// Должен получиться точно такой же массив
// function firstTask() {
//     const arr = [3, 5, 8, 16, 20, 23, 50];
//     const result = [];
//    for (let i=0; i<arr.length ; i++){
//     result[i] = arr[i] ;
//    }
//    console.log(result);
//     return result;
// }
// function secondTask() {
//     const data = [5, 10, 'Shopping', 20, 'Homework'];
//     for ( let i = 0 ; i < data.length; i++){
//         if(typeof(data[i]) === 'number'){
//             data[i]=data[i] * 2 ;
//         } else if (typeof(data[i]) === 'string'){
//             data[i]=`${data[i]} - done`;
//         }
//     }
//     console.log(data);
//     return data;
// }


// function thirdTask() {
//     const data = [5, 10, 'Shopping', 20, 'Homework'];
//     const result = [];

//     for (let i = 1; i <= data.length; i++) {
//         result[i - 1] = data[data.length - i]
//     }

//     console.log(result);
//     return result;
// }

// const data = [5, 10, 'Shopping', 20, 'Homework'];
//     const result = [];

//     for (let i = 1; i <= data.length; i++) {
//         result[i - 1] = data[data.length - i]
//     }

//     console.log(result);
//     return result;

// const numberOfFilms = prompt('Сколько фильмов вы уже посмотрели ?' ,'' );
// const personalMovieDB = {
//     count:{numberOfFilms},
//     movies:{},
//     actors:{},
//     genres:[],
//     privat:false
// };
// for (let i = 0; i>)

/* Задание на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/

'use strict';



// Код возьмите из предыдущего домашнего задания
// let num = 20;  - находит её и выводит её . 
// function name1 (text){
//     console.log(text);
//     let num = 50;  -ф-ия ищет переменную , на тыкается на неё , выводит её , а после ищет следующую .  
//     | если бы данной переменной не было , то она пошла бы искать переменные дальше , нашла бы выше 20, и вывела бы её. 
//     console.log(num);
// }
// name1('artem');
// console.log(num);
// console.log(calc(10,15));

// function calc (a , b){
//     return (a + b);
// }
// const logger = function () {
//  console.log('hello');
// };
// logger();
// const logger = (a,b) => a + b ; 

// const eurCours = 29;
// function converter (amount,curr){
//     console.log(curr * amount);
// }
// converter (500,eurCours);


// const dollar = 29;
// const eur = 34;

// function converter (amount ,curr) {  - передаём два аргумента первое- число которое мы не знаем , а второе это то , что мы будем подставлять 
// под курс к примеру (константы наши)
//     console.log(amount * curr);
// }
// converter (400, br);
// converter (11100, dollar);

// function test(){
//     for (let i=1 ; i<5; i++){
//         console.log(i);
//         if(i === 3) return
//     }
//     console.log('done');
// }
// test()
// 1) Создайте функцию, которая будет на вход принимать 1 аргумент с именем человека и возвращать строку.

// Пример: вызов функции sayHello('Антон') возвращает строку "Привет, Антон!". В решении вызывать функцию не нужно, программа сделает это за вас.

// function sayHello (name){
//     return `Привет , ${name} !`;
// }
// sayHello ('Alex');
// Создайте функцию, которая принимает в себя 1 аргумент в виде целого числа и возвращает массив из трех чисел: одно на 1 меньше, сам аргумент, и число на 1 больше.

// Пример: вызов функции returnNeighboringNumbers(5) возвращает массив в виде [4, 5, 6].

// function returnNeighboringNumbers(a) {
//    return [a - 1 , a + 1]
// }
// returnNeighboringNumbers(10);
// function getMathResult(number , times) {
//     if (typeof(times !== 'number') || times <= 0){
//         return number
//     }

//     let str = '';

//     for ( let i = 1; i <= times; i++){
//         if(i === times){
//             str += `${number * i}`;
//         } else {
//             str += `${number * i }---`;  
//         }
//     } 
//     return str ;
// }
// getMathResult(10 , 5);


// const num = "12.2 px" ;
// console.log(parseFloat(num));  - используется , чтобы взять какое-то число или строку и вернуть его в десятичное значение 
// / он не  округляет , будет 12.2

// let numberOfFilms ;
// function start (){
//     numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели ?' ,'' );

//     while (numberOfFilms == '' || isNaN(numberOfFilms) || numberOfFilms == null){
//         numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели ?' ,'' );
//     }
// }
// start();
// const personalMovieDB = {
//     count: numberOfFilms,
//     movies:{},
//     actors:{},
//     genres:[],
//     privat:false 
// };

// function rememberMyFilms (){
//     for (let i = 0; i<2 ; i++){  
//         const a = prompt('Один из последних просмотренных фильмов?','').trim(),  
//                 b = prompt('На сколько оцените его?',''); 
//         if(a != null && b != null && a != '' && b != '' && a.length<50){   
//             personalMovieDB.movies[a] = b;
//             console.log("done"); 
//         } else {      
//             console.log("error"); 
//             i--;
//         }
//     }
// }
// rememberMyFilms ();

// function detectPersonalLevel (){
//     if (personalMovieDB.count < 10){
//         console.log('Просмотрено довольно мало фильмов');
//     } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30){
//         console.log("Вы классический зритель");
//     }else if (personalMovieDB.count >= 30){
//         console.log("Вы киноман");
//     } else {
//         console.log("Произошла ошибка");
//     }; 
//     console.log(personalMovieDB); 
// }
// detectPersonalLevel ()

// function showMyDB (hidden){
//     if(!hidden){
//         console.log(personalMovieDB); 
//     }
// }
// showMyDB (personalMovieDB.privat);

// function writeYourGenres (){
//     for (let i = 1; i<=3 ; i++){  
//        const genre = prompt(`Ваш любимый жанр под номером ${i}`);
//        personalMovieDB.genres[i - 1] = genre ;
//     }
// }
// writeYourGenres();

// function learnJS(lang,callback){
//     console.log(`Я учу: ${lang}`);
//     callback();
// }
// function done (){
//     console.log('Я прошёл этот урок!');
// }
// learnJS('JavaScript',done);  - вызвали callback done без () тк как мы ее передаём , а не вызываем. 

// const objekt = {
//     name:'Artem',
//     height: 1024,
//     width:1024,
//     colors:{
//         bg:"red",
//         border: "blue"
//     }
// }
// const {border} = objekt.colors;
// console.log(border);
// console.log(Object.keys(objekt));
// let counter = 0;
// for ( let key in objekt) {
//     if (typeof(objekt[key]) === 'object'){
//         for (let i in objekt[key]){
//             console.log(`Свойство ${objekt[i]} имеет значение ${objekt[key][i]}`);
//             counter++;
//         }
//     } else {
//         console.log(`Свойство ${key} имеет значение ${objekt[key]}`);
//         counter++;
//     }
// }
// console.log(counter);

// const arr = [1 ,2, 3, 4, 5]
// arr[20] = 0;
// console.log(arr.length);
// console.log(arr);

// const arr = [фывфы ,ыфвфыв, ывфыв]
// arr.sort();
// console.log(arr)

// const arr = [1, 2, 3, 4, 5]
// arr.forEach(function(item , i, arr){
//     console.log(`${i}: ${item} находится в массиве ${arr}`)
// })

const str = prompt('', ''); 
const products = str.split(', '); 
products.sort();
console.log(products.join('; '));

