import { PlusCircle } from 'lucide-react'

import styles from './Input.module.css'

export function Input() {
  return (
    <form className={styles.form}>
      <input
        className={styles.input}
        type="text"
        placeholder="Adicione uma nova tarefa"
      />
      <button className={styles.button} type="button">
        Criar
        <PlusCircle size={16} />
      </button>
    </form>
  )
}
