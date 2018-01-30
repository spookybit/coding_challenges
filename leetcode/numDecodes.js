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
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '1' && s[i+1] || s[i] === '2' && parseInt(s[i+1]) <= 6) {
            counter++
        }
    }
    return counter;
};
