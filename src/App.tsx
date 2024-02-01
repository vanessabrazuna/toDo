import { Header } from './components/Header'
import { Input } from './components/Input'
import { Tasks } from './components/Tasks'

import './global.css'

export function App() {
  return (
    <div>
      <Header />
      <main>
        <Input />
        <Tasks />
      </main>
    </div>
  )
}
