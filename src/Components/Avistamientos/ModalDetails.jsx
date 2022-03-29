import React from 'react'
import {Modal, Button, Form} from 'react-bootstrap'


export const ModalDetails = ({showDetails, closeModal, avistamiento}) => {
  return (
    <Modal show={showDetails} onHide={closeModal}  animation={true} centered>
        <Modal.Header closeButton>
            <Modal.Title>Detalles de Avistamiento</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        Nombre del Avistamiento:  {avistamiento.name} <br/>
        Descripción: {avistamiento.nota}<br/>
        Autor: {avistamiento.autor}<br/>
        Latitud: {avistamiento.latitud}<br/>
        Longitud: {avistamiento.longitud}<br/>
        Lugar: {avistamiento.id_lugar_id}<br/>
        Especia: {avistamiento.id_especie_id}
        </Modal.Body>
        <Modal.Footer>
            <Button variant='primary' onClick={closeModal}>Ok</Button>
        </Modal.Footer>

    </Modal>
  )
}
