// Problem: Write a code to check if a number is odd or even
// Solution: Divide the number by 2 and check the remainder, if remainder is 0 then it is even else odd

const number = Math.floor(Math.random() * 100) + 1;
const remainder = number % 2;
const isEven = remainder === 0;
const isOdd = remainder !== 0;

if (isEven) {
  console.log(`${number} is even`);
} else {
  console.log(`${number} is odd`);
}

// Problem: Write a code to check if a number is a prime number or not.
// Solution: Prime numbers are greater than 1 and have no factors other than 1 and itself. Divide the number other than itself and 1 to check if it is divisible. If it is divisible then it is not a prime number else it is prime number

const number2 = Math.floor(Math.random() * 100) + 1;
const isPrime = number2 > 1;
const isNotPrime = number2 < 1;
const isDivisible = number2 % 2 === 0;
const isNotDivisible = number2 % 2 !== 0;

if (isPrime && isNotDivisible) {
  console.log(`${number2} is a prime number`);
} else {
  console.log(`${number2} is not a prime number`);
}

// Problem: Write a code to find the sum number of 1 to N. N is a random number
// Solution: Add all the numbers from 1 to N using for loop
//

const N = Math.floor(Math.random() * 100) + 1;
let sum = 0;
for (let i = 1; i <= N; i++) {
  sum += i;
}

console.log("The sum of numbers from 1 to", N, "is:", sum);

// Problem: Write a code to ﬁnd factorial of F. F is a random number
// Sollution: Factorial of F = F x (F-1) x (F-2) x ... x 1. Use for loop to find factorial

const F = Math.floor(Math.random() * 10) + 1;
let fact = 1;

const factorial = (num) => {
  for (let i = 1; i <= num; i++) {
    fact *= i;
  }
  return fact;
};

console.log(`Factorial of ${F} is ${factorial(F)}`);

// Problem: Write a code to print the ﬁrst N ﬁbonacci numbers
// Solution: Use for loop and conditional statement
//
const N2 = Math.floor(Math.random() * 15) + 1;
let fib = [0, 1];
for (let i = 2; i < N2; i++) {
  fib[i] = fib[i - 1] + fib[i - 2];
}
console.log("The first", N2, "Fibonacci numbers are:", fib);
