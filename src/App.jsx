import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Dashboard from './pages/Dashboard'
import SearchPage from './pages/SearchPage'
import HistoryPage from './pages/HistoryPage'
import ProfilePage from './pages/ProfilePage'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/history" element={<HistoryPage />} />
        <Route path="/profile/:username" element={<ProfilePage />} />
      </Routes>
    </>
  )
}

export default App
