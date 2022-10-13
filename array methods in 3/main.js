//includes methods returns in boolean datatype//
var fruits = ["ramm", "mani", "lokesh", "ranjith"];
var a=fruits.includes("ranjith");
console.log(a);

//splice gives array based on the conditions//
var a =["1","2","3","8","4","5","6","7"];
console.log(a.splice(4,1))

//indexOf//
const f = ["Banana", "Orange", "Apple", "Mango"];
let index = f.indexOf("Banana");
console.log(index)

//some// return boolean data types
var number=[1,2,3,4,5];
var ten= (element) =>element>10;
console.log(number.some(ten));

//lastIndex//
var num=["ramm", "mani", "lokesh", "ranjith","vijay","lokesh","ajith"];
var lastin=num.lastIndexOf("lokesh");
console.log(lastin)

// //key//
// var keey= ["Banana", "Orange", "Apple", "Mango"];
// console.log(keey.key())




//number divisible by 3?
var n = Math.floor((Math.random() * 1000) + 1);
if (n) {
  var output = "";
  if (n % 3 == 0)
    output += "Rock";
  if (n % 5 == 0)
    output += "star";
  prompt(output || n);
}



var numbbb= [1,2,3,6,9,12,15,18,21];
for(let i=0;i<=numbbb.length;i++){
    if (numbbb[i]%3==0){
        console.log(numbbb[i])
    }
}

var numbbb= [1,2,3,6,9,12,15,18,21];
var three=numbbb.filter(element=>element%3==0)
console.log(three);