export default function StatusTasks({
  Tasks,
  Status,
  handleDragOver,
  handleDragStart,
  handleDrop,
  handleDelete,
  handleCheck
}) {
  return (
    <div
      className="StatusTasks-container"
      onDragOver={handleDragOver}
      onDrop={(e) => handleDrop(e, Status)}
    >
      <p>{Status}</p>
      {Tasks.filter((task) => task.state === Status).map((task) => (
        <div
          key={task.id}
          draggable
          onDragStart={(e) => handleDragStart(e, task.id)}
          style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}
        >
          {/* Checkbox solo para To do y Done */}
          {Status !== "In Dev" && (
            <input
              type="checkbox"
              checked={task.state === "Done"}
              onChange={(e) => handleCheck(task.id, e.target.checked)}
            />
          )}
          <span>{task.name}</span>
          <button onClick={() => handleDelete(task.id)} style={{ marginLeft: 'auto' }}>
            🗑️
          </button>
        </div>
      ))}
    </div>
  );
}