import React, { useEffect, useState } from "react";
import "../../styles/size.css";
import "../../styles/input.css";

const Size = ({ command, onChange, ingr }) => {
  const handleChange = (event) => {
    onChange({
      ...command,
      Taille: event.target.value,
    });
  };

  useEffect(() => {
    onChange({ ...command, Taille: "Moyen" });
  }, []);

  //If arrIngredients is undefined when we reload component
  if (!ingr.length) {
    return null;
  }

  return (
    <div className="wrapper">
      <div className="command__size">
        <p className="header__command">Taille du sandwich</p>
        {ingr.map((element, idx) => (
          <div key={idx}>
            <label htmlFor={element.name}>
              <input
                type="radio"
                id={element.name}
                name="taille"
                value={element.name}
                onChange={handleChange}
                defaultChecked={element.name === "Moyen"}
              ></input>
              {element.name} {element.price}€
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Size;
