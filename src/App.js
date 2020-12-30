import React, { useState, Fragment, useEffect } from 'react'
import EscribirEstados from './componentes/escribir-estados';
import Estados from './componentes/estados';
import { v4 as uuidv4 } from 'uuid';

import './styles/app.scss'
import Menu from './componentes/menu';

function App() {
  const estados = [
    {
      id: uuidv4(),
      nombre: 'Juan Rodriguez',
      fecha: new Date('Tue Dec 23 2020 07:50:22 GMT-0500 (hora estándar de Colombia)'),
      estado: 'Este es un estado de información en ejemplo.',
      reaccion: 0,
      comentariosEstado: [
        { id: uuidv4(), fecha: new Date('Tue Dec 28 2020 18:50:22 GMT-0500 (hora estándar de Colombia)'), comentario: 'Este es un comentario del estado', nombre: 'Elena' },
        { id: uuidv4(), fecha: new Date('Tue Dec 29 2020 15:50:22 GMT-0500 (hora estándar de Colombia)'), comentario: 'Este es un comentario del estado', nombre: 'Elena' }
      ]
    },
    {
      id: uuidv4(),
      nombre: 'Martha Fernández',
      fecha: new Date('Tue Dec 25 2020 07:50:22 GMT-0500 (hora estándar de Colombia)'),
      estado: 'Este es un estado de información en ejemplo 2.',
      reaccion: 0,
      comentariosEstado: [
        { id: uuidv4(), fecha: new Date('Tue Dec 26 2020 12:50:22 GMT-0500 (hora estándar de Colombia)'), comentario: 'Este es un comentario del estado 2', nombre: 'Camilo' },
        { id: uuidv4(), fecha: new Date('Tue Dec 27 2020 05:50:22 GMT-0500 (hora estándar de Colombia)'), comentario: 'Este es un comentario del estado 2', nombre: 'Luffy' }
      ]
    }
  ]
  const [estadosList, setEstadosList] = useState(estados)
  useEffect(() => { }, [estadosList])

  const armarEstados = (estado) => {
    estado.id = uuidv4()
    estado.nombre = "Camilo F."
    estado.fecha = new Date();
    estado.reaccion = 0;
    estado.comentariosEstado = []
  }

  const addEstado = (estado) => {
    armarEstados(estado)
    setEstadosList([
      ...estadosList,
      estado
    ])
  }
  const addReaccion = (estadoReaccion) => {
    setEstadosList(estadosList.map(estado =>(estado.id === estadoReaccion.id ? estado.reaccion++ : estado.reaccion = estadoReaccion.reaccion)))
    return estadosList;
  }

  return (
    <>
      <div className="body-app">
        <Menu></Menu>
        <div className="estadosContainer">
          <EscribirEstados addEstado={addEstado}></EscribirEstados>
          <Estados estados={estadosList}></Estados>
        </div>
      </div>
    </>

  );
}
export default App;