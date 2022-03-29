import React, {useState, useEffect} from 'react'
import {Modal, Button, Form} from 'react-bootstrap'
import * as LugaresServer from '../Lugares/LugaresServer'
import * as EspeciesServer from '../Especies/EspeciesServer';
import * as AvistamientosServer from './AvistamientosServer'
export const ModalAggAvistamiento = ({show, closeModal, avistamientos}) => {
    const [lugares, setLugares] = useState([])
    const initalFormState={
        id:0, 
        name:'', 
        autor:'',
        nota:'',
        latitud: '',
        longitud:'',
        id_lugar_id:'',
        id_especie_id:'',    
    }
    const [avistamiento, setAvistamiento] = useState(initalFormState)
    const listLugares = async () => {
        try {
          const res = await LugaresServer.listLugares();
          const data = await res.json();
          setLugares(data.lugares);
        } catch (error) {
          console.log(error);
        }
      };
    
      useEffect(() => {
        listLugares();
      }, []);


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
     
    const handleInputChange=(e)=>{
        setAvistamiento({...avistamiento, [e.target.name]:e.target.value})
    }
    const handleSubmit= async (e)=>{
        e.preventDefault()

        try {
            let res = await AvistamientosServer.addAvistamiento(avistamiento);
            const data = await res.json();
            console.log(data)
        } catch (error) {
            console.log(error);
        }
    }
  return (
    <Modal show={show} onHide={closeModal} animation={true} centered>
        <Modal.Header closeButton>
            <Modal.Title>Añadir Avistamiento</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" >
                <Form.Label>Nombre</Form.Label>
                <Form.Control type="text" placeholder="Ingrese nombre..." onChange={handleInputChange} value={avistamiento.name} />
                
            </Form.Group>

            <Form.Group className="mb-3" >
                <Form.Label>Autor</Form.Label>
                <Form.Control type="text" placeholder="Autor..." value={avistamiento.autor} onChange={handleInputChange}/>
            </Form.Group>
            <Form.Group className="mb-3" >
                <Form.Label>Nota</Form.Label>
                <Form.Control type="text" placeholder="Nota..." value={avistamiento.nota} onChange={handleInputChange}/>
            </Form.Group>
            <Form.Group className="mb-3" >
                <Form.Label>Latitud</Form.Label>
                <Form.Control type="text" placeholder="Latitud..." value={avistamiento.latitud} onChange={handleInputChange}/>
            </Form.Group>
            <Form.Group className="mb-3" >
                <Form.Label>Longitud</Form.Label>
                <Form.Control type="text" placeholder="Longitud..." value={avistamiento.longitud} onChange={handleInputChange} />
            </Form.Group>
            <Form.Select className="mb-3">
            {
                    especies.map((especie)=>(
                        <option key={especie.id} value={avistamiento.id_especie_id} onChange={handleInputChange}>{especie.nameComun}</option>
                    ))
                }
            </Form.Select>
            <Form.Select className="mb-3">
                {
                    lugares.map((lugar)=>(
                        <option key={lugar.id} value={avistamiento.id_lugar_id} onChange={handleInputChange}>{lugar.name}</option>
                    ))
                }
               
            </Form.Select>
           
            <Button variant="primary" type="submit">
                Agregar
            </Button>
            
            </Form>
        </Modal.Body>

    </Modal>
  )
}
