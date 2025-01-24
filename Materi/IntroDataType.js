// Untuk penamaan file ada 3 macam jenis:
//
// camelCase --> digunakan untuk memberikan nama pada file / variabele
// PascalCase --> digunakan untuk memberikan nama pada object class
// snake_case --> digunakan apabila ada spasi di dalamnya
//
// Tipe data primitive
// 1. String --> karakter atau tekstual

// let username = "John Doe";
// let greeting = "Hello World";
// let year = "2025";

// console.log(username);
// console.log(greeting);
// console.log(year)

// 2. Number
// let age = 26; // integer
// let height = 5.9; // float
// let negativenumber = -10; // negative number

// console.log(age);
// console.log(height);
// console.log(negativenumber);

// let varX = 10;
// let varY = 20;
// console.log(varX + varY);

// 3 BigInt --> angka yang sangat besar
// let bigNumber = 123456789012345678901234567890123456789
// console.log(bigNumber);

// 4 Boolean --> true / false
// let isverified = false;
// let hasDriverLicense = true;

// use case: Menentukan kelulusan 
// let isGraduated = false;
// if isGraduated {
//   console.log("Sudah Lulus")
// } else {
//   console.log("Belum Lulus")
// }
//
// // // use case: menentukan besar / kecilnya angka
// const randomNumber = 20
// if randomNumber <= 10(
//   console.log("Kurang dari atau sama dengan 10")
// ) else (
//   console.log("Lebih dari 10")
// )
//
//Use case: Menentukan tipe data tahun
// let currentYearNumber = 2025
// let currentYearString = "2025"

// number == string --> pengecekan nilai tanpa tipe data
// if (currentYearNumber == currentYearString) {
//   console.log("equals value")
// }

// number === string --> pengecekan nilai dengan tipe data
// if (currentYearNumber === currentYearString) {
//   console.log("equals value")
// }
//
// 5. Null --> tipe data yang tidak memiliki nilai
// let MiddleName = null;
// console.log(MiddleName);

// 6. Undefined --> tipe data yang belum didefinisikan
// let lastName;
// console.log(lastName);

// Non-Primitve Data Type
//
// 7. Object --> tipe data yang bisa menyimpan banyak data
// Pakai kurung kurawal {}

// let laptop = {
//   typeName: "Mackbook Air",
//   color: "Matte Black",
//   year: 2018,
//   displaySize: 13.3,
//   memory: {
//     storage: "128 GB SSD",
//     RAM: "8 GB"
//   }
// }

// console.log(laptop.typeName)
// console.log(laptop.color)
// console.log(laptop.memory.storage)

// 8. Array --> tipe data yang bisa menyimpan banyak data
// Pakai kurung siku []

// let fruits = ["Apple", "Banana", "Cherry", "Durian"]
// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// let mixedArray = ["Apple", 1, "Banana", 2, "Cherry", 3]
//
// console.log(numbers[3])
// console.log(mixedArray[5])

// JSON --> JavaScript Object Notation
// let studentData = [
//   {
//     username: "Budi"
//   },
//   {
//     username: "Andi"
//   },
// ]
//
// console.log(studentData[1])

// let productData = [
//     {
//       productName: "Kipas Angin",
//       price: "IDR 30,000",
//       image:""
//   }
// ]
//
//  Method built in String
//  length --> menghitung panjang karakter
//  toUpperCase --> mengubah karakter menjadi huruf besar

//  toLowerCase --> mengubah karakter menjadi huruf kecil
// let message = "Hello World";
// console.log(message.length);
// console.log(message.toUpperCase());
// console.log(message.toLowerCase());

// Includes --> mengecek apakah karakter tertentu ada di dalam string

// let phrase = "JavaScript is awesome"
// console.log(phrase.includes("awesome"));
//
// Slice --> memotong string
//
// let text = "Good Morning"
// console.log(text.slice(0, 4));

// Method built in Number
// let num = 12.3456
// console.log(num.toFixed(0));

// let num = "12.3456"
// console.log(Number(num))
// console.log(parseInt(num))
//
// Basic Operator
//
// let numA = 5, numB = 10;
//
// console.log(numA + numB);
// console.log(numA - numB);
// console.log(numA * numB);
// console.log(numA / numB);
// console.log(numA % numB);
//
// // Increment & Decrement
//
// let counterIncrement = 0;
// counterIncrement++;
// counterIncrement = 3;
// console.log(counterIncrement);
//
// let counterDecrement = 1;
// counterDecrement--;
// console.log(counterDecrement);

// Postfix & Prefix
// Postfix Increment --> nilai akan diincrement setelah dijalankan
let numC = 5
// console.log(numC++);
// console.log(numC);

// Prefix Increment --> nilai akan diincrement sebelum dijalankan
console.log(++numC);
console.log(numC);




