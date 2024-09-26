import { Navbar, Nav, Container } from "react-bootstrap";
import { useContext } from "react"; 
import { CartContext } from "../context/CartContext";
import { FaCartShopping } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";



const Navigation = () => {

    const { priceTotal } = useContext(CartContext)
    const { token, setToken } = useContext(UserContext)
    const navigate = useNavigate()

    const handleLogout = () => {
        setToken("")
        navigate("/")
        alert("Cierre de sesión exitoso")
        console.log(token)
    }
    
    return(
        <>
            <Navbar className="bg-primary sticky-top">
                    <Container>
                            <Link href="/" className="text-white p-3">¡Pizzeria Mamma Mia!</Link>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="me-auto">
                                    <Link to="/" className="text-white p-3 text-decoration-none">Home</Link>
                                    {token?(<>
                                                        <Link to="/profile" className="text-white p-3 text-decoration-none">Profile</Link> 
                                                        <Link className="text-decoration-none text-white p-3" onClick={handleLogout}>Logout</Link>
                                                    </>):(
                                    <>
                                    <Link to="/register" className="text-white p-3 text-decoration-none">Register</Link>
                                    <Link to="/login" className="text-white p-3 text-decoration-none">Login</Link>
                                    </>)
                                    }
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
            </Navbar>
            
        </>
    );
};

export default Navigation