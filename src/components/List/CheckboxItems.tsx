import * as Checkbox from '@radix-ui/react-checkbox'
import { CheckIcon } from '@radix-ui/react-icons'

import styles from './CheckboxItems.module.css'

export function CheckboxItems() {
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <Checkbox.Root className={styles.checkboxRoot}>
        <Checkbox.Indicator className={styles.checkboxIndicator}>
          <CheckIcon />
        </Checkbox.Indicator>
      </Checkbox.Root>
    </div>
  )
}
