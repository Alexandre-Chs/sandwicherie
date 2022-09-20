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
import Final from "./command/Final";
import "../styles/command.css";
import Thanks from "./command/Thanks";
import { FaArrowRight } from "react-icons/fa";
import barcode from "../images/barcode.png";

const Command = () => {
  const [count, setCount] = useState(0);
  const stepNumber = 6;
  const [command, setCommand] = useState({});
  const [price, setPrice] = useState(0);
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    let newPrice = 0;
    if (command.Taille) {
      newPrice += command.Taille === "Moyen" ? 1 : 2;
    }
    if (command.Viande) {
      newPrice += command.Viande.length * 1.2;
    }
    if (command.Accompagnements) {
      newPrice += command.Accompagnements.length * 0.5;
    }

    if (command.Sauces) {
      newPrice += command.Sauces.length * 0.2;
    }
    if (command.Boisson) {
      newPrice += command.Boisson.length * 1.8;
    }
    if (command.Dessert) {
      newPrice += command.Dessert.length * 0.8;
    }

    setPrice(newPrice.toFixed(2));
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
  } else if (count === 6) {
    content = <Final command={command} onChange={setCommand}></Final>;
  } else if (count === 7) {
    content = <Thanks></Thanks>;
  }

  useEffect(() => {
    if (count === 0) {
      setChecked(true);
    }
    if (count === 1) {
      setChecked(command.Viande && command.Viande.length > 0);
    }
    if (count === 2) {
      setChecked(command.Accompagnements && command.Accompagnements.length > 0);
    }
    if (count === 3) {
      setChecked(command.Sauces && command.Sauces.length > 0);
    }

    if (count === 6) {
      setChecked(command.Telephone && command.Telephone.length >= 10);
    }
  }, [count, command]);

  // STRING -> OBJECT
  let array = JSON.stringify(command);

  console.log(command);
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
        <div className="container__selection">
          <div className="progress__bar">
            <div>
              {count < 6 ? (
                <Progress count={count} stepNumber={stepNumber} />
              ) : (
                ""
              )}
            </div>
          </div>
          <div className="content__command">{content}</div>
          {count < 7 ? (
            <div className="button__command">
              {count < 6 ? (
                <div className="wrapper_buttons">
                  <button
                    onClick={() => setCount(count - 1)}
                    disabled={count === 0}
                    className="prev__button buttons"
                  >
                    Précédent
                  </button>
                  <button
                    onChange={() => setChecked(false)}
                    onClick={() => setCount(count + 1)}
                    disabled={!checked}
                    className="next__button buttons"
                  >
                    Suivant
                    <FaArrowRight className="arrow__buttons"></FaArrowRight>
                  </button>
                </div>
              ) : (
                <div className="button__final">
                  <button
                    onClick={() => setCount(count - 1)}
                    disabled={count === 0}
                    className="prev__button buttons"
                  >
                    Précédent
                  </button>
                  <button
                    type="submit"
                    onClick={() => setCount(count + 1)}
                    disabled={!checked}
                    className="next__button buttons"
                  >
                    Terminer la commande
                  </button>
                </div>
              )}
            </div>
          ) : (
            <p></p>
          )}
        </div>
        {count < 7 ? (
          <div className="resume__command">
            <div>
              <div className="logo__receipt">
                <SiHappycow className="cow__head" size={50} />
              </div>
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
                    <div className="resume__command__receipt">
                      <p>{command.Taille} sandwich</p>
                      <p>{command.Taille === "Moyen" ? "1€" : "2€"}</p>
                    </div>
                  </p>
                  {command.Viande && (
                    <div className="command__bill">
                      {command.Viande.map((meat, i) => (
                        <div className="resume__command__receipt">
                          <p key={i}>{meat}</p>
                          <p>1.2€</p>
                        </div>
                      ))}
                    </div>
                  )}

                  {command.Accompagnements && (
                    <div className="command__bill">
                      {command.Accompagnements.map((accomp, i) => (
                        <div className="resume__command__receipt">
                          <p key={i}>{accomp}</p>
                          <p>0.5€</p>
                        </div>
                      ))}
                    </div>
                  )}

                  {command.Sauces && (
                    <div className="command__bill">
                      {command.Sauces.map((sauce, i) => (
                        <div className="resume__command__receipt">
                          <p key={i}>{sauce}</p>
                          <p>0.2€</p>
                        </div>
                      ))}
                    </div>
                  )}

                  {command.Boisson && (
                    <div className="command__bill">
                      {command.Boisson.map((drink, i) => (
                        <div className="resume__command__receipt">
                          <p key={i}>{drink}</p>
                          <p>1.8€</p>
                        </div>
                      ))}
                    </div>
                  )}

                  {command.Dessert && (
                    <div className="command__bill">
                      {command.Dessert.map((dessert, i) => (
                        <div className="resume__command__receipt">
                          <p key={i}>{dessert}</p>
                          <p>0.8€</p>
                        </div>
                      ))}
                    </div>
                  )}

                  <div className="total__bill">
                    <p>Prix : {price}€</p>
                  </div>
                </div>
              )}
            </div>

            <div className="barcode">
              <div className="fake__zip"></div>
              <img src={barcode} alt="barcode"></img>
            </div>
          </div>
        ) : (
          <p></p>
        )}
      </section>
    </div>
  );
};

export default Command;
