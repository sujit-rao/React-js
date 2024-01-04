import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() { 

  let [counter, setCounter] = useState(0);
  // let counter = 15;

  const addValue = () => {
    // counter += 1;
    setCounter(counter + 1);
    console.log(counter + 1);
  }

  const removeValue = () => {
    if(counter == 0){
      alert("Not possible anymore");
      return;
    }
    else{
    setCounter(counter - 1);
    console.log(counter - 1);
  }
}

  return (
    <>
      <h1>Hello you</h1>
      <h2>counter value : {counter }</h2>

      <button onClick={addValue}>Add value {counter + 1}</button>
      <br />
      <button onClick={removeValue}>Remove Value {counter -1}</button>
    </>
  )
}

export default App
