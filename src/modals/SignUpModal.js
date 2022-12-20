import React from 'react'
import { Modal, Button, Form, Container } from 'react-bootstrap'
import HorizontalLine from '../components/HorizonLine'

const SignUpModal = ({ show, onHide }) => {
  return (
    <Modal
      show = {show}
      onHide = {onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
    <Container>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Sign Up
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control placeholder="Enter your name" />
          </Form.Group>

          <Form.Group className="mb-3">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
          </Form.Group>

          <Form.Group className="mb-3">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control type="password" placeholder="Confirm Password" />
          </Form.Group>
          <Button block variant="secondary" type="button" className="my-3">
               Sign Up
          </Button>
        </Form>
      </Modal.Body>
    </Container>
    </Modal>
  )
}

export default SignUpModal;