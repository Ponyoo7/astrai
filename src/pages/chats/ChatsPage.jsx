import { ChatContent } from "./ChatContent"
import { Sidebar } from "./Sidebar"
import { ChatContextProvider } from "../../core/context/ChatContext";
import { useParams } from "react-router";

export const ChatsPage = () => {
  const { chatId } = useParams()

  return (
    <main className="h-screen grid grid-cols-[auto_1fr] overflow-hidden">
      <ChatContextProvider chatId={chatId}>

        <Sidebar />
        <ChatContent />
      </ChatContextProvider>
    </main>
  )
}