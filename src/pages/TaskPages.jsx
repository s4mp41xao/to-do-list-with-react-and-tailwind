import { ChevronLeftIcon } from 'lucide-react'
import { useNavigate, useSearchParams } from 'react-router-dom'

function TaskPage() {
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const title = searchParams.get('title')
  const description = searchParams.get('description')

  return (
    <div className="w-screen h-screen flex justify-center bg-gray-100 p-6">
      <div className="w-[500px] space-y-4">
        <div className="relative mb-6">
          <button
            onClick={() => navigate(-1)}
            className="absolute left-0 top-0 bottom-0"
          >
            <ChevronLeftIcon />
          </button>

          <h1 className="text-3xl font-bold text-center p-3">
            Detalhes da Tarefa
          </h1>
        </div>

        <div className="p-4 rounded-md bg-gray-200">
          <h2 className="text-xl font-bold">{title}</h2>
          <p>{description}</p>
        </div>
      </div>
    </div>
  )
}

export default TaskPage
