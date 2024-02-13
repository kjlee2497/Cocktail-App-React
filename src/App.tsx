import { Route, Routes } from 'react-router-dom'
import './globals.css'
import Home from './pages/Home'

function App() {

  return (
    <main className="flex h-screen">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </main>
  )
}

export default App
