import './App.css'
import { Sidebar } from './components/Sidebar'

function App() {
  return (
    <div className='flex'>
      <div className='basis-[15%] h-[100vh]'>
        <Sidebar />
      </div>
      <div className='basis-[85%] border'>d</div>
      
    </div>
  )
}

export default App
