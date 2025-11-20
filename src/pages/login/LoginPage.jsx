import { LoginForm } from "./LoginForm"

import logo from '../../assets/images/logo_mini.png'
import { ThemeSwitch } from "../../shared/components/ThemeSwitch"

export const LoginPage = () => {
  return (
    <main className="bg-light-bg dark:bg-black w-full h-full flex flex-col items-center justify-center relative">
      <div className="bg-white dark:bg-dark-bg w-full sm:w-lg rounded-2xl p-12 animate-fadeIn">
        <div className="flex flex-col items-center">
          <img
            src={logo}
            className="w-20 mb-4"
          />
          <div className="flex flex-col gap-2">
            <h1 className="tracking-light text-4xl text-center font-bold leading-tight text-black dark:text-white">ASTRAI</h1>
            <p className="text-userMessage">Tu asistente de IA personal</p>

          </div>
        </div>


        <LoginForm />
      </div>
      <div className="absolute top-5 right-5">
        <ThemeSwitch />
      </div>
    </main>
  )
}