import { IconLoader2 } from "@tabler/icons-react"
import { useNavigate } from "react-router"
import { useCreateChat } from "../../shared/hooks/useCreateChat"
import { useChats } from "../../shared/hooks/useChats"

export const RootPage = () => {
  const { createChat } = useCreateChat()
  const { data, loading } = useChats()
  const navigate = useNavigate()

  if (data && data.length > 0) {
    return navigate(`/chats/${data.at(-1).id}`, {
      replace: true
    })
  }

  return (
    <main>
      {
        loading ? <IconLoader2 className="animate-spin" /> : (
          <button className="border p-2 rounded-md" onClick={createChat}>Empezar</button>
        )
      }

    </main>
  )
}