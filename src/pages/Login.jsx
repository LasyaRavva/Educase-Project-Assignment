import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Login.css'

export default function Login() {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = () => {
    if (email && password) {
      navigate('/account')
    }
  }

  const isEnabled = email.trim() !== '' && password.trim() !== ''

  return (
    <div className="login-screen">
      <div className="login-header">
        <h1 className="login-title">Signin to your<br />PopX account</h1>
        <p className="login-subtitle">
          Sign in to review your profile details,<br />
          continue your work, and stay connected.
        </p>
      </div>

      <div className="login-form">
        <div className="form-field">
          <label className="field-label">Email Address</label>
          <input
            type="email"
            className="field-input"
            placeholder="Enter email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="form-field">
          <label className="field-label">Password</label>
          <input
            type="password"
            className="field-input"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button
          className={`btn-login ${isEnabled ? 'active' : 'disabled'}`}
          onClick={handleLogin}
          disabled={!isEnabled}
        >
          Login
        </button>
      </div>
    </div>
  )
}
