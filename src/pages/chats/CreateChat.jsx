import { useChatsContext } from "../../core/context/ChatsContext"

export const CreateChat = () => {
  const { handleOnCreateChat } = useChatsContext()

  return (
    <button onClick={handleOnCreateChat}>
      Crear
    </button>
  )
}