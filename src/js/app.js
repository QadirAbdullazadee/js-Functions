// TASK 1:Ədədlərdən ibarət bir array qəbul edən və bu ədədlərin ədədi ortasını tapan bir funksiya yazın //

let numArray = [5, 10, 15, 20, 25,30];
console.log(numArray);

let sum = 0;
let result = 0;

function arrayItems(arrayItems) {
  for (let i = 0; i <= arrayItems.length - 1; i++) {
    sum += numArray[i];
    result = Math.floor(sum / arrayItems.length);
  }
  console.log(`result:${result}`);
}
arrayItems(numArray);

// ----------------------------------- TASK 1--------------------------------------//

// 2. String qəbul edən və onu tərsinə yazan funksiya yazın, məsələn "salam" qəbul edir "malas" qaytarır

function reverseString (string) {
  for (let i = string.length - 1; i >= 0; i--) {
    console.log(string[i]);
  }
}

 reverseString("Qadir")
// -------------------------------------------------- TASK 2 --------------------------------//

//  3. Ədədin faktorialını hesablayan funksiya yazın
const faktorial = (n) => {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * faktorial(n-1);
  }
};
let faktorail = faktorial(56);
console.log(faktorail);
// // ---------------------------------- TASK 3 ----------------------------------------//

// 4. Sözlərdən ibarət array qəbul edən və bu sözlərdən uzununu tapan funksiya yazın, məsələn ["apple", "orange","strawberry"] qəbul edir "strawberry"  qaytarır

let arr = ["blue", "orange", "purpple", "lightgreen"];
let largestElement = arr[0];

function findElement(arr) {
  for (let i = 1; i <= arr.length - 1; i++) {
    if (arr[i].length > largestElement.length) {
      largestElement = arr[i];
    }
  }
  console.log(`largestElement is: ${largestElement}`);
}

findElement(arr);

// --------------------------- TASK 4 ------------------------------//

// 5. Verilən ədədin rəqəmləri cəmini hesablayan funksiya yazın*/

function num(value1, value2) {
  console.log(value1 + value2);
}

num(9, 5);

// ---------------------------------- TASK 5 -------------------------------------//
