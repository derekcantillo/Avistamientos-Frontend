import React, {useState, useEffect} from 'react'
import { EspeciesForm } from './EspeciesForm'
import * as EspeciesServer from './EspeciesServer'
export const EspeciesList = () => {
 const [especies, setEspecie] = useState([])


 const listEspecies = async () => {
    try {
      const res = await EspeciesServer.listEspecies()
      const data = await res.json();
      setEspecie(data.especies);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    listEspecies()
  }, []);

 

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
                            <td>{espe.nameComun}</td>
                            <td>{espe.nameCientifico}</td>
                            <td>{espe.id_genero_id}</td>
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
