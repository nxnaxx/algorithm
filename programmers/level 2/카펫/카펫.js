function solution(brown, yellow) {
  if (brown - yellow * 2 === 6)
    return [yellow + 2, (brown + yellow) / (yellow + 2)];
  else {
    let plusRowColumn = (brown - 4) / 2;
    let yellowRow =
      (plusRowColumn + Math.sqrt(plusRowColumn * plusRowColumn - yellow * 4)) /
      2;
    let yellowColumn = plusRowColumn - yellowRow;
    return [yellowRow + 2, yellowColumn + 2];
  }
}

console.log(solution(10, 2));
console.log(solution(8, 1));
console.log(solution(24, 24));
