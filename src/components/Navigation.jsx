import { Navbar, Nav, Container } from "react-bootstrap";

const Navigation = () => {

    return(
        <>
            <Navbar className="bg-primary">
                <Container>
                    <Navbar.Brand href="/" className="text-white p-3">¡Pizzeria Mamma Mia!</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/" className="text-white p-3">Home</Nav.Link>
                            <Nav.Link href="/profile" className="text-white p-3">Profile</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
                
            </Navbar>
            
        </>
    );
};

export default Navigation