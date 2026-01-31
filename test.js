function sumMul(n,m){
    if(n<=0 || m<=0) return "INVALID"
    let res = 0
    let count = n
    while(count <= m){
        res+= res+n
        count+=n
    }
    return res
}

console.log(sumMul(2,9))