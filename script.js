

// function checkDayType(dayNumber) {
//   if (dayNumber === 0 || dayNumber === 6) {
//       console.log("It is the weekend!");
//   } else if (dayNumber >= 1 && dayNumber <= 5) {
//       console.log("It is the weekday!");
//   } else {
//       console.log("Invalid day number");
//   }
// }
let dayNumber = 2;

switch (true) {
    case dayNumber == 0:
        console.log("Sunday");
        console.log("It is the weekend!");
        break;
    case dayNumber == 1:
        console.log("Monday");
        console.log("It is the weekday!");
        break;
    case dayNumber == 2:
        console.log("Tuesday");
        console.log("It is the weekday!");
        break;
    case dayNumber == 3:
        console.log("Wednesday");
        console.log("It is the weekday!");
        break;
    case dayNumber == 4:
        console.log("thursday");
        console.log("It is the weekday!");
        break;
    case dayNumber == 5:
        console.log("friday");
        console.log("It is the weekday!");
        break;
    case dayNumber == 6:
        console.log("Saturday");
        console.log("It is the weekend!");
        break;
    default:
        console.log("Invalid day number");
}
