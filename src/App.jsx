import React from 'react'
import './App.css'
import Resister from './components/Resister'
// import Login from './components/Login'
// import Home from './components/Home'
// import Newcomponent from './components/Newcomponent'
import Netable from './components/Netable'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Login from './components/Login'
// import Necard from './components/


const App = () => {
  return (


    <div>
       <Home/>
       {/* <h1>React topic</h1>
      <Newcomponent/>
      <Netable/>
      <Necard/> */}
      {/* <Resister/> */}
      {/* <Login/> */}
      
      <>
      
      <Routes>
        <Route path='/' element={<Netable/>}></Route>
        <Route path='/Resistor'element={<Resister/>}></Route>
        <Route path='/Login' element={<Login/>}></Route>
      </Routes>
      </>
      
    </div>
  )
}

export default App
