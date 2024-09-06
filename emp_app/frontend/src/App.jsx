import { useState } from 'react'
import './App.css'
import Nav from './components/Nav'
import Add from './components/Add'
import { Route, Routes } from 'react-router-dom'
import View from './components/View'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Nav/>
      <Routes>
        <Route path='/' elements={<View/>}/>
        <Route path='/a' element={<Add/>} />

      </Routes>
     
    </>
  )
}

export default App
