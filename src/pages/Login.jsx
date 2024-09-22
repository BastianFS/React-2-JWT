import { Form, Container, Button, Alert } from "react-bootstrap"
import { useState, useContext } from "react";
import { TokenContext } from "../context/TokenContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState("");
    const [error, setError] = useState(false);
    const [pass, setPass] = useState("");

    const navigate = useNavigate();
    const goToHome = () => {navigate("/")};

    const {token, setToken} = useContext(TokenContext);

    const validarDatos = (e) => {
        e.preventDefault();

        if(!email.trim() || !pass.trim() || pass.length < 6)
        {
            setError(true);
            return;
        }
        setError(false);
        setEmail("");
        setPass("");
        setToken(true);
        goToHome();
        
    }
    return(
        <> 
        <Container className="w-50 p-4">
            <Form onSubmit={validarDatos}>
                <Form.Group className="mb-3">
                    <Form.Label>
                        Email
                    </Form.Label>
                    <Form.Control type="email" value={email} onChange={(e) => setEmail(e.target.value)}></Form.Control>
                </Form.Group>
                <Form.Group className="mb-3 mt-2">
                    <Form.Label>
                        Contraseña
                    </Form.Label>
                    <Form.Control type="password" value={pass} onChange={(e) => setPass(e.target.value)}></Form.Control>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Enviar
                </Button>
                    {error ? <Alert variant="danger" className="mt-3">
                            Debes ingresar un email válido y una contraseña de al menos 6 caracteres.
                        </Alert>: null}                
            </Form> 
        </Container> 

        </>
    );
};               

export default Login