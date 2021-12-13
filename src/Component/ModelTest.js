import React,{useState} from 'react'
import { Modal, Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";

const ModelTest = () => {
    const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
    return (
        <div
        className="d-flex align-items-center justify-content-center"
        style={{ height: "100vh" }}>
        <Button variant="primary" onClick={handleShow}>
          Launch Form modal
        </Button>


        <Modal show={show}>
        <Modal.Header closeButton>
          <Modal.Title>Login Form</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <></>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary">Close Modal</Button>
        </Modal.Footer>
      </Modal>
      </div>
    )
}

export default ModelTest
