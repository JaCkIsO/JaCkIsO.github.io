"use strict";
//  Q1 
function max(x, y){
    if(x > y){
        return x;
    } else {
        return y;
    }
}
// console.log(max(5,6));

// Q2
function maxOfThree(x, y, z){
    if(x > y && x > z){
        return x;
    } else if (y > x && y > z){ 
        return y;
    } else {
        return z;
    }
}
// console.log(maxOfThree(4,7,1));

// Q3
function isVowel(x){
    let vowel = x.trim().charAt(0);
    return /[aeiou]/.test(vowel);
}
// console.log(isVowel('a'));

