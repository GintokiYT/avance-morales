import { DB_PREGUNTAS } from "../db.js";

const Opcion = ({opcion, name, setPuntaje, puntaje}) => {

  return (  
    <div>
      <input 
        id={`radio${name}`}
        type="radio" 
        name={name} 
        value={opcion} 
        onClick={(e) => {
          const pregunta = DB_PREGUNTAS.filter(pregunta => pregunta.id === name);
          if(pregunta[0].respuesta === e.target.value) {
            setPuntaje([
              ...puntaje,
              {id: name, respuesta: e.target.value}
            ]);
          }
          else {
            setPuntaje([
              ...puntaje,
              {id: name, respuesta: e.target.value}
            ]);
          }
        }}
      />
      <label className="ms-2">{opcion}</label>
    </div>
  );
}
 
export default Opcion;
