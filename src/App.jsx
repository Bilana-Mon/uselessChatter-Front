import { useState } from 'react'
import Header from './components/Header'
import HomePage from './pages/Home-page'

function App() {

  return (
    <div className="App bg-useless min-h-full">
      <Header/>
      <HomePage/>
    </div>
  )
}

export default App
