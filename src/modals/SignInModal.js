import React from 'react'
import { Modal, Button, Form, Container } from 'react-bootstrap'
import HorizontalLine from '../components/HorizonLine'

const SignInModal = ({ show, onHide }) => {
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
          Sign In
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
          </Form.Group>

          <Button block variant="info" type="button" className="my-3">
               Sign In
          </Button>
        </Form>
      </Modal.Body>
    </Container>
    </Modal>
  )
}

export default SignInModal