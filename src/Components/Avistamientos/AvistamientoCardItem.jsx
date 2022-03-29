import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'
import * as AvistamientoServer from './AvistamientosServer'
import './effects.css'
import { ModalEdicionForm } from './ModalEdicionForm'
import {ModalDetails} from './ModalDetails'
export const AvistamientoCardItem = ({avistamiento, listAvistamientos}) => {
        
  
    const [show, setShow]=useState(false); 
    const [showDetails, setShowDetails]=useState(false);  

    const closeModal=()=>setShow(false);
    const openModal=()=>setShow(true);

    
        


    return (

        <div className='col'>
            <div className='card card-item'>
                <div className='row no-gutters'>
                    
                   <div className='col-12'>
                   <div className="card text-center">
                            <div className="card-header">
                                #{avistamiento.id} | {avistamiento.name}
                                </div>  
                                    <div className="card-body">
                                    
                                       
                                        <p className="card-text ">
                                           Descripción: {avistamiento.nota}
                                        </p>
                         
                                    </div>
                                    <div className="card-footer text-muted">
                                      
                                    <div className="d-grid gap-3 d-md-flex justify-content-md-end">
                                            <button className="btn btn-warning" type="button" onClick={openModal}>
                                                <i className='bi bi-pencil-square'></i></button>
                                            <button className="btn btn-danger" type="button">
                                                <i className='bi bi-trash3-fill'></i></button>
                                            <button className="btn btn-primary" type="button" onClick={()=>setShowDetails(true)}>
                                            <i class="bi bi-info-square"></i>
                                            </button>
                                        </div>
                                </div>
                            </div>
    
                   </div>
    
                </div>
            </div>

            <ModalEdicionForm
                show={show}
                closeModal={closeModal}

            />
            <ModalDetails  showDetails={showDetails} closeModal={()=>setShowDetails(false)} avistamiento={avistamiento}/>
        </div>
        
      )
}
