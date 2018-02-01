function checkIPs(ip_array) {
    let res = [];

    ip_array.forEach(function(ip){
        let val = checkIP(ip)
        if (val === "IPv4") {
            res.push("IPv4")
        } else if (val === "IPv6") {
            res.push("IPv6")
        } else {
            res.push("Neither")
        }
    })

    return res;
}

function checkIP(ip){
    ip = ip.split(":")

    let reg = /[^A-Fa-f0-9 ]/
    if (!(ip.length === 4 || ip.length === 8)) {
        return "Neither"
    }

    ip.forEach(function(segment) {
        let regInvalid = reg.test(segment)

        if(segment.length > 4 || regInvalid) {
            return "Neither"
        }
    })

    if (ip.length === 4) {
        return "IPv4"
    } else {
        return "IPv6"
    }
}
