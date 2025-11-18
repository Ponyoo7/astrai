import { IconLoader2 } from "@tabler/icons-react"
import { ChatItem } from "./ChatItem"
import { CreateChat } from './CreateChat'
import { useChatsContext } from "../../core/context/ChatsContext"

export const ChatList = () => {
  //data: array con la lista de objetos del chat
  //loading: booleano que indica si la lista de chats se está cargando desde la API
  const { data, loading } = useChatsContext()

  if (loading) {
    return (
      <IconLoader2 className="animate-spin" />
    )
  }

  return (
    <section className="min-h-0 flex flex-col">
      <CreateChat />
      <div className="flex-1 flex flex-col overflow-y-auto p-2 gap-2">
        {data && data.map(chat => (<ChatItem key={chat.id} chat={chat} />))}
      </div>
    </section>
  )
}