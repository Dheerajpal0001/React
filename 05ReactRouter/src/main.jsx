import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Route , Router, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import './index.css'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import Github, { githubInLoader } from './components/Github/Github.jsx'
import User from './components/User/User.jsx'
import Example from './components/Example/Example.jsx'


// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <App/>,
//     children: [
//       {
//         path: '',
//         element:<Home/>
//       },
//       {
//         path: '/About',
//         element: <About/>
//       },
//       {
//         path: '/Contact',
//         element: <Contact/>
//       },
//       {
//         path:'/'
//       }
//     ]
//   }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path='' element={<Home />}/>
      <Route path='about' element={<About />}>
        <Route path='example' element={<Example/>}/>
      </Route>
      <Route path='contact' element={<Contact />}/>
      <Route path='user/:userid' element={<User />}/>
      <Route 
      loader={githubInLoader}
      path='Github' 
      element={<Github />}
      />
    </Route>
  )
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
