import React, { useState } from "react";
import "../../styles/command.css";
import { Navigate } from "react-router-dom";

const Thanks = () => {
  const [redirection, setRedirection] = useState(false);

  setTimeout(() => {
    setRedirection(true);
  }, 5000);

  return (
    <div>
      {redirection ? (
        <Navigate to="/"></Navigate>
      ) : (
        <div>
          <div className="wrapper__thanks">
            <p>MERCI</p>
            <p>d'avoir passé commande</p>
          </div>
          <div className="loader__final">
            <div className="lds-roller">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
            <p className="redirection">
              Vous allez être redirigé vers la page d'accueil...
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Thanks;
