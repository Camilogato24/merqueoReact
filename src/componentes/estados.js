import React, { useState } from 'react'
import Comentarios from './comentarios';
import EscribirComentarios from './escribir-comentario';

import { v4 as uuidv4 } from 'uuid';
import '../styles/estados.scss';
import Avatar from '../img/avatar.png';
import moment from 'moment';
import 'moment/locale/es';


const Estados = props => {

    moment.locale('es');
    const { estados } = props
    const [estadosState, setCurrentEstado] = useState(estados)
    const addComentario = (comentario, id) => {
        let fechaComentario = new Date();
        let copyObj = {
            id: uuidv4(),
            comentario: comentario.comentario,
            nombre: 'usuario en sesion',
            fecha: fechaComentario
        }
        let copyEstados = estados.map(e => {
            if (e.id === id) {
                e.comentariosEstado.push(copyObj);
                return Object.assign({}, e, { comentariosEstado: e.comentariosEstado })
            } else {
                return e;
            }
        })
        setCurrentEstado(copyEstados);
    }
    const addReaccion = (currentEstado) => {
        let estadoNuevo = estados.map(estado => {
            if (estado.id === currentEstado.id) {
                estado.reaccion++
            }
        })
        setCurrentEstado(estadoNuevo)
    }

    return (
        <>
            <div className="estadosList">
                <ul>
                    {
                        estados.length > 0 ?
                            estados.map((item, index) =>
                                <li key={index}>
                                    <div className="estadoContainer">
                                        <div className="avatarEstado">
                                            <img src={Avatar} alt="avatarEstado" />
                                        </div>
                                        <div className="bodyEstado">
                                            <p className="nombre"> {item.nombre}</p>
                                            <small>{moment(item.fecha).fromNow()}</small>
                                            <p>{item.estado}</p>
                                            <div className="reaccionEstado">
                                                <a onClick={
                                                    () => { addReaccion(item) }
                                                }
                                                >Reaccionar</a>
                                                <a>Comentar</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="reaccionesContainer">
                                        <div className="reaccionesTotal">
                                            <p>
                                                {item.reaccion}
                                            </p>

                                        </div>
                                        <div className="comentariosTotal">
                                            <p>
                                                {item.comentariosEstado.length} comentarios
                                            </p>
                                        </div>
                                    </div>
                                    <div className="comentarioContainer">
                                        <Comentarios comentarios={item.comentariosEstado}>
                                        </Comentarios>
                                        <EscribirComentarios
                                            id={item.id}
                                            addComentario={addComentario}>

                                        </EscribirComentarios>
                                    </div>
                                </li>
                            ) : (
                                <h2>No hay comentarios aún {estados.length}</h2>
                            )
                    }
                </ul>
            </div>

        </>

    );
}
export default Estados;