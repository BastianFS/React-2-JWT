import { Navbar, Nav, Container } from "react-bootstrap";
import { useContext } from "react"; 
import { CartContext } from "../context/CartContext";
import { FaCartShopping } from "react-icons/fa6";
import { Link } from "react-router-dom";



const Navigation = () => {

    const { priceTotal } = useContext(CartContext)

    return(
        <>
            <Navbar className="bg-primary sticky-top">
                    <Container>
                            <Navbar.Brand href="/" className="text-white p-3">¡Pizzeria Mamma Mia!</Navbar.Brand>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="me-auto">
                                    <Link to="/" className="text-white p-3 text-decoration-none">Home</Link>
                                    <Link to="/profile" className="text-white p-3 text-decoration-none">Profile</Link>
                                </Nav>
                            </Navbar.Collapse>
                            <Link to="/cart" className="text-white text-decoration-none">
                                <div className="d-flex justify-content-end align-items-center">
                                    <FaCartShopping/> 
                                    <p className="p-2 pt-3">Carrito:</p>
                                    <h4>{priceTotal}</h4>
                                </div>
                            </Link> 
                    </Container>
                    z
                        
                
                
            </Navbar>
            
        </>
    );
};

export default Navigation