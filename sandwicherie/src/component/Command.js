import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { SiCountingworkspro, SiHappycow } from "react-icons/si";
import Size from "./command/Size";
import Meat from "./command/Meat";
import Accompaniments from "./command/Accompaniments";
import Sauces from "./command/Sauces";
import Drink from "./command/Drink";
import Dessert from "./command/Dessert";
import Progress from "./progress bar/Progress";
import "../styles/command.css";

const Command = () => {
  //Compteur
  const [count, setCount] = useState(0);
  const stepNumber = 6;
  //State qui recupère toute la commande
  const [command, setCommand] = useState({});
  const [price, setPrice] = useState(0);

  const [checked, setChecked] = useState(false);
  //Prix de la command total
  //Permet de switch de composant en fonction du compteur

  useEffect(() => {
    let newPrice = 0;
    if (command.Taille) {
      newPrice += command.Taille === "Moyen" ? 1 : 2;
    }
    if (command.Viande) {
      newPrice += command.Viande.length * 1.5;
    }
    if (command.Accompagnements) {
      newPrice += command.Accompagnements.length * 1;
    }
    setPrice(newPrice);
  }, [command]);

  let content = "";
  if (count === 0) {
    content = <Size command={command} onChange={setCommand} />;
  } else if (count === 1) {
    content = <Meat command={command} onChange={setCommand} />;
  } else if (count === 2) {
    content = <Accompaniments command={command} onChange={setCommand} />;
  } else if (count === 3) {
    content = <Sauces command={command} onChange={setCommand} />;
  } else if (count === 4) {
    content = <Drink command={command} onChange={setCommand} />;
  } else if (count === 5) {
    content = <Dessert command={command} onChange={setCommand} />;
  }

  useEffect(() => {
    setChecked(true);
  }, [command]);

  // STRING -> OBJECT
  let array = JSON.stringify(command);

  return (
    <div className="wrapper">
      <div>
        <Link to="/" className="logo__nav__command">
          C
          <span>
            <SiHappycow className="cow__head" size={30} />
          </span>
          w Snack
        </Link>
      </div>
      <section className="container__command">
        <div className="container__selection white">
          <div className="progress__bar">
            <div>
              <Progress count={count} stepNumber={stepNumber} />
            </div>
          </div>
          <div className="content__command">{content}</div>
          <div className="button__command">
            <button onClick={() => setCount(count - 1)} disabled={count === 0}>
              Back
            </button>
            <button
              onChange={() => setChecked(false)}
              onClick={() => setCount(count + 1)}
              disabled={count >= stepNumber - 1}
            >
              Next
            </button>
          </div>
        </div>
        <div className="resume__command">
          <div>
            <div className="header__bill">
              <p className="star">*************************************</p>
              <p className="title__bill">TICKET DE CAISSE</p>
              <p className="star">*************************************</p>
            </div>

            <div className="informations__bill">
              <p>Magasin : Cow Snack - 3 rue de la liberté</p>
              <p>Tel : 06 94 30 29 48</p>
            </div>

            <div>
              <p className="star">*************************************</p>
            </div>

            {array === undefined ? (
              "Votre commande ici"
            ) : (
              <div>
                <p className="command__bill">
                  {command.Taille} sandwich{" "}
                  {command.Taille === "Moyen" ? "1€" : "2€"}
                </p>
                {command.Viande && (
                  <div className="command__bill">
                    <p className="text__bill">Viande dans le sandwich : </p>
                    {command.Viande.map((meat, i) => (
                      <p key={i}>→ {meat}</p>
                    ))}
                  </div>
                )}

                {command.Accompagnements && (
                  <div className="command__bill">
                    <p className="text__bill">Accompagnements : </p>
                    {command.Accompagnements.map((accomp, i) => (
                      <p key={i}>→{accomp}</p>
                    ))}
                  </div>
                )}

                {command.Sauces && (
                  <div className="command__bill">
                    <p className="text__bill">Sauces : </p>
                    {command.Sauces.map((sauce, i) => (
                      <p key={i}>→{sauce}</p>
                    ))}
                  </div>
                )}

                {command.Boisson && (
                  <div className="command__bill">
                    <p className="text__bill">Boisson : </p>
                    {command.Boisson.map((drink, i) => (
                      <p key={i}>→{drink}</p>
                    ))}
                  </div>
                )}

                {command.Dessert && (
                  <div className="command__bill">
                    <p className="text__bill">Dessert : </p>
                    {command.Dessert.map((dessert, i) => (
                      <p key={i}>→{dessert}</p>
                    ))}
                  </div>
                )}

                <div className="total__bill">
                  <p>Prix total : {price}€</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Command;
