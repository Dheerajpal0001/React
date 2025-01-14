import './App.css'
import {useDispatch} from 'react-redux';
import authService from './appwrite/auth';
import { useEffect, useState } from 'react';
import { login, logout } from './store/authSlice';
import { Outlet } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {
  // console.log(import.meta.env.VITE_APPWRITE_URL)

  const [loading, setloading] = useState(true);
  const dispatch = useDispatch();

  useEffect(()=>{
    authService.getCurrentUser()
    .then((userData) => {
      if(userData){
        dispatch(login({userData}))
      }else{
        dispatch(logout())
      }
    })
    .finally(() => setloading(false))
  },[])

  return !loading ? (
        <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
          <div className='w-full block'>
            <Header/>
            <main>
              TODO: <Outlet/>
            </main>
            <Footer/>
          </div>
        </div>
  ): null
}

export default App
