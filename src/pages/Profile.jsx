import { Container, Button } from "react-bootstrap";
import { useState, useEffect, useContext } from "react";
import { UserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";

function Profile() {
  const [user, setUser] = useState([]);
  const { token, setToken } = useContext(UserContext);
  const tokenMe = token.token;
  const navigate = useNavigate();

  const handleLogout = () => {
    setToken("");
    navigate("/");
    alert("Cierre de sesión exitoso");
  };

  useEffect(() => {
    if (tokenMe) {
      fetch("http://localhost:5000/api/auth/me", {
        headers: {
          Authorization: `Bearer ${tokenMe}`,
        },
      })
        .then((response) => response.json())
        .then((data) => setUser(data));
    }
  }, []);

  return (
    <>
      <Container className="p-6 d-flex flex-column justify-content-center">
        <h2 className="text-center p-4">Email: {user.email}</h2>
        <Button className="p-4" onClick={handleLogout}>
          Cerrar sesión
        </Button>
      </Container>
    </>
  );
}

export default Profile;
