import { Header } from './components/Header'
import { Input } from './components/Input'
import { Tasks } from './components/Tasks'

import styles from './App.module.css'

export function App() {
  return (
    <main>
      <Header />
      <section className={styles.container}>
        <Input />
        <Tasks />
      </section>
    </main>
  )
}
