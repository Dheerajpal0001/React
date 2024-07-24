import { useState } from 'react'

function App() {
  const [color, setcolor] = useState("Olive");

  const randomColor = ()=>{
    let value="";
    let hex = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];

    // let rand = Math.floor(Math.random()*9);
    // console.log(hex[alpha]);
    for(let i=0; i<6;i++){
      let alpha = Math.floor(Math.random()*15);
      value = value + hex[alpha];
    }
    value = "#" + value;
    setcolor(value);  
  }
  return (
  
      <div className='main w-full h-screen duration-200 flex items-center justify-center text-white' style={{backgroundColor:  color}}>{color}
        <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
          <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
            <button className='outline-none px-4 py-1 rounded-3xl text-white bg-red-700 shadow-lg' onClick={()=>{setcolor("Red")}}>Red</button>
            <button className='outline-none px-4 py-1 rounded-3xl text-white bg-blue-700 shadow-lg' onClick={()=>{setcolor("Blue")}}>Blue</button>
            <button className='outline-none px-4 py-1 rounded-3xl text-white bg-green-700 shadow-lg'onClick={()=>{setcolor("Green")}}>Green</button>
            <button className='outline-none px-4 py-1 rounded-3xl text-white bg-yellow-700 shadow-lg'onClick={()=>{setcolor("Yellow")}}>Yellow</button>
            <button className='outline-none px-4 py-1 rounded-3xl  text-white bg-pink-700 shadow-lg' onClick={()=>{setcolor("Pink")}}>Pink</button>
            <button className='outline rounded-3xl px-3 py-1 bg-black' onClick={randomColor}>Random Color</button>
          </div>
        </div>
      </div>
    
  )
}

export default App
