import React, { useContext, useState } from "react";
import "./RegisterPage.css";
import { UserContext } from "../context/UserContext";

function RegisterPage() {
  const { register } = useContext(UserContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== passwordConfirm || password.length < 6) {
      alert("Las contraseñas no coinciden");
      return;
    } else {
      register(email, password);
    }
  };

  // const validarDatos = (e) => {
  //   e.preventDefault();
  //   //Validacion
  //   if (
  //     !email.trim() ||
  //     !password.trim() ||
  //     !confpass.trim() ||
  //     password.length < 6 ||
  //     password.trim() != confpass.trim()
  //   ) {
  //     setError(true);
  //     return;
  //   }
  //   setError(false);
  //   setEmail("");
  //   setPassword("");
  //   setConfpass("");
  // };

  return (
    <div className="form">
      <h1>Registrarse</h1>
      <form onSubmit={handleSubmit} className="formulario">
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            value={email}
            name="email"
            className="form-control"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Contraseña</label>
          <input
            type="password"
            value={password}
            name="password"
            className="form-control"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Confirmar contraseña</label>
          <input
            type="password"
            value={passwordConfirm}
            className="form-control"
            onChange={(e) => setPasswordConfirm(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="btn
            btn-primary"
        >
          Enviar
        </button>
        {error ? <p style={{ color: "red" }}>Verifica los campos</p> : null}
      </form>
    </div>
  );
}

export default RegisterPage;
