let n = 542;


function sumofdigit(n){
    let sum=null;
    while(n/10>=0){
        sum+=n%10;
        n=n/10;
    }
    return sum;
}
console.log(sumofdigit(n));
