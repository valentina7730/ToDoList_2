import { useState } from 'react'
import './App.css'

function App() {
  const [Tasks, setTask] = useState([

    {
      id: 1, 
      name: 'learn React', 
      completed: false,
     },
    { id: 2, 
      name: 'learn JavaScript', 
      completed: false,
     },
    {
      id: 3, 
      name: 'learn HTML', 
      completed: false,
     },
    
  ])

  const [newTask, setNewTask] = useState('')

  const AddTask = () => {

    if(newTask.trim() === '') {
      alert('Task cannot be empty');
      return;
    }
    setTask([
      ...Tasks,
      {
        id: Tasks.length + 1,
        name: newTask,
        completed: false,
      }
    ])
    setNewTask('')

  }

  return (
    <>
      <div>
        <h2>New Task:</h2>
        <input 
        type="text" 
        onChange={(e) => setNewTask(e.target.value)} 
        value={newTask}
        placeholder='Add new task'
        />
        <button onClick={() => {AddTask()}}
          >Add Task
        </button>
      </div>
      <div>
        <h2>Task List:</h2>
        <div>
          {Tasks.map((Tasks) => (
            <div key={Tasks.id}>
              <p>{Tasks.name}</p>
              
              
        </div>
        ))}
        </div>
      </div>
        
      
    </>
  )
}

export default App
