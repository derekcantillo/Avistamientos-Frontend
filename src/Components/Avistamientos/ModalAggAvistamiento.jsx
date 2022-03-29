import React, {useState, useEffect} from 'react'
import {Modal, Button, Form} from 'react-bootstrap'
import * as LugaresServer from '../Lugares/LugaresServer'
import * as EspeciesServer from '../Especies/EspeciesServer';


export const ModalAggAvistamiento = ({show, closeModal, avistamientos}) => {
    const [lugares, setLugares] = useState([])

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
     
      
  return (
    <Modal show={show} onHide={closeModal} animation={true} centered>
        <Modal.Header closeButton>
            <Modal.Title>Añadir Avistamiento</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Nombre</Form.Label>
                <Form.Control type="text" placeholder="Ingrese nombre..." />
                
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Autor</Form.Label>
                <Form.Control type="text" placeholder="Autor..." />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Nota</Form.Label>
                <Form.Control type="text" placeholder="Nota..." />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Latitud</Form.Label>
                <Form.Control type="text" placeholder="Latitud..." />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Longitud</Form.Label>
                <Form.Control type="text" placeholder="Longitud..." />
            </Form.Group>
            <Form.Select className="mb-3">
            {
                    especies.map((especie)=>(
                        <option key={especie.id}>{especie.nameComun}</option>
                    ))
                }
            </Form.Select>
            <Form.Select className="mb-3">
                {
                    lugares.map((lugar)=>(
                        <option key={lugar.id}>{lugar.name}</option>
                    ))
                }
               
            </Form.Select>
           
            <Button variant="primary" type="submit">
                Editar
            </Button>
            
            </Form>
        </Modal.Body>

    </Modal>
  )
}
