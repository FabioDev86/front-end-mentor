import Header from "../main-components/Header";
import TaskAdder from "../main-components/TaskAdder";
import TaskList from "../main-components/TaskList";



export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Header />
      <TaskAdder />
      <TaskList />      
    </main>
  )
}
