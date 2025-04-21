import { Check, ChevronRightIcon, Trash2 } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import Button from './Button'

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
      <ul className="space-y-4 p-6 bg-gray-200 rounded-md shadow-md">
        {tasks.map(task => (
          <li key={task.id} className="flex gap-2">
            <button
              onClick={() => onTaskClick(task.id)}
              className={`w-full p-2 text-left bg-gray-300 rounded-md flex items-center gap-2 ${
                task.isCompleted && 'line-through'
              }`}
            >
              {task.isCompleted && <Check />}
              {task.title}
            </button>

            <Button onClick={() => onClickDescription(task)}>
              <ChevronRightIcon />
            </Button>

            <Button onClick={() => onDeleteTaskClick(task.id)}>
              <Trash2 />
            </Button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Tasks
