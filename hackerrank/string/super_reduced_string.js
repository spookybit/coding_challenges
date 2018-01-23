// Steve has a string, , consisting of  lowercase English alphabetic letters. In one operation, he can delete any pair of adjacent letters with same value. For example, string "aabcc" would become either "aab" or "bcc" after operation.
//
// Steve wants to reduce  as much as possible. To do this, he will repeat the above operation as many times as it can be performed. Help Steve out by finding and printing 's non-reducible form!
//
// Note: If the final string is empty, print Empty String .
//
// Input Format
//
// A single string, .
//
// Constraints
//
// Output Format
//
// If the final string is empty, print Empty String; otherwise, print the final non-reducible string.
//
// Sample Input 0
//
// aaabccddd
// Sample Output 0
//
// abd
// Sample Case 0
//
// Steve can perform the following sequence of operations to get the final string:
//
// aaabccddd → abccddd
// abccddd → abddd
// abddd → abd
// Thus, we print abd.
//
// Sample Input 1
//
// baab
// Sample Output 1
//
// Empty String

function super_reduced_string(s){
    let last_check = s.split('');
    let checking = true;

    while (checking) {
        let current_check = linear_check(last_check)
        if (current_check === last_check) {
            checking = false
        }
        last_check = current_check;
    }

    if (last_check.length > 0) {
        return last_check.join('')
    } else {
        return 'Empty String'
    }
}

function linear_check(s){
    for (let i = 0; i < s.length; i++) {
        if (s[i] === s[i+1]) {
            s = s.slice(0, i).concat(s.slice(i+2))
            i--
        }
    }

    return s
}
