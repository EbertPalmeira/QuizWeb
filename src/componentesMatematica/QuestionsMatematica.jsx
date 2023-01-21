import { QuizMatematica } from "../context/quizMatematica";
import { useContext } from "react";

import Option from "./OptionMatematica";

const QuestionsMatematica = () => {
  const [quizMat, setMatematica] = useContext(QuizMatematica);

  const currentQuestion = quizMat.questions[quizMat.currentQuestion];

  const onSelectOption = (option) => {
    setMatematica({
      type: "CHECK_ANSWER",
      payload: { answer: currentQuestion.answer, option },
    });
  };

  return (
    <div id="question">
      <p>
        Pergunta {quizMat.currentQuestion + 1} de {quizMat.questions.length}
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
      {quizMat.answerSelected && (
        <button onClick={() => setMatematica({ type: "CHANGE_QUESTION" })}>
          Continuar
        </button>
      )}
    </div>
  );
};

export default QuestionsMatematica;
