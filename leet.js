// ROMAN TO int !

// const romanToInt = function(s) {
//     let ans = 0
//     for(let i=0;i<s.length;i++){
//         if(s[i]=='I') ans = ans + 1;
//         else if(s[i]=='V') {
//             ans = ans + 5;
//             if(s[i-1]=='I') ans = ans - 2;
//         }
//         else if(s[i]=='X') {
//             ans = ans + 10;
//             if(s[i-1]=='I') ans = ans - 2;
//         }
//         else if(s[i]=='L') {
//             ans = ans + 50;
//             if(s[i-1]=='X') ans = ans - 20;
//         }
//         else if(s[i]=='C') {
//             ans = ans + 100;
//             if(s[i-1]=='X') ans = ans - 20;
//         }
//         else if(s[i]=='D') {
//             ans = ans + 500;
//             if(s[i-1]=='C') ans = ans - 200;
//         }
//         else if(s[i]=='M') {
//             ans = ans + 1000;
//             if(s[i-1]=='C') ans = ans - 200;
//         }
//     }
    
//     return ans
// };

// let test = romanToInt("III")
// let test2 = romanToInt("MMMXLV")

// console.log(test)
// console.log(test2)


//////////////////////// PALINDROME NUMBER ///////////////////////////

// Given an integer x, return true if x is a 
// palindrome
// , and false otherwise.

const PalindromeNum = (x) => {
    return x == x.toString().split('').reverse().join('');
}
//we want to check if both sides are equal regardless of their type. In this case, X is a number while the computed value is a string

let test = PalindromeNum(343)
console.log(test)