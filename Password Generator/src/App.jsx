import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [length, setlength] = useState(8)
  const [numberAllowed, setnumberAllowed] = useState(false);
  const [charAllowed, setcharAllowed] = useState(false)
  const [password, setpassword] = useState("")

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%%^&**()_+=-{}[]~`"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);

      pass += str.charAt(char)
    }

    setpassword(pass)


  }, [length, numberAllowed, charAllowed])


  // const passwordGenerator = ()=>{
  //   let pass = "";
  //   let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

  //   if (numberAllowed) str += "0123456789";
  //   if (charAllowed) str += "!@#$%%^&**()_+=-{}[]~`"

  //   for (let i = 1; i <= length; i++) {
  //     let char = Math.floor(Math.random() * str.length + 1);

  //     pass += str.charAt(char)
  //   }

  //   setpassword(pass)
  // }


  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, charAllowed, passwordGenerator])


  const passwordRef = useRef(null)


  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 5);
    window.navigator.clipboard.writeText(password)
  }, [password])

  return (
    <>
      <div className='w-full max-w-xl mx-auto shadow-md rounded-lg  px-4 py-3 my-8 bg-gray-800 text-xl '>
        <h1 className='text-white  text-center mb-7'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-5'>
          <input type="text" value={password} className='outline-none w-full py-1 px-3' placeholder='Passward' readOnly ref={passwordRef} />
          <button className='outline-none py-3 px-5 bg-blue-400 text-white shrink-0 font-semibold' onClick={copyPasswordToClipboard}>Copy</button>
        </div>
        <div className='flex text-sm gap-x-2 text-center justify-around'>
          <div className='flex items-center gap-x-2 '>
            <input type="range" min={6} max={100} value={length} className='cursor-pointer' onChange={(e) => {
              setlength(e.target.value)
            }} />
            <label htmlFor="" className='text-white font-semibold text-base pr-6'>Length: {length}</label>

            <input type="checkbox" defaultChecked={numberAllowed} id='checkbox' className='cursor-pointer' onChange={() => {
              setnumberAllowed((prev) => !prev)
            }} />
            <label htmlFor="" className='text-white font-semibold text-base pr-6'>Number</label>

            <input type="checkbox" defaultChecked={charAllowed} id='charinput' onChange={() => {
              setcharAllowed((prev) => !prev)
            }} />
            <label htmlFor="" className='text-white font-semibold text-base'>Character</label>
          </div>
        </div>
        <div className='w-full mx-auto mt-7 mb-4 flex justify-center'>
          <button className='text-white bg-blue-700 px-4 py-2 rounded-lg' /*onClick={passwordGenerator}*/>Generate Password</button>
        </div>
      </div>
    </>
  )
}

export default App
