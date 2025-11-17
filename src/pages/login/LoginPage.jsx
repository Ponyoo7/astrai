import { LoginForm } from "./LoginForm"

export const LoginPage = () => {
  return (
    <main className="w-full h-full flex flex-col items-center justify-center">
      <div className="shadow-xl w-72 sm:w-lg rounded-2xl p-12">
        <h1 className="text-2xl text-center tracking-wider">ASTRAI</h1>
        <LoginForm />
      </div>
    </main>
  )
}