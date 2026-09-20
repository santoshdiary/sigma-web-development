let arr=[1,2,3,4,5]

function getAlternates(arr) {
        let outArr=[];
        
        for(let i=0; i<arr.length; i++){
            if(i%2==0){
                outArr.push(arr[i])
            }
        }
        return outArr;
    }

    console.log(getAlternates(arr).toString());
    