export  default function Task({taskName}){

    return(
        <div>
                
            <li><input type="radio" />
                <label className="etiqueta"></label>
                {taskName}
                <button className="boton"><i className="fas fa-edit"></i></button>
                <button className="boton"><i className="fas fa-trash"></i></button>
            </li>
               
        </div>

    )
}