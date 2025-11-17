import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router'
import { Routing } from './core/Routing.jsx'
import { AppContextProvider } from './core/context/AppContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppContextProvider>
      <BrowserRouter>
        <Routing />
      </BrowserRouter>
    </AppContextProvider>
  </StrictMode>,
)
