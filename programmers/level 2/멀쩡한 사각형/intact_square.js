function solution(w, h) {
  let a = w < h ? w : h;
  let b = w < h ? h : w;

  while (b !== 0) {
    let c = a % b;
    a = b;
    b = c;
  }
  return w * h - (w + h - a);
}
console.log(solution(8, 12));
