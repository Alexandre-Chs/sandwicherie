import React, { useEffect, useState } from "react";
import "../../styles/size.css";

const Size = ({ command, onChange, price, setPrice }) => {
  //State pour les deux valeurs
  const [medium, setMedium] = useState({
    value: "Moyen",
    price: "1",
  });

  const [big, setBig] = useState({
    value: "Grand",
    price: "2",
  });

  const [total, setTotal] = useState(0);

  useEffect(() => {
    onChange({
      ...command,
      Taille: "Moyen",
    });
    setTotal(medium.price);
  }, []);

  useEffect(() => {
    setPrice(total)
  }, [total])
  
  const handleChange = (event) => {
    onChange({
      ...command,
      Taille: event.target.value,
    });

    if (event.target.value === "Moyen") {
      setTotal(medium.price);
    } else {
      setTotal(big.price);
    }
  };

  //TODO : garder le state actif si je prev
  return (
    <div className="wrapper">
      <div className="command__size">
        <p>Taille du sandwich :</p>
        <div>
          <input
            type="radio"
            id="medium__size"
            name="size"
            value={medium.value}
            onChange={handleChange}
            defaultChecked
          ></input>
          <label htmlFor="medium__size">Moyen</label>
        </div>
        <div>
          <input
            type="radio"
            id="big__size"
            name="size"
            value={big.value}
            onChange={handleChange}
          ></input>
          <label htmlFor="big__size">Grand</label>
        </div>
      </div>
    </div>
  );
};

export default Size;
