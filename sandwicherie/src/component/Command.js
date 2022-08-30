import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { SiHappycow } from "react-icons/si";
import Size from "./command/Size";
import Meat from "./command/Meat";
import Accompaniments from "./command/Accompaniments";
import "../styles/command.css";

const Command = () => {
  //Compteur
  const [count, setCount] = useState(0);
  //State qui recupère toute la commande du même ID
  const [command, setCommand] = useState();

  const [checked, setChecked] = useState(false)
  //Permet de switch de composant en fonction du compteur
  let content = "";
  if (count === 0) {
    content = <Size command={command} onChange={setCommand} />;
  } else if (count === 1) {
    content = <Meat command={command} onChange={setCommand}/>;
  } else if (count ===2) {
    content = <Accompaniments command={command} onChange={setCommand}/>
  }


  // TODO : Faire un state qui passe de false a true quand command a une entree, puis retourne false etc.. et le mettre en disabled checked
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
            <p>progress bar</p>
          </div>
          <div className="content__command">{content}</div>
          <div className="button__command">
            <button onClick={() => setCount(count - 1)} disabled={count === 0}>
              Back
            </button> 
            <button onClick={() => setCount(count + 1)} disabled={checked} >Next</button>
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
