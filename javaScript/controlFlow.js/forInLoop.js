//********* FOR IN LOOP  ***************/
// Used to iterate mainly for Object ....

let myObj={
    1:"Santosh",
    2:"aman",
    3:'rakesh',
    4:"gukesh"
}
for (const key in myObj) {
//   console.log(key);
// console.log(key+'=>'+myObj[key]); 
}

const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    // console.log(programming[key]);
}

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")
 for (const key in map) {
    console.log(key);// NOTE - CAN'T ITERATE USING FOR IN LOOP 
}