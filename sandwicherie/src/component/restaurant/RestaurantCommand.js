import axios from "axios";
import React, { useEffect, useState } from "react";
import "../../styles/Restaurant/restaurant.css";
import { TiDelete } from "react-icons/ti";

const RestaurantCommand = () => {
  const [user, setUser] = useState([]);

  const handleClick = async () => {
    await axios.delete("http://localhost:8000/delete", { data: user });
  };

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
        <div className="wrapper__restaurant">
          <table>
            <thead>
              <tr>
                <th colSpan={1}>Telephone</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{element.phone}</td>
              </tr>
            </tbody>
          </table>

          {
            <div className="wrapper__ingredient">
              {element.commandes.map((elementC) =>
                elementC.ingredientsCommandes.map((elementI, i) => (
                  <table>
                    <thead>
                      <tr>
                        <th colSpan={1}>{elementI.ingredient.type}</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>{elementI.ingredient.name}</td>
                      </tr>
                    </tbody>
                  </table>
                ))
              )}
            </div>
          }
          <div className="delete__restaurant">
            <TiDelete size={50} onClick={handleClick} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default RestaurantCommand;
