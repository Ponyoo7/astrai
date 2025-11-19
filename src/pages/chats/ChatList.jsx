import { IconLoader2 } from "@tabler/icons-react"
import { ChatItem } from "./ChatItem"
import { CreateChat } from './CreateChat'
import { useChatsContext } from "../../core/context/ChatsContext"
import { useChatContext } from "../../core/context/ChatContext"


export const ChatList = () => {
  //data: array con la lista de objetos del chat
  //loading: booleano que indica si la lista de chats se está cargando desde la API
  const { data, loading } = useChatsContext()
  const { chat } = useChatContext()

  if (loading) {
    return (
      <IconLoader2 className="animate-spin" />
    )
  }

  return (
    <section className="min-h-0 flex flex-col p-2 gap-4">
      <CreateChat />
      <div className="flex-1 flex flex-col overflow-y-auto gap-2">
        {data && data.map(c => (
          <ChatItem key={c.id} chat={c} selected={c.id === chat?.id} />
        ))}
      </div>
    </section>
  )
}