import { ListEmpty } from './List/ListEmpty'
import { ListItems } from './List/ListItems'

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
        {/* <ListEmpty /> */}
        <ListItems />
        <ListItems />
        <ListItems />
      </div>
    </section>
  )
}
