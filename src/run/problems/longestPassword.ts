// https://app.codility.com/programmers/trainings/1/longest_password/

// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function longest_password(S) {
  // write your code in JavaScript (Node.js 8.9.4)

  const passwords = S.split(' ');
  const charRegex = RegExp('[^A-Za-z0-9]', 'gi'); // check not alphanumerical characters
  const letterRegex = RegExp('([A-z])', 'g'); // check letters
  const numberRegex = RegExp('([0-9])', 'g'); // check numbers

  let answer = -1; // longest password length
  for (const password of passwords) {
    // even number of letters
    const letterCnt =
      password.match(letterRegex) && password.match(letterRegex).length
        ? password.match(letterRegex).length
        : 0;
    // odd number of digits
    const numCnt =
      password.match(numberRegex) && password.match(numberRegex).length
        ? password.match(numberRegex).length
        : 0;

    // if pass all conditions
    if (!charRegex.test(password) && letterCnt % 2 == 0 && numCnt % 2 == 1) {
      if (password.length > answer) {
        // get longer one
        answer = password.length;
      }
    }
  }
  return answer;
}
