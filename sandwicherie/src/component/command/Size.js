import React from "react";
import "../../styles/size.css";

const Size = ({ command, onChange }) => {
  const handleChange = (event) => {
    onChange({
      ...command,
      Taille: event.target.value,
    });
  };
  return (
    <div className="wrapper">
      <div className="command__size">
        <p>Taille du sandwich :</p>
        <div>
          <input
            type="radio"
            id="medium__size"
            name="size"
            value="Moyen"
            onChange={handleChange}
            defaultChecked
          ></input>
          <label htmlFor="medium__size">Moyen</label>
        </div>
        <div>
          <input
            type="radio"
            id="big__size"
            name="size"
            value="Grand"
            onChange={handleChange}
          ></input>
          <label htmlFor="big__size">Grand</label>
        </div>
      </div>
    </div>
  );
};

export default Size;
