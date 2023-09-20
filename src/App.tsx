import { useRoutes } from 'react-router-dom'
import { router } from './route'


function App() {
  return (
    <>
      <div>
        {useRoutes(router)}
      </div>
    </>
  )
}

export default App
