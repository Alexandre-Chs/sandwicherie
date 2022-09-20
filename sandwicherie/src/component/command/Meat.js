import React, { useState, useEffect } from "react";

const Meat = ({ command, onChange }) => {
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

  return (
    <div className="wrapper">
      <div className="command__meat">
        <p>Choix de la viande : ( maximum 2 )</p>
        <p className="price">1.2€/viandes</p>
        <div className="options__meat">
          <label htmlFor="meat1" className="test">
            <input
              type="checkbox"
              name="meat1"
              id="meat1"
              value="Cordon bleu"
              onChange={handleMeatChange}
              checked={meats.includes("Cordon bleu")}
            ></input>
            Cordon bleu
          </label>
        </div>
        <div className="options__meat">
          <label htmlFor="meat2">
            <input
              type="checkbox"
              name="meat2"
              id="meat2"
              value="Steak"
              onChange={handleMeatChange}
              checked={meats.includes("Steak")}
            ></input>
            Steak
          </label>
        </div>
        <div className="options__meat">
          <label htmlFor="meat3">
            <input
              type="checkbox"
              name="meat3"
              id="meat3"
              value="Emincés de poulet"
              onChange={handleMeatChange}
              checked={meats.includes("Emincés de poulet")}
            ></input>
            Emincés de poulet
          </label>
        </div>
        <div className="options__meat">
          <label htmlFor="meat4">
            <input
              type="checkbox"
              id="meat4"
              name="meat4"
              value="Merguez"
              onChange={handleMeatChange}
              checked={meats.includes("Merguez")}
            ></input>
            Merguez
          </label>
        </div>
        <div className="options__meat">
          <label htmlFor="meat5">
            <input
              type="checkbox"
              name="meat5"
              id="meat5"
              value="Nuggets"
              onChange={handleMeatChange}
              checked={meats.includes("Nuggets")}
            ></input>
            Nuggets
          </label>
        </div>
        <div className="options__meat">
          <label htmlFor="meat6">
            <input
              type="checkbox"
              name="meat6"
              id="meat6"
              value="Saucisse"
              onChange={handleMeatChange}
              checked={meats.includes("Saucisse")}
            ></input>
            Saucisse
          </label>
        </div>
      </div>
    </div>
  );
};

export default Meat;
