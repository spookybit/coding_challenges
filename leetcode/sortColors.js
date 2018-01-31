var sortColors = function(nums) {
    let hashMap = {red: 0, white: 0, blue: 0}
    let res = [];

    nums.forEach(function(i) {hashMap[i] += 1})

    Object.keys(hashMap).forEach(function(i){
        let newb = new Array(hashMap[i]).fill(i)
        res = res.concat(newb)
    })

    return res;
};
