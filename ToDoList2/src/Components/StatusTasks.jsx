
export default function StatusTasks({ Tasks, Status }) {
  return (
    <>
      <div className="StatusTasks-container">
        <p>{Status}</p>
        {Tasks.filter((task) => task.state === Status).map((task) => (
          <div key={task.id}>
            <span>{task.name}</span>
            <p>Status: {task.state}</p>
          </div>
        ))}
      </div>
    </>
  );
}