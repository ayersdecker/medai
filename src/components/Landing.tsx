import React from 'react'

import symptomChecker from '../assets/symptom-checker.svg'
import reminders from '../assets/reminders.svg'
import analytics from '../assets/analytics.svg'
import secureRecords from '../assets/secure-records.svg'

interface LandingProps {
  onLogin: () => void
  onSignUp: () => void
}

const features = [
  {
    img: symptomChecker,
    title: 'AI Symptom Checker',
    desc: 'Get instant insights powered by machine learning.',
  },
  {
    img: reminders,
    title: 'Smart Medication Reminders',
    desc: 'Never miss a dose with personalized alerts.',
  },
  {
    img: analytics,
    title: 'Real-Time Analytics',
    desc: 'Visualize your health trends at a glance.',
  },
  {
    img: secureRecords,
    title: 'Secure Cloud Records',
    desc: 'Your data is protected with end-to-end encryption.',
  },
]

export default function Landing({ onLogin, onSignUp }: LandingProps) {
  return (
    <section className="glass-card">
      <h1>MedAI</h1>
      <p>Welcome to MedAI, your AI-powered medical assistant.</p>
      <div className="feature-grid">
        {features.map((f) => (
          <div key={f.title} className="feature">
            <img src={f.img} alt={f.title} />
            <h3>{f.title}</h3>
            <p>{f.desc}</p>
          </div>
        ))}
      </div>
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
