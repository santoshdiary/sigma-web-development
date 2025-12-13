
//https://www.geeksforgeeks.org/javascript/javascript-fetch-method/

// fetch('https://api.github.com/users/santoshdiary')
// .then(function(res){
//     return res.json();
// })
// .then(function(data){
//     console.log(data)
// })
// .catch(function(ErroR){
//     console.log('Error:', ErroR)
// })

async function getData(){
   
    try {
    const respone=await fetch('https://api.github.com/users/santoshdiary');
    if(respone.ok){ // ok -The ok read-only property of the Response interface contains a Boolean stating whether the response was successful (status in the range 200-299) or not.
        const data=await respone.json(); //conveting into json 
        console.log(data);
    
    }else{
        console.log("Failed to fetch data.....")
    }
        
    } catch (error) {
        console.log('Error:',error)
    }
}
getData();