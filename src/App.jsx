import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

import Parentcard from './components/Card/Parentcard'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Parentcard/>
    </>
  )
}

export default App
