import { useState } from 'react'
import './App.css'
import Card from './components/Card'
import Card2 from './components/card2'

function App() {


  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind test</h1>

      <Card username="chaiaurcode" btnText="click me" />
      <Card username="hitesh" />
      <Card2 />
    </>
  )
}

export default App