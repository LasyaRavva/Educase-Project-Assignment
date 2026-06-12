import { useEffect, useState } from 'react'
import './AccountSettings.css'
import { getProfile } from '../utils/profileStorage'

export default function AccountSettings() {
  const [profile, setProfile] = useState({ fullName: '', email: '' })

  useEffect(() => {
    const savedProfile = getProfile()
    if (savedProfile) {
      setProfile({
        fullName: savedProfile.fullName || '',
        email: savedProfile.email || '',
      })
    }
  }, [])

  const displayName = profile.fullName || 'Your Name'
  const displayEmail = profile.email || 'your@email.com'

  return (
    <div className="account-screen">
      <div className="account-top-bar">
        <h2 className="account-heading">Account Settings</h2>
      </div>

      <div className="account-profile-section">
        <div className="profile-row">
          <div className="avatar-wrapper">
            <img
              src="https://i.pravatar.cc/80?img=47"
              alt={displayName}
              className="avatar-img"
            />
            <div className="avatar-badge">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 20h9M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
          <div className="profile-info">
            <p className="profile-name">{displayName}</p>
            <p className="profile-email">{displayEmail}</p>
          </div>
        </div>
      </div>

      <div className="account-divider" />

      <div className="account-bio">
        <p>
          <span className="account-greeting">Hello {displayName},</span> welcome
          to your PopX account. Use this page to review and update your profile
          information, company details, and notification preferences. Keeping
          your information up to date helps your team collaborate more
          effectively.
        </p>
      </div>

      <div className="account-divider" />
    </div>
  )
}
