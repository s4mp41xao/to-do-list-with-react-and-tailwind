import { useState } from 'react'
import AddTask from './components/AddTask'
import Tasks from './components/Tasks'
import { v4 } from 'uuid'

function App() {
  // const [tasks deleteTask] = useState()

  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: 'Comprar Refrigerante',
      description: 'Marca mais barata',
      isCompleted: false
    },
    {
      id: 2,
      title: 'Comprar Pão',
      description: 'Marca mais barata',
      isCompleted: false
    }
  ])

  function onTaskClick(taskId) {
    const newTasks = tasks.map(task => {
      if (task.id === taskId) {
        return { ...task, isCompleted: !task.isCompleted }
      }
      return task
    })
    setTasks(newTasks)
  }

  function onDeleteTaskClick(taskId) {
    const newTasks = tasks.filter(task => task.id != taskId)
    setTasks(newTasks)
  }

  function onAddTaskSubmit(title, description) {
    const newTasks = {
      id: v4(),
      title: title,
      description: description,
      isCompleted: false
    }

    setTasks([...tasks, newTasks])
  }

  return (
    <div className="w-screen h-screen flex justify-center p-6">
      <div className="w-[500px] space-y-4 border-4 p-4 rounded-md border-black bg-gray-100">
        <h1 className="text-3xl font-bold text-center p-3">
          Gerenciador de Tarefas
        </h1>
        <AddTask onAddTaskSubmit={onAddTaskSubmit} />
        <Tasks
          tasks={tasks}
          onTaskClick={onTaskClick}
          onDeleteTaskClick={onDeleteTaskClick}
        />
      </div>
    </div>
  )
}

export default App
