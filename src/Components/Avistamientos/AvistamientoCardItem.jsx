import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'
import * as AvistamientoServer from './AvistamientosServer'
import './effects.css'
import { ModalEdicionForm } from './ModalEdicionForm'

export const AvistamientoCardItem = ({id, nombreAvistamiento, autor, nota, latitud, longitud }) => {
        
    const [show, setShow]=useState(false);  

    const closeModal=()=>setShow(false);
    const openModal=()=>setShow(true);
        

    return (

        <div className='col'>
            <div className='card card-item'>
                <div className='row no-gutters'>
                    
                   <div className='col-12'>
                   <div className="card text-center">
                            <div className="card-header">
                                #{id} | {nombreAvistamiento}
                                </div>  
                                    <div className="card-body">
                                    
                                        <small className='text-muted'>Latitud: {latitud} | Longitud: {longitud}</small>
                                        <p className="card-text ">{nota}
                                        </p>
                                       
                                        <div className="d-grid gap-3 d-md-flex justify-content-md-end">
                                            <button className="btn btn-outline-primary" type="button" onClick={openModal}>Editar</button>
                                            <button className="btn btn-outline-primary" type="button">Eliminar</button>
                                        </div>
                                        
                                    </div>
                                    <div className="card-footer text-muted">
                                      Autor | {autor} 
                                </div>
                            </div>
    
                   </div>
    
                </div>
            </div>

            <ModalEdicionForm
                show={show}
                closeModal={closeModal}

            />
        </div>
        
      )
}
