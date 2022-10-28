import { DB_PREGUNTAS } from './db.js';

const obtenerPreguntas = () => {
  const size = DB_PREGUNTAS.length;

  const arr = []
  for(let i = 0; i < 10; i++) {
    const value = generarAleatorio(size - 1);
    
    if(arr.includes(value) !== true) {
      arr.push(value);
      continue;
    }
    i--;
  }

  const preguntas = [];
  for(let i = 0; i < arr.length; i++) {
    const value = DB_PREGUNTAS[arr[i]];
    preguntas.push(value);
  }

  return {
    preguntas,
    arr
  };
}

const getPosition = (arr) => {
  return arr;
}

const generarAleatorio = (max) => {
  return Math.floor((Math.random() * (max - 0 + 1)) + 0);
}

export {
  obtenerPreguntas,
  getPosition
}