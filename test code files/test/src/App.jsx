import { useState } from 'react'
import Otp from './Otp.jsx'


function App() {
  const [user, setUser] = useState({ name: "John Doe", age: 31, city: "LA" });

  const handleChange = (e) => {
    const { name, value } = e.target; //targeting element or value that fired this event 

    setUser((prevUser) => ({ ...prevUser, [name]: value }));
  };
  





  const [items, setItems] = useState([
    { id: 0, name: "Item 1" },
    { id: 1, name: "Item 2" },
    { id: 2, name: "Item 3" },
  ]);

  const addItem = () => {
    const newItem = { id: items.length + 1, name: `Item ${items.length + 1}` };
    setItems((prevItems) => [...prevItems, newItem]); // Creates a new array
  };

  const removeItem = (id) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id)); // Creates a new array and check condition only true ones pushed on new array
  };





  const [isVisible, setIsVisible] = useState(false);

  const handleToggleVisibility = () => {
    setIsVisible(!isVisible);
  }



  return (
    <>
      <div>
        <h1>User Profile</h1>
        <p>Name: {user.name}</p>
        <p>Age: {user.age}</p>
        <p>City: {user.city}</p>

        <h2>Update User Age </h2>
        <input type="number" name="age" value={user.age} onChange={handleChange} />

        <h2>Update User Name </h2>
        <input type="text" name="name" value={user.name} onChange={handleChange} />

        <h2>Update User City </h2>
        <input type="text" name="city" value={user.city} onChange={handleChange} />
      </div>
      {/* ------------- how to change state in array--------------------------*/}


      <div>
        <button onClick={addItem}>Add Item</button>
        <ul>
          {items.map((item) => (
            <li key={item.id}>
              {item.name}{" "}
              <button onClick={() => removeItem(item.id)}>Remove</button>
            </li>
          ))}
        </ul>
      </div>

      {/* ------------- conditional rending --------------------------*/}


      <div id="toggle-container">
        <button onClick={handleToggleVisibility} id="toggle-button">
          {isVisible ? "Hide" : "Show"} Message
        </button>
        {isVisible && <p id="message">I love freeCodeCamp!</p>} {/* only redered when condition goes to true */}
      </div>
         
         
          <Otp/>



     



   


    </>
  )
}

export default App
