import React, {useEffect, useState} from 'react'
import { AvistamientoCardItem } from './AvistamientoCardItem'
import * as AvistamientosServer from './AvistamientosServer'

export const AvistamientosList = (props) => {

    const [avistamiento, setAvistamiento] = useState([])

    const listAvistamientos = async()=>{
        try{
            const res = await AvistamientosServer.listAvistamientos();
            const data = await res.json()
            setAvistamiento(data.avistamientos)

        } catch(error){

        }
    };

    useEffect(()=>{
        listAvistamientos()
    },[])
  return (
      <div className='container pt-4'>
      <div class="d-grid gap-2">
        <button class="btn btn-primary" type="button">+ Agregar Avistamiento</button>
        
    </div>
      <div className='row rows-cols-1 row-cols-md-3 g-3 mt-3'>
        
        

        {
            avistamiento.map(avis=>(
                <AvistamientoCardItem key={avis.id}
                    avistamiento={avistamiento} listAvistamientos={listAvistamientos}
                />
                    
            
            ))
        }
        
    
    
    </div>
      </div>
    
  )
}