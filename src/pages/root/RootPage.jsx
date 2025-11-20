import { IconLoader2, IconMessage } from "@tabler/icons-react"
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
    <div className="font-display relative flex h-screen min-h-[600px] w-full flex-col items-center justify-center overflow-hidden bg-light-bg p-4 group/design-root">

      <main className="relative z-10 flex w-full max-w-lg flex-col items-center justify-center space-y-8 rounded-xl px-4 py-10 text-center">
        {
          loading ? (
            <IconLoader2 className="animate-spin text-primary" size={48} />
          ) : (
            <>
              {/* Icono: Aquí se añade el círculo exterior (120px y opacidad 20) */}
              <div className="relative flex h-[120px] w-[120px] items-center justify-center rounded-full bg-primary bg-opacity-20">
                <div className="flex h-[90px] w-[90px] items-center justify-center rounded-full bg-primary bg-opacity-40">
                  <IconMessage size={48} stroke={1.5} />
                </div>
              </div>

              {/* Textos */}
              <div className="flex flex-col items-center gap-4">
                <h1 className="text-4xl font-bold leading-tight">
                  ¡Te damos la bienvenida!
                </h1>
                <p className="text-userMessage text-base font-normal leading-normal max-w-md">
                  Estoy aquí para ayudarte a responder tus preguntas, generar ideas o simplemente conversar. ¿En qué puedo ayudarte hoy?
                </p>
              </div>

              {/* Botón */}
              <div className="flex pt-4 justify-center">
                <button
                  onClick={() => createChat(1)}
                  className="flex cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-8 bg-primary hover:bg-primary-hover text-base font-bold leading-normal tracking-[0.015em] transition-transform duration-200 ease-in-out hover:scale-105 focus:ring-2 focus:ring-primary-focus outline-none"
                >
                  <span className="truncate">Empezar a Chatear</span>
                </button>
              </div>
            </>
          )
        }
      </main>
    </div>
  )
}

