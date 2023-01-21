import { useContext } from "react";
import { QuizMatematica } from "../context/quizMatematica";

import "../componentesConhecimentos/Over.css";

import { Link } from "react-router-dom";
import WellDone from "../img/Formula-amico.png";

const GameOverMatematica = () => {
  const [quizMat, setMatematica] = useContext(QuizMatematica);
  return (
    <div id="gameover">
      <h2>Fim de jogo!</h2>
      <p>Pontuação : {quizMat.score}</p>
      <p>
        Você acertou {quizMat.score} de {quizMat.questions.length} perguntas
      </p>
      <img src={WellDone} alt="" />
      <button onClick={() => setMatematica({ type: "NEW_GAME" })}>
        Reiniciar Quiz
      </button>
      <Link to="/welcome" onClick={() => setMatematica({ type: "NEW_GAME" })}>
        Voltar ao inicio
      </Link>
    </div>
  );
};

export default GameOverMatematica;
