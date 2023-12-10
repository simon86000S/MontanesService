import { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css'
import React from 'react'
import Home from './Pages/Home/Home'
const App = () => {
  useEffect(() => {
    AOS.init({duration:1500})
  }, [])
  return (
    <div className='overflow-x-hidden'>
      <Home/>
    </div>
  )
}

export default App