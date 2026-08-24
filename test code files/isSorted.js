
let arr=[1,2,3,3,4]
let arr1=[1,2,9,3,4]

function isSorted(arr){
 if(arr.length==1) return true;

 for(let i=0; i<arr.length-1; i++){
    if(!(arr[i]<=arr[i+1])) return false;
 }
return true;

}

console.log(isSorted(arr1));
