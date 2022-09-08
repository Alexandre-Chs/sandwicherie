import React, { useEffect } from "react";
import "../../styles/size.css";

const Size = ({ command, onChange }) => {
  const handleChange = (event) => {
    onChange({
      ...command,
      Taille: event.target.value,
    });
  };

  useEffect(() => {
    onChange({ ...command, Taille: "Moyen" });
  }, []);

  return (
    <div className="wrapper">
      <div className="command__size">
        <p className="header__command">Taille du sandwich :</p>
        <div>
          <label htmlFor="medium__size">
            <input
              type="radio"
              id="medium__size"
              name="size"
              value="Moyen"
              onChange={handleChange}
              defaultChecked
            ></input>
            Moyen
          </label>
        </div>

        <div>
          <label htmlFor="big__size">
            <input
              type="radio"
              id="big__size"
              name="size"
              value="Grand"
              onChange={handleChange}
            ></input>
            Grand
          </label>
        </div>
      </div>
    </div>
  );
};

export default Size;
