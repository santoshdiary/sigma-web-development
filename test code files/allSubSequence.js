//we can use include and exclude approach

let str='abc'

let ans=[];
let index=0;
let outPut='';

console.log(subSequence(str, index, ans, outPut))
function subSequence(str, index, ans, outPut){
    //base case
    if(index>str.length-1){
        return ans.push(outPut)
    }

    let char=str.charAt(index)

    //include
        outPut+=char;
        subSequence(str, index+1, ans, outPut)
        outPut = outPut.slice(0, -1)

    //exclude
    subSequence(str, index+1, ans, outPut)

    return ans;
}