var shortestPalindrome = function(s) {
    if(s.length <= 1 || isPal(s)) {
        return s;
    }

    let addOn = '';

    for (let i = s.length; i > -1; i-- ){
      if (isPal(s.slice(0,i))){
        addOn = s.slice(i)
        break;
      }
    }

    let addUp = ''

    for (let i = 0, len = s.length - 1; i < len + 1; i++) {
      if (isPal(s.slice(i, len))) {
        addUp = s.slice(0, i-1);
        break;
      }
    }
    let aa = addOn+s
    let bb = s+addUp;

    if(aa.length>bb.length) {
      return bb;
    } else {
      return aa;
    }
};

function isPal(str) {
    if (str.length === 0) {
        return true;
    }

    let word = str.split('');
    for(let i = 0, len = word.length-1; i < len ; i++, len--){
        if(word[i] !== word[len]){
            return false;
        }
    }

    return true;
}
