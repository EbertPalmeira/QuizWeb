import { useContext } from "react";
import { QuizMatematica } from "../context/quizMatematica";

const OptionMatematica = ({ option, selectOption, answer }) => {
  const [quizMat, setMatematica] = useContext(QuizMatematica);
  return (
    <div
      className={`option ${
        quizMat.answerSelected && option === answer ? "correct" : ""
      }${quizMat.answerSelected && option != answer ? "wrong" : ""}`}
      onClick={() => selectOption()}
    >
      <p>{option}</p>
    </div>
  );
};

export default OptionMatematica;
