function solution(babbling) {
  let result = 0;

  babbling.map((x) => {
    let PrevWord;
    for (let i = 0; i < x.length; i++) {
      let currWord = x.substring(i, i + 3);
      if (currWord !== PrevWord && (currWord === 'aya' || currWord === 'woo')) {
        if (i + 3 === x.length) {
          result++;
          return;
        }
        PrevWord = currWord;
        i += 2;
        continue;
      }

      currWord = x.substring(i, i + 2);
      if (currWord !== PrevWord && (currWord === 'ye' || currWord === 'ma')) {
        if (i + 2 === x.length) {
          result++;
          return;
        }
        PrevWord = currWord;
        i += 1;
        continue;
      }
      return;
    }
  });

  return result;
}

console.log(solution(['aya', 'yee', 'u', 'maa']));
console.log(solution(['ayaye', 'uuu', 'yeye', 'yemawoo', 'ayaayaa']));
