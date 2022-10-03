import axios from "axios";
import React, { useEffect, useState } from "react";

const RestaurantCommand = () => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    async function fetchData() {
      await axios.get("http://localhost:8000/command").then((res) => {
        const users = res.data.data;

        let arrUsers = [];

        users.map((element) => {
          arrUsers.push(element);
        });

        setUser(user.concat(users));
      });
    }
    fetchData();
  }, []);

  console.log(user);

  return (
    <div>
      {user.map((element) => (
        <div>
          <p>Telephone : {element.phone}</p>
          <div>
            Ingredients :
            {element.commandes.map((elementC) =>
              elementC.ingredientsCommandes.map((elementI, i) => (
                <div>
                  <p>{elementI.ingredient.type}</p>
                  <p>{elementI.ingredient.name}</p>
                </div>
              ))
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default RestaurantCommand;
