import CompletedTaskItem from "../CompletedTaskItem/CompletedTaskItem";

const CompletedTaskList = ({ tasks, onRemoveTask, onChangeTaskName, onUncomplete }) => {
  return (
    <div
      className="card p-3 shadow-sm flex-shrink-0"
      style={{
        width: "300px"
      }}
    >
      <div>
        {tasks.map((task) => (
          <CompletedTaskItem
            task={task}
            onRemoveTask={onRemoveTask}
            onChangeTaskName={onChangeTaskName}
            onUncomplete={onUncomplete}
            key={task.taskId}
          />
        ))}
      </div>
    </div>
  );
};

export default CompletedTaskList;