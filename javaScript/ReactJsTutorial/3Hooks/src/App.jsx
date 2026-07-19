import { useState } from 'react' // import the 'useState hook' from react library
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {

  //------THE UPDATE NOT REFLECTED ON UI, without using hooks---
  // let counter=10;

  // const increase=()=>{

  //   counter++;
  //   console.log("value added", counter)

  // }
  // const decrease=()=>{
  //   counter--;
  //   console.log("value removed", counter)
  // }
  // return (
  //   <>
  //   <h1>Counter:{counter}</h1>
  //   <button onClick={increase}>Add Value</button>
  //   <button onClick={decrease}>Remove value</button>
  //   <footer>No of counter:{counter}</footer>
  //   <main> this is main secton & no. of count {counter}</main>

  //   </>
  // )
  //------using hook -----


  const [counter, setCount] = useState(10); // here useState is a function that takes initial value & return (current value, render in ui using this funciton )

  
  /*------ understand the syntax ------
    counter (can be any name) = current value
    setCount (also can be any name) = function to update value
    10 = initial value*/

  const increase = () => {

    setCount(counter + 1);
  }

  const decrease = () => {
    setCount(counter - 1);
  }
  return (
    <>
      {/* ----- NOTE: can inject variable in using {}  ---- */}
      <h1>Counter:{counter}</h1> 
      <button onClick={increase}>Add Value</button>
      <button onClick={decrease}>Remove value</button>
      <footer>No of counter:{counter}</footer> 
      <main> this is main secton & no. of count {counter}</main>

    </>
  )
}

export default App
