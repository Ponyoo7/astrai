import logoMini from "../../assets/images/logo_mini.png"
import { useAppContext } from "../../core/context/AppContext"


export const MessageItem = ({ message }) => {
  const { user } = useAppContext()

  const isFromAI = message.transmitter === 'ai'

  const userStyles = 'bg-primary rounded-l-lg rounded-tr-lg'
  const aiStyles = 'bg-gray-200 rounded-r-lg rounded-tl-lg'

  return (
    <div className={`${isFromAI ? 'justify-self-start' : 'justify-self-end'} col-span-2 flex flex-row items-end gap-4 animate-fadeIn`}>

      <img
        src={isFromAI ? logoMini : user.avatar}
        className={`${isFromAI ? 'order-first' : 'order-last'} h-10`}
      />
      <div className="flex flex-col gap-1">
        <div
          className={`${isFromAI ? 'text-start' : 'text-end'} text-sm text-gray-700`}>
          {
            isFromAI ? 'AI' : user.name
          }
        </div>
        <div className={`${isFromAI ? aiStyles : userStyles} p-3`}>

          {message.content}
        </div>
      </div>

    </div >
  )
}