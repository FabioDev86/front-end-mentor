import Header from "../main-components/Header";
import TaskAdder from "../main-components/TaskAdder";
import TaskList from "../main-components/TaskList";



export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-start gap-[2rem] py-12 px-6">
      <Header />
      <TaskAdder />
      <TaskList />      
    </main>
  )
}
