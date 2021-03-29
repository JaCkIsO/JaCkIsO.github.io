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

// Q4
function sum(array){
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i]; 
    }
    return sum;
}

function multiply(array){
    let product = 1;
    for (let i = 0; i < array.length; i++) {
        product *= array[i];
    }
    return product;
}
// console.log(sum([1,2,3,4]));
// console.log(multiply([1,2,3,4]));

// Q5
function reverse(str){
    let reversedStr = "";
    for (let i = str.length - 1; i >= 0; i--){
        reversedStr = reversedStr.concat(str[i]);
    }
    return reversedStr;
}
// console.log(reverse("abcdefg"));

// Q6
function findLongestWord(array){
    let lenOfLongest = 0;
    for (let i = 0; i < array.length; i++) {
        if(lenOfLongest < array[i].length){
            lenOfLongest = array[i].length
        }
    }
    return lenOfLongest;
}
// console.log(findLongestWord(["a", "ab", "abc"]));

// Q7
function filterLongWords(array, len){
    let filteredArr = [];
    for (let i = 0; i < array.length; i++) {
        if(array[i].length > len){
            filteredArr.push(array[i]);
        }
    }
    return filteredArr;
}
// console.log(filterLongWords(["a", "ab", "abc"], 1));

