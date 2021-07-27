// 1. Асинхронна метематична функція
//  Вова:  площа циліндру
// Маємо 5 фігур і маємо 5 площ. 
// Вхідні данні: 5 фігур і 5 порахованих площ.
// Завдання: дізнатись які площі пораховано коректно. 
// Якщо пораховано коректно то Promise отримує стан fulfilled, 
// а якщо ні reject.

const p = new Promise(function (res, rej) {
  setTimeout(() => {

    let spret = (function (r, h) {
      return Math.PI * r * h
    })(2, 5)

    let spret1 = (function (r, h) {
      return Math.PI * r * h
    })(2, 2)

    let spret2 = (function (r, h) {
      return Math.PI * r * h
    })(2, 2)

    let spret3 = (function (r, h) {
      return Math.PI * r * h
    })(2, 2)

    let spret4 = (function (r, h) {
      return Math.PI * r * h
    })();

    let arr = [spret, spret1, spret2, spret3, spret4];
    let result = arr.filter((item) => {
      return isNaN(item)
    })
    if (result[0] == undefined) {
      res(arr);
    } else {
      rej(result);
    }
  }, 1000)

}).then((arr) => {
  console.log(...arr, 'Все вірно');
}).catch(() => {
  console.log(Error('ПОМИЛКА'))
})



