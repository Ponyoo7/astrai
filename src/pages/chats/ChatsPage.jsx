import { Sidebar } from "./Sidebar"

export const ChatsPage = () => {
  return (
    <main className="h-screen grid grid-cols-[auto_1fr] overflow-hidden">
      <Sidebar />
      <div>content</div>
    </main>
  )
}