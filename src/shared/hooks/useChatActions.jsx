import { apiUrls } from "../constants"
import { useFetch } from "./useFetch"

export const useChatActions = () => {
  const { send } = useFetch()

  const deleteChat = async (chatId) => {
    const url = `${apiUrls.chats}/${chatId}`

    const { data, error } = send(url, {
      method: 'DELETE'
    })

    if (!data || error) return

    return data
  }

  return {
    deleteChat
  }
}