import './App.css'
import { TodoInput } from './components/TodoInput'
import { TodoList } from './components/TodoList'

function App() {
  return (
    <div className="flex justify-center items-center flex-col gap-10 mt-20">
      <h1 className="text-4xl font-bold text-white">Add your Tasks 📝</h1>
      <TodoInput />
      <TodoList />
    </div>
  )
}

export default App
