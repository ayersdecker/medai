import React from 'react'

interface HomeProps {
  onLogout: () => void
}

export default function Home({ onLogout }: HomeProps) {
  return (
    <section className="glass-card">
      <h2>Home</h2>
      <p>You are logged in. Start creating social media content.</p>
      <button type="button" onClick={onLogout}>Log out</button>
    </section>
  )
}
