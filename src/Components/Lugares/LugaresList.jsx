import React from 'react'

export const LugaresList = () => {

    const lugares=[{
        id:1,
        nombre: 'Playa Salguero',
        ciudad: 'Santa Marta',
        departamento: 'Magdalena',
        pais: 'Colombia'
    }]

  return (
    <div className='container '>
        <div class="d-grid gap-2 pt-3 pb-3">
            <button class="btn btn-primary" type="button">+ Agregar Lugar</button>
        
         </div>
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
                                
                                    
                               
                                        <button className='btn btn-warning'>Editar</button>
                                        
                                        <button className='btn btn-danger'>Editar</button>
                                   
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
  )
}
