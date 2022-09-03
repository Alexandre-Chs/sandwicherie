import React, { useState, useEffect } from "react";
import "../../styles/meat.css";

const Meat = ({ command, onChange, price, setPrice }) => {
  const [meats, setMeats] = useState(command.Viande ? [...command.Viande] : []);
  let [total, setTotal] = useState(0);

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
  };

 
  useEffect(() => {
    const updatePrice = () => {
      if(meats.length === 1 ) {
        return parseInt(price) + 1.5
      } else if (meats.length === 2) {
        return parseInt(price) + 3
      } else {
        return price
      }
    }
    setPrice(updatePrice());
  }, [meats])


  console.log(total)
  
//Si un element checked, dire prix + 1.5, si 2 elements checked dire prix + 1.5
 
  return (
    <div className="wrapper">
      <div className="command__meat">
        <p>Choix de la viande : </p>
        <p>Vous pouvez choisir maximum deux viandes!</p>
        <div className="options__meat">
          <input
            type="checkbox"
            name="meat"
            value="Cordon bleu"
            onChange={handleMeatChange}
            checked={meats.includes("Cordon bleu")}
          ></input>
          <label htmlFor="meat">Cordon bleu</label>
        </div>
        <div className="options__meat">
          <input
            type="checkbox"
            name="meat"
            value="Steak"
            onChange={handleMeatChange}
            checked={meats.includes("Steak")}
          ></input>
          <label htmlFor="meat">Steak</label>
        </div>
        <div className="options__meat">
          <input
            type="checkbox"
            name="meat"
            value="Emincés de poulet"
            onChange={handleMeatChange}
            checked={meats.includes("Emincés de poulet")}
          ></input>
          <label htmlFor="meat">Emincés de poulet</label>
        </div>
        <div className="options__meat">
          <input
            type="checkbox"
            name="meat"
            value="Merguez"
            onChange={handleMeatChange}
            checked={meats.includes("Merguez")}
          ></input>
          <label htmlFor="meat">Merguez</label>
        </div>
        <div className="options__meat">
          <input
            type="checkbox"
            name="meat"
            value="Nuggets"
            onChange={handleMeatChange}
            checked={meats.includes("Nuggets")}
          ></input>
          <label htmlFor="meat">Nuggets</label>
        </div>
        <div className="options__meat">
          <input
            type="checkbox"
            name="meat"
            value="Saucisse"
            onChange={handleMeatChange}
            checked={meats.includes("Saucisse")}
          ></input>
          <label htmlFor="meat">Saucisse</label>
        </div>
      </div>
    </div>
  );
};

export default Meat;
