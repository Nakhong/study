// Q1. make a string out of an array 배열을 문자열로
{
  const fruits = ["apple", "banana", "orange"];
  const result = fruits.join(",");
  console.log(result);
}

// Q2. make an array out of a string 문자열을 배열로
{
  const fruits = "🍎, 🥝, 🍌, 🍒";
  const result = fruits.split(",", 2); // 구분자를 꼭 정해줘야한다.
  console.log(result);
}

// Q3. make this array look like this: [5, 4, 3, 2, 1]
{
  const array = [1, 2, 3, 4, 5];
  const result = array.reverse(); //reverse는 배열전체를 거꾸로 바꿈.
  console.log(result);
  console.log(array);
}

// Q4. make new array without the first two elements
{
  const array = [1, 2, 3, 4, 5];
  const result = array.slice(2, 5); //slice는 array에 2~5인(5는빼고)덱스를 가져온다
  //splice는 원래배열에서 삭제하기때문에 X
  console.log(result);
  console.log(array);
}

class Student {
  constructor(name, age, enrolled, score) {
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
  }
}
const students = [
  new Student("A", 29, true, 45),
  new Student("B", 28, false, 80),
  new Student("C", 30, true, 90),
  new Student("D", 40, false, 66),
  new Student("E", 18, true, 88),
];

// Q5. find a student with the score 90
{
  const result = students.find((student) => student.score === 90);
  //콜백 함수가 true라면 리턴. 없으면 undefined
  console.log(result);
}

// Q6. make an array of enrolled students 가입 희망자를 필터링.
{
  //filter는 true를 전달 받은 요소만 리턴한다.
  const result = students.filter((student) => student.enrolled);
  console.log(result);
}

// Q7. make an array containing only the students' scores
// result should be: [45, 80, 90, 66, 88]
{
  const result = students.map((students) => students.score);
  console.log(result);
}

// Q8. check if there is a student with the score lower than 50
{
  // some은 50점 이하인 아이가 한명이라도 있으면 true가 리턴된다.
  const result = students.some((student) => student.score < 50);
  console.log(result);

  //every는 모든 요소들이 조건을 충족해야지만 true를 출력한다.
  const result2 = students.every((student) => student.score < 50);
  console.log(result2);
}

// Q9. compute students' average score
{
  //처음에 return 되는 값이 prev로 들어간다.
  //우리가 원하는 시작점부터 어떤 값을 누적할때 사용한다.
  //prev는 전에 값이 들어간다. 0은 이니셜벨류 처음 시작할 값.
  //curr는 현재 값이고 return에는 내가 원하는 값을 정리해준다.
  const result = students.reduce((prev, curr) => prev + curr.score, 0);
  console.log(result / students.length);
}

// Q10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'
{
  //map으로 score를 배열로 만들고 filter로 50보다 낮은 수를 걸러내고
  //걸러낸 값을 문자열로 변경 해준다.
  const result = students
    .map((student) => student.score)
    .filter((score) => score >= 50)
    .join();
  console.log(result);
}

// Bonus! do Q10 sorted in ascending order
// result should be: '45, 66, 80, 88, 90'
{
  //
  const result = students
    .map((student) => student.score)
    .sort((a, b) => a - b)
    .join();
  console.log(result);
}
