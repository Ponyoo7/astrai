import { useChatContext } from "../../core/context/ChatContext"
import { MessageItem } from "./MessageItem"

export const ChatMessages = () => {
  const { chat } = useChatContext()

  return (
    <div className="grid grid-cols-2 auto-rows-min p-4 gap-6 overflow-auto">
      {
        chat && chat.messages.map((m) => (
          <MessageItem message={m} />
        ))
      }
    </div>
  )
}