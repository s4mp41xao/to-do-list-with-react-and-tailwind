import { Check, ChevronRightIcon, Trash2 } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import Button from './Button'
import Title from './Title'

function Tasks({ tasks, onTaskClick, onDeleteTaskClick }) {
  const navigate = useNavigate()

  function onClickDescription(task) {
    const query = new URLSearchParams()
    query.set('title', task.title)
    query.set('description', task.description)

    navigate(`/task?${query.toString()}`)
  }

  return (
    <div>
      <Title>Tarefas Registradas</Title>
      <ul className="space-y-4 px-6 py-8 bg-gray-100 rounded-md shadow-md">
        {tasks.map(task => (
          <li key={task.id} className="flex gap-2">
            <Button onClick={() => onClickDescription(task)}>
              <ChevronRightIcon />
            </Button>

            <button
              onClick={() => onTaskClick(task.id)}
              className={`w-full p-2 text-left bg-white border-2 border-black font-medium rounded-md flex items-center gap-2 ${
                task.isCompleted && 'line-through'
              }`}
            >
              {task.isCompleted && <Check />}
              {task.title}
            </button>

            <Button
              // className="bg-black p-2 rounded-md"
              onClick={() => onDeleteTaskClick(task.id)}
            >
              <Trash2 />
            </Button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Tasks
