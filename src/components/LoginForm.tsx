import React, { useState } from 'react'

interface LoginFormProps {
  onSignUp: () => void
  onBack: () => void
}

export default function LoginForm({ onSignUp, onBack }: LoginFormProps) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert(`Log in with ${email}`)
  }

  return (
    <section className="glass-card">
      <h2>Log in</h2>
      <p>Access your brand library and create new posts.</p>
      <form onSubmit={handleSubmit}>
        <label>
          Email
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
        </label>
        <label>
          Password
          <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />
        </label>
        <button type="submit">Log In</button>
      </form>
      <p>
        Need an account?{' '}
        <button type="button" onClick={onSignUp}>Sign up</button>
      </p>
      <button type="button" onClick={onBack}>Back</button>
    </section>
  )
}
