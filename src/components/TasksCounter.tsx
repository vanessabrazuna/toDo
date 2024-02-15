import styles from './TasksCounter.module.css'

interface TasksCounterProps {
  tasksCounter: number
  checkedTasksCounter: number
}

export function TasksCounter({
  tasksCounter,
  checkedTasksCounter,
}: TasksCounterProps) {
  return (
    <header className={styles.container}>
      <aside>
        <p>Tarefas criadas</p>
        <span>{tasksCounter}</span>
      </aside>

      <aside>
        <p>Concluídas</p>
        <span>
          {tasksCounter === 0
            ? tasksCounter
            : `${checkedTasksCounter} de ${tasksCounter}`}
        </span>
      </aside>
    </header>
  )
}
