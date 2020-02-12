



//pass_func_as_arg.js

var  years = [1999,2011,1955,2000,1929];

function arrayCalc(arr, fn){
    var arrRes = [];
    for (var i =0; i< arr.length; i++){
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}

//callback
function calculateAge(el){
    return 2020 - el;
}

function isFullAge(el){
    return el >= 18;
}

function maxHeartRate(el){

    if (el>=18 && el <= 81){
        return Math.round(206.9 - (0.67 * el));
    }else {
        return -1;
    }
}

var ages = arrayCalc(years, calculateAge);
var fullAges = arrayCalc(ages, isFullAge);
var rates = arrayCalc(ages, maxHeartRate);


console.log(ages);
console.log(fullAges);
console.log(rates);