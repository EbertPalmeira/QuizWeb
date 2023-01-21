import { useContext } from "react";
import { QuizContent } from "../context/quizConhecimentos";
import "./Option.css";

const OptionConhecimentos = ({ option, selectOption, answer }) => {
  const [quizConhecimento, setConhecimento] = useContext(QuizContent);

  return (
    <div
      className={`option ${
        quizConhecimento.answerSelected && option === answer ? "correct" : ""
      }${quizConhecimento.answerSelected && option != answer ? "wrong" : ""}`}
      onClick={() => selectOption()}
    >
      <p>{option}</p>
    </div>
  );
};

export default OptionConhecimentos;
