import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'
import * as AvistamientoServer from './AvistamientosServer'
import './effects.css'
import { ModalEdicionForm } from './ModalEdicionForm'

export const AvistamientoCardItem = ({avistamiento, listAvistamientos}) => {
        
  
    const [show, setShow]=useState(false);  

    const closeModal=()=>setShow(false);
    const openModal=()=>setShow(true);

    const handleDelete = async(avistamientoId) => {
        await AvistamientoServer.deleteAvistamiento(avistamientoId);
        listAvistamientos();
    }
        
    console.log(avistamiento.name)

    return (

        <div className='col'>
            <div className='card card-item'>
                <div className='row no-gutters'>
                    
                   <div className='col-12'>
                   <div className="card text-center">
                            <div className="card-header">
                                 {avistamiento.name}
                                </div>  
                                    <div className="card-body">
                                    
                                        <small className='text-muted'>...</small>
                                        <p className="card-text ">{avistamiento.autor}
                                        </p>
                                       
                                        <div className="d-grid gap-3 d-md-flex justify-content-md-end">
                                            <button className="btn btn-outline-primary" type="button" onClick={openModal}>Editar</button>
                                            <button className="btn btn-outline-primary" type="button">Eliminar</button>
                                        </div>
                                        
                                    </div>
                                    <div className="card-footer text-muted">
                                      Autor | 
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
