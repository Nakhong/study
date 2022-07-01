// HTTP = Hypertext Transfer Protocal
// AJAX = Asynchronous JavaScript And XML
// XHR = XMLHttpRequest 간단하게 서버에 요청하고 받아올수 있다.

// XML = eXtensible Markup Language 확장성 생성 언어
// Html을 획기적으로 개선하여 만든 언어이다.
// XML은 HTML처럼 데이터를 보여주는 목적이 아닌,
//  데이터를 저장하고 전달할 목적으로 만 만들어졌다.

//JSON JavaScript object Notation 요즘은 json을 많이 쓴다.

// 데이터를 주고 받을때 사용
// 텍스트를 사용해 가볍고
// 눈으로 읽기 편하고
// 키와 벨류로 이루어짐
// 데이터를 서버와 주고 받을때 직렬화하고 전송할때 사용
// 프로그래밍 언어나 플랫폼에 상관없이 사용 가능.

// JSON 공부 방법
// Object를 어떻게 직렬화 할지 오브젝트에서 스트링으로
// JSON에서 비직렬화 해서 보낼지 스트링에서 오브젝트로
//오버라이딩
// 1.Object to JSON
// Stringify(obj)
let json = JSON.stringify(true);
console.log(json);

json = JSON.stringify(["apple", "banana"]);
console.log(json);

const rabbit = {
  name: "tori",
  color: "white",
  size: null,
  birthDate: new Date(),
  symbol: Symbol(""), //심볼도 포함하지 않는다.
  jump: () => {
    //함수는 오브젝트에 있는 데이터가 아니기 때문에 제외됨.
    console.log(`${this.name}can jump!`);
  },
};
json = JSON.stringify(rabbit);
console.log(json);

json = JSON.stringify(rabbit, (key, value) => {
  console.log(`key:${key},value:${value}`);
  return key === "name" ? "ellie" : value;
});
console.log(json);

// 2. JSON to Object
// parse(String)
// 함수는 스트링 타입으로 json에 전송됐을때 가져가지 않으므로
// json에 저장된 값을 obj로 만들면 함수의 값은 사라져 있다.
console.clear();
json = JSON.stringify(rabbit);
const obj = JSON.parse(json, (key, value) => {
  console.log(`key:${key},value:${value}`);
  return key === "birthDate" ? new Date(value) : value;
});
console.log(obj);
rabbit.jump();
//obj.jump

console.log(rabbit.birthDate.getDate());
console.log(obj.birthDate.getDate());

// JSON Diff = jsondiff.com 문제를 디버깅 할때 유용하게 사용
// JSON Beautifier =jsonbeautifier.org 프리티어 하는 사이트
// JSON Parser = jsonparser.org 스트링 타입을 오브젝트 타입으로 변경한 값을 볼수있다.
// JSON Validator  json의 오류를 알려준다.

// 유용한 사이트:
// JSON Diff checker: http://www.jsondiff.com/
// JSON Beautifier/editor: https://jsonbeautifier.org/
// JSON Parser: https://jsonparser.org/
// JSON Validator: https://tools.learningcontainer.com/j...
