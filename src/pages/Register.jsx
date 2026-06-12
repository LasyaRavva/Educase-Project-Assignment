import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Register.css'
import { saveProfile } from '../utils/profileStorage'

export default function Register() {
  const navigate = useNavigate()
  const [form, setForm] = useState({
    fullName: '',
    phone: '',
    email: '',
    password: '',
    company: '',
    isAgency: 'yes',
  })
  const [errors, setErrors] = useState({})
  const [submitError, setSubmitError] = useState('')

  const handleChange = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }))
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: false }))
    setSubmitError('')
  }

  const handleSubmit = () => {
    const newErrors = {}
    if (!form.fullName.trim()) newErrors.fullName = true
    if (!form.phone.trim()) newErrors.phone = true
    if (!form.email.trim()) newErrors.email = true
    if (!form.password.trim()) newErrors.password = true

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      setSubmitError('Please fill in all required fields.')
      return
    }

    saveProfile({
      fullName: form.fullName.trim(),
      email: form.email.trim(),
    })

    navigate('/account')
  }

  return (
    <div className="register-screen">
      <div className="register-header">
        <h1 className="register-title">Create your<br />PopX account</h1>
      </div>

      <div className="register-form">
        <div className={`form-field ${errors.fullName ? 'field-error' : ''}`}>
          <label className="field-label">Full Name<span className="req">*</span></label>
          <input
            className="field-input"
            placeholder="Marry Doe"
            value={form.fullName}
            onChange={(e) => handleChange('fullName', e.target.value)}
          />
        </div>

        <div className={`form-field ${errors.phone ? 'field-error' : ''}`}>
          <label className="field-label">Phone number<span className="req">*</span></label>
          <input
            className="field-input"
            placeholder="Marry Doe"
            value={form.phone}
            onChange={(e) => handleChange('phone', e.target.value)}
          />
        </div>

        <div className={`form-field ${errors.email ? 'field-error' : ''}`}>
          <label className="field-label">Email address<span className="req">*</span></label>
          <input
            type="email"
            className="field-input"
            placeholder="Marry Doe"
            value={form.email}
            onChange={(e) => handleChange('email', e.target.value)}
          />
        </div>

        <div className={`form-field ${errors.password ? 'field-error' : ''}`}>
          <label className="field-label">Password <span className="req">*</span></label>
          <input
            type="password"
            className="field-input"
            placeholder="Marry Doe"
            value={form.password}
            onChange={(e) => handleChange('password', e.target.value)}
          />
        </div>

        <div className="form-field">
          <label className="field-label">Company name</label>
          <input
            className="field-input"
            placeholder="Marry Doe"
            value={form.company}
            onChange={(e) => handleChange('company', e.target.value)}
          />
        </div>

        <div className="agency-field">
          <label className="agency-question">
            Are you an Agency?<span className="req">*</span>
          </label>
          <div className="radio-group">
            <label className="radio-option">
              <input
                type="radio"
                name="agency"
                value="yes"
                checked={form.isAgency === 'yes'}
                onChange={() => handleChange('isAgency', 'yes')}
              />
              <span className="radio-custom"></span>
              Yes
            </label>
            <label className="radio-option">
              <input
                type="radio"
                name="agency"
                value="no"
                checked={form.isAgency === 'no'}
                onChange={() => handleChange('isAgency', 'no')}
              />
              <span className="radio-custom"></span>
              No
            </label>
          </div>
        </div>
      </div>

      {submitError && (
        <p className="submit-error">{submitError}</p>
      )}

      <div className="register-footer">
        <button className="btn-register" onClick={handleSubmit}>
          Create Account
        </button>
      </div>
    </div>
  )
}
