import { QuizContent } from "../context/quizConhecimentos";
import { useContext } from "react";

import Option from "../componentesConhecimentos/OptionConhecimentos";
import "./Question.css";

const QuestionConhecimentos = () => {
  const [quizConhecimento, setConhecimento] = useContext(QuizContent);

  const currentQuestion =
    quizConhecimento.questions[quizConhecimento.currentQuestion];

  const onSelectOption = (option) => {
    setConhecimento({
      type: "CHECK_ANSWER",
      payload: { answer: currentQuestion.answer, option },
    });
  };
  return (
    <div id="question">
      <p>
        Pergunta {quizConhecimento.currentQuestion + 1} de{" "}
        {quizConhecimento.questions.length}
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
      {quizConhecimento.answerSelected && (
        <button onClick={() => setConhecimento({ type: "CHANGE_QUESTION" })}>
          Continuar
        </button>
      )}
    </div>
  );
};
export default QuestionConhecimentos;
