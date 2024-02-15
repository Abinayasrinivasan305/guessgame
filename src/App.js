import {useState} from "react";
import Result from "./Result";
import './App.css';

const secretcode=Math.floor(Math.random()*50)+1;

function App() {
  const [input,setInput]=useState("")

  function handleChange(e){
    setInput(e.target.value);
  }

  return (
    <div className="container">
      <div className="inputcontainer">
        <label htmlFor="input1">Guess the Number(1 to 50)</label><br/>
        <input type="text" id="input1" className="inputtext" onChange={handleChange}/>
      </div>
      <Result secretnumber={secretcode} inputvalue={input}/>
    </div>
  );
}

export default App;


