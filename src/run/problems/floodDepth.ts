// https://app.codility.com/programmers/trainings/1/flood_depth/

// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function flood_depth(A) {
  // Implement your solution here
  if (A.length <= 2) {
    return 0;
  }
  let deepestDepth = 0;

  let leftRock = A[0];
  let low = A[0];
  let i = 1;
  while (i < A.length) {
    if (A[i] >= leftRock) {
      const depth = leftRock - low;
      if (depth > deepestDepth) {
        deepestDepth = depth;
      }
      leftRock = low = A[i];
    } else {
      if (low > A[i]) {
        low = A[i];
      } else {
        const depth = A[i] - low;
        if (depth > deepestDepth) {
          deepestDepth = depth;
        }
      }
    }
    i++;
  }
  return deepestDepth;
}
