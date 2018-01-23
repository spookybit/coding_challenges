// beautiful numbers = 123456789101112 because 1,2,3,4,5,6,7,8,9,10,11,12
// no 01 into 02 like '10203'

//num is a string here
function beautifulNumbers(num) {
    if (num[0] === '0') {
        return false
    }

    let len = num.toString().length

    for (let i = 1; i < len/2+1 ; i++) {
        let n = num;
        let start = n.slice(0,i);
        n = n.slice(i)
        let next = (parseInt(start)+1).toString();
        while(n) {
            if (n.startsWith(next)) {
              n = n.slice(next.length)
              start = next
              next = (parseInt(start)+1).toString();
            } else {
                break;
            }
        }
        if (n === '') {
          return true
        }
    }
    return false
}
