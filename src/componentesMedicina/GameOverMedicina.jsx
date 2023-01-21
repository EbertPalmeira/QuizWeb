import { useContext } from "react";
import { QuizMedicina } from "../context/quizMedicina";

import "../componentesConhecimentos/Over.css";

import { Link } from "react-router-dom";
import WellDone from "../img/Formula-amico.png";

const GameOverMedicina = () => {
  const [quizMed, setMedicina] = useContext(QuizMedicina);
  return (
    <div id="gameover">
      <h2>Fim de jogo!</h2>
      <p>Pontuação : {quizMed.score}</p>
      <p>
        Você acertou {quizMed.score} de {quizMed.questions.length} perguntas
      </p>
      <img src={WellDone} alt="" />
      <button onClick={() => setMedicina({ type: "NEW_GAME" })}>
        Reiniciar Quiz
      </button>
      <Link to="/welcome" onClick={() => setMedicina({ type: "NEW_GAME" })}>
        Voltar ao inicio
      </Link>
    </div>
  );
};

export default GameOverMedicina;
