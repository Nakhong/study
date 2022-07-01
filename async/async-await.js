// async & await
// clear style of using promise :)

// 1. async
async function fetchUser() {
  // do network reqeust in 10 secs....
  return "ellie";
}

const user = fetchUser(); //async는 promise를 간편하게 사용할수 있다
user.then(console.log);
console.log(user);

// 2. await ✨
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
// aswait은 async 안에서만 사용 가능하다.
async function getApple() {
  await delay(2000);
  return "🍎";
}

async function getBanana() {
  await delay(1000);
  return "🍌";
}

async function pickFruits() {
  const applePromise = getApple(); // 프로미스를 만들자 마자 실행됨 잘 사용안함.
  const bananaPromise = getBanana();
  const apple = await applePromise;
  const banana = await bananaPromise; //동기화 시켜줌
  return `${apple} + ${banana}`;
}

pickFruits().then(console.log);

// 3. useful APIs ✨
function pickAllFruits() {
  //모든 프로미스들이 병렬적으로 모여질때까지 기다리는 api.
  return Promise.all([getApple(), getBanana()]).then((fruits) =>
    fruits.join(" + ")
  );
}
pickAllFruits().then(console.log);

function pickOnlyOne() {
  return Promise.race([getApple(), getBanana()]);
} //가장 먼저 실행되는 걸 실행함.

pickOnlyOne().then(console.log);
