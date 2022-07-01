// Promise 비동기를 간편하게 처리할수 있는 기능.
// 자바스크립트 안에 내장된 오브젝트.
// 1.state 상태 이해
// state : pending =>fulfilled or rejected
// Producer vs consumer

// 1. Producer
//  when new Promise is created, the executor runs automatically.
const promise = new Promise((resolve, reject) => {
  //excuter ,
  //doing some heavy work (network,read files)
  console.log("doing somethings");
  setTimeout(() => {
    resolve("hong");
    reject(new Error("no network")); // reject는 실패 했을 때 씀 Error클래스는 자바스크립트에서 제공하는 오브젝트중 하나.
  }, 2000);
});

// 2. Consumers : then , catch , finally 를 통해 값을 가져올수 있따 .

promise //
  .then((value) => {
    console.log("value");
  })
  .catch((error) => {
    console.log(error);
  });
