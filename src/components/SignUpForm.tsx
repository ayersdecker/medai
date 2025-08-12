import React, { useState } from 'react'

interface SignUpFormProps {
  onLogin: () => void
  onBack: () => void
}

export default function SignUpForm({ onLogin, onBack }: SignUpFormProps) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert(`Sign up with ${email}`)
  }

  return (
    <section>
      <h2>Create your account</h2>
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
        <button type="submit">Sign Up</button>
      </form>
      <p>
        Already have an account?{' '}
        <button type="button" onClick={onLogin}>Log in</button>
      </p>
      <button type="button" onClick={onBack}>Back</button>
    </section>
  )
}
