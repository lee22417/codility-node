// https://app.codility.com/programmers/trainings/4/first_unique/

// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function first_unique(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  let map = {};
  // make table
  A.map((val) => (map[val] = (map[val] || 0) + 1));
  // get first unique number
  const answer = A.find((val) => map[val] == 1);
  return answer != undefined ? answer : -1;
}
