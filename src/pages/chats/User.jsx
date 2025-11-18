import { useAppContext } from "../../core/context/AppContext"

export const User = () => {
  const { user } = useAppContext()

  return (
    <div className="border-t p-2 flex flex-row gap-2 items-center">
      <img
        src={user.avatar}
        className="w-12"
      />
      <p>
        {user.name}
      </p>
    </div>
  )
}