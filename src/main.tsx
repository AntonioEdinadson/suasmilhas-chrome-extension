import React from 'react'
import ReactDOM from 'react-dom/client'
import { MemoryRouter, BrowserRouter } from 'react-router-dom'
import App from './App'
import './main.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <MemoryRouter>
      <App />
    </MemoryRouter>
  </React.StrictMode>,
)
