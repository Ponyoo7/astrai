import { useAppContext } from "../../core/context/AppContext"
import { IconLogout } from '@tabler/icons-react'
import { useNavigate } from 'react-router'

export const User = () => {
  const { user, logout } = useAppContext()
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate('/login', {
      replace: true
    })
  }

  return (
    <div className="p-4 border-t border-border-color flex flex-row gap-2 items-center justify-between">

      <div className="flex flex-row gap-2 items-center">
        <img
          src={user.avatar}
          className="w-10"
        />
        <p>
          {user.name}
        </p>
      </div>

      <button className="text-red-600 transition-colors ease-in duration-150 cursor-pointer hover:text-red-600/60" onClick={handleLogout}>
        <IconLogout />
      </button>
    </div>
  )
}