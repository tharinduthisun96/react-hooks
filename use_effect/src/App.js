import logo from './logo.svg';
import './App.css';
import React, {useEffect, useState} from 'react';

function App() {
  const [resourceType, setResourceType] = useState('posts')
  const [items, setItems] = useState([])
  console.log("out side");
  useEffect(()=>{ //onmount
    console.log("onmount");

    //unmount
    return () =>{
      console.log("unmount");
    }
  },[resourceType])

  return (
    <div className="App">
      <button onClick={()=>setResourceType('posts')}>POST</button>
      <button onClick={()=>setResourceType('users')}>USERS</button>
      <button onClick={()=>setResourceType('comments')}>COMMENTS</button>
      <h1>{resourceType}</h1>
    </div>
  );
}

export default App;
