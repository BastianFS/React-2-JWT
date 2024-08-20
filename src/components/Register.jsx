import { useState } from "react";

const Register = () => {

    const [email, setEmail] = useState("");
    const [error, setError] = useState(false)
    const [pass, setPass] = useState("")
    const [pass2, setPass2] = useState("")

    const validarDatos = (e) => {
        e.preventDefault();

        if(!email.trim() || !pass.trim() || pass.length < 6 || pass != pass2)
        {
            setError(true);
            return;
        }
        setError(false);
        setEmail("");
        setPass("");
        setPass2("");
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
                    <div className="formGroup">
                        <label>Confirmar contraseña</label>
                        <input type="password" value={pass2} onChange={(e) => setPass2(e.target.value)}/>
                    </div>
                    <div className="btnContainer">
                        <button className="btnEnviar" type="submit">
                            Enviar
                        </button>
                    </div>
                </form>
                {error ? <p className="error">Debes ingresar tus datos</p> : null}
            </div>
        </>
    );
};

export default Register