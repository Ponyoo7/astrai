import { createContext, useContext, useState } from "react";

const AppContext = createContext(undefined)

export const AppContextProvider = ({ children }) => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')))

  const changeUser = (user) => {
    localStorage.setItem('user', JSON.stringify(user))
    setUser(user)
  }

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

export const useAppContext = () => {
  const context = useContext(AppContext)
  if (context === undefined) {
    throw new Error('useAppContext must be used within a AppContextProvider')
  }

  return context
}

