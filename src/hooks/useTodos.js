import { useState } from "react";
import { generateId } from "../utils";

const initTodos = [
  {
    id: generateId(),
    category: "Category 1",
    items: [
      {
        id: generateId(),
        name: "Task 1",
      },
    ],
  }
]

export const useTodos = () => {
  const [todos, setTodos] = useState(initTodos);
  const [completedTasks, setCompletedTasks] = useState([]);

  const addCategory = () => {
    setTodos((prevTodos) => {
      const newTodos = [...prevTodos]
      newTodos.push({
        id: generateId(),
        category: "",
        items: [],
      })
      return newTodos
    })
  }

  const removeCategory = (catId) => {
    setTodos((prevTodos) => {
      const newTodos = [...prevTodos]
      const index = newTodos.findIndex((cat) => cat.id === catId)
      if (index < 0) {
        return newTodos
      }
      newTodos.splice(index, 1)
      return newTodos
    })
  }

  const addTask = (catId) => {
    setTodos((prevTodos) => {
      const newTodos = [...prevTodos]
      const index = newTodos.findIndex((cat) => cat.id === catId)
      if (index < 0) {
        return newTodos
      }
      newTodos[index].items.push({
        id: Date.now().toString(),
        name: "",
      })
      return newTodos
    })
  }

  const removeTask = (taskId) => {
    setTodos((prevTodos) => {
      const newTodos = [...prevTodos]
      newTodos.map((list, catIndex) => {
        list.items.map((task, taskIndex) => {
          if (task.id === taskId) {
            list.items.splice(taskIndex, 1)
          }
        })
      })
      return newTodos
    })
  }

  const complete = (taskId) => {
    setTodos((prevTodos) => {
      let targetTask = null
      const newTodos = [...prevTodos]
      newTodos.map((list, catIndex) => {
        list.items.map((task, taskIndex) => {
          if (task.id === taskId) {
            targetTask = {
              catId: list.id,
              catName: list.category,
              taskId: task.id,
              name: task.name,
            }
            newTodos[catIndex].items.splice(taskIndex, 1)
          }
        })
      })

      if (!targetTask) return
      setCompletedTasks(prevCompleteTasks => {
        const newCompleteTasks = [...prevCompleteTasks]
        newCompleteTasks.push(targetTask)
        return newCompleteTasks
      })

      return newTodos
    })
  }

  const uncomplete = (taskId) => {
    setCompletedTasks((prevCompleteTasks) => {
      let targetTask = null
      const newCompleteTasks = [...prevCompleteTasks]
      const index = newCompleteTasks.findIndex((task) => task.taskId === taskId)
      if (index < 0) {
        return newCompleteTasks
      }
      targetTask = newCompleteTasks[index]
      newCompleteTasks.splice(index, 1)

      if (!targetTask) return
      setTodos((prevTodos) => {
        const newTodos = [...prevTodos]
        const index = newTodos.findIndex((list) => list.id === targetTask.catId)
        if (index < 0) {
          newTodos.push({
            id: targetTask.catId,
            category: targetTask.catName,
            items: [{
              id: targetTask.taskId,
              name: targetTask.name,
            }],
          })
        } else {
          newTodos[index].items.push({
            id: targetTask.taskId,
            name: targetTask.name,
          })
        }
        return newTodos
      })

      return newCompleteTasks
    })
  }

  const changeCategory = (catId, value) => {
    setTodos((prevTodos) => {
      const newTodos = [...prevTodos]
      const index = newTodos.findIndex((cat) => cat.id === catId)
      if (index < 0) {
        return newTodos
      }
      newTodos[index].category = value
      return newTodos
    })
  }

  const changeTaskName = (taskId, value) => {
    setTodos((prevTodos) => {
      const newTodos = [...prevTodos]
      newTodos.map((list, catIndex) => {
        list.items.map((task, taskIndex) => {
          if (task.id === taskId) {
            list.items[taskIndex].name = value
          }
        })
      })
      return newTodos
    })
  }

  return {
    todos,
    completedTasks,
    addCategory,
    removeCategory,
    addTask,
    removeTask,
    complete,
    changeCategory,
    changeTaskName,
    uncomplete,
  };
}