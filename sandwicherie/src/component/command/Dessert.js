import React, { useState } from "react";

const Dessert = ({ command, onChange, ingr }) => {
  const [dessert, setDessert] = useState(
    command.Dessert ? [...command.Dessert] : []
  );

  const handleChangeDessert = (e) => {
    const tempDessert = [...dessert];
    if (tempDessert.includes(e.target.value)) {
      tempDessert.splice(0, 1);
    } else {
      tempDessert.push(e.target.value);
    }

    setDessert(tempDessert);
    onChange({ ...command, Dessert: tempDessert });
  };

  if (!ingr.length) {
    return null;
  }

  return (
    <div className="wrapper">
      <div className="command__dessert">
        <p>Choix du dessert</p>
        <p className="price">0.8€/dessert</p>
        <div className="options__dessert">
          {ingr.map((element, idx) => (
            <label htmlFor={element.name} key={idx}>
              <input
                type="checkbox"
                name="dessert"
                id={element.name}
                value={element.name}
                onChange={handleChangeDessert}
                checked={dessert.includes(element.name)}
              ></input>
              {element.name}
            </label>
          ))}
          {/* <label htmlFor="cookie">
            <input
              type="checkbox"
              name="cookie"
              id="cookie"
              value="Cookie"
              onChange={handleChangeDessert}
              checked={dessert.includes("Cookie")}
            ></input>
            Cookie
          </label> */}
        </div>
      </div>
    </div>
  );
};

export default Dessert;
