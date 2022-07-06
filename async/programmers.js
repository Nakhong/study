// 로또 최고 순위와 최저 순위.

function solution(lottos, win_nums) {
  let answer = [];
  const zeroCount = lottos.filter((n) => n === 0).length; // 0을 걸러냄.
  const matchCount = win_nums.filter((n) => lottos.includes(n)).length; //filter 함수로 번호가 맞는 것을 걸러냄.

  let low = 7 - matchCount >= 6 ? 6 : 7 - matchCount; //low는 0이아닌 맞는 번호들만
  let high = low - zeroCount < 1 ? 1 : low - zeroCount; //high는 0도 포함하여 맞는 갯수.
  answer = [high, low];

  return answer;
}

const lottos = [0, 0, 0, 0, 0, 0];
const win_nums = [38, 19, 20, 40, 15, 25];

const report = [
  "muzi frodo",
  "apeach frodo",
  "frodo neo",
  "muzi neo",
  "apeach muzi",
];
const id_list = ["muzi", "frodo", "apeach", "neo"];

//신규 아이디 추천

// 1단계 new_id의 모든 대문자를 대응되는 소문자로 치환합니다.
// 2단계 new_id에서 알파벳 소문자, 숫자, 빼기(-), 밑줄(_), 마침표(.)를 제외한 모든 문자를 제거합니다.
// 3단계 new_id에서 마침표(.)가 2번 이상 연속된 부분을 하나의 마침표(.)로 치환합니다.
// 4단계 new_id에서 마침표(.)가 처음이나 끝에 위치한다면 제거합니다.
// 5단계 new_id가 빈 문자열이라면, new_id에 "a"를 대입합니다.
// 6단계 new_id의 길이가 16자 이상이면, new_id의 첫 15개의 문자를 제외한 나머지 문자들을 모두 제거합니다. 만약 제거 후 마침표(.)가 new_id의 끝에 위치한다면 끝에 위치한 마침표(.) 문자를 제거합니다.
// 7단계 new_id의 길이가 2자 이하라면, new_id의 마지막 문자를 new_id의 길이가 3이 될 때까지 반복해서 끝에 붙입니다.

function solution(new_id) {
  const answer = new_id
    .toLowerCase() // 1
    .replace(/[^\w-_.]/g, "") // 2
    .replace(/\.{2,}/g, ".") // 3
    .replace(/^\.|\.$/g, "") // 4
    .replace(/^$/, "a") // 5
    .slice(0, 15)
    .replace(/\.$/, ""); // 6
  const len = answer.length;
  return len > 2 ? answer : answer + answer.charAt(len - 1).repeat(3 - len); // 7
}
