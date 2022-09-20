import React, { useEffect, useState } from "react";
import "../../styles/size.css";
import "../../styles/input.css";

const Size = ({ command, onChange }) => {
  const handleChange = (event) => {
    onChange({
      ...command,
      Taille: event.target.value,
    });
  };

  //TODO : TRAVAILLER SUR LE FAIT DE LAISSER LE BUTTON NEXT OUVERT
  useEffect((event) => {
    onChange({ ...command, Taille: "Moyen" });
  }, []);

  return (
    <div className="wrapper">
      <div className="command__size">
        <p className="header__command">Taille du sandwich</p>
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
            Moyen 1€
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
            Grand 2€
          </label>
        </div>
      </div>
    </div>
  );
};

export default Size;
