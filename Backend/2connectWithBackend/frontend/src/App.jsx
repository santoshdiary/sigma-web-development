import { useEffect, useState } from 'react'
import axios from 'axios';
import './App.css'

function App() {
  const [joke, setJokes] = useState([]);

  useEffect(() => {
    //used axios, that is better than fetch api call, since it provides automatic json conversion and other feature.
    axios.get('/api/jokes')
    .then((res)=>(setJokes(res.data)))
  }, [])

  return (
    <>
      <div>
        <h1>THIS IS JOKES FORNTEND</h1>
        {joke.map((item) => (
          <div key={item.id}>
            <h3>{item.title}</h3>
            <p>{item.content}</p>
          </div>
        ))}
      </div>
    </>
  )
}

export default App
