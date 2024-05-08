import { useState } from 'react'
import './App.css'
import Welcome from './my component/Welcome'
import Login from './my component/Login'
import {Route,Routes} from 'react-router-dom'


function App() {
 

  return (
    <>
    {/* <Welcome/>
    <Login/> */}
    
    <Routes>
    <Route path='/' element={ <Welcome/>} />
    <Route path='/Login' element={ <Login/>} />

    </Routes>
    </>
  )
}

export default App
