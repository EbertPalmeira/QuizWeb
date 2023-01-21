import { QuizContent } from "../context/quizConhecimentos";
import { useContext } from "react";

import Questions from "../componentesConhecimentos/QuestionConhecimentos";
import GameOver from "../componentesConhecimentos/GameOverConhecimentos";

import "./Conhecimentos.css";
const ConhecimentosGerais = () => {
  const [quizConhecimento, setConhecimento] = useContext(QuizContent);

  return (
    <div className="conhecimentos">
      {quizConhecimento.gameStage === "Playing" && <Questions />}
      {quizConhecimento.gameStage === "End" && <GameOver />}
    </div>
  );
};

export default ConhecimentosGerais;
