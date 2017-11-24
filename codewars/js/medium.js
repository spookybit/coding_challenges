function longestValidParenthesisString(string) {
  let stack = [];
  let longest = 0;

  for (let i = 0, let strlength = string.length; i < strlength; i++) {
    if (string[i] === '(') {
      stack.push(i);
    } else {
      if (!stack.empty) {
        string[stack.length - 1] == '(' ? stack.splice(stack.length - 1) : stack.push(i);
      }
    }
  }

  if stack.empty {return string.length}
  else {
    let a = string.length;
    let b = 0;
    while (!stack.empty) {
      b = stack[stack.length - 1]
      stack.splice(stack.length - 1);
      longest = longest > a-b-1 ? longest : a-b-1;
      a = b;
    }
    longest = longest > a ? longest : a
  }
  return longest;
}
