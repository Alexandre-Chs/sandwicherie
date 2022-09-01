import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { SiCountingworkspro, SiHappycow } from "react-icons/si";
import Size from "./command/Size";
import Meat from "./command/Meat";
import Accompaniments from "./command/Accompaniments";
import Sauces from "./command/Sauces";
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
  } else if (count === 3) {
    content = <Sauces command={command} onChange={setCommand} />;
  }

  useEffect(() => {
    setChecked(true);
  }, [command]);

  // STRING -> OBJECT
  let array = JSON.stringify(command);

  console.log(command);

  // TODO : Si un checkbox est checked -> on peux suivant, si rien on disabled
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
            <button
              onChange={() => setChecked(false)}
              onClick={() => setCount(count + 1)}
              disabled={!checked}
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
                  Sandwich taille {command.Taille}
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
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Command;
