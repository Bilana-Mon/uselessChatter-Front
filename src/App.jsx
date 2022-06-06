import { useState } from 'react'
import Header from './components/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App bg-useless">
      <Header/>
    </div>
  )
}

export default App
