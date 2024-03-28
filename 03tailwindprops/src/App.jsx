// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  // const [count, setCount] = useState(0)
  let myObj = {
    username:"sushil",
    age:24
  }

  let newArr = [1,2,3,]

  return (
    <> 
     
     <h1 className='bg-green-400 mb-5 rounded p-4'>This is Tailwinds</h1>
    
        <Card username = "chai aur code" btnText = "click me"/>
        <Card username = "sushil"
          btnText = "visit me"
        />
    </>
  )
}

export default App
