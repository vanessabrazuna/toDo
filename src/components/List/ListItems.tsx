import { Trash2 } from 'lucide-react'
import { CheckboxItems } from './CheckboxItems'
import styles from './ListItems.module.css'

export function ListItems() {
  return (
    <div className={styles.items}>
      <CheckboxItems />
      <span>
        Integer urna interdum massa libero auctor neque turpis turpis semper.
        Duis vel sed fames integer.
      </span>
      <Trash2 size={16} className={styles.trash} />
    </div>
  )
}
