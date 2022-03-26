import React, {useEffect, useState} from 'react'
import { AvistamientoCardItem } from './AvistamientoCardItem'
import * as AvistamientosServer from './AvistamientosServer'

export const AvistamientosList = (props) => {

    const dataCard=[{
        id:1, 
        nombreAvistamiento:'Avistamiento Bahia',
        autor:'Derek Cantillo',
        nota: 'Avistamiento  encontrado',
        latitud: '00000000',
        longitud:'00000000',
        lugar: 'Salguero',
        especie: 'Delgifes'
    }]

    const [avistamiento, setAvistamiento] = useState([])

    const listAvistamientos = async()=>{
        try{
            const res = await AvistamientosServer.listAvistamientos();
            const data = await res.json()
            setAvistamiento(data.avistamientos)

        } catch(error){
                console.log()
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
            dataCard.map(avis=>(
                <AvistamientoCardItem key={avis.id}
                    {...avis}
                />
                    
            
            ))
        }
        
    
    
    </div>
      </div>
    
  )
}
