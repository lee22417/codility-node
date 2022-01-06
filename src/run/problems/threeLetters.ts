// https://app.codility.com/programmers/trainings/5/three_letters/

// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A, B) {
  // write your code in JavaScript (Node.js 8.9.4)
  // get string
  return generateString('', A, B);
}

function generateString(answer, A, B) {
  // impossible
  if (A != 0 && B != 0 && (A / B > 4 || B / A > 4)) {
    return false;
  }
  if (A == 0 && B == 0) {
    return answer;
  }

  // A >= B and 'a' can be added
  if (A >= B && A > 0 && checkValidation(answer + 'a')) {
    const tmpResult = generateString(answer + 'a', A - 1, B);
    if (tmpResult) return tmpResult;
  }
  // A >= B and 'a' can not be added
  else if (A >= B && B > 0 && !checkValidation(answer + 'a')) {
    const tmpResult = generateString(answer + 'b', A, B - 1);
    if (tmpResult) return tmpResult;
  }
  // B > A and 'b' can be added
  else if (B > A && B > 0 && checkValidation(answer + 'b')) {
    const tmpResult = generateString(answer + 'b', A, B - 1);
    if (tmpResult) return tmpResult;
  }
  // B > A and 'b' can not be added
  else if (B > A && A > 0 && !checkValidation(answer + 'b')) {
    const tmpResult = generateString(answer + 'a', A - 1, B);
    if (tmpResult) return tmpResult;
  }
  return false;
}

function checkValidation(answer) {
  const aReg = RegExp('aaa', 'g');
  const bReg = RegExp('bbb', 'g');
  return answer.match(aReg) || answer.match(bReg) ? false : true;
}
