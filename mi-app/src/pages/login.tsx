import { useState } from "react";
import logo from "../assets/logo.png";
import "../css/login.css";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    async function loginUser() {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({
            email: email,
            password: password,
        });

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
        };

        fetch("http://localhost:3002/auth/login", requestOptions)
            .then((response) => {
                if (response.ok) {
                    return response.json();
                } else {
                    alert("Credenciales incorrectas");
                }
            })
            .then((data) => {
                localStorage.setItem("token", data.token);
                localStorage.setItem("user", JSON.stringify(data.user));
                alert("¡Sesión iniciada con éxito!");
            })
            .catch((error) => console.log("error", error));
    }

    return (
        <div className="page">
            <div className="container">
                <div className="left">
                    <img src={logo} alt="Logo" className="logo" />
                    <h1 className="left-titulo">POLLOSOFT</h1>
                    <p className="left-text">
                        Sistema de Gestion - Pollos Triple A
                    </p>
                </div>
                <div className="right">
                    <div className="card">
                        <h2>Pollosoft</h2>
                        <p>Sistema de Gestion Avicola</p>

                        <input
                            type="email"
                            placeholder="Correo electrónico"
                            className="input input-form"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <input
                            type="password"
                            placeholder="Contraseña"
                            className="input input-form"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <button
                            className="button-inicio"
                            onClick={() => loginUser()}
                        >
                            Iniciar sesión
                        </button>
                        <p className="login-text">
                            <a href="#">¿Olvide mi contraseña?</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
