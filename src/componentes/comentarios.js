import React, { } from 'react'
import Avatar from '../img/avatar.png';
import '../styles/comentarios.scss';
import moment from 'moment';
import 'moment/locale/es';


const Comentarios = (props) => {
    return (
        <>
            <ul className="comentariosContainer">
                {
                    props.comentarios.map((comentario, index) =>
                        <li key={index}>
                            <div className="avatarComentarios">
                                <img src={Avatar} alt="avatarComentario" />
                            </div>
                            <div className="bodyComentarios">
                                <div className="containerComentario">
                                    <p className="nombreComentario">
                                        {comentario.nombre}
                                    </p>
                                    <p>
                                        {comentario.comentario}
                                    </p>
                                </div>
                                <small>{moment(comentario.fecha).fromNow()}</small>
                            </div>
                        </li>
                    )
                }
            </ul>
        </>
    )
}

export default Comentarios;