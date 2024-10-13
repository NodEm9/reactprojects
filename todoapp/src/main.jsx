import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import TaskApp from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TaskApp />
  </StrictMode>
)
