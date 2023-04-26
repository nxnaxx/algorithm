function solution(n, words) {
  let result = [0, 0];
  for (let i = 1; i < words.length; i++) {
    if (
      words[i][0] !== words[i - 1][words[i - 1].length - 1] ||
      words.indexOf(words[i]) !== i
    ) {
      result[0] = Math.floor(i % n) + 1;
      result[1] = Math.floor(i / n) + 1;
      break;
    }
  }
  return result;
}

console.log(
  solution(3, [
    'tank',
    'kick',
    'know',
    'wheel',
    'land',
    'dream',
    'mother',
    'robot',
    'tank',
  ]),
);
console.log(
  solution(5, [
    'hello',
    'observe',
    'effect',
    'take',
    'either',
    'recognize',
    'encourage',
    'ensure',
    'establish',
    'hang',
    'gather',
    'refer',
    'reference',
    'estimate',
    'executive',
  ]),
);
console.log(
  solution(2, ['hello', 'one', 'even', 'never', 'now', 'world', 'draw']),
);
