
let str='level';
let str1='santosh';
let sIndex=0;
let eIndex=str.length-1;

function isPalindrom(string, sIndex, eIndex){
    //base case
    if(sIndex>eIndex){
        return true;
    }

    if(string.charAt(sIndex)!==string.charAt(eIndex)){
        return false;
    }

    return isPalindrom(string,sIndex+1,eIndex-1)


}

console.log(isPalindrom(str1,sIndex,eIndex));
