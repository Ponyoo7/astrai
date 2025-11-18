import { createContext, useContext, useState } from "react";

//Objeto contexto de React
const AppContext = createContext(undefined)

//Componente que almacena el estado y lo hace accesible a los componentes hijos
export const AppContextProvider = ({ children }) => {
  //se define el estado local de user
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')))//Al inicializar el estado, se lee la nformación del usuario desde localStorage para que la sesión del usuario persista

  //Función para iniciar o cerrar sesión
  const changeUser = (user) => {
    localStorage.setItem('user', JSON.stringify(user))
    setUser(user)//se actualiza el estado de user, para que los componentes se re-rendericen con el nuevo valor 
  }

  //Provee el estado actual(user)y la funcióon para cambiarlo (chancheUser)a todos los componentes hijos (children)
  return (
    <AppContext.Provider
      value={{
        changeUser, user
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

//custom hook que los demás componentes de la aplicación usarán para acceder a los datos del contexto
export const useAppContext = () => {
  const context = useContext(AppContext)
  if (context === undefined) {
    throw new Error('useAppContext must be used within a AppContextProvider')
  }

  return context
}

