function solution(arrayA, arrayB) {
  const divisorA = [];
  const divisorB = [];

  arrayA.sort((a, b) => b - a);
  arrayB.sort((a, b) => b - a);

  const calcDivisor = (num, arr) => {
    for (let i = num; i >= 2; i--) {
      if (num % i === 0) arr.push(i);
    }
  };

  const calcGCD = (divisor, arr) => {
    for (let i = 0; i < divisor.length; i++) {
      let answer = 0;
      for (let j = 0; j < arr.length; j++) {
        if (arr[j] % divisor[i] !== 0) {
          answer = 1;
          break;
        }
      }
      if (answer === 0) return divisor[i];
    }
  };

  const result = (num, arr2) => {
    let answer = 0;
    for (let i = 0; i < arr2.length; i++) {
      if (arr2[i] % num === 0) {
        answer = 1;
        break;
      }
    }
    return answer === 0 ? num : 0;
  };

  calcDivisor(arrayA[arrayA.length - 1], divisorA);
  calcDivisor(arrayB[arrayB.length - 1], divisorB);

  const GCD_A = calcGCD(divisorA, arrayA);
  const GCD_B = calcGCD(divisorB, arrayB);
  const a = result(GCD_A, arrayB) || 0;
  const b = result(GCD_B, arrayA) || 0;

  return a >= b ? a : b;
}

console.log(solution([10, 17], [5, 20]));
console.log(solution([10, 20], [5, 17]));
console.log(solution([14, 35, 119], [18, 30, 102]));
