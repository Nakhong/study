function solution(lottos, win_nums) {
  const zeroCount = lottos.filter((e) => e === 0).length;
  const matchCount = win_nums.filter((e) => lottos.includes(e)).length;
  const matchToRank = [6, 6, 5, 4, 3, 2, 1];
  const lowRank = matchToRank[matchCount];
  const highRank = zeroCount === 6 ? 1 : matchToRank[matchCount + zeroCount];

  return [highRank, lowRank];
}

solution();

// 0은 다 맞출수도 있고 다 틀릴수도 있다.

const zeroCount = lottos.filter((e) => e === 0).length;
const matchCount = win_nums.filter((e) => lottos.includes(e)).length;
const matchToRank = [6, 6, 5, 4, 3, 2, 1];
const lowRank = matchToRank[matchCount];
const highRank = zeroCount === 6 ? 1 : matchToRank[matchCount + zeroCount];

return [highRank, lowRank];

const lottos = [44, 1, 0, 0, 31, 25];
const win_nums = [31, 10, 45, 1, 6, 19];
