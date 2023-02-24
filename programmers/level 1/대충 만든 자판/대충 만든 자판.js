function solution(keymap, targets) {
  const result = [];

  const getCount = (target) => {
    let count = 0;
    for (let i = 0; i < target.length; i++) {
      let num;
      keymap.map((x, index) => {
        let currStrIndex = x.indexOf(target[i]);
        if (!index || (currStrIndex !== -1 && !num)) num = currStrIndex + 1;
        if (currStrIndex !== -1 && currStrIndex + 1 < num)
          num = currStrIndex + 1;
      });
      if (!num) return -1;
      count += num;
    }
    return count;
  };

  targets.map((x) => result.push(getCount(x)));
  return result;
}

console.log(solution(['ABACD', 'BCEFD'], ['ABCD', 'AABB']));
console.log(solution(['AA'], ['B']));
console.log(solution(['AGZ', 'BSSS'], ['ASA', 'BGZ']));
