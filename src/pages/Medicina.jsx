import { QuizMedicina } from "../context/quizMedicina";
import { useContext, useEffect } from "react";

import Questions from "../componentesMedicina/QuestionsMedicina";
import GameOver from "../componentesMedicina/GameOverMedicina";

const Medicina = () => {
  const [quizMed, setMedicina] = useContext(QuizMedicina);

  return (
    <div className="programacao">
      {quizMed.gameStage === "Playing" && <Questions />}
      {quizMed.gameStage === "End" && <GameOver />}
    </div>
  );
};

export default Medicina;
