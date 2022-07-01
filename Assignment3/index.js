// 1 .Function that reverse a number

function reserveNumber(num) {
  //Coerer to  a string
  let temp = num + "";
  return temp.split("").reverse().join("");
}
console.log("Test 1: input: 123456 expected 654321")
console.log("Test 1 result: ", reserveNumber(123456))


// 2. Func to check palindrome

function isPalindrome(text) {
  return text === reserveNumber(text);
}

console.log("Test 2: input madam expected true ");
console.log("Test 2: ", isPalindrome("madam"));

//3 function that generates all combinations of a string

function allPossibleString(text) {
  //Split all the word into array
  const splitString = text.split("");
  const result = [];
  //Generate all the possible word
  splitString.map((_, index) => {
    splitString
      .slice(index, splitString.length)
      .forEach((item, index, array) => {
        result.push(array.slice(0, index + 1).join(""));
      });
  });
  return result.toString();
}
console.log("Test 3: input dog, expected d,do,dog,o,og,g");
console.log("Test 3 result: ", allPossibleString("dog"));

//4 Function that retuns a passed string with letters in alphabetical order

function sortText(text) {
  return text.split("").sort().join("");
}
console.log("Test 4: input: webmaster expected abeemrstw");
console.log("Test 4 result: ",sortText("webmaster"));

//5 Function that accepts a string and converts the first letter of each word to uppcase.

function eachWordToUpper(text) {
  let split = text.split(" ");
  let newText = [];
  split.map((each) => {
    newText.push(each[0].toUpperCase() + each.slice(1));
  });
  return newText.join(" ");
}

console.log("Test 5: ", eachWordToUpper("the quick brown fox"));

//6 Function that accepts a string and find the longest word within the string.

function longestWord(text) {
  let longest = "";
  const splitText = text.split(" ");

  splitText.map((each) => {
    if (longest.length < each.length) {
      longest = each;
    }
  });

  return longest;
}

console.log("Test 6: ", longestWord("Web Development Tutorial"));

//7 Function that accept a string and counts the number of vowels within the string.

function countVowel(text) {
  //const vowels = ['a', 'e', 'i', 'o', 'u']
  const regex = /[aeiou]/g;
  return text.match(regex).length;
}

console.log("Test 7: ", countVowel("The quick brown fox."));

//8 function accept a number and check the number is prime or not

function isPrime(num) {
  for (let i = 2, s = Math.sqrt(num); i <= s; i++) {
    if (num % i === 0) return false;
  }
  return num > 1;
}

console.log("Test 8: ", isPrime(97));

//9 function return type

function myTypeOf(args) {
  return typeof args;
}

console.log("Test 9: ", myTypeOf(3));

//10 function return the n rows by n columns identity matrix;

function nRowColumn(matrix) {
  return `${matrix.length}x${matrix[0].length}`;
}

console.log("Test 10: ",nRowColumn([[1, 2, 3,5],[4, 5, 6,5],[7, 8, 9,5],[1, 3, 4, 5]]));

//11 function find the second lowest and second greater number;

function findSecondLowestGreatest(array) {
  //Sort the array of number. Remove duplicate by assigned it to a Set.
  const newNum = [
    ...new Set(
      array.sort((a, b) => {
        return a - b;
      })
    ),
  ];

  return `${newNum[1]},${newNum[newNum.length - 2]}`;
}
console.log("Test 11: ", findSecondLowestGreatest([42,234,31,1,5235,123,1,65,32,8546,45]));

//12 Function find a perfect number

function isPerfectNumber(num) {
  const divisors = [];

  for (let i = 0; i < num; i++) {
    if (num % i === 0) divisors.push(i);
  }
  return num === divisors.reduce((acc, curr) => acc + curr, 0);
}

console.log("Test 12: ", isPerfectNumber(8128));

//13 Function computes the factors of a positive integer.

function factorial(n) {
  if (n <= 0) return `not a positive number`;
  if (n == 1) return n;
  return n * factorial(n - 1);
}

console.log("Test 13: ", factorial(10));

//14 Function convert an amount to coins

function amountToCoin(amount, coins) {
  const res = [];
    let am = amount;
    //Reduce the amount by the largest coin and move to smaller if can't
    //Since we have a fix amount of coins, I can use this simple method. This is not scale very well.
    //Noted, coins always in sorted from largest to smalless.
    while (am) {
        if (am >= coins[0]) {
            res.push(coins[0]);
            am -= coins[0];
            continue;
        }
        if (am >= coins[1]) {
            res.push(coins[1]);
            am -= coins[1];
            continue;
        }
        if (am >= coins[2]) {
            res.push(coins[2]);
            am -= coins[2];
            continue;
        }
        if (am >= coins[3]) {
            res.push(coins[3]);
            am -= coins[3];
            continue;
        }
        if (am >= coins[4]) {
            res.push(coins[4]);
            am -= coins[4];
            continue;
        }
    }
  return res.toString();
}
 console.log("Test 14: ", amountToCoin(46, [25, 10, 5, 2, 1]));


//15 Function to compute the value of bn where n is the exponent and  b is the bases.

function exponent (b, n) { 
    if (n == 1) { 
        return b;
    }
    return b * exponent(b,n-1);
}

console.log("Test 15: ", exponent(2,2))

//16 Function to extract unique character from a string.

function extractUniqueCharacter(text) { 
    //Solution using set class
    //The Set property is a set contains only unique character.
    return [... new Set(text)].join("");
}

console.log("Test 16: ", extractUniqueCharacter("thequickbrownfoxjumpsoverthelazydog"))


//17 function to get number of occurences of each letter in specifed string.

function numberOfOccured(text) { 
    const res = {};
    
    text.split("").map(each => { 
        res[each] = res[each] + 1 || 1;
    })
    return res;
}
console.log("Test 17: ", numberOfOccured("abcaBcghjfvcbcbxhgdg"))

//18 Function searching array with a binary search


function binarySearch(target, start, end,array) {
    
    if (start > end) { 
        return false;
    }

    let middle = Math.floor((start + end) / 2);

    if (array[middle] === target) return true;

    // if the middle value is greater than the target we wanted to look for go left.
    if (array[middle] > target) {
        return binarySearch(target, start, middle-1, array);
    } else { 
        // if the middle value is less than the target we wanted to look for go right.
        return binarySearch(target, middle+1, end, array);
    }
}

console.log("Test 18: ", binarySearch(2,0,4,[1,3,5,6,7]))


//19 Function return array element larger than a number.

function elementLarger(target, array) { 
    const res = array.filter(element => element > target);
    return res;
}

console.log("Test 19: ", elementLarger(8, [6, 3, 1, 9, 5, 7, 15]))


//20 Function generates string id of random characters.

function generateStringID(length) { 
    let template = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let res = "";
    for (let i = 0; i < length; i++) { 
        let index = Math.floor(Math.random() * template.length);
        res += template[index];
    }
    return res;
}

console.log("Test 20: ", generateStringID(48))


//21 Function gets all possible subset with a fixed length

function allSubSet(length,array) { 
    res = [];
    for (var i = 0; i < Math.pow(2, array.length); i++) {
    var bin = (i).toString(2), set = [];
    bin = new Array((array.length-bin.length)+1).join("0")+bin;
   
    for (var j = 0; j < bin.length; j++) {
        if (bin[j] === "1") {
            set.push(array[j]);
        }
    }
    res.push(set);
    }
    return res.filter(each => each.length == length);
}

console.log("Test 21 ", allSubSet(2, [1, 2, 3]))


//22 Function return the count of occurrences of specifed letter.

function getOccur(text, target) { 
    const splitText = text.split("");
    const res = splitText.filter(each => each === target);
    return res.length;
}


console.log("Test 22 ", getOccur("microsoft.com","o"))


//23 Find first not repeated character

function noneRepeatedCharacter(text) { 
    const res = numberOfOccured(text);
    for (const k in res) { 
        if (res[k] == 1)
            return k;
    }
}
console.log("Test 23 ", noneRepeatedCharacter("abacddbec"))


//24 Write a javascript function bubble sort algorithm

function bubbleSort (array) {
    let len = array.length;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len; j++) {
            if (array[j] < array[j + 1]) {
                let tmp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = tmp;
            }
        }
    }
    return array;
};

console.log("Test 24 ",bubbleSort([12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]))


//25 Write function accept a list of country names and return longest country name.


function longestCountryNames(names) { 
    let result = '';
    names.forEach((each) => { 
        if (result.length < each.length) { 
            result = each;
        }
    })
    return result;
}


console.log("Test 25 ", longestCountryNames(["Australia", "Germany", "United States of America"]))



//26 Substring without repeating characters.

function longestSubStringNoRepeat(text) { 
    //Find all the substring with no repeat character

    let left = right = 0;
    let unique = new Set();
    let longest = 0;
    let res = null;
    while (right < text.length) { 
        //If the set doesn't have the next char add it
        if (!unique.has(text.charAt(right))) {
            unique.add(text.charAt(right));
            //keep track of the longest subset
            if (unique.size > longest) { 
                longest = unique.size;
                res = Array.from(unique).join('');
            }
            //Move on
            right++;
        } else { 
            //IF the next char is already in the list. 
            //Remove the left side.
            unique.delete(text.charAt(left));
            left++;
        }
    }

    
    return res;

}

console.log("Test 26 ", longestSubStringNoRepeat("abfderddert"))


//27 longest palindrome in a given string.


function longestPadlindrome(text) { 
    //Find all the substring
    const allsubString = [];
    for (let i = 0; i < text.length; i++) { 
        for (let x = i + 1; x <= text.length ; x++) { 
            allsubString.push(text.substring(i, x));
        }
    }
    const res = allsubString.filter(each => { 
        return isPalindrome(each) ? each : false;
    })

    
    //return longest padlindrome
    //Reuse longest country name.
    return longestCountryNames(res);
}

console.log("Test 27 ",longestPadlindrome("abfbba"));

//28 program to pass a javascipt function as parameter


function anotherFunc(callback) { 
    callback();

}

anotherFunc(() => { console.log("This is test 28");})

//29 Write a JavaScript function to get the functionname

function getFuncName(func) { 
    return func.name;
}

function exampleFunction() { 
    return 0;
}

console.log("Test 29 ",getFuncName(exampleFunction));