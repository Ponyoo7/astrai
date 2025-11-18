import { createContext, useContext } from "react"
import { useChats } from "../../shared/hooks/useChats"
import { useCreateChat } from "../../shared/hooks/useCreateChat"
import { useChatActions } from "../../shared/hooks/useChatActions"

const ChatsContext = createContext(undefined)

export const ChatsContextProvider = ({ children }) => {
  //Obtiene la lista inicial de chats del usuario 
  const { data, loading, setData } = useChats()
  //Función para enviar la petición POST a la API y crear un nuevo chat
  const { createChat } = useCreateChat()
  //Función para enviar la petición DELETE a la API y eliminar un chat por su ID
  const { deleteChat } = useChatActions()

  //creación de un nuevo chat
  const handleOnCreateChat = async () => {
    //Ejecuta el hook useCreateChat, que envía la petición al backend
    const res = await createChat()

    if (!res) return

    //se añade al final de la lista local de chats (data)
    setData([...data, res])//spread (...data) para crear un nuevo array inmutable con los chats existentes más el recién creado
  }

  //Eliminación de un chat por ID
  const handleDeleteChat = async (chatId) => {
    //se ejecuta el hook useChatActions, que envía la petición DELETE a la API
    const deletedChat = await deleteChat(chatId)

    if (!deleteChat) return

    //Nuevo array con los chats pero sin el chat eliminado
    const filteredChats = data.filter(d => d.id !== chatId)

    //La lista local de chats se actualiza con el array filtrado
    setData(filteredChats)
  }

  return (
    <ChatsContext.Provider
      value={{
        //lista actual de chats
        data,
        //estado de carga inicial de la lista
        loading,
        //función para crear un chat
        handleOnCreateChat,
        //función para eliminar un chat
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

