// const numberOfFilms = prompt('Сколько фильмов вы уже посмотрели ?' ,'' );
// const personalMovieDB = {
//     count:{numberOfFilms},
//     movies:{},
//     actors:{},
//     genres:[],
//     privat:false
// };
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
first: for (let i=0 ; i<3 ; i++){
        console.log(`first level:${i}`);
         for (let j=0 ; j<3 ; j++){
                console.log(`second level: ${j}`);
            }
                for (let k=0 ; k<5 ; k++){
                    if(k===3) continue first ;
                    console.log(`third level:${k}`);
                }
    }