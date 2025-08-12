import React from 'react'

interface LandingProps {
  onLogin: () => void
  onSignUp: () => void
}

export default function Landing({ onLogin, onSignUp }: LandingProps) {
  return (
    <section>
      <h1>MedAI</h1>
      <p>Welcome to MedAI, your AI-powered medical assistant.</p>
      <ul>
        <li>Symptom checker powered by machine learning</li>
        <li>Medication reminders and tracking</li>
        <li>Secure health record storage</li>
      </ul>
      <div>
        <button type="button" onClick={onSignUp}>Get Started</button>
        <p>
          Already have an account?{' '}
          <button type="button" onClick={onLogin}>Log in</button>
        </p>
      </div>
    </section>
  )
}
