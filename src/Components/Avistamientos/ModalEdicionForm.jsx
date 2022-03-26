import React from 'react'
import {Modal, Button, Form} from 'react-bootstrap'


export const ModalEdicionForm = (props) => {
  return (
    <Modal show={props.show} onHide={props.closeModal} animation={true} centered>
        <Modal.Header closeButton>
            <Modal.Title>Editar Avistamiento</Modal.Title>
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
                <option>Especies</option>
            </Form.Select>
            <Form.Select className="mb-3">
                <option>Lugares</option>
            </Form.Select>
           
            <Button variant="primary" type="submit">
                Editar
            </Button>
            
            </Form>
        </Modal.Body>

    </Modal>
  )
}
