import { ChevronsLeft } from 'lucide-react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import Title from '../components/Title'

function TaskPage() {
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const title = searchParams.get('title')
  const description = searchParams.get('description')

  return (
    <div className="w-screen h-screen flex justify-center bg-gray-100 p-6">
      <div className="w-[500px] space-y-4">
        <div className="relative mb-10">
          <button
            onClick={() => navigate(-1)}
            className="absolute left-0 top-2 bottom-0"
          >
            <ChevronsLeft />
          </button>

          <Title>Detalhes da Tarefa</Title>
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
