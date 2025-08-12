import React, { useState } from 'react'
import Landing from './components/Landing'
import SignUpForm from './components/SignUpForm'
import LoginForm from './components/LoginForm'
import Home from './components/Home'

type Page = 'landing' | 'signup' | 'login' | 'home'

export default function App() {
  const [page, setPage] = useState<Page>('landing')

  if (page === 'signup') {
    return <SignUpForm onLogin={() => setPage('login')} onBack={() => setPage('landing')} />
  }

  if (page === 'login') {
    return (
      <LoginForm
        onSignUp={() => setPage('signup')}
        onBack={() => setPage('landing')}
        onSuccess={() => setPage('home')}
      />
    )
  }

  if (page === 'home') {
    return <Home onLogout={() => setPage('landing')} />
  }

  return <Landing onLogin={() => setPage('login')} onSignUp={() => setPage('signup')} />
}
