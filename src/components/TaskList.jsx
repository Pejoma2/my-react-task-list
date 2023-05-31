import Task from "./Task"

export default function TaskList(props){
    const { lista } = props;
    
    return(
        <div className="lista-tareas">
            <input id="agregar" type="text" placeholder="Agrega tu Nueva TareApp"/>
            <button><i className="fas fa-plus"></i></button>
            
            <ul>      
                                
                {lista.map(elemento => <Task taskName={elemento.task} key={elemento.id}/>)}
                                             
            </ul>
        </div>
    )
}