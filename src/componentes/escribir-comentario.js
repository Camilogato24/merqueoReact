import React from 'react'
import { useForm } from 'react-hook-form';

import '../styles/escribir-comentario.scss'


const EscribirComentarios = (props) => {

    const { handleSubmit, register } = useForm();
    const onSubmit = (data, e) => {
        props.addComentario(data, props.id)
        //limpiar campos
        e.target.reset();

    }
    return( 
        <>
            <form onSubmit={handleSubmit(onSubmit)} className="containerEscribirComentario">
                <div className="InputEscribirComentario">
                    <input
                        name="comentario"
                        ref={
                            register({
                                required: { value: true, message: 'Comentario obligatorio' }
                            })
                        }
                        placeholder="Escribe aquí tu comentario"
                    />
                </div>
                <div className="submitEscribirComentario">
                    <input
                        type="submit"
                        value="Comentar"
                    />
                </div>
            </form>
        </>
    )
}

export default EscribirComentarios;