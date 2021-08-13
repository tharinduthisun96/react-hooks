import logo from './logo.svg';
import './App.css';
import { useEffect, useRef, useState } from 'react';

function App() {
  //const [renderCount, setRenderCount] = useState(0) // if use this it will be a endless loop
  const [name, setName] = useState("")
  const renderCount = useRef(1)

  useEffect(()=>{
    renderCount.current = renderCount.current + 1
    //setRenderCount(prev => prev +1)  // never end
  })

  return (
    <div className="App">
      <header className="App-header">
       <input value={name} onChange={e=> setName(e.target.value)}/>
       <div>My Name is {name}</div>
       <div>Render count is = {renderCount.current}</div>
      </header>

    </div>
  );
}

export default App;
