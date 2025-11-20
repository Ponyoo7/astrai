import { useState } from "react"
import { apiUrls } from "../../shared/constants"
import { useFetch } from "../../shared/hooks/useFetch"
import { IconLoader2 } from '@tabler/icons-react'
import { useNavigate } from "react-router"
import { useAppContext } from "../../core/context/AppContext"
import { generateRandomNumber } from "../../shared/utils"

export const LoginForm = () => {
  //Proporciona la función send para realizar peticiones HTTP y el estado loading.
  const { send, loading } = useFetch()
  //Proporciona la función changeUser para establecer la sesión.
  const { changeUser } = useAppContext()
  //Permite la redirección programática a otra ruta.
  const navigate = useNavigate()

  //Maneja el estado local del formulario: el valor del campo name.
  const [name, setName] = useState("")

  const handleSubmit = async (e) => {
    //Detiene el comportamiento por defecto de recarga del formulario HTML.
    e.preventDefault()
    //Verifica que el campo name no esté vacío.
    if (!name) return

    //Función para obtener un num aleatorio
    const randomNumber = generateRandomNumber()
    //Construye la URL del avatar con el num aleatorio
    const avatar = `https://avatar.iran.liara.run/public/${randomNumber}`

    const body = {
      name,
      avatar
    }

    //Petición a la API
    const { data, error } = await send(apiUrls.users, {
      method: 'POST',
      //Incluye name y avatar
      body: JSON.stringify(body),
      headers: { 'content-type': 'application/json' },
    })

    //si hay un error la función termina
    if (error || !data) return

    //Llama a la función del contexto para establecer la sesión del usuario en React y en el localStorage
    changeUser(data)
    //redirige al usuario a la página de inicio
    navigate('/', {
      replace: true
    })
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
      <div className="flex flex-col gap-1">
        <label className="text-black dark:text-white">Nombre</label>
        <input
          type="text"
          onChange={(e) => setName(e.target.value)} //se pasa a la variable setName, el estado del valor del nuevo nombre introducido.
          value={name}
          className="p-3 bg-input-light dark:bg-input-dark rounded-md border  border-border-color dark:border-border-color-dark focus:outline-primary-focus placeholder-current dark:placeholder-gray-200 text-black dark:text-white"
          placeholder="Introduce tu nombre"
          required
          minLength={4}
          maxLength={100}
        />
      </div>
      <button
        disabled={loading}
        type="submit"
        className="bg-primary font-bold text-lg p-3 rounded-md cursor-pointer flex flex-row items-center justify-center gap-2 transition-colors ease-in duration-100 hover:bg-primary-hover focus:bg-primary-focus disabled:bg-primary-disabled"
      >

        {
          loading && (
            <IconLoader2 className="animate-spin" />
          )
        }
        Iniciar sesión
      </button>
    </form>
  )
}