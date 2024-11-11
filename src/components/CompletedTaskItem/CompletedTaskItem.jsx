const CompletedTaskItem = ({ task, onRemoveTask, onChangeTaskName, onUncomplete }) => {
  return (
    <div
      className="mt-2 d-flex gap-1"
      key={task.id}
    >
      <input
        className="flex-grow-1"
        type="text"
        value={task.name}
        disabled
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
        onClick={()=>onUncomplete(task.taskId)}
      >
        未完了
      </button>
    </div>
  );
};

export default CompletedTaskItem;