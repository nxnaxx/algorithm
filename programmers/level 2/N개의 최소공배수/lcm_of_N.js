function solution(arr) {
  const gcd = (x, y) => {
    let z;
    if (y === 0) {
      return x;
    }
    z = x % y;
    return gcd(y, z);
  };

  const lcm = (x, y) => {
    return (x * y) / gcd(x, y);
  };

  let num = arr[0];
  for (let i = 1; i < arr.length; i++) {
    num = lcm(num, arr[i]);
  }
  return num;
}

console.log(solution([2, 6, 8, 14]));
console.log(solution([1, 2, 3]));
