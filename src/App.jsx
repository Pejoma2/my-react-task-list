import './App.css'
import Header from './components/Header'
import TaskList from './components/TaskList'
import {listaTareas} from "./data"


function App() {

  return (
    <div className='contenedor-principal'>
     <Header/>
     <TaskList lista = {listaTareas}/>
     


    </div>
  )
}

export default App
