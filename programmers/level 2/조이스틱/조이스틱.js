// function solution(name) {
//   let result = 0;
//   let backMove = 0;

//   for (let i = 0; i < name.length; i++) {
//     const up = name.charCodeAt(i) - 'A'.charCodeAt(0);
//     const down = 'Z'.charCodeAt(0) - name.charCodeAt(i) + 1;
//     result += Math.min(up, down);

//     console.log('result', result, 'i', i);

//     for (let j = i + 1; j < name.length; j++) {
//       if (name[j] !== 'A') {
//         if (j - i < name.length - j + i) result += j - i;
//         else {
//           const aMatches = name.slice(j + 1).match(/A/g);
//           const ACount = aMatches ? aMatches.length : 0;
//           result += name.length - j + i;
//           backMove += name.length - j - 1 - ACount;
//         }

//         i = j - 1;

//         console.log('result', result, i);
//         break;
//       }
//     }
//   }

//   return result - backMove;
// }

function solution(name) {
  let result = 0;
  let move = name.length - 1;

  for (let i = 0; i < name.length; i++) {
    const up = name.charCodeAt(i) - 'A'.charCodeAt(0);
    const down = 'Z'.charCodeAt(0) - name.charCodeAt(i) + 1;
    result += Math.min(up, down);

    let next = i + 1;
    while (next < name.length && name[next] === 'A') next++;

    console.log('next', next, 'i', i);
    move = Math.min(
      move,
      i + name.length - next + Math.min(i, name.length - next),
    );

    console.log(move);
  }

  return result + move;
}

// function solution(name) {
//   let answer = 0;
//   let rem = 0;
//   let cnt = Number.MAX_VALUE;

//   const calc = (c) => {
//     const cint = c.charCodeAt(0);
//     return Math.min(91 - cint, cint - 65);
//   };

//   for (let i = 0; i < name.length; i++) {
//     if (name[i] !== 'A') {
//       answer += calc(name[i]);

//       if (i === 0) continue;
//       const tmp = rem + name.length - i;
//       cnt = Math.min(cnt, Math.min(tmp + rem, tmp + name.length - i));
//       rem = i;
//     }
//   }

//   cnt = Math.min(rem, cnt);
//   return answer + cnt;
// }

// console.log(solution('JEROEN')); // 56
// console.log(solution('JAN')); // 23
// console.log(solution('JAAAEN')); // 28
// console.log(solution('ABABAAAAABA')); // 10
// console.log(solution('AAAAAAAAABBBBB')); // 10
// console.log(solution('BAAAAABAA')); // 5
// console.log(solution('BBBABAABABABB')); // 20
// console.log(solution('BBABAAAAAAB')); // 9
console.log(solution('BABBAABB')); // 11
// console.log(solution('BBAAAAAAABAB')); // 9
// console.log(solution('BAABBAAA')); // 7
