import { IconMoon } from "@tabler/icons-react"
import { useChatContext } from "../../core/context/ChatContext"

export const ChatHeader = () => {
  const { chat } = useChatContext()

  return (
    <div className="bg-white border-b border-border-color p-4 flex justify-between">
      <p className="font-bold">
        {chat?.name}
      </p>
      <IconMoon />
    </div>
  )
}