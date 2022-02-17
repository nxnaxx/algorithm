function solution(numbers) {
  if (numbers.filter((x) => x === 0).length === numbers.length) {
    return '0';
  }
  numbers.sort((a, b) => {
    return b.toString().repeat(4).slice(0, 4) - a.toString().repeat(4).slice(0, 4);
  });

  return numbers.join('');
}
console.log(solution([6, 10, 2]));
console.log(solution([3, 30, 34, 5, 9]));
