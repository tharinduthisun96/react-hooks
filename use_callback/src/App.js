
import './App.css';
import React, {useState, useCallBack} from 'react';
import List from './List';

function App() {
  const [number, setNumber] = useState(1)
  const [name, setName] = useState("")
  
  const increment = () =>{
    setNumber(number + 1)
    console.log("number function")
  }
  const change = (str) =>{
    setName(str)
    console.log("change function")
  }

  const getItems = () =>{
    return [number, number +1, number+2]
  }



  return (
    <div className="App">
      <button onClick={increment}>+</button>
      <h1>{name}</h1>

      
      <input onChange={(e)=>change(e.target.value)}></input>

      <List getItems={getItems}/>
    </div>
  );
}

export default App;
