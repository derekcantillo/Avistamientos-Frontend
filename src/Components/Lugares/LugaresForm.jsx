import React, { useState } from 'react'

export const LugaresForm = () => {

    const ciudades=['Santa Marta', 'Ciénaga', 'Tasajera']

   


  return (
    <div className='card card-small mb-3 shadow'>
        <div className='card-header border-bottom'>
            <h6>Editar Lugares</h6>


        </div>
        <form className='card-body p-4'>
            <div className='form-group row'>
                <div className='col-12'>
                    <label>Nombre Lugar</label>
                    <input
                        id="nombre"
                        className="form-control"
                        type="text"
                        name="nombre"
                        placeholder="Nombre del lugar"
                        />
                </div>
        
      </div>


                <div className="form-group row">
                    
                    <div className="col-12">
                        <label>Ciudad</label>
                            <select type="text" className="form-control form-select form-select-sm" >
                                {ciudades.map=((item,i)=>(
                                    <option key={i} value={i}>{item}</option>
                                ))}
                                
                               
                            </select>
                                                
                    </div>
                </div>
                <div className="form-group row">
                    
                <div className="btn-group mt-3" role="group" aria-label="Basic example">
                    <button type="button" className="btn btn-primary">Guardar</button>
                    <button type="button" className="btn btn-danger">Cancelar</button>
                   
                </div>
                </div>
            
        </form>
        
    </div>
  )
}
