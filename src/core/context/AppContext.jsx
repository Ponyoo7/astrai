import { createContext, useContext, useState } from "react";


const AppContext = createContext(undefined)

export const AppContextProvider = ({ children }) => {

  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')))//Al inicializar el estado, se lee la nformación del usuario desde localStorage para que la sesión del usuario persista

  const changeUser = (user) => {
    localStorage.setItem('user', JSON.stringify(user))
    setUser(user)
  }

  const logout = () => {
    localStorage.removeItem('user')
    setUser()
  }

  return (
    <AppContext.Provider
      value={{
        changeUser, user, logout
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useAppContext = () => {
  const context = useContext(AppContext)
  if (context === undefined) {
    throw new Error('useAppContext must be used within a AppContextProvider')
  }

  return context
}

