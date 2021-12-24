import { Injectable } from '@nestjs/common';
// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

// https://app.codility.com/programmers/trainings/9/binary_gap/
function solution(N) {
  // write your code in JavaScript (Node.js 8.9.4)
  // convert to binary
  const binaryN = (N >>> 0).toString(2);
  let answer = 0;

  // remove the 0 of the end
  let strN: string = binaryN;
  strN = strN.substr(0, strN.lastIndexOf('1') + 1);

  //
  while (true) {
    if (strN.length == 0) break;
    strN = strN.substr(1, strN.length);
    const numOfZero = strN.indexOf('1');
    if (answer < numOfZero) answer = numOfZero;
    strN = strN.substr(numOfZero, strN.length);
  }

  return answer;
}
