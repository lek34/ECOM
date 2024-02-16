import {Navbar,Nav} from 'react-bootstrap'
import {Container} from 'react-bootstrap'
import {Link} from 'react-router-dom'
function Header() {
    return (
        <>
           <Navbar bg="light" data-bs-theme="light">
            <Container>
            <Navbar.Brand href="#home">E-Commerce</Navbar.Brand>
                <Nav className="mr-auto navbar-wrapper">
                    <Link to="/add">Add Product</Link>
                    <Link to="/update">Update Product</Link>
                    <Link to="/login">Login</Link>
                    <Link to="/register">Register</Link>
                </Nav>
            </Container>
            </Navbar>
        </>
    )
}

export default Header