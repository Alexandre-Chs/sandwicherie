import React, { useState } from "react";

const Accompaniments = ({ command, onChange, ingr }) => {
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

  if (!ingr.length) {
    return null;
  }

  return (
    <div>
      <div className="command__accomp">
        <p>Choix des accompagnements : ( maximum 4 )</p>
        <p className="price">0.5€/accompagnement</p>
        <div className="options__accomp">
          {ingr.map((element, idx) => (
            <div key={idx}>
              <label htmlFor={element.name}>
                <input
                  type="checkbox"
                  name="accompagnement"
                  id={element.name}
                  value={element.name}
                  onChange={handleChangeAccomp}
                  checked={accomp.includes(element.name)}
                ></input>
                {element.name}
              </label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Accompaniments;
