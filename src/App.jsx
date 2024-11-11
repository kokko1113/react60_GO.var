import { useTodos } from "./hooks/useTodos"
import TaskList from "./components/TaskList/TaskList"
import CompletedTaskList from "./components/CompletedTaskList/CompletedTaskList"

const App = () => {
  const {
    todos,
    completedTasks,
    complete,
    uncomplete,
    addCategory,
    removeCategory,
    changeCategory,
    addTask,
    removeTask,
    changeTaskName,
  } = useTodos()

  const handleClickAddCategory = () => addCategory()

  const handleClickRemoveCategory = (catId) => removeCategory(catId)

  const handleClickAddTask = (catId) => addTask(catId)

  const handleClickRemoveTask = (taskId) => removeTask(taskId)

  const handleInputTaskName = (taskId, value) => changeTaskName(taskId, value)

  const handleInputCategory = (catId, value) => changeCategory(catId, value)

  const handleCompleteTask = (taskId) => complete(taskId)

  const handleUncompleteTask = (taskId) => uncomplete(taskId)

  return (
    <div>
      <h1>
        <input className="h1" type="text" />
      </h1>
      <section>
        <h2>未完了タスク</h2>
        <div className="d-flex gap-3 mx-2 overflow-x-scroll" style={{ width: "" }}>
          {todos.map((list) => (
            <TaskList
              list={list}
              onRemoveCategory={handleClickRemoveCategory}
              onChangeCategory={handleInputCategory}
              onAddTask={handleClickAddTask}
              onRemoveTask={handleClickRemoveTask}
              onChangeTaskName={handleInputTaskName}
              onComplete={handleCompleteTask}
              key={list.id}
            />
          ))}
          <button
            className="btn btn-outline-success shadow-sm flex-shrink-0"
            onClick={handleClickAddCategory}
            style={{ width: "150px" }}
          >
            カテゴリー追加
          </button>
        </div>
      </section>
      <section>
        <h2>完了タスク</h2>
        <CompletedTaskList
          tasks={completedTasks}
          onRemoveTask={handleClickRemoveTask}
          onChangeTaskName={handleInputTaskName}
          onUncomplete={handleUncompleteTask}
        />
      </section>
    </div>
  )
}

export default App