import { IconMoon } from "@tabler/icons-react"
import { useChatContext } from "../../core/context/ChatContext"

export const ChatHeader = () => {
  const { chat } = useChatContext()

  return (
    <div className="border-b p-4 flex justify-between">
      <p className="font-bold">
        {chat?.name}
      </p>
      <IconMoon />
    </div>
  )
}