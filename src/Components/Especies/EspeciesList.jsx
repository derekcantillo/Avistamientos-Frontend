import React from 'react'
import { EspeciesForm } from './EspeciesForm'

export const EspeciesList = () => {
 const especies=[{
     id:1,
     nombreComun: 'Delfin',
     nombreCientifico: 'Delphinidae',
     genero:'Delphinus',
     filo:'Eucaria',
     clase:'Mamifero',
     orden:'Placentario',
     familia:'Cataceo',

 },
 {
    id:2,
    nombreComun: 'Delfin',
    nombreCientifico: 'Delphinidae',
    genero:'Delphinus',
    filo:'Eucaria',
    clase:'Mamifero',
    orden:'Placentario',
    familia:'Cataceo',

}]

  return (
    <div className='container '>
        <div class="d-grid gap-2 pt-3 pb-3">
            <button class="btn btn-primary" type="button">+ Agregar Especies</button>
        
         </div>
         <div className='row'>
                <div className='col-8'>
                <table class="table table-dark table-striped">
            <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col">Nombre Comun</th>
                <th scope="col">Nombre Cientifico</th>
                <th scope="col">Genero</th>
                <th scope="col">Opciones</th>

                </tr>
            </thead>
                <tbody>
                   { especies.length>0 ?(
                       especies.map(espe=>(
                        <tr key={espe.id}>
                            <td>{espe.id}</td>
                            <td>{espe.nombreComun}</td>
                            <td>{espe.nombreCientifico}</td>
                            <td>{espe.genero}</td>
                            <td>
                                
                                    
                               
                                        <button className='btn btn-warning'>Editar</button>
                                        
                                        <button className='btn btn-danger'>Eliminar</button>
                                   
                            </td>
                            
                        </tr>
                       ))
                   ):(
                       <tr>
                         <td>No hay especies</td>
                       </tr>
                      
                   )}
                    
                    
                </tbody>
        </table>

                </div>
                <div className='col-4'>
                    <EspeciesForm/>

                </div>
         </div>
        
        
    </div>
  )
}
