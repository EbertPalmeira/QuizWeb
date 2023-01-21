// import Quiz from "../img/quiz.svg";
import "./Welcome.css";

import git from "../img/github.png";
import { useContext, useEffect, useState } from "react";
import { QuizContext } from "../context/quiz";
import { Link } from "react-router-dom";
import { QuizContent } from "../context/quizConhecimentos";
import { QuizMedicina } from "../context/quizMedicina";
import { QuizMatematica } from "../context/quizMatematica";

// imgs
import prog from "../img/prog2.jpg";
import cerebro from "../img/cerebro.jpg";
import med from "../img/med.jpg";
import mat from "../img/mat.jpg";

// import Inicio from "./Inicio";

const Welcome = () => {
  const [quizMat, setMatematica] = useContext(QuizMatematica);
  const [quizState, dispatch] = useContext(QuizContext);
  const [quizConhecimento, setConhecimento] = useContext(QuizContent);
  const [quizMed, setMedicina] = useContext(QuizMedicina);
  useEffect(() => {
    dispatch({ type: "REORDER_QUESTIONS" });
    setConhecimento({ type: "REORDER_QUESTIONS" });
    setMedicina({ type: "REORDER_QUESTIONS" });
    setMatematica({ type: "REORDER_QUESTIONS" });
  }, []);

  return (
    <div className="welcome">
      <div className="welcome-inicio">
        <h2>Seja bem vindo {localStorage.nome}</h2>
        <p>Escolha um quiz e inicie o desafio !</p>
      </div>

      <div className="quiz">
        {/* medicina */}
        <div className="divs-quiz">
          <img src={med} alt="" />
          <p>
            Você leva jeito para medicina ? Então esse quiz é perfeito pra você
          </p>
          <h2>Medicina</h2>
          <div className="link">
            <Link
              to="/medicina"
              onClick={() => setMedicina({ type: "CHANGE_STATE" })}
            >
              Iniciar Quiz
            </Link>
          </div>
        </div>

        {/* matematica */}
        <div className="divs-quiz">
          <img src={mat} alt="" />
          <p>Você é bom em exatas ? Então esse é quiz perfeito pra você</p>
          <h2>Matemática</h2>
          <div className="link">
            <Link
              to="/matematica"
              onClick={() => setMatematica({ type: "CHANGE_STATE" })}
            >
              Iniciar Quiz
            </Link>
          </div>
        </div>

        {/* programação */}
        <div className="divs-quiz">
          <img src={prog} alt="" />
          <p>
            Você é um programador ? será que consegue acertar todas as
            perguntas?
          </p>
          <h2>Programação</h2>
          <div className="link">
            <Link
              to="/programacao"
              onClick={() => dispatch({ type: "CHANGE_STAGE" })}
            >
              Iniciar Quiz
            </Link>
          </div>
        </div>
        <div className="divs-quiz">
          <img src={cerebro} alt="" />
          <p>Você se considera um sabe tudo ? esse quiz vai te desafiar</p>
          <h2>Conhecimentos gerais</h2>
          <div className="link">
            <Link
              to="/conhecimentos"
              onClick={() => setConhecimento({ type: "CHANGE_STATE" })}
            >
              Iniciar Quiz
            </Link>
          </div>
        </div>
      </div>

      <footer>
        <div className="footer">
          <a href="https://github.com/EbertPalmeira/QuizWeb/tree/main/src">
            <img src={git} alt="" />
            <p>Repósitorio</p>
          </a>
          <p>© 2023 - Ebert Palmeira</p>
        </div>
      </footer>
    </div>
  );
};

export default Welcome;
