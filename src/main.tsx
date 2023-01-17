import React from 'react'
import ReactDOM from 'react-dom/client'
import { MemoryRouter, BrowserRouter } from 'react-router-dom'
import App from './App'
import { AuthProvider } from './Contexts/AuthContext'
import './main.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <AuthProvider>
      <MemoryRouter>
        <App />
      </MemoryRouter>
    </AuthProvider>
  </React.StrictMode>,
)
