// ? Click
// ! 1. Напишите код, который будет реагировать на клик по кнопке и выводить в консоль сообщение "Кнопка была нажата!".

// const myButton = document.getElementById('myButton')

// myButton.addEventListener('click', () => {
//     console.log('Йита и кнопк 1ад');
// })


// ! 1. Напишите код, который будет реагировать на 2й клик по кнопке и выводить в консоль сообщение "Кнопка была нажата!".

// const МожетБытьЛюбоеИмя = document.getElementById('myButton')

// myButton11.addEventListener('dblclick', () => {
//     console.log('М те1 е и кнопк шоз');
// })


// ? DoubleClick
// ! 1 Создайте HTML-страницу с кнопкой и элементом div. Напишите код, который будет реагировать на двойной клик по кнопке и изменять цвет фона элемента div на зеленый.

// const mybutton = document.getElementById('mybutton')
// const kub = document.getElementById('kub')

// mybutton.addEventListener('dblclick', () => {
//     kub.style.backgroundColor = 'pink'
// })


// ! 2 Напишите код, который будет выводить сообщение в консоль при двойном клике по любому элементу страницы.

// document.addEventListener('dblclick', () => {
//     console.log('Двойной клик произошел на элементе');
// });


// ! 3 Создайте таблицу на HTML-странице и напишите код, который будет реагировать на двойной клик по ячейке таблицы и заменять текст в ячейке на "Double clicked!".

// clickMy.addEventListener('click', () => {
// clickMy.textContent = 'Double clicked!';
// });
// clickMy1.addEventListener('click', () => {
// clickMy1.textContent = 'Double clicked!';
// });
// clickMy2.addEventListener('click', () => {
// clickMy2.textContent = 'Double clicked!';
// });
// clickMy3.addEventListener('click', () => {
// clickMy3.textContent = 'Double clicked!';
// });


// ! 4 Создайте список изображений на HTML-странице и напишите код, который будет реагировать на двойной клик по каждому изображению и выводить его альтернативный текст в консоль.

// const alDoc1 = document.addEventListener('dblclick', () => {
//     console.log(Foto1.alt);
// })

// const alDoc2 = document.addEventListener('dblclick', () => {
//     console.log(Foto2.alt);
// })

// const alDoc3 = document.addEventListener('dblclick', () => {
//     console.log(Foto3.alt);
// })

// const alDoc4 = document.addEventListener('dblclick', () => {
//     console.log(Foto4.alt);
// })


// ! 5 Напишите код, который будет реагировать на двойной клик по заголовку страницы и изменять его текст на "Double clicked!".

    // pageTitle.addEventListener('dblclick', () => {
    //     pageTitle.textContent = 'Double clicked!';
    // });



// ? keyDown
// ! 1 Напишите код который будет выводить нажатие любой кнопки в консоль.

// myButton.addEventListener('keydown', (event) => {
//     console.log('вы нажали на кнопку, ' + event.key);
// })


// ! 2 напишите код который будет запрашивать строку у пользователя и выводить введенную строку в консоль.

// let request = prompt('Ведите строку')
// console.log('вы вели, ' + request);



// ? keyUp
// ! 1 Напишите код который будет выводить отпускание любой кнопки в консоль.

// myButton.addEventListener('keyup', (event) => {
//     console.log('вы нажали на кнопку, ' + event.key);
// })