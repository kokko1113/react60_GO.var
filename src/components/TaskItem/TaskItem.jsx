const TaskItem = ({ task, onRemoveTask, onChangeTaskName,onComplete }) => {
  return (
    <div
      className="mt-2 d-flex gap-1"
      key={task.id}
    >
      <input
        className="flex-grow-1"
        type="text"
        value={task.name}
        onInput={(e) => onChangeTaskName(task.id, e.target.value)}
        style={{ minWidth: "0px"}}
      />
      <button
        className="btn btn-danger flex-shrink-0"
        onClick={() => onRemoveTask(task.id)}
      >
        削除
      </button>
      <button
        className="d-block btn btn-primary flex-shrink-0"
        onClick={()=>onComplete(task.id)}
      >
        完了
      </button>
    </div>
  );
};

export default TaskItem;