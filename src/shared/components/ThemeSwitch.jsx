import { useTheme } from "../../core/context/ThemeContext"
import { IconMoon, IconSun } from "@tabler/icons-react"

export const ThemeSwitch = () => {
  const { isDark, toggleTheme } = useTheme()


  return (
    <button
      onClick={toggleTheme}
      className="relative inline-flex items-center h-8 w-16 rounded-full bg-gray-300 dark:bg-gray-600 transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 dark:focus:ring-offset-gray-900"
      aria-label="Toggle theme"
    >
      {/* Fondo del toggle */}
      <span
        className={`inline-block h-6 w-6 transform rounded-full bg-white dark:bg-dark-bg shadow-lg transition-transform ${isDark ? 'translate-x-9' : 'translate-x-1'
          }`}
      />

      {/* Iconos */}
      <div className="absolute inset-0 flex items-center justify-between px-2">
        <IconSun size={16} className="text-yellow-500" />
        <IconMoon size={16} className="text-blue-400" />
      </div>
    </button>
  )
}