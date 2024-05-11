import React from 'react'
import Navbar from './components/Navbar'
import HomePage from './Pages/HomePage'
import Animate from './Pages/Animate'
import BoxContent from './components/BoxContent'
import Card from './components/Cards/Card'
import BoxSecond from './components/BoxSecond'
import TextCard from './components/Cards/TextCard'
import Footer from './components/Footer'






const App = () => {
  return (
    <div>
      
      <Navbar/>
      <HomePage/>
      <Animate/>
      <BoxContent/> 
      <Card/>
      <BoxSecond/>
      <TextCard/>
      <Footer/>
     
      
    </div>
  )
}

export default App

