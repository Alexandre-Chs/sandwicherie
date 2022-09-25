import React, { useState, useEffect } from "react";

const Meat = ({ command, onChange, ingr }) => {
  const [meats, setMeats] = useState(command.Viande ? [...command.Viande] : []);
  const [count, setCount] = useState(0);

  const handleMeatChange = (e) => {
    const tempMeat = [...meats];
    if (tempMeat.includes(e.target.value)) {
      tempMeat.splice(
        tempMeat.findIndex((meat) => meat === e.target.value),
        1
      );
    } else {
      if (tempMeat.length === 2) return;
      tempMeat.push(e.target.value);
    }
    setMeats(tempMeat);
    onChange({ ...command, Viande: tempMeat });

    //CHECKBOX IS CHECKED ?
    if (e.target.checked) {
      setCount(count + 1);
    } else {
      setCount(count - 1);
    }
  };

  //If arrIngredients is undefined when we reload component
  if (!ingr.length) {
    return null;
  }

  return (
    <div className="wrapper">
      <div className="command__meat">
        <p>Choix de la viande : ( maximum 2 )</p>
        <p className="price">1.2€/viandes</p>
        {ingr.map((element, idx) => (
          <div className="options__meat" key={idx}>
            <label htmlFor={element.name}>
              <input
                type="checkbox"
                name="viande"
                id={element.name}
                value={element.name}
                onChange={handleMeatChange}
                checked={meats.includes(element.name)}
              ></input>
              {element.name}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Meat;
