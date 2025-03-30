import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './components/vending_machine'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
