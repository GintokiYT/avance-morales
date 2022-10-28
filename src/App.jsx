import { useState, useEffect, Fragment } from "react";

// Componentes
import Navegacion from "./components/Navegacion.jsx";
import Comenzar from "./components/Comenzar.jsx";
import Quizz from "./components/Quizz.jsx";

const App = () => { 

  const [ preguntas, setPreguntas ] = useState([]);

  const [ position, setPosition ] = useState([]);

  const [ puntaje, setPuntaje ] = useState([]);

  const [ resultado, setResultado ] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const arrInvertido = puntaje.reverse();
    const postionReverse = position.reverse();

    const respuestas = [];
    postionReverse.forEach( pos => {
      const result = arrInvertido.find(e => e.id === pos + 1);
      if(result) {
        respuestas.push(result);
      }
    })

    let puntajetotal = 0;

    respuestas.forEach(respuesta => {
      const pregunta = preguntas.find(e => e.id === respuesta.id);
      if(pregunta.respuesta === respuesta.respuesta) {
        puntajetotal += 2;
      }
    })

    setResultado(puntajetotal);

  };

  useEffect(() => {
  }, []);

  return (
    <Fragment>
      <Navegacion />
      {
        resultado === null
        ? null
        : <div className="alert alert-primary alert-dismissible fade show" role="alert">
            <p className="text-center display-4 text-uppercase">tu puntaje es {resultado}</p>
            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
          </div>
      }
      {
        preguntas.length === 0 
        ? <Comenzar 
            setPreguntas={setPreguntas}
            setPosition={setPosition}
          /> 
        : <Quizz 
            preguntas={preguntas}
            setPuntaje={setPuntaje}
            puntaje={puntaje}
            handleSubmit={handleSubmit}
          />
      }
    </Fragment>
  )
}

export default App
