function solution(s, skip, index) {
  let result = '';
  const skipArr = skip.split('').map((_, i) => skip.charCodeAt(i));

  const getAfterStr = (num, i) => {
    let start = num;
    let end = num + i > 122 ? 97 + ((num + i) % 123) : num + i;
    let count = 0;

    skipArr.map((x) => {
      if (start < x && x <= start + i) count++;
      if (start > end && x <= end) count++;
    });

    return count === 0 ? end : getAfterStr(end, count);
  };

  for (let i = 0; i < s.length; i++) {
    let changedStr = getAfterStr(s.charCodeAt(i), index);
    result += String.fromCharCode(changedStr);
  }

  return result;
}

console.log(solution('aukks', 'wbqd', 5));
