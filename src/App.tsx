import Button from "./components/Button";

const App = () => {
  return (
    <main className='grid grid-cols-4 gap-10 p-10'>
      <div className='flex flex-col gap-10'>
        <Button size='sm'>primary-sm</Button>
        <Button size='md'>primary-md</Button>
        <Button size='lg'>primary-lg</Button>
      </div>

      <div className='flex flex-col gap-10'>
        <Button size='sm' variant='secondary'>secondary-sm</Button>
        <Button size='md' variant='secondary'>secondary-md</Button>
        <Button size='lg' variant='secondary'>secondary-lg</Button>
      </div>

      <div className='flex flex-col gap-10'>
        <Button size='sm' variant='outline'>outline-sm</Button>
        <Button size='md' variant='outline'>outline-md</Button>
        <Button size='lg' variant='outline'>outline-lg</Button>
      </div>

      <div className='flex flex-col gap-10'>
        <Button size='sm' variant='ghost'>ghost-sm</Button>
        <Button size='md' variant='ghost'>ghost-md</Button>
        <Button size='lg' variant='ghost'>ghost-lg</Button>
      </div>

      <div className='flex flex-col gap-10'>
        <Button size='sm' variant='destructive'>destructive-sm</Button>
        <Button size='md' variant='destructive'>destructive-md</Button>
        <Button size='lg' variant='destructive'>ghost-lg</Button>
      </div>

      <div className='flex flex-col gap-10'>
        <Button size='sm' variant='warning'>warning-sm</Button>
        <Button size='md' variant='warning'>warning-md</Button>
        <Button size='lg' variant='warning'>warning-lg</Button>
      </div>
  </main>
  )
}

export default App
