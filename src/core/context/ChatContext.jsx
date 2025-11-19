import { createContext, useContext, useEffect } from "react";
import { useFetch } from "../../shared/hooks/useFetch";
import { apiUrls } from "../../shared/constants";

const ChatContext = createContext(undefined)

export const ChatContextProvider = ({ chatId, children }) => {
  const { data: chat, loading, setData, send } = useFetch()

  useEffect(() => {
    const url = `${apiUrls.chats}/${chatId}`

    send(url, {
      method: 'GET'
    })

  }, [chatId])

  return (
    <ChatContext.Provider
      value={{
        chat,
        loading,
        setData
      }}
    >
      {children}
    </ChatContext.Provider>
  )
}

export const useChatContext = () => {
  const context = useContext(ChatContext)
  if (context === undefined) {
    throw new Error('useChatContext must be used within a ChatContextProvider')
  }

  return context
}

