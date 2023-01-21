import { useContext } from "react";
import { QuizContent } from "../context/quizConhecimentos";

import "./Over.css";

import { Link } from "react-router-dom";
import WellDone from "../img/welldone.svg";

const GameOverConhecimentos = () => {
  const [quizConhecimento, setConhecimento] = useContext(QuizContent);

  return (
    <div id="gameover">
      <h2>Fim de jogo!</h2>
      <p>Pontuação : {quizConhecimento.score}</p>
      <p>
        Você acertou {quizConhecimento.score} de{" "}
        {quizConhecimento.questions.length} perguntas
      </p>
      <img src={WellDone} alt="" />
      <button onClick={() => setConhecimento({ type: "NEW_GAME" })}>
        Reiniciar Quiz
      </button>
      <Link to="/welcome" onClick={() => setConhecimento({ type: "NEW_GAME" })}>
        Voltar ao inicio
      </Link>
    </div>
  );
};

export default GameOverConhecimentos;
