import { createContext, useContext } from "react"
import { useChats } from "../../shared/hooks/useChats"
import { useCreateChat } from "../../shared/hooks/useCreateChat"
import { useChatActions } from "../../shared/hooks/useChatActions"

const ChatsContext = createContext(undefined)

export const ChatsContextProvider = ({ children }) => {
  const { data, loading, setData } = useChats()
  const { createChat } = useCreateChat()
  const { deleteChat } = useChatActions()


  const handleOnCreateChat = async () => {
    const res = await createChat()

    if (!res) return

    setData([...data, res])
  }

  const handleDeleteChat = async (chatId) => {
    const deletedChat = await deleteChat(chatId)

    if (!deleteChat) return

    const filteredChats = data.filter(d => d.id !== chatId)

    setData(filteredChats)
  }

  return (
    <ChatsContext.Provider
      value={{
        data,
        loading,
        handleOnCreateChat,
        handleDeleteChat
      }}
    >
      {children}
    </ChatsContext.Provider>
  )
}

export const useChatsContext = () => {
  const context = useContext(ChatsContext)
  if (context === undefined) {
    throw new Error('useChatsContext must be used within a ChatsContextProvider')
  }

  return context
}

