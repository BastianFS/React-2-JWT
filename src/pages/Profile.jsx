import { Container } from "react-bootstrap";
import Button from 'react-bootstrap/Button';

const Profile = () => {

    return(
        <>
            <Container className="text-center p-4">
                <h1 className="p-3"><span className="fw-bold">Usuario: </span>User001</h1>
                <h3 className="p-3"><span className="fw-bold">Mail: </span> aether@ru.org</h3>
                <Button className="p-2"><a href="/" className="text-white text-decoration-none">Volver</a></Button>
            </Container>
        </>
    );
};

export default Profile