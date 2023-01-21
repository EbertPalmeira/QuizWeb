import { QuizContext } from "../context/quiz";
import { useContext } from "react";

import Questions from "../componentes/Questions";
import GameOver from "../componentes/GameOver";

import "./Programacao.css";

const Programacao = () => {
  const [quizState, dispatch] = useContext(QuizContext);

  return (
    <div className="programacao">
      {quizState.gameStage === "Playing" && <Questions />}
      {quizState.gameStage === "End" && <GameOver />}
    </div>
  );
};

export default Programacao;
