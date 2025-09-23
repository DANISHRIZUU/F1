import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import News from './components/News'
import Teams from './components/Teams'
import Store from './components/Store'

function App() {
  return(
    <>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/news' element={<News/>}></Route>
      <Route path='/teams' element={<Teams/>}></Route>
      <Route path='/store' element={<Store/>}></Route>
    </Routes>   
    </>
  )
  
}
export default App;