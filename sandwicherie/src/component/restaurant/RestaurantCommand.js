import axios from "axios";
import React, { useEffect, useState } from "react";
import "../../styles/Restaurant/restaurant.css";
import { TiDelete } from "react-icons/ti";

const RestaurantCommand = () => {
  const [user, setUser] = useState([]);
  const [phone, setPhone] = useState("");
  const [command, setCommand] = useState([]);

  const handleClick = async () => {
    await axios.delete("http://localhost:8000/delete", { data: user });
  };

  useEffect(() => {
    async function fetchData() {
      await axios.get("http://localhost:8000/command").then((res) => {
        const users = res.data.data;
        let arrUsers = [];
        users.map((element) => {
          setUser((state) => [...state, element]);
        });
      });
    }
    fetchData();
  }, []);

  useEffect(() => {
    let arr = [];

    user.map((phone) => {
      phone.commandes.map((commande) => {
        commande.ingredientsCommandes.map((ingredient) => {
          arr.push(ingredient.ingredient);
        });
      });
    });
  }, [user]);

  console.log(command);

  return (
    <div className="wrapper__restaurant">
      {/* {phone.map((element) => {
        <div className="element__restaurant">
          <p>Telephone</p>
        </div>;
      })} */}

      <div className="command__restaurant">
        {/* {command.map((element) => (
          <div className="element__restaurant">
            <p>{element.type}</p>
            <p>{element.name}</p>
          </div>
        ))} */}
      </div>
    </div>
  );
};

export default RestaurantCommand;
