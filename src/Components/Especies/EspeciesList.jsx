import React from 'react'

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

 }]

  return (
    <div className='container pt-5'>
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

                        </tr>
                       ))
                   ):(
                       <td>No hay especies</td>
                   )}
                    
                    
                </tbody>
        </table>
    </div>
  )
}
