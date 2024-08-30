import { Container } from "react-bootstrap"

function NotFound(){

    return(
        <>
            <Container>
                <h1 className="text-center p-3">Error 404</h1>
                <h2 className="text-center p-3">Pagina no encontrada</h2>
                <a href="/">
                    <h3 className="text-center p-3">Volver atras</h3>
                </a>
            </Container>
        </>
    )
}

export default NotFound