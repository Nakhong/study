// JavaScript is synchronous. 동기적인 프로그래밍 언어이다.
// Execute the code block in orger after hoisting.
//  호이스팅이 된 이후부터 코드가 우리가 작성한 순서에 맞춰서 하나하나 동기적으로 실행 된다는 뜻.
// hoisting : var,fuction declaration 변수와 또는 함수선언들이 제일 위로 올라가는 것.
console.log("1");
setTimeout(function () { //브라우저 api다. 브라우저에게 먼저 요청함.
  //비동기 대표적인 예
  console.log("2");
}, 1000); //callback 함수 : 나중에 다시 부르는.
console.log("3");

// Synchronous callback
function printImmediately(print) {
  print();
}

printImmediately(() => console.log("hello"));
// Asynchronous callback
function printWithDelay(print, timeout) {
  setTimeout(print, timeout);
}
printWithDelay(() => console.log("async callback"), 2000);

// Callback Hell exaple
class UserStorage {
  loginUser(id, password, onSuccess, onError) {
    setTimeout(() => {
      if (
        (id === "ellie" && password === "dream") ||
        (id === "coder" && password === "academy")
      ) {
        onSuccess(id);
      } else {
        onError(new Error("not found"));
      }
    }, 2000);
  }

  getRoles(user, onSuccess, onError) {
    setTimeout(() => {
      if (user === "ellie") {
        onSuccess({ name: "ellie", role: "admin" });
      } else {
        onError(new Error("no access"));
      }
    }, 1000);
  }
}

const UserStorage = new UserStorage();
const id = prompt("enter your id");
const password = prompt("enter your password");
UserStorage.loginUser(
  id,
  password,
  (user) => {
    UserStorage.getRoles(
      user,
      (userWithRole) => {
        alert(`Hello ${userWithRole.name},you have a ${user.role}role`);
      },
      (error) => {
        console.log(error);
      }
    );
  },
  (error) => {
    console.log(error);
  }
);
