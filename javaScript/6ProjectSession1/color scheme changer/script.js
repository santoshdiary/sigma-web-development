let buttons=document.querySelectorAll('.button');
let body=document.querySelector('body')

buttons.forEach(function (btn){
  // console.log(btn) 
  btn.addEventListener('click', function (e){ //  you'll see a parameter specified with a name such as event, evt, or e. This is called the 'event object', and it is automatically passed to event handlers to provide extra features and information. 
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