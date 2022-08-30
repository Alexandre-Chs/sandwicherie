import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { SiCountingworkspro, SiHappycow } from "react-icons/si";
import Size from "./command/Size";
import Meat from "./command/Meat";
import Accompaniments from "./command/Accompaniments";
import "../styles/command.css";

const Command = () => {
  //Compteur
  const [count, setCount] = useState(0);
  //State qui recupère toute la commande du même ID
  const [command, setCommand] = useState();

  const [checked, setChecked] = useState(false);
  //Permet de switch de composant en fonction du compteur
  let content = "";
  if (count === 0) {
    content = <Size command={command} onChange={setCommand} />;
  } else if (count === 1) {
    content = <Meat command={command} onChange={setCommand} />;
  } else if (count === 2) {
    content = <Accompaniments command={command} onChange={setCommand} />;
  }

  useEffect(() => {
    setChecked(true);
  }, [command]);

  const handleAddOne = () => {
    setCount(count + 1);
    setChecked(false);
  };
  // STRING -> OBJECT
  let array = JSON.stringify(command);

console.log(command)



//TODO : garder la donnée size si je prev
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
            <p>progress bar</p>
          </div>
          <div className="content__command">{content}</div>
          <div className="button__command">
            <button onClick={() => setCount(count - 1)} disabled={count === 0}>
              Back
            </button>
            <button onClick={handleAddOne} disabled={checked === false}>
              Next
            </button>
          </div>
        </div>
        <div className="resume__command white">
          <div>
            {array === undefined ? (
              "Votre commande ici"
            ) : (
              <div>
                <p>Taille du sandwich : {command.Taille}</p>
                {command.Viande && (
                  <div>
                    <h2>Viandes:</h2>
                    {command.Viande.map((meat) => (
                      <p>{meat}</p>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Command;

// faire content description au milieu
// bouton en bas prev/ suiv
// en haut progressbar
// mettre données en brut au début et rajouter via DB ensuite
