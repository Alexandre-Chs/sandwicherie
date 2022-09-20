import React, { useState } from "react";

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
        <p className="price">0.5€/accompagnement</p>

        <div className="options__accomp">
          <div>
            <label htmlFor="accomp1">
              <input
                type="checkbox"
                name="accomp1"
                id="accomp1"
                value="Bacon"
                onChange={handleChangeAccomp}
                checked={accomp.includes("Bacon")}
              ></input>
              Bacon
            </label>
          </div>

          <div>
            <label htmlFor="accomp2">
              <input
                type="checkbox"
                name="accomp2"
                id="accomp2"
                value="Cheddar"
                onChange={handleChangeAccomp}
                checked={accomp.includes("Cheddar")}
              ></input>
              Cheddar
            </label>
          </div>
          <div>
            <label htmlFor="accomp3">
              <input
                type="checkbox"
                name="accomp3"
                id="accomp3"
                value="Gruyère"
                onChange={handleChangeAccomp}
                checked={accomp.includes("Gruyère")}
              ></input>
              Gruyère
            </label>
          </div>
          <div>
            <label htmlFor="accomp4">
              <input
                type="checkbox"
                id="accomp4"
                name="accomp4"
                value="Jambon de Bayonne"
                onChange={handleChangeAccomp}
                checked={accomp.includes("Jambon de Bayonne")}
              ></input>
              Jambon de Bayonne
            </label>
          </div>
          <div>
            <label htmlFor="accomp5">
              <input
                type="checkbox"
                name="accomp5"
                id="accomp5"
                value="Jambon blanc"
                onChange={handleChangeAccomp}
                checked={accomp.includes("Jambon blanc")}
              ></input>
              Jambon blanc
            </label>
          </div>
          <div>
            <label htmlFor="accomp6">
              <input
                type="checkbox"
                name="accomp6"
                id="accomp6"
                value="Lardons"
                onChange={handleChangeAccomp}
                checked={accomp.includes("Lardons")}
              ></input>
              Lardons
            </label>
          </div>
          <div>
            <label htmlFor="accomp7">
              <input
                type="checkbox"
                name="accomp7"
                id="accomp7"
                value="Oignons"
                onChange={handleChangeAccomp}
                checked={accomp.includes("Oignons")}
              ></input>
              Oignons
            </label>
          </div>
          <div>
            <label htmlFor="accomp8">
              <input
                type="checkbox"
                name="accomp8"
                id="accomp8"
                value="Pâtes"
                onChange={handleChangeAccomp}
                checked={accomp.includes("Pâtes")}
              ></input>
              Pâtes
            </label>
          </div>
          <div>
            <label htmlFor="accomp9">
              <input
                type="checkbox"
                name="accomp9"
                id="accomp9"
                value="Salade"
                onChange={handleChangeAccomp}
                checked={accomp.includes("Salade")}
              ></input>
              Salade
            </label>
          </div>
          <div>
            <label htmlFor="accomp10">
              <input
                type="checkbox"
                name="accomp10"
                id="accomp10"
                value="Salami"
                onChange={handleChangeAccomp}
                checked={accomp.includes("Salami")}
              ></input>
              Salami
            </label>
          </div>
          <div>
            <label htmlFor="accomp11">
              <input
                type="checkbox"
                name="accomp11"
                id="accomp11"
                value="Saucisson"
                onChange={handleChangeAccomp}
                checked={accomp.includes("Saucisson")}
              ></input>
              Saucisson
            </label>
          </div>
          <div>
            <label htmlFor="accomp12">
              <input
                type="checkbox"
                name="accomp12"
                id="accomp12"
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
