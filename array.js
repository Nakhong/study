//Arrayπ

//1. Declaration μ μΈ
const arr1 = new Array();
const arr2 = [1, 2];

//2.Index position

const fruits = ["π", "π"];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]); //μ¬κ³Ό
console.log(fruits[1]); //λ°λλ
console.log(fruits[2]); //μΈλνμΈ
console.log(fruits[fruits.length - 1]); //λ°λλ

console.clear();
// 3.Looping over an arra λ°°μ΄μ κΈΈμ΄λ§νΌ λ£¨ν.
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
fruits.push("π", "π");
console.log(fruits);
//pop:remove an item from the end
fruits.pop();
fruits.pop();
console.log(fruits);

// unshift : add an item to the benigging
fruits.unshift("π", "π");
console.log(fruits);
//shift : remove an item from the benigging
fruits.shift();
fruits.shift();
console.log(fruits);

//note!! shift, unshift are slowe than pop,push
//splice : remove an item by index position κΌ¬μμ μ΄μ΄μ£Όλ€.
// λ°μ΄ν°λ₯Ό λ£μμ μλ€.

fruits.push("π³", "π₯", "π");
console.log(fruits);
fruits.splice(1, 1);
console.log(fruits);
fruits.splice(1, 1, "π", "π₯");
console.log(fruits);

//combine two arrays concatμ λ°°μ΄κ³Ό λ°°μ΄μ ν©μ³μ€λ€.
const fruits2 = ["π", "π₯¨"];
const newFruits = fruits.concat(fruits2);
console.log(newFruits);

//5.Searching
//find the index
console.clear();
console.log(fruits);
console.log(fruits.indexOf("π³"));
console.log(fruits.indexOf("π³")); //μΈλ±μ€μ λ²νΈλ₯Ό μλ €μ€
console.log(fruits.includes("π³")); //νλΌμ΄νμ΄ μλκ° true or false
console.log(fruits.indexOf("π³")); //νλΌμ΄νμ΄ μμΌλ©΄ -1μ΄ λμ΄

//lastIndeOf
console.clear();
fruits.push("π³");
console.log(fruits);
console.log(fruits.indexOf("π³")); //λ°°μ΄μ μ€λ³΅μ΄ λλ€λ©΄ μ²«λ²μ§Έ indexλ₯Ό μλ €μ€
console.log(fruits.lastindexOf("π³")); // λ°°μ΄μ μ€λ³΅μ΄ μλ€λ©΄ λ§μ§λ§ indexλ₯Ό μλ €μ€
