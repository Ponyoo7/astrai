import { useAppContext } from "../../core/context/AppContext"
import { useFetch } from "./useFetch"
import { apiUrls } from "../constants"
import { useNavigate } from "react-router"

export const useCreateChat = () => {
  const { user } = useAppContext()
  const { send } = useFetch()
  const navigate = useNavigate()

  const createChat = async () => {
    if (!user) return

    const chatBody = {
      name: "Nuevo Chat",
      userId: user.id
    }

    const { data: chat, error: chatError } = await send(apiUrls.chats, {
      method: 'POST',
      body: JSON.stringify(chatBody),
      headers: { 'content-type': 'application/json' },
    })

    if (chatError || !chat) return

    navigate(`/chats/${chat.id}`, {
      replace: true
    })

    return chat
  }

  return {
    createChat
  }
}