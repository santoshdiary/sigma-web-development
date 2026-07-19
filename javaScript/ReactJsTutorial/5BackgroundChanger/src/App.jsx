import { useState } from 'react'





function App() {

  const [color, setColor] = useState('black');

  return (
    <div className="screen" style={{backgroundColor:color}}>
    <div className='main' >
      <h1>Background Changer </h1>
      <div className="buttons">
        <button onClick={() => { setColor('red') }}>Red</button>
        <button onClick={() => setColor('green')}>Green</button>
        <button onClick={() => { setColor('blue') }}>Blue</button>
        <button onClick={() => { setColor('yellow') }}>Yellow</button>
        <button onClick={() => { setColor('orange') }}>Orange</button>
      </div>
    </div>
    </div>
  )
}

export default App
