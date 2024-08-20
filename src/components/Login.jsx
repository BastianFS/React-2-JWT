import { useState } from "react";

const Login = () => {
    const [email, setEmail] = useState("");
    const [error, setError] = useState(false);
    const [pass, setPass] = useState("");

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
        alert("Ingresado correctamente");
    }
    return(
        <>   
            <div className="bigForm">
                <form onSubmit={validarDatos} className="form">
                    <div className="formGroup">
                        <label>Email</label>
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                    </div>
                    <div className="formGroup">
                        <label>Contraseña</label>
                        <input type="password" value={pass} onChange={(e) => setPass(e.target.value)}/>
                    </div>
                    <div className="btnContainer">
                        <button className="btnEnviar" type="submit">
                            Enviar
                        </button>
                    </div>
                </form>
                <div className="errorContainer">
                    {error ? <p className="error">Debes ingresar tus datos</p> : null}
                </div>
                
            </div>
        </>
    );
};               

export default Login