import Button from './components/Button'

const App = () => {
  return (
    <main className='flex flex-col'>
      <h1 className='text-4xl mb-10'>hello there</h1>
      <div className='space-x-10'>
      <Button className='text-priamry'>Submit here</Button>
      <Button>Cancel</Button>
      </div>
  </main>
  )
}

export default App
