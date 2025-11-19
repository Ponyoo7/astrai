import { useEffect, useState } from "react"
import { useAI } from "../../shared/hooks/useAI"
import { useFetch } from "../../shared/hooks/useFetch"
import { apiUrls } from "../../shared/constants"
import { useChatContext } from "../../core/context/ChatContext"
import { IconSend } from '@tabler/icons-react'

export const ChatInput = () => {
  const { chat, setData } = useChatContext()
  const { send } = useFetch()
  const { sendMessageToAI, response } = useAI()

  const [value, setValue] = useState("")

  const sendMessage = async () => {
    const userText = value

    setValue("")

    const updatedChat = await createUserMessage(userText)

    setData(updatedChat)

    const text = await sendMessageToAI(userText)

    const aiUpdatedChat = await createAIMessage(text, updatedChat.messages)

    setData(aiUpdatedChat)
  }

  const createUserMessage = async (userText) => {
    const url = `${apiUrls.chats}/${chat.id}`

    const userMessageBody = {
      index: chat.messages.length,
      content: userText,
      transmitter: 'user'
    }

    const updateBody = {
      ...chat,
      messages: [...chat.messages, userMessageBody]
    }

    const { data } = await send(url, {
      method: 'PUT',
      body: JSON.stringify(updateBody),
      headers: { 'content-type': 'application/json' },

    })

    return data
  }

  const createAIMessage = async (aiText, messages) => {
    const url = `${apiUrls.chats}/${chat.id}`

    const aiMessageBody = {
      index: messages.length,
      content: aiText,
      transmitter: 'ai'
    }

    const updateBody = {
      ...chat,
      messages: [...messages, aiMessageBody]
    }

    const { data } = await send(url, {
      method: 'PUT',
      body: JSON.stringify(updateBody),
      headers: { 'content-type': 'application/json' },

    })

    return data
  }

  useEffect(() => {
    if (!response) return
    let messages = chat.messages
    const lastMessage = messages.at(-1)

    if (lastMessage.transmitter === 'ai') {
      messages.pop()
    }

    const aiMessageBody = {
      index: chat.messages.length,
      content: response,
      transmitter: 'ai'
    }

    setData({
      ...chat,
      messages: [...messages, aiMessageBody]
    })


  }, [response])

  return (
    <div className="border-t p-4">
      <div className="border rounded-md flex flex-row px-3 py-2 gap-2 items-center">
        <textarea
          className="rounded-md w-full resize-none focus:outline-none"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Escribe un mensaje aquí..."

        ></textarea>

        <button className="p-2 rounded-md w-10 h-10 bg-mint-500" onClick={sendMessage}>
          <IconSend />
        </button>
      </div>
    </div >
  )
}