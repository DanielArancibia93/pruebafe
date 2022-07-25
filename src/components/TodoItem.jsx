import React from "react";

/* debo recibir los props */
export function eliminarTareas(){
};
export function TodoItem({ todo, cambiarEstado }) {
  const { id, task, completed, descrip } = todo;
  const fnCambiarEstado = () => {
    cambiarEstado(id)
  }
  return (
   
    <li>
        <a className="bold">
            <button onClick={eliminarTareas}>X</button>
            <h2>{task}</h2>
            <p>{descrip}</p>
        </a>
    </li>
  
    
  );
}
