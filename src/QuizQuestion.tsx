import { useState } from "react";
import QuizQuestionButton from "./QuizQuestionButton";

function shuffleArray(array) {
  return [...array].sort(() => Math.random() - 0.5);
}

interface QuizQuestionI {
  category: string;
  type: string;
  difficulty: string;
  question: string;
  correct_answer: string;
  incorrect_answers: [string, string, string];
}

interface Props {
  quizQuestion: QuizQuestionI | null;
  quizProgress: string;
  addPointsHandler: (isFirstAttempt: boolean) => void;
  showNextQuestionHandler: () => void;
}

const QuizQuestion = (props: Props) => {
  const [incorrectAnswer, setIncorrectAnswer] = useState<boolean>(false);
  const [isFirstAttempt, setIsFirstAttempt] = useState<boolean>(true);

  function handleClick(buttonText: string) {
    if (buttonText === props.quizQuestion.correct_answer) {
      setIncorrectAnswer(false);
      props.addPointsHandler(isFirstAttempt);
      setIsFirstAttempt(true);
      props.showNextQuestionHandler();
    } else {
      setIncorrectAnswer(true);
      setIsFirstAttempt(false);
    }
  }

  const answerOptions = shuffleArray([
    ...props.quizQuestion.incorrect_answers,
    props.quizQuestion.correct_answer
  ]);

  return (
    <main>
      <section>
        <p
          dangerouslySetInnerHTML={{ __html: props.quizQuestion.question }}
        ></p>
      </section>
      <section className="buttons">
        <ul>
          {answerOptions.map((answerOption, index) => (
            <QuizQuestionButton
              key={answerOption}
              buttonText={answerOption}
              clickHandler={handleClick}
            />
          ))}
        </ul>
      </section>
      <p className="error">
        {incorrectAnswer ? "Sorry, that's not right" : ""}
      </p>
      <span className="progress">{props.quizProgress}</span>
    </main>
  );
};

export default QuizQuestion;
