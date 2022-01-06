// https://app.codility.com/programmers/trainings/5/parity_degree/

// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function parity_degree(N) {
  // write your code in JavaScript (Node.js 8.9.4)
  let answer = 0;
  while (true) {
    if (N % 2 == 1) {
      break;
    }
    N = N / 2;
    answer++;
  }

  return answer;
}
