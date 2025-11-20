import { ChatsContextProvider } from "../../core/context/ChatsContext"
import { ChatList } from "./ChatList"
import logoMini from "../../assets/images/logo_mini.png"
import { User } from "./User"

export const Sidebar = () => {
  return (
    <aside className="grid grid-rows-[auto_1fr_auto] h-screen w-[300px] border-r border-border-color bg-white">

      <div className="flex items-center p-4 gap-4 border-b border-border-color">
        <img
          src={logoMini}
          alt="Company Logo"
          className="h-10"
        />

        <h2 className="text-lg font-semibold text-gray-800">ASTRAI</h2>

      </div>
      <ChatsContextProvider>
        {/* Aquí se activa el estado de los chats (llama internamente a useChats()) */}
        <ChatList />
      </ChatsContextProvider>
      {/* Muestra el avatar y nombre del usuario logueado */}
      <User />
    </aside>
  )
}