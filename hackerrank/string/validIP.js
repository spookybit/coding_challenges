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
    ip = ip.split(":");
    let regIPv6 = /[^A-Fa-f0-9 ]/;
    let regIPv4 = /[^0-9]/;

    if (!(ip.length === 4 || ip.length === 8)) {
        return "Neither"
    }

    for (let i = 0; i < ip.length ; i++) {
      let segment = ip[i];
      let regInvalid = ip.length === 8 ? regIPv6.test(segment) : regIPv4.test(segment)

      if(segment.length > 4 || regInvalid) {
            return "Neither"
        }
    }

    if (ip.length === 4) {
        return "IPv4"
    } else {
        return "IPv6"
    }
}
