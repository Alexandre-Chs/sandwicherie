import axios from "axios";
import React, { useEffect, useState } from "react";
import "../../styles/Restaurant/restaurant.css";
import { TiDelete } from "react-icons/ti";
import { useQuery } from "react-query";

const RestaurantCommand = () => {
  const [command, setCommand] = useState([]);
  const [intervalMs, setIntervalMs] = useState(1000);

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:8000/command/${id}`).then((res) => {});
  };

  const { data, error, isError, isLoading } = useQuery(
    "users",
    async () => {
      const res = await axios
        .get("http://localhost:8000/command")
        .then((res) => {
          let command = res.data.data;
          setCommand(command);
        });
    },
    {
      // Refetch the data every second
      refetchInterval: intervalMs,
    }
  );

  console.log(data);
  return (
    <div className="wrapper__restaurant">
      {command.map((element, i) => (
        <div className={`command__restaurant`}>
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
            <TiDelete size={35} onClick={() => handleDelete(element.id)} />
          </p>
        </div>
      ))}

      <div></div>
    </div>
  );
};

export default RestaurantCommand;
