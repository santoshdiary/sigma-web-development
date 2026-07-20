import { useState } from 'react'
import Login from './Login'
import Profile from './Profile'

import './App.css'
import UserContextProvider from './context/userContextProvider'


function App() {
  const [count, setCount] = useState(0)

  return (
    <UserContextProvider>
      {/*in this section, all the component that are going to rendered, have access of userContext*/}

    <Login />
    <Profile/>

     
    </UserContextProvider>
  )
}

export default App
