import { Route, Routes } from 'react-router-dom'
import './globals.css'
import Home from './pages/Home'
import RecipeDetails from './pages/RecipeDetails'

function App() {

  return (
    <main className="flex h-screen">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="recipe/:id" element={<RecipeDetails />} />
      </Routes>
    </main>
  )
}

export default App
