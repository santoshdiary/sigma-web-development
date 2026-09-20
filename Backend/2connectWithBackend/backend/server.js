import express from 'express'

const app = express()

app.get('/', (req,res)=>{
    res.send('this is backend.')
})

app.get('/api/jokes', (req, res) => {
  
    // for sample jokes, creating jokes array of object 
    const jokes=[
  {
    "id": 1,
    "title": "Man of Pool",
    "content": "Why don't skeletons fight each other? They don't have the guts."
  },
  {
    "id": 2,
    "title": "The Infinite Loop",
    "content": "There are 10 types of people in the world: those who understand binary, and those who don't."
  },
  {
    "id": 3,
    "title": "Scarecrow Success",
    "content": "Why did the scarecrow win an award? Because he was outstanding in his field."
  },
  {
    "id": 4,
    "title": "Parallel Lines",
    "content": "Parallel lines have so much in common. It's a shame they'll never meet."
  },
  {
    "id": 5,
    "title": "Bicycle Fatigue",
    "content": "Why couldn't the bicycle stand up by itself? It was two tired."
  }
]
  res.send(jokes)
})

/* CORS - CROSS ORIGIN RESOURCE SHARING 
when backend and frontend operate on different prot then, browser prevent to conncect backend and data sharing
It is solve by uing proxie configuration in vite. when port is white list then anyone can access*/

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000')
})