import { useContext } from "react";
import { QuizMedicina } from "../context/quizMedicina";
const OptionMedicina = ({ option, selectOption, answer }) => {
  const [quizMed, setMedicina] = useContext(QuizMedicina);

  return (
    <div
      className={`option ${
        quizMed.answerSelected && option === answer ? "correct" : ""
      }${quizMed.answerSelected && option != answer ? "wrong" : ""}`}
      onClick={() => selectOption()}
    >
      <p>{option}</p>
    </div>
  );
};

export default OptionMedicina;
