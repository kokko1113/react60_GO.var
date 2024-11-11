import TaskItem from "../TaskItem/TaskItem";

const TaskList = ({
  list,
  onRemoveCategory,
  onChangeCategory,
  onAddTask,
  onRemoveTask,
  onChangeTaskName,
  onComplete,
}) => {
  return (
    <div
      className="card p-3 shadow-sm flex-shrink-0"
      style={{
        width: "300px"
      }}
      key={list.id}
    >
      <input
        className="mb-2"
        type="text"
        value={list.category}
        onInput={(e) => onChangeCategory(list.id, e.target.value)}
      />
      <div>
        {list.items.map((task) => (
          <TaskItem
            task={task}
            onRemoveTask={onRemoveTask}
            onChangeTaskName={onChangeTaskName}
            key={task.id}
            onComplete={onComplete}
          />
        ))}
      </div>
      <button onClick={() => onAddTask(list.id)} className="btn btn-outline-success mt-4">タスク追加</button>
      <button onClick={() => onRemoveCategory(list.id)} className="btn btn-outline-danger mt-2">カテゴリー削除</button>
    </div>
  );
};

export default TaskList;