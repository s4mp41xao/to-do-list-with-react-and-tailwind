import { ChevronRightIcon, Trash2 } from 'lucide-react'

function Tasks({ tasks, onTaskClick, onDeleteTaskClick }) {
  // console.log(props)

  return (
    <div>
      <ul className="space-y-4 p-6 bg-gray-200 rounded-md shadow-md">
        {tasks.map(task => (
          <li key={task.id} className="flex gap-2">
            <button
              onClick={() => onTaskClick(task.id)}
              className={`w-full p-2 text-left bg-gray-300 rounded-md ${
                task.isCompleted && 'line-through'
              }`}
            >
              {task.title}
            </button>

            <button className="p-2 bg-gray-300 rounded-md">
              <ChevronRightIcon />
            </button>

            <button
              onClick={() => onDeleteTaskClick(task.id)}
              className="p-2 bg-gray-300 rounded-md"
            >
              <Trash2 />
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Tasks
