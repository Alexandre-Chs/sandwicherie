import axios from "axios";
import React, { useEffect, useState } from "react";
import "../../styles/Restaurant/restaurant.css";
import { TiDelete } from "react-icons/ti";

const RestaurantCommand = () => {
  const [user, setUser] = useState([]);
  const [accomp, setAccomp] = useState([]);
  const [size, setSize] = useState([]);
  const [meat, setMeat] = useState([]);

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

  useEffect(() => {
    let command = [];
    let taille = [];
    let viande = [];
    user.map((user) => {
      let accomp = [];
      let size = [];
      let meat = [];

      user.commandes.map((command) => {
        command.ingredientsCommandes.map((ingredient) => {
          if (ingredient.ingredient.type === "Accompagnement") {
            accomp.push(ingredient.ingredient.name);
          }

          if (ingredient.ingredient.type === "Viande") {
            meat.push(ingredient.ingredient.name);
          }

          if (ingredient.ingredient.type === "Taille") {
            size.push(ingredient.ingredient.name);
          }
        });
      });
      command.push(accomp);
      taille.push(size);
      viande.push(meat);
    });
    setSize(taille);
    setAccomp(command);
    setMeat(viande);
  }, [user]);

  return (
    <div className="wrapper__restaurant">
      <div>
        {user.map((element) => (
          <div className="wrapper__user">
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
          </div>
        ))}
      </div>
      <div>
        {size.map((element) => (
          <div className="wrapper__user">
            <table>
              <thead>
                <tr>
                  <th>Taille</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{element}</td>
                </tr>
              </tbody>
            </table>
          </div>
        ))}
      </div>
      <div>
        {meat.map((element) => (
          <div className="wrapper__user">
            <table>
              <thead>
                <tr>
                  <th colSpan={1}>Viandes</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{`${element}`}</td>
                </tr>
              </tbody>
            </table>
          </div>
        ))}
      </div>
      <div>
        {accomp.map((element) => (
          <div className="wrapper__accomp">
            <table>
              <thead>
                <tr>
                  <th>Accompagnements</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{`${element}`}</td>
                </tr>
              </tbody>
            </table>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RestaurantCommand;
