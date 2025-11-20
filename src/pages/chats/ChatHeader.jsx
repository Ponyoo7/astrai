import { useChatContext } from "../../core/context/ChatContext"
import { ThemeSwitch } from "../../shared/components/ThemeSwitch"

export const ChatHeader = () => {
  const { chat } = useChatContext()

  return (
    <div className="bg-white dark:bg-dark-bg border-b border-border-color dark:border-border-color-dark p-4 flex justify-between items-center">
      <p className="font-bold text-black dark:text-white">
        {chat?.name}
      </p>

      <ThemeSwitch />
    </div>
  )
}