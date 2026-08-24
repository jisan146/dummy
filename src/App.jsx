import { useState } from 'react'

import Login from './components/Login'
import Dashboard from './components/Dashboard'
import Notice from './components/Notice'
import Homework from './components/Homework'
import Result from './components/Result'

function App() {
  const [loggedIn, setLoggedIn] = useState(false)
  const [page, setPage] = useState('dashboard')

  // Login successful
const handleLogin = () => {
  setTimeout(() => {
    setLoggedIn(true);
    setPage('dashboard');
  }, 2500);
};

  // Menu click
  const handleMenuClick = (menu) => {
    setPage(menu.toLowerCase())
  }

  // Back to dashboard
  const goDashboard = () => {
    setPage('dashboard')
  }

  // Logout
  const handleLogout = () => {
    setLoggedIn(false)
    setPage('dashboard')
  }

  // যদি login না করা থাকে
  if (!loggedIn) {
    return <Login onLogin={handleLogin} />
  }

  // Notice page
  if (page === 'notice') {
    return (
      <Notice
        onBack={goDashboard}
      />
    )
  }

  // Homework page
  if (page === 'homework') {
    return (
      <Homework
        onBack={goDashboard}
      />
    )
  }

  // Result page
  if (page === 'result') {
    return (
      <Result
        onBack={goDashboard}
      />
    )
  }

  // Dashboard
  return (
    <Dashboard
      onMenuClick={handleMenuClick}
      onLogout={handleLogout}
    />
  )
}

export default App