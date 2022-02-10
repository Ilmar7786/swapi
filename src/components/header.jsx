import { Container, Nav, Navbar } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import { Search } from './search/search';

const Header = () => {
    return (
        <Navbar bg='light' expand='lg'>
            <Container>
                <Navbar.Brand>
                    <NavLink to='/' className='text-decoration-none'>Swapi</NavLink>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls='navbarScroll'/>
                <Navbar.Collapse>
                    <Nav
                        className='me-auto my-2 my-lg-0 justify-content-center'
                        style={{maxHeight: '100px'}}
                        navbarScroll
                    >
                        <NavLink
                            className='nav-link'
                            to='history'
                        >
                            History
                        </NavLink>
                    </Nav>

                    <Search/>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export { Header }