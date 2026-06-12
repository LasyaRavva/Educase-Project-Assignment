import { Routes, Route, Navigate } from 'react-router-dom'
import Welcome from './pages/Welcome'
import Login from './pages/Login'
import Register from './pages/Register'
import AccountSettings from './pages/AccountSettings'

export default function App() {
  return (
    <div className="phone-shell">
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/account" element={<AccountSettings />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  )
}
