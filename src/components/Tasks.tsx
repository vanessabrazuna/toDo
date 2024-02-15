import { useState } from 'react'
import { PlusCircle } from 'lucide-react'
import { ListEmpty } from './List/ListEmpty'
import { ListItems } from './List/ListItems'
import { TasksCounter } from './TasksCounter'
import { toast } from 'sonner'

import styles from './Tasks.module.css'

import { Input } from './Input'
import { Button } from './Button'

export interface ITask {
  id: number
  text: string
  isChecked: boolean
}

export function Tasks() {
  const [inputValue, setInputValue] = useState('')
  const [tasks, setTasks] = useState<ITask[]>(() => {
    const tasksOnStorage = localStorage.getItem('tasks')

    if (tasksOnStorage) {
      return JSON.parse(tasksOnStorage)
    }

    return []
  })

  const checkedTasksCounter = tasks.reduce((prevValue, currentTask) => {
    if (currentTask.isChecked) {
      return prevValue + 1
    }

    return prevValue
  }, 0)

  function handleAddTask() {
    if (!inputValue) {
      return
    }

    const newTask: ITask = {
      id: new Date().getTime(),
      text: inputValue,
      isChecked: false,
    }

    setTasks((state) => [...state, newTask])
    setInputValue('')
  }

  function handleRemoveTask(id: number) {
    const filteredTasks = tasks.filter((task) => task.id !== id)

    if (!toast.success('Tarefa apagada com sucesso! 👌🏼😉')) {
      return
    }

    setTasks(filteredTasks)

    localStorage.setItem('tasks', JSON.stringify(filteredTasks))
  }

  function handleToggleTask({ id, value }: { id: number; value: boolean }) {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, isChecked: value }
      }

      return { ...task }
    })

    setTasks(updatedTasks)
  }

  return (
    <section className={styles.content}>
      <div className={styles.taskInfoContainer}>
        <Input
          onChange={(e) => setInputValue(e.target.value)}
          value={inputValue}
        />
        <Button onClick={handleAddTask}>
          Criar
          <PlusCircle size={16} color="#f2f2f2" fontWeight="bold" />
        </Button>
      </div>

      <div className={styles.tasksList}>
        <TasksCounter
          tasksCounter={tasks.length}
          checkedTasksCounter={checkedTasksCounter}
        />

        {tasks.length > 0 ? (
          <div>
            {tasks.map((task) => (
              <ListItems
                key={task.id}
                data={task}
                removeTask={handleRemoveTask}
                toggleTaskStatus={handleToggleTask}
              />
            ))}
          </div>
        ) : (
          <ListEmpty />
        )}
      </div>
    </section>
  )
}
