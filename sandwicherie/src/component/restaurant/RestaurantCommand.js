import axios from "axios";
import React, { useEffect, useState } from "react";
import "../../styles/Restaurant/restaurant.css";
import { TiDelete } from "react-icons/ti";

const RestaurantCommand = () => {
  const [user, setUser] = useState([]);
  const [phone, setPhone] = useState([]);
  const [command, setCommand] = useState({});

  const handleClick = async () => {
    await axios.delete("http://localhost:8000/delete", { data: user });
  };

  let newArr = [];

  useEffect(() => {
    async function fetchData() {
      await axios.get("http://localhost:8000/command").then((res) => {
        res.data.data.map((phone) => {
          setPhone((oldPhone) => [...oldPhone, phone.phone]);
          phone.commandes.map((element) => {
            let arr = [];
            element.ingredientsCommandes.map((ingredient) => {
              let name = ingredient.ingredient.name;
              let type = ingredient.ingredient.type;
              arr.push([type, name]);
            });
            newArr.push(arr);
          });
        });
      });
    }
    fetchData();
  }, []);

  console.log(newArr);
  return (
    <div className="wrapper__restaurant">
      <div></div>
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
