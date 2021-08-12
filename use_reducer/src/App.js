import logo from './logo.svg';
import './App.css';
import React, {useState, useReducer} from 'react';

const reducer = (state, action)=>{
  switch(action.type){
    case "increment":
      return { ...state, count: state.count +1}
    case "type":
      return {firstName: action.firstName, count:state.count+1}
    default:
        return state;
  }
}

function App() {

  
  const [{count, firstName}, dispatch] = useReducer(reducer, {
    count: 0,
    firstName: ""
  })


  return (
    <div className="App">
      <header className="App-header">
        <input onChange={()=>dispatch({type:"type"})} value={firstName}></input>
        {count}
        <button onClick={()=>dispatch({type:"increment"})}>+</button>
      </header>
    </div>
  );
}

export default App;
