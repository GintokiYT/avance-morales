import Opcion from "./Opcion";

const Pregunta = ({pregunta, setPuntaje, puntaje}) => {
  const { opciones } = pregunta;

  return (  
    <div>
      <p>{pregunta.pregunta}</p>
      <ul className="p-0">
        { opciones.map( (opcion, key) => {
          return (
            <Opcion 
              key={key}
              opcion={opcion}
              name={pregunta.id}
              setPuntaje={setPuntaje}
              puntaje={puntaje}
            />
          )
        })}
      </ul>
    </div>
  );
}
 
export default Pregunta;