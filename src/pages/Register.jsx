import { useState } from "react";
import useInput from "../hooks/useInput";
import { useNavigate } from "react-router-dom";

const Register = () => {

    const navigate = useNavigate();

    const email = useInput("");
    const [error, setError] = useState(false);
    const password = useInput("");
    const password2 = useInput("");

    const emailValue = email.value;
    const passwordValue = password.value;
    const password2Value = password2.value;

    const validarDatos = (e) => {
        e.preventDefault();

        if(!emailValue.trim() || !passwordValue.trim() || passwordValue.length < 6 || passwordValue != password2Value)
        {
            setError(true);
            return;
        }
        setError(false);
        alert("Ingresado correctamente");
        navigate("/")
        window.location.reaload()

    }

    return(
        <>
            <div className="bigForm">
                <form onSubmit={validarDatos} className="form">
                    <div className="formGroup">
                        <label>Email</label>
                        <input type="email" {...email}/>
                    </div>
                    <div className="formGroup">
                        <label>Contraseña</label>
                        <input type="password" {...password}/>
                    </div>
                    <div className="formGroup">
                        <label>Confirmar contraseña</label>
                        <input type="password" {...password2}/>
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