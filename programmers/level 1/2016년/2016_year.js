function solution(a, b) {
  const dayName = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  return dayName[new Date(`2016/${a}/${b}`).getDay()];
}

console.log(solution(5, 24));