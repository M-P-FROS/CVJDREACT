import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './assets/components/App'
import { BrowserRouter } from 'react-router-dom'

import './main.scss';
createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <StrictMode>
    <App />
  </StrictMode>
  </BrowserRouter>,
)
