const maxDivisor = (num) => {
  let answer = 1;

  if (num === 1) return 0;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0 && num / i <= 10000000) return num / i;
    if (num % i === 0 && num / i > 10000000) answer = i;
  }
  return answer;
};

function solution(begin, end) {
  let result = [];

  for (let i = begin; i <= end; i++) {
    result.push(maxDivisor(i));
  }
  return result;
}

console.log(solution(1, 10));
