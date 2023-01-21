import { useContext } from "react";
import { QuizContext } from "../context/quiz";

import "./GameOver.css";

import { Link } from "react-router-dom";
import WellDone from "../img/welldone.svg";

const GameOver = () => {
  const [quizState, dispatch] = useContext(QuizContext);
  return (
    <div id="gameover">
      <h2>Fim de jogo!</h2>
      <p>Pontuação : {quizState.score}</p>
      <p>
        Você acertou {quizState.score} de {quizState.questions.length} perguntas
      </p>
      <img src={WellDone} alt="" />
      <button onClick={() => dispatch({ type: "NEW_GAME" })}>Reiniciar</button>
      <Link to="/welcome" onClick={() => dispatch({ type: "NEW_GAME" })}>
        Voltar ao inicio
      </Link>
    </div>
  );
};

export default GameOver;
