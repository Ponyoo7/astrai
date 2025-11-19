import { ChatHeader } from "./ChatHeader";
import { ChatInput } from "./ChatInput";
import { ChatMessages } from "./ChatMessages";

export const ChatContent = () => {

  return (
    <div className="h-screen grid grid-rows-[auto_1fr_auto]">
      <ChatHeader />
      <ChatMessages />
      <ChatInput />
    </div>
  )
}