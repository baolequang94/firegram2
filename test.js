// function jumpingOnClouds(c) {
//   // Write your code here

//   const MAX_JUMP = [1, 2];

//   let count = 0;
//   let currentIndex = 0;

//   while (currentIndex < c.length - 1) {
//     if (
//       c[currentIndex + MAX_JUMP[1]] == 0 &&
//       currentIndex + MAX_JUMP[1] <= c.length
//     ) {
//       currentIndex += MAX_JUMP[1];
//     } else {
//       currentIndex += MAX_JUMP[0];
//     }
//     count += 1;
//     console.log("Current Index", currentIndex);
//   }

//   return count;
// }

// const testArr = [0, 0, 0, 1, 0, 0];

// console.log(jumpingOnClouds(testArr));

// 2. FirstDuplicate

// [2,1,3,5,3,2] => return 3
// [2,4,3,5,1] => return -1

// function firstDuplicate(arr) {
//   let setArr = [0];
//   for (let i = 0; i < arr.length; i++) {
//     if (setArr.findIndex((setArrChild) => setArrChild === arr[i]) === -1) {
//       setArr.push(arr[i]);
//     } else return arr[i];
//   }
//   return -1;
// }

// console.log(firstDuplicate([2, 1, 3, 5, 3, 2]));
// console.log(firstDuplicate([2, 1, 3, 4, 6, 5]));
// console.log(firstDuplicate([5, 5]));
// console.log(firstDuplicate([5]));

// console.log([2, 1, 3, 5, 3, 2].findIndex(-2));

const users = [
  {
    id: "test id",
    caption: "test caption",
  },
];

for (let i = 0; i < 1; i++) {
  console.log(users[i]);
}
