// function cb (event) {
//
// }
//
// document.addEventListener('click', cb);
// // document.addEventListener('click', function(event){
// //     event.preventDefault();
// // });


// function sentence(name) {
//     function fullSentence(age) {
//         return `Mam na imię ${name} i lat ${age}`
//     }
//
//     return fullSentence;
// }
//
// const s = sentence('pawel');
// console.dir(s);
// console.log(s(18));


// const gen = (id = 0) => {
//     return function inner() {
//         const result = id;
//         id++;
//         return result;
//     }
// }

// const gen = (id = 0) => () => id++;

// const genID = gen();
// console.log(genID())
// console.log(genID())
// console.log(genID())
// console.log(genID())
// console.log(genID())
// console.log(genID())

// const power10 = (digit) => digit ** 10;
// const power2 = (digit) => digit ** 2;
// const power4 = (digit) => digit ** 2;
// const power5 = (digit, power) => digit ** power;
//
// power5(10, 6);
//
// const powerN = (power) => {
//     return (digit) => {
//         return digit ** power;
//     }
// }
//
// const power11 = powerN(11)
// const power12 = powerN(12)
// power11(10);






