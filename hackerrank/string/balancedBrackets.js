// A bracket is considered to be any one of the following characters: (, ), {, }, [, or ].
//
// Two brackets are considered to be a matched pair if the an opening bracket (i.e., (, [, or {) occurs to the left of a closing bracket (i.e., ), ], or }) of the exact same type. There are three types of matched pairs of brackets: [], {}, and ().
//
// A matching pair of brackets is not balanced if the set of brackets it encloses are not matched. For example, {[(])} is not balanced because the contents in between { and } are not balanced. The pair of square brackets encloses a single, unbalanced opening bracket, (, and the pair of parentheses encloses a single, unbalanced closing square bracket, ].
//
// Some examples of balanced brackets are []{}(), [({})]{}() and ({(){}[]})[].
//
// By this logic, we say a sequence of brackets is considered to be balanced if the following conditions are met:
//
// It contains no unmatched brackets.
// The subset of brackets enclosed within the confines of a matched pair of brackets is also a matched pair of brackets.
// Given  strings of brackets, determine whether each sequence of brackets is balanced. If a string is balanced, print YES on a new line; otherwise, print NO on a new line.

function balancedBracket(str){
  let arr = str.split("");

  let matches = {
    "}" : "{",
    "]" : "[",
    ")" : "("
}
  let stack = [];

  for (let i = 0; i < arr.length; i++) {
    let key = arr[i];

    if (!matches[key]) {
      stack.push(key);
    } else if (matches[key] === stack[stack.length - 1]){
      stack.pop();
    } else {
      return false
    }
  }

  if (stack.length === 0){
    return true;
  } else {
    return false;
  }
}
