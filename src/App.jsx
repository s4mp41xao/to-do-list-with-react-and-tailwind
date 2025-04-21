import { useEffect, useState } from 'react'
import AddTask from './components/AddTask'
import Tasks from './components/Tasks'
import { v4 } from 'uuid'
import Title from './components/Title'

function App() {
  // const [tasks deleteTask] = useState()

  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem('tasks')) || []
  )

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])

  // useEffect(() => {
  //   const fetchTasks = async () => {
  //     // call api
  //     const response = await fetch(
  //       'https://jsonplaceholder.typicode.com/todos?_limit=10',
  //       {
  //         method: 'GET'
  //       }
  //     )
  //     const data = await response.json()
  //     console.log(data)
  //     setTasks(data)
  //   }
  //   fetchTasks()
  // }, [])

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
    <div className="w-screen h-scrseen flex justify-center p-6">
      <div className="w-[500px] space-y-4 border-4 p-4 rounded-md border-black bg-gray-100">
        <Title>Lista de Tarefas</Title>

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
