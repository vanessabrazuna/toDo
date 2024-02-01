import Clipboard from '../../assets/clipboard.png'

import styles from './ListEmpty.module.css'

export function ListEmpty() {
  return (
    <div className={styles.empty}>
      <img src={Clipboard} alt="" />
      <strong>Você ainda não tem tarefas cadastradas</strong>
      <span>Crie tarefas e organize seus itens a fazer</span>
    </div>
  )
}
