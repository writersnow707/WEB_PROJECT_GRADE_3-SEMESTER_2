import React, {useState} from 'react'
import { Navbar, Nav, Button, Container } from 'react-bootstrap';
import SignUpModal from '../modals/SignUpModal'
import SignInModal from '../modals/SignInModal'
import ProfileModal from '../modals/ProfileModal'

const Header = () => {
  const [signUpModalOn, setSignUpModalOn] = useState(false);
  const [signInModalOn, setSignInModalOn] = useState(false);
  const [profileModalOn, setProfileModalOn] = useState(false);
  return (
    <>
      <SignUpModal 
        show = {signUpModalOn}
        onHide = {() => setSignUpModalOn(false)} 
      />
      <SignInModal 
        show={signInModalOn}
        onHide = {() => setSignInModalOn(false)}
      />
      <ProfileModal
        show = {profileModalOn}
        onHide = {() => setProfileModalOn(false)} 
      />

      <header>
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand>Long Run, Long Learn</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">

                <Nav.Link>
                  <Button 
                    variant="primary"
                    onClick={() => setSignInModalOn(true)}
                  >
                  Sign In
                </Button>
                </Nav.Link>

                <Nav.Link>
                  <Button 
                    variant="secondary"
                    onClick={() => setSignUpModalOn(true)}
                  >
                    Sign Up
                  </Button>
                </Nav.Link>

                <Nav.Link>
                  <Button 
                    variant="info"
                    onClick={() => setProfileModalOn(true)}
                  >
                  My Profile
                  </Button>
                </Nav.Link>

              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
    </>
  )
}

export default Header;