import React, {useEffect, useState} from 'react'
import { AvistamientoCardItem } from './AvistamientoCardItem'
import * as AvistamientosServer from './AvistamientosServer'

export const AvistamientosList = () => {

    
    const [avistamientos, setAvistamiento] = useState([])

    const listAvistamientos = async () => {
        try {
          const res = await AvistamientosServer.listAvistamientos()
          const data = await res.json();
          setAvistamiento(data.avistamientos);
        } catch (error) {
          console.log(error);
        }
      };
    
      useEffect(() => {
        listAvistamientos()
      }, []);
    


    

  return (
    
      <div className='container pt-4'>
      <div class="d-grid gap-2">
        <button class="btn btn-primary" type="button"><i class="bi bi-plus-square"></i> Agregar Avistamiento</button>
        
    </div>
      <div className='row rows-cols-1 row-cols-md-3 g-3 mt-3'>
        
        

        {
            avistamientos.map((avistamiento)=>(
                <AvistamientoCardItem key={avistamiento.id} avistamiento={avistamiento} listAvistamientos={listAvistamientos}/>
            ))
        }
        
    
    
    </div>
      </div> 

    
    
  )
}
