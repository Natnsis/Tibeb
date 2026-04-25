import { Text } from "./components/Text"
import { Button } from './components/Button'

const App = () => {
  return (
    <main className="p-10 flex">
      <Button variant="primary">Button</Button>
      <Button variant="secondary">Button</Button>
      <Button variant="outline">Button</Button>
      <Button variant="ghost">Button</Button>
      <Button variant="destructive">Button</Button>
      <Button variant="warning">Button</Button>

      <Text variant="title">Page Title</Text>
      <Text variant="themed">Section Title</Text>
      <Text variant="secondary">Card Title</Text>
      <Text variant="muted">Body text</Text>
      <Text variant="destructive">Caption text</Text>
    </main>
  )
}

export default App
