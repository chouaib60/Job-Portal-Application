import { Routes, Route } from 'react-router-dom'
import ApplyJob from './pages/ApplyJob'
import Home from './pages/Home'
import Applications from './pages/Applications'

const App = () => {
  return (
    
    <div>
      <Routes>
        <Route path="/" element={<Home />} />  Home route
        <Route path="/apply-job/:id" element={<ApplyJob />} />
        <Route path="/applications" element={<Applications />} />
      </Routes>
    </div>
  )
}

export default App