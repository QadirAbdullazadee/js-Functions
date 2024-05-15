// 1.  Daxil olan ədədin kök altı dəyərin hesablayan funksiya yazın əgər daxil olan ədəddən tam kök çıxmırsa bunu consola mesaj olaraq yazdırın.
//ex : kokHesabla(25)  output : 5

// function kokHesabla(x) {
//     let kok = Math.sqrt(x);
//     if (Number.isInteger(kok)) {
//         console.log("Kök altı dəyər: " + kok);
//     } else {
//         console.log("Ədədin tam kökü yoxdur.");
//     }
// }

// kokHesabla(25);

//2. Arqument olaraq string yazı qəbul edən funksiya yazın və həmən funksiya gələn string dəyərin içində neçə samit və neçə sait olduğunu hesablasın .
//note: switch case ile yazın
// function samitSaitHesabla(metin) {
//   let samitler = "";
//   let saitler = "";
//   let space = " ";

//   for (let i = 0; i <= metin.length - 1; i++) {
//     switch (metin[i].toLowerCase()) {
//       case "a":
//         saitler += metin[i];
//         break;
//       case "e":
//         saitler += metin[i];
//         break;
//       case "o":
//         saitler += metin[i];
//         break;
//       case "u":
//         saitler += metin[i];
//         break;
//       case "i":``
//         saitler += metin[i];
//         break;

//       default:
//         if (metin[i] !== saitler && metin[i] !== space) {
//           samitler += metin[i];
//         }
//         break;
//     }
//   }

//   console.log(
//     `soz: ${metin} saitler:${saitler} saitlerin sayisi: ${saitler.length}`
//   );
//   console.log(
//     `soz: ${metin} samitler:${samitler} samitlerin sayisi: ${samitler.length}`
//   );
// }
// samitSaitHesabla("salam necesiz");

//3. Arryin elementlərini string-ə çevirib birləşdirən bir funksiya yazın.
//ex: let arr = [1, "test", 8, "any text"]  output : "1test8any text"

// let arr = [1, "ve", 7, "tek ededdir"];

// function joinFunction(arr) {
//   let string = "";
//   for (let i = 0; i < arr.length; i++) {
//     string += arr[i];
//   }
//   console.log(string);
// }
// joinFunction(arr);
