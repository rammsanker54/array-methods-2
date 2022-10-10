//pop//
var plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'];
console.log(plants.pop());
console.log(plants);

//filter//
var names = ['laptop', 'mobile', 'bike', 'intellectual', 'manikandan', 'ranjithkumar'];

var result = names.filter(words=>words.length>6);

console.log(result);

//map//
var a = [1,4,9,16,25,36]
var b=a.map((Math.sqrt))
console.log(b)


//shift//
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.shift();
console.log(fruits);

//sort method//
const fruit= ["Banana", "Orange", "Apple", "Mango"];
fruit.sort();
console.log(fruit);



//TODAY//
//
// unshit
let arr = [4, 5, 6];

arr.unshift(1, 2, 3);
console.log(arr);
// [1, 2, 3, 4, 5, 6]  add the value in first of index


//slice
const f = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = f.slice(1,3);
console.log(citrus)
//


// //every gives true or false
// var mark = [32, 33, 16, 40];

// mark.every(checkmark)
// console.log(checkmark > 18);


//find//
const array1 = [5, 12, 8, 130, 44];

const found = array1.find(element => element > 10);

console.log(found);



//every   replies in true or false
const array2 = [15, 12, 28, 130, 44];

const foundd = array2.every(element => element > 11);

console.log(foundd);



//forEach
// array.forEach(element => {
    
// });
let sum = 0;
const numbers = [1,2,3,4,5];
numbers.forEach(suming);

function suming(item) {
  sum += item;
}
console.log(sum);





