import { QuizMedicina } from "../context/quizMedicina";
import { useContext } from "react";

import Option from "./OptionMedicina";
// import "../componentesConhecimentos/Questions.css";

const QuestionsMedicina = () => {
  const [quizMed, setMedicina] = useContext(QuizMedicina);

  const currentQuestion = quizMed.questions[quizMed.currentQuestion];

  const onSelectOption = (option) => {
    setMedicina({
      type: "CHECK_ANSWER",
      payload: { answer: currentQuestion.answer, option },
    });
  };

  return (
    <div id="question">
      <p>
        Pergunta {quizMed.currentQuestion + 1} de {quizMed.questions.length}
      </p>
      <h2>{currentQuestion.question}</h2>
      <div id="options-container">
        {currentQuestion.options.map((option) => (
          <Option
            option={option}
            key={option}
            answer={currentQuestion.answer}
            selectOption={() => onSelectOption(option)}
          />
        ))}
      </div>
      {quizMed.answerSelected && (
        <button onClick={() => setMedicina({ type: "CHANGE_QUESTION" })}>
          Continuar
        </button>
      )}
    </div>
  );
};

export default QuestionsMedicina;
