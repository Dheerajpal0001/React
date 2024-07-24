import { useState } from 'react'
import './App.css'

function App() {
  // let counter = 15;
  let [counter, setcounter] = useState(15)
  
  const addValue = ()=>{
    // counter += 1;
    // console.log(counter);

    setcounter(counter + 1);
    setcounter(counter + 1);
    setcounter(counter + 1);
    setcounter(counter + 1);
    setcounter(counter + 1);
  }

  const removeValue = ()=>{
    // counter -=1;
    // console.log(counter);

    // setcounter(counter -1);


    setcounter((prev)=> prev - 1);
    setcounter((prev)=> prev - 1);
    setcounter((prev)=> prev - 1);
    setcounter((prev)=> prev - 1);
  }

  return (
    <>
      <h1>React couse with hitesh {counter}</h1>
      <h2>Counter vlaue : {counter}</h2>
      <button onClick={addValue}>Add Value</button>{" "}
      <button onClick={removeValue}>Remove Value</button>


    </>
  )
}

export default App
