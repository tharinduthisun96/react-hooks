import logo from './logo.svg';
import './App.css';
import { useEffect, useMemo, useState } from 'react';

function App() {
  const [number, setNumber] = useState(0)
  const [dark, setDark] = useState(false)

  const doubleNumber = useMemo(()=>{
    return slowFunction(number)
  },[number])

  const themeStyle = useMemo(()=>{
    return {
      backgroundColor: dark ? 'black' : 'white',
      color: dark ? 'white' : 'black'
    }
  },[dark])

  useEffect(()=>{
    console.log("Changed")
  },[themeStyle])
  return (
    <div className="App">
      <header className="App-header">
        <input type="number" value={number} onChange={e=>setNumber(parseInt(e.target.value))}/>
        <button onClick={()=>setDark(prev => !prev)}>Change Theme</button>
        <div style={themeStyle}>{doubleNumber}</div>
      </header>
    </div>
  );
}

function slowFunction(num){
  for(let i=0;i<=10000000;i++){}
  return num*2
}

export default App;
