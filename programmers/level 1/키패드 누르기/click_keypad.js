function solution(numbers, hand) {
  let keypad = {
    1: [1, 1],
    2: [1, 2],
    3: [1, 3],
    4: [2, 1],
    5: [2, 2],
    6: [2, 3],
    7: [3, 1],
    8: [3, 2],
    9: [3, 3],
    '*': [4, 1],
    0: [4, 2],
    '#': [4, 3],
  };

  let leftHand = '*';
  let rightHand = '#';

  let result = '';

  for (let i = 0; i < numbers.length; i++) {
    let currNum = numbers[i];
    let currIndex = keypad[currNum];

    const useLeft = () => {
      result += 'L';
      leftHand = currNum;
    };

    const useRight = () => {
      result += 'R';
      rightHand = currNum;
    };

    if (currIndex[1] === 1) {
      useLeft();
    } else if (currIndex[1] === 3) {
      useRight();
    } else {
      let leftIndex = keypad[leftHand];
      let rightIndex = keypad[rightHand];

      let leftDistance =
        Math.abs(currIndex[0] - leftIndex[0]) + Math.abs(currIndex[1] - leftIndex[1]);
      let rightDistance =
        Math.abs(currIndex[0] - rightIndex[0]) + Math.abs(currIndex[1] - rightIndex[1]);

      if (leftDistance < rightDistance) {
        useLeft();
      } else if (leftDistance > rightDistance) {
        useRight();
      } else {
        if (hand === 'left') {
          useLeft();
        } else {
          useRight();
        }
      }
    }
  }
  return result;
}

console.log(solution([1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5], 'right'));
console.log(solution([7, 0, 8, 2, 8, 3, 1, 5, 7, 6, 2], 'left'));
console.log(solution([1, 2, 3, 4, 5, 6, 7, 8, 9, 0], 'right'));
