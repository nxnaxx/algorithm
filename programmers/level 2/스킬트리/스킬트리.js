function solution(skill, skill_trees) {
  let result = Array(skill_trees.length).fill(0);

  skill_trees.map((x, i) => {
    let learnedSkill = '';
    for (let j = 0; j < x.length; j++) {
      if (skill.includes(x[j])) {
        learnedSkill += x[j];
        if (learnedSkill.indexOf(x[j]) !== skill.indexOf(x[j]))
          return (result[i] = 1);
      }
      if (result[i] === 1) return;
    }
  });

  return result.filter((x) => x === 0).length;
}

console.log(solution('CBD', ['BACDE', 'CBADF', 'AECB', 'BDA']));
