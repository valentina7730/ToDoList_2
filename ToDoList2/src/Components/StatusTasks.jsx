
export default function StatusTasks({ Tasks, Status, handleDragOver, handleDragStart, handleDrop }) {
  return (
    <>
      <div className="StatusTasks-container"
        onDragOver= {handleDragOver}
        onDrop={(e) => handleDrop(e, Status)}
 
      >
        <p>{Status}</p>
        {Tasks.filter((task) => task.state === Status).map((task) => (
          <div key={task.id}
            draggable
            onDragStart= {(e) => handleDragStart(e, task.id)}>
            
            <span>{task.name}</span>
            <p>Status: {task.state}</p>
          </div>
        ))}
      </div>
    </>
  );
}