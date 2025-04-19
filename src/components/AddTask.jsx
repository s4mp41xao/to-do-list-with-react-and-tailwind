import React from 'react'
import { useState } from 'react'

function AddTask({ onAddTaskSubmit }) {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  console.log(title, description)

  return (
    <div className="space-y-4 p-6 bg-gray-200 rounded-md shadow-md flex flex-col">
      <input
        type="text"
        placeholder="Título da tarefa"
        className="rounded-md px-4 py-2 border"
        value={title}
        onChange={event => setTitle(event.target.value)}
      />

      <input
        type="text"
        placeholder="Descrição da tarefa"
        className="rounded-md px-4 py-2 border"
        value={description}
        onChange={event => setDescription(event.target.value)}
      />
      <button
        onClick={() => {
          // verify if title and description is empty
          if (!title.trim() || !description.trim()) {
            return alert('Erro: Preencha o título e a descrição da tarefa')
          }
          onAddTaskSubmit(title, description)
          setTitle('')
          setDescription('')
        }}
        className="text-white bg-black px-4 py-2 font-medium rounded-md"
      >
        Adicionar
      </button>
    </div>
  )
}

export default AddTask
