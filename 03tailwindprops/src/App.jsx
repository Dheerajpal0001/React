import { useState } from 'react'
import './App.css'
// import Card from './components/Card'
import Card1 from './components/card1'

function App() {
  const [count, setCount] = useState(0);
  let myobj = {
    username:"dheeraj",
    age:21,
    myarr : [1,2,3]
  }
  let myarr = [1,2,3,4,5];

  return (
    <>
    <div className='flex items-center gap-10'>
      {/* <h1 className="text-3xl font-bold bg-green-500 p-5 " >Vite with Tailwind</h1> */}
      {/* <Card/> */}


      {/* <Card1 channel="Money D. LUffy" someobj={myobj} somearr={myarr}/> */}
      <Card1 username="Money D. LUffy" name2 = "Naruto Ussumaki" btntxt="Visit Me"/>


    </div>
    </>
  )
}

export default App
