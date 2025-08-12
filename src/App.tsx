import React, { useState } from 'react'
import Landing from './components/Landing'
import SignUpForm from './components/SignUpForm'
import LoginForm from './components/LoginForm'

type Page = 'landing' | 'signup' | 'login'

export default function App() {
  const [page, setPage] = useState<Page>('landing')

  if (page === 'signup') {
    return <SignUpForm onLogin={() => setPage('login')} onBack={() => setPage('landing')} />
  }

  if (page === 'login') {
    return <LoginForm onSignUp={() => setPage('signup')} onBack={() => setPage('landing')} />
  }

  return <Landing onLogin={() => setPage('login')} onSignUp={() => setPage('signup')} />
}
