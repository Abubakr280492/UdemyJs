// primitivesVsObjects.js

//string boolean undifined null are primitives 
// everything else are objects 



//primitives 
var a = 23;
var b = a;
a= 46;
console.log(a);
console.log(b);


// Objects
var obj1 = {
    name: 'abdi',
    age : 28
};
var obj2 = obj1;
obj1.age = 30;
console.log(obj1.age);
console.log(obj2.age);


//Functions

var age = 27;
var obj = {
    name: "jones",
    city: "san fransisco"

}; 

function change(a,b){
    a=30;
    b.city = "Angren";

} 

change(age, obj);

console.log(age);
console.log(obj.city);