
function printNum(n){
    if(n==1){
        console.log(n)
        return;
    }

    printNum(n-1);
    console.log(n)
}

printNum(10);