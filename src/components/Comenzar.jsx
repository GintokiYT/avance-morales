import { obtenerPreguntas } from '../Helper.js';

const Comenzar = ({setPreguntas, setPosition}) => {

  const handlePreguntas = () => {
    const preguntas = obtenerPreguntas();
    setPreguntas(preguntas.preguntas);
    setPosition(preguntas.arr)
  }

  return (  
    <div className="w-100 min-vh-100 d-flex flex-column justify-content-center align-items-center">
      <button 
        className="btn btn-success"
        onClick={ handlePreguntas }
        >Empezar el quizz</button>
    </div>
  );
}
 
export default Comenzar;
