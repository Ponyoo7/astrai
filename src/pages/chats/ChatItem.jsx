import { IconMessage, IconTrash } from "@tabler/icons-react"
import { useChatsContext } from "../../core/context/ChatsContext"
import { useState } from "react"

export const ChatItem = ({ chat }) => {
  const { handleDeleteChat } = useChatsContext()

  const [isHovering, setIsHovering] = useState(false)

  return (
    <div className="flex flex-row justify-between items-center px-4 py-3 rounded-md cursor-pointer hover:bg-mint-400 "
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div className="flex flex-row gap-2 items-center">
        <IconMessage size={22} />
        <p className="text-md">{chat.name}</p>

      </div>
      {
        isHovering && (
          <div className="flex flex-row gap-1 items-center">
            <button onClick={() => handleDeleteChat(chat.id)}>
              <IconTrash size={22} />
            </button>

          </div>

        )
      }
    </div>
  )
}