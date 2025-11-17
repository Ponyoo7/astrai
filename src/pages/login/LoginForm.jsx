import { useState } from "react"
import { apiUrls } from "../../shared/constants"
import { useFetch } from "../../shared/hooks/useFetch"
import { IconLoader2 } from '@tabler/icons-react'
import { useNavigate } from "react-router"
import { useAppContext } from "../../core/context/AppContext"
import { generateRandomNumber } from "../../shared/utils"

export const LoginForm = () => {
  const { send, loading } = useFetch()
  const { changeUser } = useAppContext()
  const navigate = useNavigate()

  const [name, setName] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!name) return

    const randomNumber = generateRandomNumber()
    const avatar = `https://avatar.iran.liara.run/public/${randomNumber}`

    const body = {
      name,
      avatar
    }

    const { data, error } = await send(apiUrls.users, {
      method: 'POST',
      body: JSON.stringify(body),
      headers: { 'content-type': 'application/json' },
    })

    if (error || !data) return

    changeUser(data)
    navigate('/', {
      replace: true
    })
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
      <div className="flex flex-col gap-1">
        <label>Nombre</label>
        <input
          type="text"
          onChange={(e) => setName(e.target.value)}
          value={name}
          className="p-3 rounded-md border"
          placeholder="Introduce tu nombre"
          required
          minLength={4}
          maxLength={100}
        />
      </div>
      <button
        disabled={loading}
        type="submit"
        className="p-2 border rounded-md cursor-pointer flex flex-row items-center justify-center gap-2"
      >

        {
          loading && (
            <IconLoader2 className="animate-spin" />
          )
        }
        Enviar
      </button>
    </form>
  )
}