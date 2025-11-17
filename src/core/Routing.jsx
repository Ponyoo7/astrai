import { Navigate, Route, Routes } from "react-router"
import { LoginPage } from "../pages/login/LoginPage"
import { useAppContext } from "./context/AppContext"
import { RootPage } from "../pages/root/RootPage"
import { ChatsPage } from "../pages/chats/ChatsPage"

export const Routing = () => {
  const { user } = useAppContext()

  return (
    <Routes>
      <Route path="/" element={
        user ? <RootPage /> : <Navigate to='/login' />
      } />

      <Route path="/login" element={
        !user ? <LoginPage /> : <Navigate to='/' />}
      />

      <Route path="/chats/:chatId" element={
        user ? <ChatsPage /> : <Navigate to='/login' />
      } />
    </Routes>
  )
}