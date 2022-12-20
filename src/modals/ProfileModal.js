import React from 'react'
import { Modal, Button } from 'react-bootstrap'

const ProfileModal = ({ show, onHide }) => {
  return (
    <Modal
      show = {show}
      onHide = {onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          My Profile
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>HomeTown</h4>
        <li>CheonAn, Chungcheongnam-do, Republic of Korea</li><br/>
        <h4>Education</h4>
        <oi>
            <li>Kunsan National University (KNU)</li>
        </oi><br/>
        <h4>Contact</h4>
        <oi>
            <li>InfoLAB Laboratory : KNU Digital Information Center, Unit 305</li>
            <li>☎Tel : 010-9963-6447</li>
        </oi>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  )
}

export default ProfileModal