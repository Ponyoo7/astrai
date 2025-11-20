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
    <div className={`flex flex-row justify-between items-center px-4 py-3 rounded-md cursor-pointer transition-colors ease-in duration-150 hover:bg-black/10 dark:hover:bg-white/10 ${selected && 'bg-primary/40'} animate-fadeIn`}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      onClick={handleSelect}
    >
      <div className="flex flex-row gap-2 items-center">
        <IconMessage className="text-md text-black dark:text-white" size={22} />
        <p className="text-md text-black dark:text-white hidden md:block">{chat.name}</p>

      </div>
      {
        isHovering && (
          <div className="animate-fadeIn flex flex-row gap-1 items-center">
            <button onClick={handleDeleteClick}>
              <IconTrash className="cursor-pointer transition-color ease-in duration-100 text-black dark:text-white hover:text-black/70 dark:hover:text-white/70" size={22} />
            </button>
          </div>

        )
      }
    </div>
  )
}