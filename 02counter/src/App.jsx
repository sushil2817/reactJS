import './App.css'
import {useState} from 'react'



function App() {

    let [counter,setCounter] = useState(0)

  // let counter = 5;
    
  const addValue=()=>{
    // console.log(counter);

    if(counter >=20){
      counter=-1;
    }
    counter++;
    setCounter(counter)
  }
  const removeValue=()=>{
    // console.log(counter--);
    if(counter <= 0){
      counter = 0;
      alert("please click the add value button")
    }else{
      counter--;
    }
    
    setCounter(counter)
  }

  return (
    <>
     <h1>Chai aur React</h1>
     <h2>Counter value: {counter}</h2>

     <button
       onClick={addValue}
     >Add value</button>
     <br/>
     <br/>
     <button onClick={removeValue}>reomve value</button>

    </>
  )
}

export default App;
