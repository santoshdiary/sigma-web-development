import { useState } from 'react'
import './App.css'
import Card from './components/Card'
import Card2 from './components/card2'

function App() {


  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind test</h1>

      <Card username="chaiaurcode" btnText="click me" />  {/* Here username, btnText are he Prop (Properties) that we can pass to give different value in card  */}
      <Card username="hitesh" />
      <Card2 btnText="Refer here"  Title="This is Santosh"/>
    </>
  )
}

export default App