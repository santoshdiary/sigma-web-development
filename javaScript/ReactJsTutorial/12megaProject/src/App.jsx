import { useEffect, useState } from 'react'
import './App.css'
import { useDispatch } from 'react-redux'
import authService from './appwrite/auth';
import { login, logout } from './store/authSlice';
import Header from './components/Header';
import Footer from './components/Footer'
import { Outlet } from 'react-router-dom';

function App() {

  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch()

  useEffect(() => {
    authService.getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }))
        }
        else {
          dispatch(logout())
        }
      })
      .finally(() => { setLoading(false) })// loading is over
  }, [])


  return !loading ? <div className='bg-green-700 text-blue-100'>
    <Header/>
    <main>
        {/* <Outlet/> */} 
        <Outlet/>
    </main>
    <Footer/>
  </div> : (null);
}

export default App
