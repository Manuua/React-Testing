//import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import { Exercise3 }from './Excercise3/Exercise3';
import { CheckboxTest } from './Exercise1/checkbox';
import { Exercise2 } from './Exercise2/button';


function App() {
  const [buttonColor, setButtonColor]= useState ('red');
  const newButtonColor = buttonColor === 'red' ? 'blue' : 'red'; 

  return (
  
    <>
    <CheckboxTest />
   <Exercise2 />
   <Exercise3 /> 
    <div>
      <button
        style={{ backgroundColor: buttonColor }}
        onClick={() => setButtonColor(newButtonColor)}
      >
        Change to {newButtonColor}
      </button>
      <input type="checkbox" />
    </div></>
  );
}

export default App;
