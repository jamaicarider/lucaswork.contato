import { Routes, Route } from 'react-router-dom'
import CornerNav from './components/CornerNav'
import Profile from './pages/Profile'
import Project from './pages/Project'

export default function App() {
  return (
    <>
      <CornerNav />
      <Routes>
        <Route path="/" element={<Profile />} />
        <Route path="/:slug" element={<Project />} />
      </Routes>
    </>
  )
}
