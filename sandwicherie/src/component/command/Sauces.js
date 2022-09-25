import React, { useState } from "react";

const Sauces = ({ command, onChange, ingr }) => {
  const [sauces, setSauces] = useState(
    command.Sauces ? [...command.Sauces] : []
  );

  const handleChangeSauces = (e) => {
    const tempSauces = [...sauces];

    if (tempSauces.includes(e.target.value)) {
      tempSauces.splice(
        tempSauces.findIndex((sauces) => sauces === e.target.value),
        1
      );
    } else {
      if (tempSauces.length === 2) return;
      tempSauces.push(e.target.value);
    }

    setSauces(tempSauces);
    onChange({ ...command, Sauces: tempSauces });
  };

  if (!ingr.length) {
    return null;
  }

  return (
    <div className="wrapper">
      <div className="options__sauces">
        <p>Choix des sauces : ( maximum 2 )</p>
        <p className="price">0.2€/sauce</p>
      </div>
      {ingr.map((element, idx) => (
        <div key={idx}>
          <label htmlFor={element.name}>
            <input
              type="checkbox"
              name="sauce"
              id={element.name}
              value={element.name}
              onChange={handleChangeSauces}
              checked={sauces.includes(element.name)}
            />
            {element.name}
          </label>
        </div>
      ))}
    </div>
  );
};

export default Sauces;
