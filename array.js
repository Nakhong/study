//Array🎈

//1. Declaration 선언
const arr1 = new Array();
const arr2 = [1, 2];

//2.Index position

const fruits = ["🍎", "🍌"];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]); //사과
console.log(fruits[1]); //바나나
console.log(fruits[2]); //언디파인
console.log(fruits[fruits.length - 1]); //바나나

console.clear();
// 3.Looping over an arra 배열의 길이만큼 루프.
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// for of
for (let fruit of fruits) {
  console.log(fruit);
}

// forEach
fruits.forEach((fruit) => console.log(fruit));

// 4. Addtion,deletion,copy
//push: add an item to the ed
fruits.push("🍓", "🍑");
console.log(fruits);
//pop:remove an item from the end
fruits.pop();
fruits.pop();
console.log(fruits);

// unshift : add an item to the benigging
fruits.unshift("🍕", "🍔");
console.log(fruits);
//shift : remove an item from the benigging
fruits.shift();
fruits.shift();
console.log(fruits);

//note!! shift, unshift are slowe than pop,push
//splice : remove an item by index position 꼬아서 이어주다.
// 데이터를 넣을수 있다.

fruits.push("🍳", "🥖", "🍖");
console.log(fruits);
fruits.splice(1, 1);
console.log(fruits);
fruits.splice(1, 1, "🍘", "🥗");
console.log(fruits);

//combine two arrays concat은 배열과 배열을 합쳐준다.
const fruits2 = ["🍛", "🥨"];
const newFruits = fruits.concat(fruits2);
console.log(newFruits);

//5.Searching
//find the index
console.clear();
console.log(fruits);
console.log(fruits.indexOf("🍳"));
console.log(fruits.indexOf("🍳")); //인덱스의 번호를 안려줌
console.log(fruits.includes("🍳")); //후라이펜이 있는가 true or false
console.log(fruits.indexOf("🍳")); //후라이펜이 없으면 -1이 나옴

//lastIndeOf
console.clear();
fruits.push("🍳");
console.log(fruits);
console.log(fruits.indexOf("🍳")); //배열에 중복이 된다면 첫번째 index를 알려줌
console.log(fruits.lastindexOf("🍳")); // 배열에 중복이 있다면 마지막 index를 알려줌
