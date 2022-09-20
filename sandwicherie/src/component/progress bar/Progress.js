import React, { useState, useEffect } from "react";
import "../../styles/progress bar/progress.css";
import { BsCheck } from "react-icons/bs";
import { BsDot } from "react-icons/bs";

const Progress = ({ count, stepNumber }) => {
  const steps = [];

  for (let i = 0; i < stepNumber; i++) {
    steps.push(
      <div key={i} className={count >= i + 1 ? "active circles" : "circles"}>
        {count >= i + 1 ? (
          <BsCheck className="check__icon" size={50} />
        ) : (
          <BsDot className="check__icon__dot" size={50} />
        )}
      </div>
    );
  }

  const [width, setWidth] = useState(0);

  const handleChange = () => {
    setWidth(count * (100 / (stepNumber - 1)));
  };

  useEffect(() => {
    handleChange();
  }, [count]);

  return (
    <div className="container">
      <div className="container-progress">
        <div className="progress" style={{ width: width + "%" }}></div>
        {steps}
      </div>
    </div>
  );
};

export default Progress;
