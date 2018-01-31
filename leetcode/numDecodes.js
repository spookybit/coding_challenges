// A message containing letters from A-Z is being encoded to numbers using the following mapping:
//
// 'A' -> 1
// 'B' -> 2
// ...
// 'Z' -> 26
// Given an encoded message containing digits, determine the total number of ways to decode it.
//
// For example,
// Given encoded message "12", it could be decoded as "AB" (1 2) or "L" (12).
//
// The number of ways decoding "12" is 2.

var numDecodings = function(s) {
  let counter = 1;

    if (s.length === 0 || s[0] === "0") {
        return 0;
    }

    for (let i = 0; i < s.length; i++) {
        if (s[i] === '1' && parseInt(s[i+1]) && s[i+2] !== '0' ||
            s[i] === '2' && parseInt(s[i+1]) >= 1 && parseInt(s[i+1]) <= 6 && s[i+2] !== '0') {
            counter++
        }

        if (parseInt(s[i]) >= 3 && s[i+1] === '0' || s[i] === "0" && s[i+1] === '0') {
            return 0;
        }
    }
    return counter;
};

// cant detect double doubles like '1212' == 'll'

//someone else's solution i need to study
// var numDecodings = function(s) {
//     if(!s || s[0] === '0') {
//         return 0;
//     }
//
//     var nums = [1, 1];
//
//     for(var i = 2; i <= s.length; i++) {
//         var tmp;
//
//         tmp = parseInt(s.substring(i - 1, i));
//
//         if(tmp === 0) {
//             nums[i] = 0;
//         } else {
//             nums[i] = nums[i-1];
//         }
//
//         // console.log(nums)
//         // console.log(s[i-2])
//
//         if(s[i - 2] !== '0') {
//             tmp = parseInt(s.substring(i - 2, i));
//
//             if(0 < tmp && tmp <= 26) {
//
//                 nums[i] += nums[i - 2];
//             }
//         }
//         // console.log(nums)
//     }
//
//     return nums[s.length];
// };
