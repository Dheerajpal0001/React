import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Youtube from './youtube.jsx'

const reactElement = {
  type: 'a',
  props: {
      href: "https://google.com",
      target: '_blank'
  },
  children: 'click me to visit google'
}

function MyApps(){
  return(
    <div>
      <h1>Custom react app</h1>
    </div>
  )
}

const AnotherElement = (
  <a href="https://google.com" target="_blank">Visit Google</a>
)


const AreactElement = React.createElement(
  'a',
  {href: 'https://google.com', target:'_blank'},
  'click to visit google'
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <App />

  </>

// <MyApps/>
// AnotherElement


// AreactElement
    
)
