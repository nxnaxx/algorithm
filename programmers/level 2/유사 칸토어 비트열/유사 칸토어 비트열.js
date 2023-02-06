function solution(n, l, r) {
  const calcBit = (index) => {
    let exp = 0;
    let result = 0;

    while (index > 5 ** (exp + 1)) exp++;

    if (exp === 0) return index < 3 ? index : index - 1;

    const quotient = Math.floor(index / 5 ** exp);
    const remainder = quotient + 1 !== 3 ? index % 5 ** exp : 0;

    if (quotient >= 3) result += (quotient - 1) * 4 ** exp;
    else result += quotient * 4 ** exp;

    return result + calcBit(remainder);
  };

  return calcBit(r) - calcBit(l - 1);
}

console.log(solution(2, 4, 17));
