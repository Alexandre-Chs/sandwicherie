import React, { useState } from "react";

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

  console.log(sauces);
  return (
    <div className="wrapper">
      <div className="options__sauces">
        <p>Choix des sauces : ( maximum 2 )</p>
        <p className="price">0.2€/sauce</p>
      </div>
      <div>
        <label htmlFor="sauces1">
          <input
            type="checkbox"
            name="sauces1"
            id="sauces1"
            value="BBQ Miel"
            onChange={handleChangeSauces}
            checked={sauces.includes("BBQ Miel")}
          />
          BBQ Miel
        </label>
      </div>
      <div>
        <label htmlFor="sauces2">
          <input
            type="checkbox"
            name="sauces2"
            id="sauces2"
            value="Beurre"
            onChange={handleChangeSauces}
            checked={sauces.includes("Beurre")}
          />
          Beurre
        </label>
      </div>
      <div>
        <label htmlFor="sauces3">
          <input
            type="checkbox"
            name="sauces3"
            id="sauces3"
            value="Biggy"
            onChange={handleChangeSauces}
            checked={sauces.includes("Biggy")}
          ></input>
          Biggy
        </label>
      </div>
      <div>
        <label htmlFor="sauces4">
          <input
            type="checkbox"
            name="sauces4"
            id="sauces4"
            value="Curry"
            onChange={handleChangeSauces}
            checked={sauces.includes("Curry")}
          ></input>
          Curry
        </label>
      </div>
      <div>
        <label htmlFor="sauces5">
          <input
            type="checkbox"
            name="sauces5"
            id="sauces5"
            value="Ketchup"
            onChange={handleChangeSauces}
            checked={sauces.includes("Ketchup")}
          ></input>
          Ketchup
        </label>
      </div>
      <div>
        <label htmlFor="sauces6">
          <input
            type="checkbox"
            name="sauces6"
            id="sauces6"
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
