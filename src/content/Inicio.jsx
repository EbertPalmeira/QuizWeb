import { useState } from "react";
import "./Inicio.css";
import { Link } from "react-router-dom";
import brain from "../img/brain.png";

const Inicio = () => {
  const [name, setName] = useState("");

  const handleChange = (e) => {
    localStorage.nome = e.target.value;
  };
  const carregamento = () => {
    const preloader = document.querySelector(".preloader");
    window.addEventListener("load", () => {
      preloader.style.display = "block";
    });
    console.log(preloader);
  };

  return (
    <div>
      <form className="login">
        <div className="login-header">
          <img src={brain} alt="" />
          <h1>Bem vindo ao</h1>
          <h2>QuizWeb</h2>
        </div>

        <input
          // value={name}
          onChange={handleChange}
          type="text"
          placeholder="Digite seu nome"
          className="login-input"
        />
        <Link onClick={carregamento} to="/welcome" className="login-button">
          Iniciar
        </Link>
      </form>
    </div>
  );
};

export default Inicio;
