import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/Home/index.tsx'
import ThankYou from './pages/ThankYou/index.tsx'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/obrigado" element={<ThankYou />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
