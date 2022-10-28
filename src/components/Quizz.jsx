import Pregunta from "./Pregunta";

const Quizz = ({preguntas, setPuntaje, puntaje, handleSubmit}) => {

  return (  
    <main>
        <div className="container mt-5 w-75">
          <form 
            onSubmit={handleSubmit}
          >
            {preguntas.map(pregunta => {
              const { id } = pregunta;
              return (
                <Pregunta 
                  key={id}
                  pregunta={pregunta}
                  setPuntaje={setPuntaje}
                  puntaje={puntaje}
                />
              )
            })}
            <input className="btn btn-success w-50 d-block m-auto mt-5 mb-3"  type="submit" value="Enviar"/>
          </form>
        </div>
      </main>
  );
}
 
export default Quizz;