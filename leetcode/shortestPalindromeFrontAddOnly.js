var shortestPalindrome = function(s) {
    if(s.length <= 1 || isPal(s)) {
        return s;
    }

    let addOn = '';

    for (let i = s.length - 1; i > -1; i--) {
        addOn += s[i];
        if (isPal(s.slice(0, i))){
            break;
        }
    }

    return addOn + s;
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
