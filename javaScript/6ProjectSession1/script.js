let buttons=document.querySelectorAll('.button');
let body=document.querySelector('body')

buttons.forEach(function (btn){
  // console.log(btn) 
  btn.addEventListener('click', function (e){ // here e=event object 
    console.log(e)
    console.log(e.target) // tell us evet is coming from where? 
    if(e.target.id==='grey'){
      body.style.backgroundColor=e.target.id;
    }
     if(e.target.id==='white'){
      body.style.backgroundColor=e.target.id;
    } 
    if(e.target.id==='blue'){
      body.style.backgroundColor=e.target.id;
    } 
    if(e.target.id==='yellow'){
      body.style.backgroundColor=e.target.id;
    }
     if(e.target.id==='purple'){
      body.style.backgroundColor=e.target.id;
    }  
    
  })
})