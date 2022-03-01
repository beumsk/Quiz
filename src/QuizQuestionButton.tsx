const QuizQuestionButton = (props: {
  clickHandler: (buttonText: string) => void;
  buttonText: string;
}) => {
  function handleClick() {
    props.clickHandler(props.buttonText);
  }

  return (
    <li>
      <button
        onClick={handleClick}
        dangerouslySetInnerHTML={{ __html: props.buttonText }}
      ></button>
    </li>
  );
};

export default QuizQuestionButton;
