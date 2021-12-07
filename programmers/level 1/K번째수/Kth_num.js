function solution(array, commands) {
  let result = [];
  for (let i = 0; i < commands.length; i++) {
          let arr1 = array.slice(commands[i][0] - 1, commands[i][1]);
          arr1.sort((a, b) => a - b);
          result.push((arr1.slice(commands[i][2] - 1, commands[i][2]))[0]);
  }
  return result;
}

console.log(solution([1, 5, 2, 6, 3, 7, 4], [[2, 5, 3], [4, 4, 1], [1, 7, 3]]));