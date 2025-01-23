// Problem: Write a code to count area of rectangle with length = 5 and width = 3
// Solution: Rectangle Area = Length x width

const length = 5;
const width = 3;

const area = length * width;

console.log(`Area of rectangle is ${area}`); // Area of rectangle is 15

// Problem: Write a code to find perimeeter of rectangle with length = 5 and width = 3
// Solution: Perimeter = 2 x (Length + Width)

const perimeter = 2 * (length + width);

console.log(`Perimeter of rectangle is ${perimeter}`); // Perimeter of rectangle is 16

// Problem: Write a code to ﬁnd diameter, circumference and area of a circle., radius 5
// Solultion: Diameter = 2 x radius, Circumference = 2 x π x radius, Area = π x radius x radius

const radius = 5;

const diameter = 2 * radius;
const circumference = 2 * Math.PI * radius;
const circleArea = Math.PI * radius * radius;

console.log(`Diameter of circle is ${diameter}`); // Diameter of circle is 10
console.log(`Circumference of circle is ${circumference}`); // Circumference of circle is 31.41592653589793
console.log(`Area of circle is ${circleArea}`); // Area of circle is 78.53981633974483

// Problem:Write a code to find angles of triangle if two angles are given. a = 60, b = 85
// SOultion: c = 180 - (a + b)

const a = 60;
const b = 85;

const c = 180 - (a + b);

console.log(`Third angle of triangle is ${c}`); // Third angle of triangle is 35

// Problem: Write a code to convert days to years, months and days (Notes: 1 year : 365 days, 1 month : 30 days). Convert 400 days to years, months and days
// Solution: Years = days / 365, Months = (days % 365) / 30, Days = (days % 365) % 30

const totalDays = 400;
const years = Math.floor(totalDays / 365);
const remainingDaysAfterYears = totalDays % 365;
const months = Math.floor(remainingDaysAfterYears / 30);
const days = remainingDaysAfterYears % 30;
console.log(`400 days is ${years} years, ${months} months, and ${days} days.`);

const totalDays2 = 366;
const years2 = Math.floor(totalDays2 / 365);
const remainingDaysAfterYears2 = totalDays2 % 365;
const months2 = Math.floor(remainingDaysAfterYears2 / 30);
const days2 = remainingDaysAfterYears2 % 30;
console.log(
  `366 days is ${years2} years, ${months2} months, and ${days2} days.`,
);

// Problem: Write a code to get difference between two dates in days. Date1 = January 22, 2022, Date2 = January 20, 2022
// Solution: Difference in milliseconds = Date1 - Date2, Difference in days = Difference in milliseconds / (1000 * 60 * 60 * 24)

const date1 = new Date("January 22, 2022");
const date2 = new Date("January 20, 2022");
const diffms = date1 - date2;
const diffdays = diffms / (1000 * 60 * 60 * 24);
console.log(`The difference between the dates is: ${diffdays} days`);
