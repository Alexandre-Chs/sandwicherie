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
        <p>Choix des accompagnements</p>
        <p>Vous pouvez en choisir maximum 4 !</p>

        <div className="options__accomp">
          <div>
            <input
              type="checkbox"
              name="accomp"
              value="Bacon"
              onChange={handleChangeAccomp}
              checked={accomp.includes("Bacon")}
            ></input>
            <label htmlFor="accomp">Bacon</label>
          </div>

          <div>
            <input
              type="checkbox"
              name="accomp"
              value="Cheddar"
              onChange={handleChangeAccomp}
              checked={accomp.includes("Cheddar")}
            ></input>
            <label htmlFor="accomp">Cheddar</label>
          </div>
          <div>
            <input
              type="checkbox"
              name="accomp"
              value="Gruyère"
              onChange={handleChangeAccomp}
              checked={accomp.includes("Gruyère")}
            ></input>
            <label htmlFor="accomp">Gruyère</label>
          </div>
          <div>
            <input
              type="checkbox"
              name="accomp"
              value="Jambon de Bayonne"
              onChange={handleChangeAccomp}
              checked={accomp.includes("Jambon de Bayonne")}
            ></input>
            <label htmlFor="accomp">Jambon de Bayonne</label>
          </div>
          <div>
            <input
              type="checkbox"
              name="accomp"
              value="Jambon blanc"
              onChange={handleChangeAccomp}
              checked={accomp.includes("Jambon blanc")}
            ></input>
            <label htmlFor="accomp">Jambon blanc</label>
          </div>
          <div>
            <input
              type="checkbox"
              name="accomp"
              value="Lardons"
              onChange={handleChangeAccomp}
              checked={accomp.includes("Lardons")}
            ></input>
            <label htmlFor="accomp">Lardons</label>
          </div>
          <div>
            <input
              type="checkbox"
              name="accomp"
              value="Oignons"
              onChange={handleChangeAccomp}
              checked={accomp.includes("Oignons")}
            ></input>
            <label htmlFor="accomp">Oignons</label>
          </div>
          <div>
            <input
              type="checkbox"
              name="accomp"
              value="Pâtes"
              onChange={handleChangeAccomp}
              checked={accomp.includes("Pâtes")}
            ></input>
            <label htmlFor="accomp">Pâtes</label>
          </div>
          <div>
            <input
              type="checkbox"
              name="accomp"
              value="Salade"
              onChange={handleChangeAccomp}
              checked={accomp.includes("Salade")}
            ></input>
            <label htmlFor="accomp">Salade</label>
          </div>
          <div>
            <input
              type="checkbox"
              name="accomp"
              value="Salami"
              onChange={handleChangeAccomp}
              checked={accomp.includes("Salami")}
            ></input>
            <label htmlFor="accomp">Salami</label>
          </div>
          <div>
            <input
              type="checkbox"
              name="accomp"
              value="Saucisson"
              onChange={handleChangeAccomp}
              checked={accomp.includes("Saucisson")}
            ></input>
            <label htmlFor="accomp">Saucisson</label>
          </div>
          <div>
            <input
              type="checkbox"
              name="accomp"
              value="Tomate"
              onChange={handleChangeAccomp}
              checked={accomp.includes("Tomate")}
            ></input>
            <label htmlFor="accomp">Tomate</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accompaniments;
