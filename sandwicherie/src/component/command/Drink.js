import React, { useState, useEffect } from "react";

const Drink = ({ command, onChange, ingr }) => {
  const [drink, setDrink] = useState(
    command.Boisson ? [...command.Boisson] : []
  );

  const handleChangeDrink = (e) => {
    const tempDrink = [...drink];

    if (tempDrink.includes(e.target.value)) {
      tempDrink.splice(
        tempDrink.findIndex((drink) => drink === e.target.value),
        1
      );
    } else {
      if (tempDrink.length === 1) return;
      tempDrink.push(e.target.value);
    }
    setDrink(tempDrink);
    onChange({ ...command, Boisson: tempDrink });
  };

  if (!ingr.length) {
    return null;
  }

  return (
    <div className="wrapper">
      <div className="command__drink">
        <p>Choix de la boisson : ( maximum 1 )</p>
        <p className="price">1.8€/boisson</p>
        <div className="options__drink">
          {ingr.map((element, idx) => (
            <label htmlFor={element.name} key={idx}>
              <input
                type="checkbox"
                name="boisson"
                id={element.name}
                value={element.name}
                onChange={handleChangeDrink}
                checked={drink.includes(element.name)}
              ></input>
              {element.name}
            </label>
          ))}
        </div>
        {/* <div className="options__drink">
          <label htmlFor="drink1">
            <input
              type="checkbox"
              name="drink1"
              id="drink1"
              value="7up"
              onChange={handleChangeDrink}
              checked={drink.includes("7up")}
            ></input>
            7up
          </label>
        </div>
        <div className="options__drink">
          <label htmlFor="drink2">
            <input
              type="checkbox"
              name="drink2"
              id="drink2"
              value="Coca-Cola"
              onChange={handleChangeDrink}
              checked={drink.includes("Coca-Cola")}
            ></input>
            Coca-Cola
          </label>
        </div>
        <div className="options__drink">
          <label htmlFor="drink3">
            <input
              type="checkbox"
              name="drink3"
              id="drink3"
              value="Fanta"
              onChange={handleChangeDrink}
              checked={drink.includes("Fanta")}
            ></input>
            Fanta
          </label>
        </div>
        <div className="options__drink">
          <label htmlFor="drink4">
            <input
              type="checkbox"
              name="drink4"
              id="drink4"
              value="Ice-tea"
              onChange={handleChangeDrink}
              checked={drink.includes("Ice-tea")}
            ></input>
            Ice-tea
          </label>
        </div>
        <div className="options__drink">
          <label htmlFor="drink5">
            <input
              type="checkbox"
              name="drink5"
              id="drink5"
              value="Oasis"
              onChange={handleChangeDrink}
              checked={drink.includes("Oasis")}
            ></input>
            Oasis
          </label>
        </div>
        <div className="options__drink">
          <label htmlFor="drink6">
            <input
              type="checkbox"
              name="drink6"
              id="drink6"
              value="Orangina"
              onChange={handleChangeDrink}
              checked={drink.includes("Orangina")}
            ></input>
            Orangina
          </label>
        </div>
        <div className="options__drink">
          <label htmlFor="drink7">
            <input
              type="checkbox"
              name="drink7"
              id="drink7"
              value="Pepsi"
              onChange={handleChangeDrink}
              checked={drink.includes("Pepsi")}
            ></input>
            Pepsi
          </label>
        </div>
        <div className="options__drink">
          <label htmlFor="drink8">
            <input
              type="checkbox"
              name="drink8"
              id="drink8"
              value="Sprite"
              onChange={handleChangeDrink}
              checked={drink.includes("Sprite")}
            ></input>
            Sprite
          </label>
        </div>
        <div className="options__drink">
          <label htmlFor="drink9">
            <input
              type="checkbox"
              name="drink9"
              id="drink9"
              value="Tropico"
              onChange={handleChangeDrink}
              checked={drink.includes("Tropico")}
            ></input>
            Tropico
          </label>
        </div> */}
      </div>
    </div>
  );
};

export default Drink;
