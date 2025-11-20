import { useState } from "react"

import { IconSend } from '@tabler/icons-react'
import { useChatInput } from "../../shared/hooks/useChatInput"

export const ChatInput = () => {
  const { sendMessage } = useChatInput()

  const [value, setValue] = useState("")

  const handleClick = () => {
    const userText = value

    if (!userText) return

    setValue("")

    sendMessage(userText)
  }

  return (
    <div className="border-t border-border-color p-4 bg-white">
      <div className="border border-third rounded-md flex flex-row px-3 py-2 gap-2 items-center">
        <textarea
          className="rounded-md w-full resize-none focus:outline-none"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Escribe un mensaje aquí..."

        ></textarea>

        <button
          className="p-2 rounded-md w-10 h-10 bg-primary hover:bg-primary-hover focus:bg-primary-focus disabled:bg-primary-disabled disabled:cursor-default cursor-pointer transition-colors duration-150 ease-in"
          onClick={handleClick}
          disabled={!value}
        >
          <IconSend />
        </button>
      </div>
    </div >
  )
}