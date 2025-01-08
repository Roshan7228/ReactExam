import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './Component/Navbar'
import AllRoute from './MainRouter/AllRoute'


function App() {


  return (
    <>
      <Navbar/>
      <AllRoute/>
    </>
  )
}

export default App
