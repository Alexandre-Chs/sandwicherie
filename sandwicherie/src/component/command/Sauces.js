import React, { useState } from "react";
import "../../styles/sauces.css";

const Sauces = ({ command, onChange }) => {
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

  return (
    <div className="wrapper">
      <div className="options__sauces">
        <p>Choix des sauces</p>
        <p>Vous pouvez choisir maximum 2 sauces !</p>
      </div>
      <div>
        <label htmlFor="sauces">
          <input
            type="checkbox"
            name="sauces"
            value="BBQ Miel"
            onChange={handleChangeSauces}
            checked={sauces.includes("BBQ Miel")}
          ></input>
          BBQ Miel
        </label>
      </div>
      <div>
        <label htmlFor="sauces">
          <input
            type="checkbox"
            name="sauces"
            id="sauces"
            value="Beurre"
            onChange={handleChangeSauces}
            checked={sauces.includes("Beurre")}
          ></input>
          Beurre
        </label>
      </div>
      <div>
        <label htmlFor="sauces">
          <input
            type="checkbox"
            name="sauces"
            id="sauces"
            value="Biggy"
            onChange={handleChangeSauces}
            checked={sauces.includes("Biggy")}
          ></input>
          Biggy
        </label>
      </div>
      <div>
        <label htmlFor="sauces">
          <input
            type="checkbox"
            name="sauces"
            id="sauces"
            value="Curry"
            onChange={handleChangeSauces}
            checked={sauces.includes("Curry")}
          ></input>
          Curry
        </label>
      </div>
      <div>
        <label htmlFor="sauces">
          <input
            type="checkbox"
            name="sauces"
            id="sauces"
            value="Ketchup"
            onChange={handleChangeSauces}
            checked={sauces.includes("Ketchup")}
          ></input>
          Ketchup
        </label>
      </div>
      <div>
        <label htmlFor="sauces">
          <input
            type="checkbox"
            name="sauces"
            id="sauces"
            value="Mayonnaise"
            onChange={handleChangeSauces}
            checked={sauces.includes("Mayonnaise")}
          ></input>
          Mayonnaise
        </label>
      </div>
    </div>
  );
};

export default Sauces;
