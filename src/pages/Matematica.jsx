import { useContext } from "react";
import Questions from "../componentesMatematica/QuestionsMatematica";
import GameOver from "../componentesMatematica/GameOverMatematica";
import { QuizMatematica } from "../context/quizMatematica";

const Matematica = () => {
  const [quizMat, setMatematica] = useContext(QuizMatematica);

  return (
    <div className="conhecimentos">
      {quizMat.gameStage === "Playing" && <Questions />}
      {quizMat.gameStage === "End" && <GameOver />}
    </div>
  );
};

export default Matematica;
