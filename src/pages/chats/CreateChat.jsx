import { IconEdit } from "@tabler/icons-react"
import { useChatsContext } from "../../core/context/ChatsContext"

export const CreateChat = () => {
  //HandleOnCreateChat: Llamar al hook useCreateChat para enviar la petición POST a la AP,Llamar al hook useCreateChat para enviar la petición POST a la AP,Navegar al nuevo chat
  const { handleOnCreateChat } = useChatsContext()

  return (
    <button
      className="flex flex-row gap-2 items-center border p-2 rounded-md cursor-pointer"
      onClick={handleOnCreateChat}
    >
      <IconEdit />
      Crear
    </button>
  )
}