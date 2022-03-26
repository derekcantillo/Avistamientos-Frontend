import React, {useState} from 'react'
import { LugaresForm } from './LugaresForm'

export const LugaresList = () => {
    const [show, setShow] = useState(false)
    const lugares=[{
        id:1,
        nombre: 'Playa Salguero',
        ciudad: 'Santa Marta',
        departamento: 'Magdalena',
        pais: 'Colombia'
    }]

    const activarEdicion=()=>{
        setShow(!show);

    }
  return (
    <div className='container '>
        <div class="d-grid gap-2 pt-3 pb-3">
            <button class="btn btn-primary" type="button">+ Agregar Lugar</button>
        
         </div>
         <div className='row'>
            <div className='col-8'>
            <table class="table table-dark table-striped">
            <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col">Nombre</th>
                <th scope="col">Ciudad</th>
                <th scope="col">Departamento</th>
                <th scope="col">Pais</th>
                <th scope="col">Opciones</th>

                </tr>
            </thead>
                <tbody>
                   { lugares.length>0 ?(
                       lugares.map(lugar=>(
                        <tr key={lugar.id}>
                            <td>{lugar.id}</td>
                            <td>{lugar.nombre}</td>
                            <td>{lugar.ciudad}</td>
                            <td>{lugar.departamento}</td>
                            <td>{lugar.pais}</td>
                            <td>
                                
                                    
                               
                                        <button className='btn btn-warning' onClick={activarEdicion}>Editar</button>
                                        
                                        <button className='btn btn-danger'>Eliminar</button>
                                   
                            </td>
                            
                        </tr>
                       ))
                   ):(
                       <tr>
                         <td>No se han registrado lugares</td>
                       </tr>
                      
                   )}
                    
                    
                </tbody>
        </table>

            </div>
            <div className='col-4'>
                {activarEdicion && <LugaresForm/>
                
                }
                   
            </div>
         </div>
        
    </div>
  )
}
