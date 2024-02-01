import Clipboard from '../assets/clipboard.png'

import styles from './Tasks.module.css'

export function Tasks() {
  return (
    <section>
      <div className={styles.info}>
        <div className={styles.infoCreated}>
          <strong>Tarefas criadas</strong>
          <span>0</span>
        </div>

        <div className={styles.infoDone}>
          <strong>Concluídas</strong>
          <span>0</span>
        </div>
      </div>

      <div className={styles.list}>
        <img src={Clipboard} alt="" />
        <strong>Você ainda não tem tarefas cadastradas</strong>
        <span>Crie tarefas e organize seus itens a fazer</span>
      </div>
    </section>
  )
}
