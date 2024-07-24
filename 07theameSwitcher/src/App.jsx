import { useState } from 'react'
import './App.css'
import ThemeBtn from './components/ThemeBtn'
import Card from './components/Card'
import { TheameProvider } from './Context/theame'
import { createContext } from 'react'
import { useEffect } from 'react'

function App() {

  const [theameMode, setTheameMode] = useState("light")

  const lightTheame = ()=>{
    setTheameMode("light")
  }
  
  const darkTheame = ()=>{
    setTheameMode("dark") 
  }


  // actual change

  useEffect(() => {
    document.querySelector('html').classList.remove("light","dark")
    document.querySelector('html').classList.add(theameMode)
  }, [theameMode])
  


  return (
    <TheameProvider value={{theameMode, darkTheame, lightTheame}}>
    <div className="flex flex-wrap min-h-screen items-center">
      <div className="w-full">
        <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
          <ThemeBtn />
        </div>

        <div className="w-full max-w-sm mx-auto">
          <Card />
        </div>
      </div>
    </div>
    </TheameProvider>

  )

}

export default App
