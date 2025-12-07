const clock=document.querySelector('#clock')
setInterval(function(){
    let date=new Date(); // initialization of data class
    clock.innerHTML=`${(date).toLocaleTimeString()}`
}, 1000) 

