import { IconLoader2 } from "@tabler/icons-react"
import { useNavigate } from "react-router"
import { useCreateChat } from "../../shared/hooks/useCreateChat"
import { useChats } from "../../shared/hooks/useChats"

export const RootPage = () => {
  //Proporciona la función createChat, que maneja la lógica de la API para crear una nueva conversación
  const { createChat } = useCreateChat()
  //Proporciona la lista de chats (data) y el estado de carga (loading) del usuario
  const { data, loading } = useChats()
  //Permite redirigir al usuario a una ruta diferente
  const navigate = useNavigate()

  //Se ejecura si: data tiene un valor y la lista de elementos tiene al menos un elemento
  if (data && data.length > 0) {
    //Se redirige al último chat creado
    return navigate(`/chats/${data.at(-1).id}`, {
      replace: true
    })
  }

  return (
    <main>
      {
        //Si la redirección no se ejecuta. se renderiza la interfaz principal de la página
        loading ? <IconLoader2 className="animate-spin" /> : (
          //Si no hay chats se muestra el botón empezar 
          <button className="border p-2 rounded-md" onClick={() => createChat(1)}>Empezar</button>
        )
      }

    </main>
  )
}