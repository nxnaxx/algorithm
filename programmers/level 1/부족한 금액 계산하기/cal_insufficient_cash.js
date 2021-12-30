<<<<<<< HEAD
function solution(price, money, count) {
  for (let i = 1; i <= count; i++) {
    money -= price * i;
  }
  return money < 0 ? Math.abs(money) : 0;
}

console.log(solution(3, 20, 4));
=======
function solution(price, money, count) {
  for (let i = 1; i <= count; i++) {
    money -= price * i;
  }
  return money < 0 ? Math.abs(money) : 0;
}

console.log(solution(3, 20, 4));
>>>>>>> f42f80fed02553712d01414dd0913b104e1023a5
