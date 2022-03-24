import React, {useEffect, useState} from 'react'
import AvistamientoServices from '../../services/AvistamientoServices';
import { AvistamientoCardItem } from './AvistamientoCardItem';
import { AvistamientosList } from './AvistamientosList';

export const AvistamientosManejador = () => {
    const initialStateAvistamientos = [];
    const [listaAvistamientos, setlistaAvistamientos] = useState(initialStateAvistamientos)

    const initialStateFormEdition={
        id: null, 
        autor: "",
        notas:"",
        latitud:"",
        longitud:""
    }

    const [AvistamientoEditar, setAvistamientoEditar]=useState(initialStateFormEdition);
    const [modoEdition, setModoEdition] = useState(false)

    useEffect(()=>{
        salvarAvistamientos();
    }, [])

    const salvarAvistamientos=()=>{
        AvistamientoServices.getAllAvistamientos()
        .then(response=>{
            setlistaAvistamientos(response.data)
        }).catch(e=>{
            
        });

    }

    const editarAvistamiento=(avistamiento)=>{
        setModoEdition(true)
        setAvistamientoEditar({
            id: avistamiento.id, 
            autor: avistamiento.autor,
            notas:avistamiento.notas,
            latitud:avistamiento.latitud,
            longitud:avistamiento.longitud,
            id_lugar_id:avistamiento.id_lugar_id,
            id_especie_id:avistamiento.id_especie_id

        })
    }

    const deleteAvistamiento=(id)=>{
        AvistamientoServices.deleteAvistamientos(id).then(response=>{
            if(response.status===204){
                const avistamientoSinValorEliminado = listaAvistamientos.filter(
                    (avistamiento) => avistamiento.id !== id
                  );

                  setlistaAvistamientos(avistamientoSinValorEliminado)
                }
                
        })
        .catch(e=>{
            
        })
    }

    const agregarAvistamiento = (avistamiento) => {
    
        AvistamientosServices.createAvistamiento(avistamiento)
          .then(response => {
            const nuevoAvistamiento = {
                id: avistamiento.id, 
                autor: avistamiento.autor,
                notas:avistamiento.notas,
                latitud:avistamiento.latitud,
                longitud:avistamiento.longitud,
                id_lugar_id:avistamiento.id_lugar_id,
                id_especie_id:avistamiento.id_especie_id
    
            };
            setlistaAvistamientos([...listaAvistamientos, nuevoAvistamiento]);
    
            
            console.log(response.data);
          })
          .catch(e => {
            console.log(e);
          });
     
      };
      const actualizarAvistamiento = (id, avistamientoActualizado) => {
        setModoEdicion(false);
        AvistamientosServices.updateAvistamiento(id, avistamientoActualizado)
          .then(response => {
            const avistamientosConElActualizado = listaAvistamientos.map(
              (avistamiento) => avistamiento.id === id ? avistamientoActualizado : avistamiento
            );
            setlistaAvistamientos(avistamientosConElActualizado);
           
          })
          .catch(e => {
          
          });
    
        
      };


  return (
    <div>
        
        <AvistamientosList
            avistamientos={listaAvistamientos}
            editar={editarAvistamiento}
            eliminar={deleteAvistamiento}
        />

        <AvistamientoEditar
        AvistamientoEditar={AvistamientoEditar}
        modoEdition={modoEdition}
        actualizar={actualizarAvistamiento}
        />
    </div>
  )
}
