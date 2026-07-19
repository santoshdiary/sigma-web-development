function customRender(reactElement,container){
    // const domElement=document.createElement(reactElement.type);

    // domElement.innerHTML=reactElement.Children;
    // domElement.setAttribute('href', reactElement.props.herf)
    // container.appendChild(domElement);
    // setting different properties one by one makes it unoptimised hence, better approach



    const domElement=document.createElement(reactElement.type) // 'a' tag create karo
    domElement.innerHTML=reactElement.insideText  // innerText dalo

    // now, add different properties on this tag(element) using loop
    for(const prop in reactElement.props){
        if(prop==='insideText') continue; // agar bychance inner text wala property aa jaye jo ki already upar add kar chuke hai use skip kardo
        domElement.setAttribute(prop, reactElement.props[prop]) // eg  (href, 'https://google.com') key, value 
    }
    container.appendChild(domElement);


}

function customRender1(reactElement, containerToAdd){
    const domElement=document.createElement(reactElement2.type)

    for(const prop in reactElement2.props){ // prop=key 
        if(prop===reactElement2.props.src) continue;
        domElement.setAttribute(prop, reactElement2.props[prop]) 
    }
    containerToAdd.appendChild(domElement);
}


const reactElement={  // rendering "anchor tag" element using our own method 
    type:'a',
    props:{            // properties
        href:'https://google.com',
        target:'_blank'
    },
    insideText:'click me to visit google'
}

const reactElement2={
    type:'img',
   props:{
     src:'leaf.jpg',
    alt:'image of leaf',
    height: '200px',

   }

}
const mainContainer=document.querySelector('#root');
const container1=document.querySelector('.main')

customRender(reactElement, mainContainer) // render karna hai, reactElement ko mainContainer me
customRender1(reactElement2, container1)  