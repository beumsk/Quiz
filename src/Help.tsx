import { useState } from "react";

const Help = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  if (!isOpen)
    return (
      <button
        title="About this Quiz"
        className="help-button"
        onClick={() => setIsOpen(!isOpen)}
      >
        ?
      </button>
    );
  return (
    <div className="help-modal" onClick={() => setIsOpen(!isOpen)}>
      <div>
        <p>
          Try a set of 10 random questions fetched from Open Trivia DB in this
          Quiz built with React and score as much points as you can.
        </p>
        <p>
          You win 1 point per good answer but you make 5 points when picking the
          right answer from the start!
        </p>
      </div>
    </div>
  );
};

export default Help;
