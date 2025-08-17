function solution(numbers, hand) {
  const keypad = {
    1: [1, 0],
    2: [2, 0],
    3: [3, 0],
    4: [1, 1],
    5: [2, 1],
    6: [3, 1],
    7: [1, 2],
    8: [2, 2],
    9: [3, 2],
    '*': [1, 3],
    0: [2, 3],
    '#': [3, 3],
  };
  let leftThumb = keypad['*'];
  let rightThumb = keypad['#'];
  let result = '';

  const useLeft = (key) => {
    result += 'L';
    leftThumb = key;
  };

  const useRight = (key) => {
    result += 'R';
    rightThumb = key;
  };

  numbers.forEach((number) => {
    const currentKey = keypad[number];
    let choice = 'L';

    if (currentKey[0] === 1) return useLeft(currentKey);
    if (currentKey[0] === 3) return useRight(currentKey);

    const leftMoveCount =
      Math.abs(currentKey[0] - leftThumb[0]) +
      Math.abs(currentKey[1] - leftThumb[1]);
    const rightMoveCount =
      Math.abs(currentKey[0] - rightThumb[0]) +
      Math.abs(currentKey[1] - rightThumb[1]);

    if (
      (leftMoveCount === rightMoveCount && hand === 'right') ||
      leftMoveCount > rightMoveCount
    ) {
      choice = 'R';
    }

    choice === 'L' ? useLeft(currentKey) : useRight(currentKey);
  });

  return result;
}

console.log(solution([1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5], 'right')); // "LRLLLRLLRRL"
console.log(solution([7, 0, 8, 2, 8, 3, 1, 5, 7, 6, 2], 'left')); // "LRLLRRLLLRR"
console.log(solution([1, 2, 3, 4, 5, 6, 7, 8, 9, 0], 'right')); // "LLRLLRLLRL"
