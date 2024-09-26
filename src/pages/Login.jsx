import { Form, Container, Button, Alert } from "react-bootstrap";
import { useState, useContext } from "react";
import { UserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";
import useInput from "../hooks/useInput";

const Login = () => {

  const navigate = useNavigate();

  const { token, setToken } = useContext(UserContext);
  const email = useInput("");
  const password = useInput("");
  const [error, setError] = useState(false);

  const emailValue = email.value;
  const passwordValue = password.value;
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: emailValue,
        password: passwordValue,
      }),
    });
    const data = await response.json();
    alert(data?.error || "Authentication successful!" )
    setToken(data);
    if(data?.error){
        return
    }
    else{
        navigate("/")
        window.location.reaload()
    }
  };

  return (
    <>
      <Container className="w-50 p-4">
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Email"
              {...email}
            ></Form.Control>
          </Form.Group>
          <Form.Group className="mb-3 mt-2">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              {...password}
            ></Form.Control>
          </Form.Group>
          <Button variant="primary" type="submit">
            Enviar
          </Button>
          {error ? (
            <Alert variant="danger" className="mt-3">
              Debes ingresar un email válido y una contraseña de al menos 6
              caracteres.
            </Alert>
          ) : null}
        </Form>
      </Container>
    </>
  );
};

export default Login;
