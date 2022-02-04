function solution(new_id) {
  if (/[A-Z]/g.test(new_id)) {
    new_id = new_id.toLowerCase();
  }

  if (/[^(.\-_a-z0-9)]/g.test(new_id)) {
    new_id = new_id.replace(/[^(.\-_a-z0-9)]/g, '');
  }

  if (/\.{2,}/g.test(new_id)) {
    new_id = new_id.replace(/\.{2,}/g, '.');
  }

  if (new_id.charAt(0) === '.') {
    new_id = new_id.replace(/^./, '');
  } else if (new_id.charAt(new_id.length - 1) === '.') {
    new_id = new_id.replace(/.$/, '');
  }

  if (new_id === '') {
    new_id += 'a';
  }

  if (new_id.length >= 16) {
    new_id = new_id.slice(0, 15);
    if (new_id.charAt(new_id.length - 1) === '.') {
      new_id = new_id.replace(/.$/, '');
    }
  }

  if (new_id.length <= 2) {
    let addStr = new_id.slice(-1);
    for (let i = new_id.length; i < 3; i++) {
      new_id += addStr;
    }
  }

  return new_id;
}
console.log(solution('...!@BaT#*..y.abcdefghijklm'));
console.log(solution('z-+.^.'));
console.log(solution('=.='));
console.log(solution('123_.def'));
console.log(solution('abcdefghijklmn.p'));
