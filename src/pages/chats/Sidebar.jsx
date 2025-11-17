import { ChatsContextProvider } from "../../core/context/ChatsContext"
import { ChatList } from "./ChatList"

export const Sidebar = () => {
  return (
    <aside className="grid grid-rows-[auto_1fr_auto] h-screen w-[250px] border-r">
      <div>Titulo</div>
      <ChatsContextProvider>
        <ChatList />
      </ChatsContextProvider>
      <div>user</div>
    </aside>
  )
}