import { useState } from 'react'
import './App.css'
import StatusTasks from './Components/StatusTasks'

function App() {
  const [Tasks, setTask] = useState([

    {
      id: 1, 
      name: 'learn React', 
      state: "To do",
     },
    { id: 2, 
      name: 'learn JavaScript', 
      state: "In Dev",
     },
    { id: 3, 
      name: 'learn CSS', 
      state: "In Dev",
     },
    { id: 4, 
      name: 'learn HTML', 
      state: "Done",
    }
    
    
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
        state: "To do",
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
        <div
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'flex-start',
        }}
        >
         <StatusTasks Tasks={Tasks} Status= "To do" />
         <StatusTasks Tasks={Tasks} Status= "In Dev" />
         <StatusTasks Tasks={Tasks} Status= "Done" />
              
        </div>
        </div>
     
      
    </>
  )
}

export default App
