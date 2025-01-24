// Conditional Loop
//
//  1. If staement
//
// let x = 10
// if (x > 5) {
//   console.log("x lebih besar dari 10")
// }
//
// let age = 22
// if (age >= 18) {
//   console.log("Anda sudah bisa membuat SIM")
// }
//
// let score = 90
// if (score === 90) {
//   console.log("Nilai sempurna")
// }
//
// 2. Nested if statement
// //
// let age = 40;
// if (age >= 18) {
//   if (age < 30) {
//     console.log("Anda masuk kategori dewasa muda");
//   }
// }
//
// let balance = 75
// if (balance > 50) {
//   console.log("Saldo masih dihitung")
//   if (balance < 200) {
//     console.log("Saldo cukup untuk transaksi besar")
//     if (balance > 80) {
//       console.log("Saldo cukup untuk transaksi kecil")
//     }
//   }
// }

// 3. Else if statement
//
// let age = 22
// if (age < 18) {
//   console.log("Anda anak-anak")
// } else if (age < 60) {
//   console.log("Anda dewasa")
// } else {
//   console.log("Anda lansia")
// }
// Case 1: Simple Login page
//
// let password = "123456";
// let username = "admin";
//
// if (password === "123456" && username === "admin") {
//   console.log("Login Berhasil");
// } else {
//   console.log("Login Gagal");
// }

// 4. Switch Case
//
// Use Case: Login page for admin and user
//
// let username = "admin";
// let password = "123456";
// switch (username) {
//   case "admin":
//     if (password === "123456") {
//       console.log("Login Berhasil");
//     } else {
//       console.log("Login Gagal");
//     }
//     break;
//   case "user":
//     if (password === "123456") {
//       console.log("Login Berhasil");
//     } else {
//       console.log("Login Gagal");
//     }
//     break;
//   default:
//     console.log("Username Tidak Dikenal");
// }
//
// 5 Gerbang Logika
//
// && --> And
// || --> Or
//
// AND Logic
//
// false && false = false
// true && true = true
// false && true = false
// true && false = false
//
// OR Logic
//
// false && false = false
// true && true = true
// false && true = true
// true && false = true
//
// Use Case: Use Random Number Generator to determine the prize inside a box.
// There are five prizes: Common, Uncommon, Rare, Super Rare, and Mythical.
// Use a switch case to display the prize based on the random number generated.
//
// let randomNumber = Math.floor(Math.random() * 5) + 1;
// let prize;
// switch (randomNumber) {
//   case 1:
//     prize = "Common";
//     break;
//   case 2:
//     prize = "Uncommon";
//     break;
//   case 3:
//     prize = "Rare";
//     break;
//   case 4:
//     prize = "Super Rare";
//     break;
//   case 5:
//     prize = "Mythical";
//     break;
//   default:
//     prize = null;
// }
//
// if (prize) {
//   console.log(`You get ${prize} item`);
// } else {
//   console.log("Better luck next time");
// }
//
// While Loop Statement
//
// Use case: Filling a car fuel. Current fuel level is 0 liter. Use while loop to fill the car fuel.
// Each time you fill 1 liter, the fuel level will increase by 1 liter. Stop filling when the fuel level is 20 liters
// //
// let fuelLevel = 0;
// let fuelCapacity = 20;
// while (fuelLevel < fuelCapacity) {
//   console.log(`Fuel level is ${fuelLevel} liter of ${fuelCapacity} liters`);
//   fuelLevel++;
// }
//
// Do while loop statement
//
// Case: A player is opening a treasure chest.It has 20% chance to spawn a Rare weapon.
// Use do while loop to see how many times the player opened the chest until he got a Rare weapon.
//
// let RareWeapon = false;
// let attempts = 0;
// do {
//   attempts++;
//   if (Math.random() < 0.2) {
//     RareWeapon = true;
//   }
// } while (!RareWeapon);
// console.log(`You got a Rare Weapon after ${attempts} attempts`);
//
// Case: A Rare Weapon has a chance to spawn 5% of the time.
// If the player doesn't get the Rare Weapon, the chance will increase by 1% each time he opens the chest.
// If the player gets the Rare Weapon, the chance will be reset 5%.
//
// Use do while loop to see how many times the player opened the chest until he got the Rare Weapon.
// Also show the current probability of getting the Rare Weapon.

let RareWeapon = false;
let attempts = 0;
let probability = 5;

do {
  attempts++;
  if (Math.random() < probability / 100) {
    RareWeapon = true;
  } else {
    probability += 1; // Increase probability on failure
  }
} while (!RareWeapon);

console.log(
  `Rare weapon obtained after ${attempts} attempts with a final probability of ${probability}%`,
);

//
//
// Case: A game of coin flip. Head or tails. Use do while loop to count how many attempts it takes to get a head.
//
// let Coin = false;
// let attempts = 0;
// do {
//   attempts++;
//   if (Math.random() < 0.5) {
//     Coin = true;
//   }
// } while (!Coin);
// console.log(`You got a Head after ${attempts} attempts`);
