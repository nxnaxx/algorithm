function solution(s) {
  let result = s.length;

  for (let i = 1; i <= Math.floor(s.length / 2); i++) {
    let sample = s.substr(0, i);
    let count = 1;
    let str = '';

    for (let j = i; j < s.length; j += i) {
      if (sample === s.substr(j, i)) count++;
      else {
        str += count === 1 ? sample : count + sample;
        count = 1;
        sample = s.substr(j, i);
      }
    }

    str += count === 1 ? sample : count + sample;
    result = Math.min(result, str.length);
  }

  return result;
}

console.log(solution('aabbaccc'));
console.log(solution('ababcdcdababcdcd'));
console.log(solution('abcabcdede'));
console.log(solution('abcabcabcabcdededededede'));
console.log(solution('xababcdcdababcdcd'));
