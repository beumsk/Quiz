const QuizEnd = (props: {
  resetClickHandler: () => void;
  quizPoints: number;
}) => {
  function handleResetClick() {
    props.resetClickHandler();
  }

  return (
    <div>
      <p>Thanks for playing!</p>
      <p>You made {props.quizPoints} points out of 50!</p>
      <button onClick={handleResetClick}>Take another Quiz</button>
    </div>
  );
};

export default QuizEnd;
