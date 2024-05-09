import './App.css'
import Card from './Components/Card'

function App() {
    
  //  console.log(props);
  let myObj = {
    username:"sushil",
    age:22
  };

  let newArr = [1,2,3,4]

  return (
    <>
     
     <h1 className='bg-green-400 rounded-xl text-black p-4 m-4'>Tailwind Test</h1>
      
      <Card username="chai aur card" btntext="clickME"/>
      <Card username="Chai aur card2" />
                  
    

    </>
  )
}

export default App
