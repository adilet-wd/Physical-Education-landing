import { Container, Nav, Navbar, Offcanvas } from 'react-bootstrap'
import 'src/styles/Header.scss'

export default function Header() {
  return (
    <header className="header">
        <Navbar key={'md'} expand={'lg'} variant='dark'>
            <Container>
                <Navbar.Brand href={'/'}>
                    <img src="src/assets/icons/logo.png" alt="" className='header__logo'/>
                </Navbar.Brand>

                <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-md`} />
                <Navbar.Offcanvas 
                    id={`offcanvasNavbar-expand-md`}
                    aria-labelledby={`offcanvasNavbarLabel-expand-md`}
                    placement="start" 
                >
                    <Offcanvas.Body>
                    <Offcanvas.Header closeButton data-bs-theme="dark">
                        <Offcanvas.Title></Offcanvas.Title>
                    </Offcanvas.Header>
                        <Nav className="justify-content-end flex-grow-1 pe-3 navLinks">
                            <Nav.Link href="/">Главная</Nav.Link>
                            <Nav.Link href="/">О нас</Nav.Link>
                            <Nav.Link href="/">Расписание</Nav.Link>
                        </Nav>
                    </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
        </Navbar>
    </header>
  )
}
