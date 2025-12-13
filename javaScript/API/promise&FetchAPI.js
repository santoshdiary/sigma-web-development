//************** PROMISE IN JS  **********************/

/*

A Promise is an object that represents the eventual(at the end)
completion or failure of an asynchronous operation.

A Promise (OBJECT) in JavaScript is used to handle asynchronous operations like:

fetching data from a server 🌐
reading files
waiting for a task to finish (timer, API call, etc.)

It represents a value that will be available now, later, or never.

------------------------------Promise States-------------------------

A Promise has 3 states:
Pending → initial state (waiting)
Fulfilled → operation completed successfully
Rejected → operation failed (error)

*/

//-------------CREATION OF PROMISE OBJECT-------------

// const dataFetch=new Promise(function(resolve,reject){ // resolve and reject are two parameters of callback function
//     setTimeout(function(){
//         console.log('Asyn taks is completed.....');
//         resolve(); //called resolve method 
//     },2000)
// });

// //-----------------CONSUMING A PROMISE-------------
// //Creating a Promise = producing it
// //Consuming a Promise = handling its result

// dataFetch.then(function(){
//     console.log('Promise is consumed (HANDLED)......');
//     //Consuming a Promise means
//     //👉 using the result of a Promise after it is completed (either success or failure).
// })

//------------------------lets creates another promise----------------------------------

// new Promise(function(res, rs){
//     setTimeout(function(){
//         console.log('Asyn 2 task ..........')
//     },3000)
//     res();

// }).then(function(){
//     console.log("Asyn 2 is solved..........");
    
// })

//--------------------------------------------------------------------------------------

// const promiseThree=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve({username:'santosh23',password:23332})
//     },2000)
// }).then((user)=>{ //NOTE: here 'user' is callback parameter
//     console.log(user)
// })

//-------------------------------------------------------------------------------------------


// const promiseFour=new Promise(function(resol,rej){
//     setTimeout(function(){
//         let error=false;
//         if(!error){
//             resol({username:'santosh23', email:'santosh.skm2019@gmail.com'})
//         }
//         else{
//             rej('ERRO: Somthing went Wrong.....')
//         }
//     },2000)
// })
// promiseFour.then(function(user){ //NOTE: here 'user' is callback parameter
//     console.log(user.username);
//     return user.username; // for chaining 
    
// })
// .then((username)=>{
//     console.log(username);//receieved from upper method (can use chaining)
// })
// .catch((Error)=>{
//     console.log(Error);
    
// })
// .finally(()=> console.log("Either promise resolve or rejected ....")) // The finally() method is used when you want to run some code no matter what happens to the Promise. 


//---------------------------------------------------------------------------------

// const promiseFive = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let error = false;
//         if (!error) {
//             resolve({username: "javascript", password: "123"})
//         } else {
//             reject('ERROR: JS went wrong')
//         }
//     }, 1000)
// });

 //-------------------- modern way to handle result, using asyn/await----------------
async function consumePromiseFive() {
    try{
        const respose= await promiseFive;
        console.log(respose);
    }
    catch(error){
        console.log(error)
    }
}
consumePromiseFive();



// async function getAllUsers(){
//     try{
//         const response=await fetch('https://jsonplaceholder.typicode.com/users') //received string
//         const data= await response.json(); //conveting in jason object that take time 'awit'
//         console.log(data);
        
//     }catch(error){
//         console.log('Error: ', error);
        
//     }
// }
// getAllUsers();

fetch('https://api.github.com/users/santoshdiary')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data); 
})
.catch((errrrr)=>{
    console.log(errrrr)
})

