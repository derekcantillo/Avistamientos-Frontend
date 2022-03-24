import React from 'react'
import {useHistory} from 'react-router-dom'
import * as AvistamientoServer from './AvistamientosServer'
import './effects.css'

export const AvistamientoCardItem = ({avistamiento, listAvistamientos}) => {
        

        

    return (

        <div className='col'>
            <div className='card card-item'>
                <div className='row no-gutters'>
                    
                   <div className='col-12'>
                   <div className="card text-center">
                            <div className="card-header">
                                
                                </div>  
                                    <div className="card-body">
                                        <h5 className="card-title">{avistamiento.name}s</h5>
                                        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                        <div className="d-grid gap-3 d-md-flex justify-content-md-end">
                                            <button className="btn btn-outline-primary" type="button">Editar</button>
                                            <button className="btn btn-outline-primary" type="button">Eliminar</button>
                                        </div>
                                        
                                    </div>
                                    <div className="card-footer text-muted">
                                        
                                </div>
                            </div>
    
                   </div>
    
                </div>
            </div>
        </div>
        
      )
}
