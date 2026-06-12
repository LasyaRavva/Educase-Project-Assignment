const PROFILE_STORAGE_KEY = 'popxProfile'

export function saveProfile(profile) {
  localStorage.setItem(PROFILE_STORAGE_KEY, JSON.stringify(profile))
}

export function getProfile() {
  try {
    const rawProfile = localStorage.getItem(PROFILE_STORAGE_KEY)
    return rawProfile ? JSON.parse(rawProfile) : null
  } catch {
    return null
  }
}

