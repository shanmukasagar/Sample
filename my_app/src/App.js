
import './App.css';
import { useState,useRef } from 'react';


function App() {
 const [state,setState]=useState(0)
 let obj=useRef('')
  return (
    <>
      
      <input type="text" ref={obj} value={obj.current.value}/>
      
      
    </>
  );
}

export default App;
