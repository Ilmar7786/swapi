import { Container, Navbar } from 'react-bootstrap'
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
                <Navbar.Collapse className='justify-content-end'>
                    <Search/>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export { Header }