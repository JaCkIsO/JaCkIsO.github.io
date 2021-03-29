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
    let vowel = x.toLowerCase().trim().charAt(0);
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

// Q8
function computeSumOfSquares(array){
    return array.map(element => element * element)
                .reduce((a, b) => a + b);
}
// console.log(computeSumOfSquares([1,2,3,4]));

// Q9
function printOddNumbersOnly(array){
    array.filter(element => element % 2 != 0)
        .forEach(element => console.log(element));
}
// printOddNumbersOnly([1, 2, 3, 4, 5, 6, 7, 8, 9]);

// Q10
function computeSumOfSquaresOfEvensOnly(array){
    return array.filter(element => element % 2 == 0)
                .map(element => element * element)
                .reduce((a, b) => a + b);
}
// console.log(computeSumOfSquaresOfEvensOnly([1, 2, 3, 4, 5]));

// Q11
function sumWithReduce(array){
    return array.reduce((a, b) => a + b);
}

function multiplyWithReduce(array){
    return array.reduce((a, b) => a * b);
}
// console.log(sumWithReduce([1, 2, 3, 4, 5]));
// console.log(multiplyWithReduce([1, 2, 3, 4, 5]));

// Q12
function findSecondBiggest(array){
    let biggest = array[0];
    let secondBiggest = array[1];
    if (biggest < secondBiggest){
        biggest = secondBiggest;
        secondBiggest = array[0];
    }
    for (let i = 2; i < array.length; i++) {
        if(array[i] > biggest){
            secondBiggest = biggest;
            biggest = array[i];
        } else if (array[i] > secondBiggest){
            secondBiggest = array[i];
        }
    }
    return secondBiggest;
}
// console.log(findSecondBiggest([1,2,3,4,5]));

// Q13
function printFibo(len, a, b){
    let fibArray = [];
    fibArray.push(a);
    if (len > 1){
        fibArray.push(b);
    }
    while (len > fibArray.length){
        fibArray.push(fibArray[fibArray.length-1] + fibArray[fibArray.length-2])
    }
    return fibArray;
}
// console.log(printFibo(6, 0, 1));