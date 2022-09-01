import React, { useState } from "react";

const Sauces = ({ command, onChange }) => {
  const [sauces, setSauces] = useState(command.Sauces ? [...command.Sauces] : []);

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
        <p>Choix des sauces</p>
        <p>Vous pouvez choisir maximum 2 sauces !</p>
      </div>
      <div>
        <input
          type="checkbox"
          name="sauces"
          id="sauces"
          value="BBQ Miel"
          onChange={handleChangeSauces}
          checked={sauces.includes("BBQ Miel")}
        ></input>
        <label htmlFor="sauces">BBQ Miel</label>
      </div>
      <div>
        <input
          type="checkbox"
          name="sauces"
          id="sauces"
          value="Beurre"
          onChange={handleChangeSauces}
          checked={sauces.includes("Beurre")}
        ></input>
        <label htmlFor="sauces">Beurre</label>
      </div>
      <div>
        <input
          type="checkbox"
          name="sauces"
          id="sauces"
          value="Biggy"
          onChange={handleChangeSauces}
          checked={sauces.includes("Biggy")}
        ></input>
        <label htmlFor="sauces">Biggy</label>
      </div>
      <div>
        <input
          type="checkbox"
          name="sauces"
          id="sauces"
          value="Curry"
          onChange={handleChangeSauces}
          checked={sauces.includes("Curry")}
        ></input>
        <label htmlFor="sauces">Curry</label>
      </div>
      <div>
        <input
          type="checkbox"
          name="sauces"
          id="sauces"
          value="Ketchup"
          onChange={handleChangeSauces}
          checked={sauces.includes("Ketchup")}
        ></input>
        <label htmlFor="sauces">Ketchup</label>
      </div>
      <div>
        <input
          type="checkbox"
          name="sauces"
          id="sauces"
          value="Mayonnaise"
          onChange={handleChangeSauces}
          checked={sauces.includes("Mayonnaise")}
        ></input>
        <label htmlFor="sauces">Mayonnaise</label>
      </div>
    </div>
  );
};

export default Sauces;
