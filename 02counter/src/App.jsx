import { useState } from 'react';
import './App.css'

function App() {

 let [counter,setCounter] =  useState(5)

  const addValue = () =>{
    // counter = counter+1;
    if(counter >=20){
      setCounter(counter = 0)
      alert("you reached over 20 so the value is set to 0")
    }else{
      
      // setCounter(counter+1)
      // setCounter(counter+1)
      // setCounter(counter+1)
      // setCounter(counter+1)
      // setCounter(counter+1)
      // above code did not gave 10 because parcel send value in packets so the value is finally 5
      setCounter((prevCounter)=>prevCounter + 1)
      setCounter((prevCounter)=>prevCounter + 1)
      setCounter((prevCounter)=>prevCounter + 1)
      setCounter((prevCounter)=>prevCounter + 1)
      // above code gave you 9 ans when you click because setCounter get a call back (hidden feature ) so the  value change 
    }
  }
  
  const removeValue = () =>{
    if(counter <= 1){
      setCounter(counter = 0)
      alert("you reached below 0 so the value is set to 0")
    }else{
      setCounter(counter-1);
    }
  }


  return (
    <>
       <h1>React aur Counter</h1>
       <h2>Counter: {counter}</h2>

       <button 
       onClick={addValue}
       >Add value {counter}</button>
       <br /> <br />
       <button 
          onClick = {removeValue}
        >remove value {counter}</button>

       <p>Counter Value:  {counter}</p>
    </>
  )
}

export default App
