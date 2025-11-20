import { StrictMode } from 'react' //Ayuda a destacar problemas potenciales en la App
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router' //Componente de React Router que utiliza la API de Historial para mantener la interfaz de usuario sincronizada con la URL.
import { Routing } from './core/Routing.jsx'
import { AppContextProvider } from './core/context/AppContext.jsx'
import { ThemeProvider } from './core/context/ThemeContext.jsx'

//Función principal de React DOM para inicializar la aplicación
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <AppContextProvider>
        <BrowserRouter>
          <Routing />
        </BrowserRouter>
      </AppContextProvider>
    </ThemeProvider>
  </StrictMode>,
)
