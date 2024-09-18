import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import { Layout } from './components/Layout'
import { About } from './pages/About'
import { Contact } from './pages/Contact'
import { Home } from './pages/Home'
import { Products } from './pages/Products'


function App() {

  return (
    <Router>
       <Routes>
          <Route element = {<Layout/>}>
            <Route path="/" element={<Home/>}/>
            <Route path="/Products" element={<Products/>}/>
            <Route path="/About" element={<About/>}/>            
            <Route path="/Contact" element={<Contact/>}/>
          </Route>      
        </Routes> 
    </Router>

  )
}

export default App
