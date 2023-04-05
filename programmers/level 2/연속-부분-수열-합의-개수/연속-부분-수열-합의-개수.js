function solution(elements) {
  let copyElements = elements.slice();
  let result = new Set(elements);

  result.add(elements.reduce((arr, cur) => arr + cur));

  for (let i = 1; i < elements.length - 1; i++) {
    let playArr = [...copyElements, ...copyElements.slice(0, i)];
    for (let j = 0; j < elements.length; j++) {
      let sum = playArr.slice(j, j + i + 1).reduce((arr, cur) => arr + cur);
      result.add(sum);
    }
  }

  return result.size;
}

console.log(solution([7, 9, 1, 1, 4]));
