import React, { useState, useEffect } from "react";
import "../../styles/command.css";

const Final = ({ command, onChange }) => {
  let [phone, setPhone] = useState(command.Telephone ? command.Telephone : "");
  const handleChange = (e) => {
    let value = e.target.value;
    let regex = /^[0-9]*$/;
    //REGEX NUMBERS ONLY
    if (value.match(regex)) {
      setPhone(value);
    } else {
      setPhone("");
    }

    //ONLY 10 NUMBERS
    if (value.length > 10) {
      setPhone(phone);
    }
  };

  useEffect(() => {
    onChange({ ...command, Telephone: phone });
  }, [phone]);

  return (
    <div className="wrapper__final">
      <div className="input__final">
        <p className="text__final">
          Veuillez entrer vos coordonnées pour finaliser la commande :
        </p>
        <label htmlFor="phone" className="notHover label__final">
          <span>Téléphone :</span>
          <input
            type="tel"
            name="phone"
            id="phone"
            onChange={handleChange}
            value={phone}
          ></input>
        </label>
      </div>
    </div>
  );
};

export default Final;
