import { useCallback, useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [numAllowed, setNumAllowed] = useState(false);
  const [charAllowed, setChar] = useState(false);
  const [passwrod, setPassword] = useState("");
  const [copytext, setText] = useState("Copy");

  // useRef hook
  let passwordRef = useRef(null); // used to take reference of an variable

  let passwordGenerator = useCallback(() => {
    //usecallback ek hook hai, jo kisi function ko remember (memoize) karta hai taaki har re-render par naya function object na bane.

    let temp = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numAllowed) str += "0123456789";
    if (charAllowed) str += "@*&^%$#!";

    for (let i = 1; i <= length; i++) {
      let index = Math.floor(Math.random() * str.length + 1);
      temp += str.charAt(index);
    }
    setPassword(temp);
  }, [length, numAllowed, charAllowed, setPassword]);

  useEffect(() => {
    // useEffect React ko bolta hai ki component render hone ke baad koi kaam karna hai.
    passwordGenerator();
  }, [length, numAllowed, charAllowed, passwordGenerator]); //these are the dependies that make this function to Re executable when changed anything on it

  let cpybtn = document.querySelector(".copybtn");

  const copyToClipboard = useCallback(() => {
     passwordRef.current?.select();
    window.navigator.clipboard.writeText(passwrod); //dom properties  to 
    setText("Copied");
  }, [passwrod]);

  useEffect(() => { //change the btn text when passwordGenerator method execute again
    setText("Copy");
  }, [passwrod]);



  return (
    <>
      <div className="main">
        <h1>Password Generator</h1>
        <div className="box1">
          <input
            type="text"
            placeholder="Password"
            readOnly
            value={passwrod}
            ref={passwordRef}
          />
          <button onClick={copyToClipboard} className="copybtn">
            {copytext}
          </button>
        </div>
        <div className="box2">
          <input
            type="range"
            id="slider"
            min={7}
            max={20}
            value={length}
            onChange={(e) => {
              setLength(e.target.value);
            }}
          />
          <label htmlFor="slider"> Length: {length}</label>
          <input
            type="checkbox"
            id="num"
            onChange={(e) => setNumAllowed((prev) => !prev)}
          />
          <label htmlFor="num">Number</label>
          <input
            type="checkbox"
            id="char"
            onChange={(e) => setChar((prev) => !prev)}
          />
          <label htmlFor="char">Character</label>
        </div>
      </div>
    </>
  );
}

export default App;
