import axios from "axios";
import React, { useEffect, useState } from "react";
import "../../styles/Restaurant/restaurant.css";
import { TiDelete } from "react-icons/ti";

const RestaurantCommand = () => {
  const [command, setCommand] = useState([]);
  const [data, setData] = useState(null);

  const handleDelete = (e) => {
    let parent = e.currentTarget.parentNode.parentNode.className;
    let id = parent.split(" ").slice(-1).join("");
    axios.delete(`http://localhost:8000/command/${id}`);
  };

  const fetchData = async () => {
    await axios.get("http://localhost:8000/command").then((res) => {
      let command = res.data.data;
      command.forEach((element) => {
        setCommand((prevCommand) => [...prevCommand, element]);
      });
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="wrapper__restaurant">
      {command.map((element, i) => (
        <div className={`command__restaurant ${element.id}`}>
          <div key={element.phone.id}>
            <p>{element.phone}</p>
          </div>
          <div>
            {element.commandes.map((element) =>
              element.ingredientsCommandes.map((element) => (
                <p key={element.ingredient.id}>{element.ingredient.name}</p>
              ))
            )}
          </div>
          <p className="delete__restaurant">
            <TiDelete size={35} onClick={handleDelete} />
          </p>
        </div>
      ))}
    </div>
  );
};

export default RestaurantCommand;
