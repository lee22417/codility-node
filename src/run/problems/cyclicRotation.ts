//https://app.codility.com/programmers/lessons/2-arrays/cyclic_rotation/

// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function cyclic_rotation(A, K) {
  // write your code in JavaScript (Node.js 8.9.4)
  const answer = [];
  let start = 0;

  // find array index to start
  if (K % A.length == 0) {
    return A;
  } else {
    start = A.length - (K % A.length);
  }

  let current = start;
  // save result in order
  while (answer.length < A.length) {
    answer.push(A[current]);
    if (current < A.length - 1) {
      current++;
    } else {
      current = 0;
    }
  }
  return answer;
}
