import { IconMessage, IconTrash } from "@tabler/icons-react"
import { useChatsContext } from "../../core/context/ChatsContext"
import { useState } from "react"
import { useNavigate } from "react-router"

//Recibe el objeto completo del chat desde el componente padre (ChatList.jsx). Este objeto contiene el id y el name.
export const ChatItem = ({ chat, selected }) => {
  //Extrae la función handleDeleteChat del contexto
  const { handleDeleteChat } = useChatsContext()
  const navigate = useNavigate()
  //variable isHovering para controlar si el cursor del ratón está sobre el fila del chat
  const [isHovering, setIsHovering] = useState(false)

  const handleSelect = () => {
    navigate(`/chats/${chat.id}`)
  }

  const handleDeleteClick = (e) => {
    e.stopPropagation()

    handleDeleteChat(chat.id)
  }

  return (
    <div className={`flex flex-row justify-between items-center px-4 py-3 rounded-md cursor-pointer hover:bg-mint-400 ${selected && 'bg-blue-400'}`}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      onClick={handleSelect}
    >
      <div className="flex flex-row gap-2 items-center">
        <IconMessage size={22} />
        <p className="text-md">{chat.name}</p>

      </div>
      {
        isHovering && (
          <div className="flex flex-row gap-1 items-center">
            <button onClick={handleDeleteClick}>
              <IconTrash size={22} />
            </button>
          </div>

        )
      }
    </div>
  )
}