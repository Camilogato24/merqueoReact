import React, {  } from 'react';
import { useForm } from 'react-hook-form';

import '../styles/escribir-estado.scss'

const EscribirEstados = (props) => {
    const { handleSubmit, register } = useForm();
    const onSubmit = (data, e) => {
        console.log(data)
        props.addEstado(data)
        //limpiar campos
        e.target.reset();

    }

    return (
        <React.Fragment>
            <form onSubmit={handleSubmit(onSubmit)} className="containerEscribirEstado">
                <div className="InputEscribirEstado">
                    <input
                        name="estado"
                        ref={
                            register({
                                required: { value: true, message: 'Estado obligatorio' }
                            })
                        }
                        placeholder="Escribe aquí tu estado"
                    />
                </div>
                <div className="submitEscribirEstado">
                    <input
                        type="submit"
                        value="Publicar"
                    />
                </div>
            </form>
        </React.Fragment>
    );
}

export default EscribirEstados;