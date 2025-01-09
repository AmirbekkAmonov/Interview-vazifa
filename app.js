// function topJuftliklar(array, maqsadQiymat) {
//     const juftliklar = [];
//     for (let i = 0; i < array.length; i++) {
//       for (let j = i + 1; j < array.length; j++) {
//         if (array[i] + array[j] === maqsadQiymat) {
//           juftliklar.push([array[i], array[j]]);
//         }
//       }
//     }
//     return juftliklar;
//   }
//   const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//   const maqsadQiymat = 10;
//   console.log(topJuftliklar(array, maqsadQiymat)); 







// function palindromTekshirish(soz) {
//     soz = soz.toLowerCase();
//     let teskariSoz = '';
//     for (let i = soz.length - 1; i >= 0; i--) {
//       teskariSoz += soz[i];
//     }
//     return soz === teskariSoz;
//   }
//   console.log(palindromTekshirish('level')); 
//   console.log(palindromTekshirish('radar')); 
//   console.log(palindromTekshirish('hello')); 









// function anagramTekshirish(soz1, soz2) {
//     if (soz1.length !== soz2.length) {
//       return false;
//     }
//     const belgiHisobi = {};
//     for (let i = 0; i < soz1.length; i++) {
//       const belgi = soz1[i];
//       belgiHisobi[belgi] = (belgiHisobi[belgi] || 0) + 1;
//     }
//     for (let i = 0; i < soz2.length; i++) {
//       const belgi = soz2[i];
//       if (!belgiHisobi[belgi]) {
//         return false;
//       }
//       belgiHisobi[belgi]--;
//     }
//     for (const hisob in belgiHisobi) {
//       if (belgiHisobi[hisob] !== 0) {
//         return false;
//       }
//     }
//     return true;
//   }
//   console.log(anagramTekshirish('listen', 'silent')); 
//   console.log(anagramTekshirish('listen', 'silentx')); 
//   console.log(anagramTekshirish('listen', 'silenty')); 









// function fibonacci(n) {
//     if (n === 0) {
//         return 0;
//     }
//     if (n === 1) {
//         return 1;
//     }
//     return fibonacci(n - 1) + fibonacci(n - 2);
// }

// console.log(fibonacci(0));
// console.log(fibonacci(2));
// console.log(fibonacci(1));
// console.log(fibonacci(3));
// console.log(fibonacci(4));
// console.log(fibonacci(5));
// console.log(fibonacci(6));

