import React, { forwardRef, useRef, useImperativeHandle } from "react";
import { use } from "react";
import { createPortal as create } from "react-dom";

const ResultModal = forwardRef(
  ({ remainingTime, handleReset, targetTime }, ref) => {
    const formattedTime = (remainingTime / 1000).toFixed(2);
    const result = remainingTime <= 0;
    const score = Math.round((1 - remainingTime / (targetTime * 1000)) * 100);
    const dialog = useRef();
    useImperativeHandle(ref, () => {
      return {
        open() {
          dialog.current.showModal();
        },
      };
    });
    return create(
      <dialog ref={dialog} className="result-modal">
        {result ? <h2>You Lost</h2> : <h2> Your Score: {score}</h2>}
        <p>
          The Target Time was <strong>{targetTime} seconds.</strong>
        </p>
        <p>
          {" "}
          You stopped <strong>{formattedTime} seconds</strong> before.
        </p>
        <form method="dialog" onSubmit={handleReset}>
          <button>close</button>
        </form>
      </dialog>,
      document.getElementById("modal"),
    );
  },
);

export default ResultModal;
