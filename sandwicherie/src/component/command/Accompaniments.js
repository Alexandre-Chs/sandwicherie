import React, { useState } from "react";
import "../../styles/accomp.css";

const Accompaniments = ({ command, onChange }) => {
  const [accomp, setAccomp] = useState(
    command.Accompagnements ? [...command.Accompagnements] : []
  );

  const handleChangeAccomp = (e) => {
    const tempAccomp = [...accomp];

    if (tempAccomp.includes(e.target.value)) {
      tempAccomp.splice(
        tempAccomp.findIndex((accomp) => accomp === e.target.value),
        1
      );
    } else {
      if (tempAccomp.length === 4) return;
      tempAccomp.push(e.target.value);
    }

    setAccomp(tempAccomp);
    onChange({ ...command, Accompagnements: tempAccomp });
  };

  return (
    <div>
      <div className="command__accomp">
        <p>Choix des accompagnements : ( maximum 4 )</p>

        <div className="options__accomp">
          <div>
            <label htmlFor="accomp">
              <input
                type="checkbox"
                name="accomp"
                value="Bacon"
                onChange={handleChangeAccomp}
                checked={accomp.includes("Bacon")}
              ></input>
              Bacon
            </label>
          </div>

          <div>
            <label htmlFor="accomp">
              <input
                type="checkbox"
                name="accomp"
                value="Cheddar"
                onChange={handleChangeAccomp}
                checked={accomp.includes("Cheddar")}
              ></input>
              Cheddar
            </label>
          </div>
          <div>
            <label htmlFor="accomp">
              <input
                type="checkbox"
                name="accomp"
                value="Gruyère"
                onChange={handleChangeAccomp}
                checked={accomp.includes("Gruyère")}
              ></input>
              Gruyère
            </label>
          </div>
          <div>
            <label htmlFor="accomp">
              <input
                type="checkbox"
                name="accomp"
                value="Jambon de Bayonne"
                onChange={handleChangeAccomp}
                checked={accomp.includes("Jambon de Bayonne")}
              ></input>
              Jambon de Bayonne
            </label>
          </div>
          <div>
            <label htmlFor="accomp">
              <input
                type="checkbox"
                name="accomp"
                value="Jambon blanc"
                onChange={handleChangeAccomp}
                checked={accomp.includes("Jambon blanc")}
              ></input>
              Jambon blanc
            </label>
          </div>
          <div>
            <label htmlFor="accomp">
              <input
                type="checkbox"
                name="accomp"
                value="Lardons"
                onChange={handleChangeAccomp}
                checked={accomp.includes("Lardons")}
              ></input>
              Lardons
            </label>
          </div>
          <div>
            <label htmlFor="accomp">
              <input
                type="checkbox"
                name="accomp"
                value="Oignons"
                onChange={handleChangeAccomp}
                checked={accomp.includes("Oignons")}
              ></input>
              Oignons
            </label>
          </div>
          <div>
            <label htmlFor="accomp">
              <input
                type="checkbox"
                name="accomp"
                value="Pâtes"
                onChange={handleChangeAccomp}
                checked={accomp.includes("Pâtes")}
              ></input>
              Pâtes
            </label>
          </div>
          <div>
            <label htmlFor="accomp">
              <input
                type="checkbox"
                name="accomp"
                value="Salade"
                onChange={handleChangeAccomp}
                checked={accomp.includes("Salade")}
              ></input>
              Salade
            </label>
          </div>
          <div>
            <label htmlFor="accomp">
              <input
                type="checkbox"
                name="accomp"
                value="Salami"
                onChange={handleChangeAccomp}
                checked={accomp.includes("Salami")}
              ></input>
              Salami
            </label>
          </div>
          <div>
            <label htmlFor="accomp">
              <input
                type="checkbox"
                name="accomp"
                value="Saucisson"
                onChange={handleChangeAccomp}
                checked={accomp.includes("Saucisson")}
              ></input>
              Saucisson
            </label>
          </div>
          <div>
            <label htmlFor="accomp">
              <input
                type="checkbox"
                name="accomp"
                value="Tomate"
                onChange={handleChangeAccomp}
                checked={accomp.includes("Tomate")}
              ></input>
              Tomate
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accompaniments;
