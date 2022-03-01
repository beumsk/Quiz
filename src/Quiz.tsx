import { useEffect, useState } from "react";
import QuizEnd from "./QuizEnd";
import QuizQuestion from "./QuizQuestion";
import Loader from "./Loader";
import { getQuestions } from "../api/quizData";

interface Data {
  response_code: number;
  results: {
    category: string;
    type: string;
    difficulty: string;
    question: string;
    correct_answer: string;
    incorrect_answers: [string, string, string];
  }[];
}

const Quiz = () => {
  const [data, setData] = useState<Data | undefined>();
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [quizPosition, setQuizPosition] = useState<number>(1);
  const [quizPoints, setQuizPoints] = useState<number>(0);
  const [reset, setReset] = useState<boolean>(false);

  useEffect(() => {
    getQuestions()
      .then((data: Data) => setData(data))
      .catch((e: Error) => {
        console.error("Error fetching data: ", e);
        setError(e);
      })
      .finally(() => setLoading(false));
  }, [reset]);

  function showNextQuestion() {
    setQuizPosition(quizPosition + 1);
  }

  function addPoints(isFirstAttempt: boolean) {
    setQuizPoints(quizPoints + (isFirstAttempt ? 5 : 1));
  }

  function handleResetClick() {
    setQuizPosition(1);
    setQuizPoints(0);
    setReset(!reset);
  }

  if (loading) return <Loader />;

  if (error) return <p>Error fetching data: {error}</p>;

  const isQuizEnd = loading ? null : quizPosition - 1 === data.results.length;

  return (
    <>
      {isQuizEnd && (
        <QuizEnd resetClickHandler={handleResetClick} quizPoints={quizPoints} />
      )}
      {!isQuizEnd && (
        <QuizQuestion
          showNextQuestionHandler={showNextQuestion}
          quizProgress={`${quizPosition} / ${data.results.length}`}
          addPointsHandler={addPoints}
          quizQuestion={data.results[quizPosition - 1]}
        />
      )}
    </>
  );
};

export default Quiz;
