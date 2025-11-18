import { Navigate, Route, Routes } from "react-router"
import { LoginPage } from "../pages/login/LoginPage"
import { useAppContext } from "./context/AppContext"
import { RootPage } from "../pages/root/RootPage"
import { ChatsPage } from "../pages/chats/ChatsPage"

export const Routing = () => {
  const { user } = useAppContext() // ptoporciona acceso al estado global del usuario

  return (
    <Routes>
      {/* RUTA DE RAÍZ: Si existe user renderiza a RootPage, si no existe redirige a login */}
      <Route path="/" element={
        user ? <RootPage /> : <Navigate to='/login' />
      } />

      {/* RUTA DE LOGIN: Si no existe user, renderiza a LoginPage, si existe redirige a la Ruta de Raíz */}
      <Route path="/login" element={
        !user ? <LoginPage /> : <Navigate to='/' />}
      />

      {/* RUTA DE CHATS: El parámetro :chatId indica una URL dinámica. Si existe user renderiza a Chatspage, si no existe redirige a Login */}
      <Route path="/chats/:chatId" element={
        user ? <ChatsPage /> : <Navigate to='/login' />
      } />
    </Routes>
  )
}